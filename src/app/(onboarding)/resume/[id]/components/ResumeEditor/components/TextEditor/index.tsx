"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import {
  RotateCcw,
  RotateCw,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
} from "lucide-react";
import useEditor from "../../hooks/useEditor";
import { getResumeFormat } from "../../../../utils/resume";
import { useResume } from "../../../../hooks";
import { debounce } from "../../../../utils/debounce";

interface EditableTextProps {
  name?: string;
  className?: string;
  mode?: "free" | "description" | "list";
  syncWithProp?: boolean; // Controls if it should force update when external data changes
  placeholderPath?: string;
}

const Index: React.FC<EditableTextProps> = ({
  name,
  className,
  mode = "free",
  syncWithProp = false, // Defaults to false to protect cursor position during active typing
  placeholderPath,
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [charCount, setCharCount] = useState<number>(0);
  const [activeFormats, setActiveFormats] = useState<Record<string, boolean>>({
    bold: false,
    italic: false,
    underline: false,
    strikeThrough: false,
    justifyLeft: false,
    justifyCenter: false,
    justifyRight: false,
    justifyFull: false,
    insertUnorderedList: false,
    insertOrderedList: false,
  });

  const { getValue, handleInputChange } = useEditor();
  const { updateResume } = useResume();
  const placeholder = getResumeFormat(placeholderPath) || "Type here...";

  const debouncedUpdateResume = useRef(
    debounce((propertyPath: string, value: string) => {
      console.log("Saving:", {
        propertyPath,
        value,
      });

      updateResume({
        propertyPath,
        value,
      });
    }, 500),
  ).current;
  useEffect(() => {
    return () => {
      debouncedUpdateResume.cancel();
    };
  }, [debouncedUpdateResume]);
  // Control default value assignment & conditional re-rendering update
  useLayoutEffect(() => {
    if (editorRef.current && name) {
      const externalValue = getValue(name) || "";

      if (syncWithProp) {
        // If sync is true, update DOM whenever external value changes
        if (editorRef.current.innerHTML !== externalValue) {
          editorRef.current.innerHTML = externalValue;
        }
      } else {
        // Otherwise, only set it initially if empty (protects cursor position completely)
        if (editorRef.current.innerHTML === "") {
          editorRef.current.innerHTML = externalValue;
        }
      }
    }
  }, [name, getValue, syncWithProp]);

  // Check current selection formatting states using queryCommandState
  const updateActiveStates = useCallback(() => {
    try {
      setActiveFormats({
        bold: document.queryCommandState("bold"),
        italic: document.queryCommandState("italic"),
        underline: document.queryCommandState("underline"),
        strikeThrough: document.queryCommandState("strikeThrough"),
        justifyLeft: document.queryCommandState("justifyLeft"),
        justifyCenter: document.queryCommandState("justifyCenter"),
        justifyRight: document.queryCommandState("justifyRight"),
        justifyFull: document.queryCommandState("justifyFull"),
        insertUnorderedList: document.queryCommandState("insertUnorderedList"),
        insertOrderedList: document.queryCommandState("insertOrderedList"),
      });
    } catch (e) {
      // Ignore if document selection is out of focus
    }
  }, []);

  // Execute rich text formatting commands with exclusive list toggling logic
  const executeCommand = (command: string, value: string = "") => {
    if (command === "insertUnorderedList" && activeFormats.insertOrderedList) {
      document.execCommand("insertOrderedList", false, value);
    } else if (
      command === "insertOrderedList" &&
      activeFormats.insertUnorderedList
    ) {
      document.execCommand("insertUnorderedList", false, value);
    }

    document.execCommand(command, false, value);

    if (editorRef.current) {
      setCharCount(editorRef.current.innerText.length);
    }
    updateActiveStates();
  };

  const handleInput = () => {
    if (editorRef.current) {
      setCharCount(editorRef.current.innerText.length);
    }
    updateActiveStates();
  };

  // Save data on blur (focus out)
  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (editorRef.current && name && handleInputChange) {
      handleInputChange(e as unknown as React.FormEvent<HTMLDivElement>);
    }
  };

  // Listen to selection changes to update button active highlights dynamically
  useEffect(() => {
    const handleSelectionChange = () => {
      if (
        editorRef.current &&
        editorRef.current.contains(document.activeElement)
      ) {
        updateActiveStates();
      }
    };

    document.addEventListener("selectionchange", handleSelectionChange);
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, [updateActiveStates]);

  // Helper class function to return active or inactive styling for buttons
  const getButtonStyle = (isActive: boolean) => {
    return `w-7 h-7 border-none rounded-md cursor-pointer flex items-center justify-center transition-all active:scale-95 ${
      isActive
        ? "bg-indigo-50 text-indigo-600 shadow-xs ring-1 ring-indigo-200 font-semibold"
        : "bg-transparent text-slate-600 hover:bg-white hover:text-indigo-600 hover:shadow-xs"
    }`;
  };

  // Smart configuration mapping for toolbar groups based on editing mode
  const toolbarGroups = [
    {
      id: "history",
      allowedModes: ["free", "description", "list"],
      tools: [
        { command: "undo", title: "Undo", icon: <RotateCcw size={14} /> },
        { command: "redo", title: "Redo", icon: <RotateCw size={14} /> },
      ],
    },
    {
      id: "typography",
      allowedModes: ["free", "description", "list"],
      tools: [
        { command: "bold", title: "Bold", icon: <Bold size={14} /> },
        { command: "italic", title: "Italic", icon: <Italic size={14} /> },
        {
          command: "underline",
          title: "Underline",
          icon: <Underline size={14} />,
        },
        {
          command: "strikeThrough",
          title: "Strikethrough",
          icon: <Strikethrough size={14} />,
        },
      ],
    },
    {
      id: "alignment",
      allowedModes: ["free", "description"],
      tools: [
        {
          command: "justifyLeft",
          title: "Align Left",
          icon: <AlignLeft size={14} />,
        },
        {
          command: "justifyCenter",
          title: "Align Center",
          icon: <AlignCenter size={14} />,
        },
        {
          command: "justifyRight",
          title: "Align Right",
          icon: <AlignRight size={14} />,
        },
        {
          command: "justifyFull",
          title: "Justify",
          icon: <AlignJustify size={14} />,
        },
      ],
    },
    {
      id: "lists",
      allowedModes: ["free", "list"],
      tools: [
        {
          command: "insertUnorderedList",
          title: "Bullet List",
          icon: <List size={14} />,
        },
        {
          command: "insertOrderedList",
          title: "Numbered List",
          icon: <ListOrdered size={14} />,
        },
      ],
    },
  ];

  const activeGroups = toolbarGroups.filter((group) =>
    group.allowedModes.includes(mode),
  );

  const handleEditorChange = (e: React.FormEvent<HTMLDivElement>) => {
    const currentTarget = e.currentTarget;
    const name = currentTarget.dataset.name;
    const value = currentTarget.innerHTML;

    handleInput();

    if (!name) {
      return;
    }

    updateResume({
      propertyPath: name,
      value: value,
    });
  };

  return (
    <>
      <div className="flex w-full justify-center font-sans ">
        <div className="w-[100%] flex flex-col relative group  ">
          {/* Top Toolbar */}
          <div
            className={`
              hidden group-focus-within:flex 
              print:hidden bg-white/90 backdrop-blur-md border 
              border-slate-200/80 rounded-xl items-center gap-1.5 p-1.5 
              absolute w-max max-w-full 
              left-1/2 -translate-x-1/2
              top-[calc(100%+5px)] z-50 shadow-xl shadow-slate-200/50 
              overflow-x-auto whitespace-nowrap scrollbar-none 
              transition-all duration-200 animate-in fade-in 
              slide-in-from-bottom-2 avoid-default`}
          >
            {activeGroups.map((group, groupIdx) => (
              <React.Fragment key={group.id}>
                {groupIdx > 0 && (
                  <div className="w-[1px] h-5 bg-slate-200/70 mx-0.5 shrink-0" />
                )}
                <div className="flex items-center gap-0.5 bg-slate-50/80 p-0.5 rounded-lg border border-slate-100 shrink-0">
                  {group.tools.map((tool) => {
                    const isActive = activeFormats[tool.command] || false;
                    return (
                      <button
                        key={tool.command}
                        type="button"
                        onClick={() => executeCommand(tool.command)}
                        title={tool.title}
                        className={
                          tool.command === "undo" || tool.command === "redo"
                            ? "w-7 h-7 bg-transparent border-none rounded-md text-slate-600 cursor-pointer flex items-center justify-center transition-all hover:bg-white hover:text-indigo-600 hover:shadow-xs active:scale-95"
                            : getButtonStyle(isActive)
                        }
                      >
                        {tool.icon}
                      </button>
                    );
                  })}
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Editable Content Area */}
          <div
            ref={editorRef}
            name={`${name}`}
            data-name={name}
            data-placeholder={placeholder}
            datatype="htmlEditor"
            className={`editor-content !w-[100%] h-max min-h-[5px] text-[15px] leading-[1.6] text-[#2d3748] outline-none overflow-y-auto ${className || ""}`}
            contentEditable
            onInput={handleEditorChange}
            onBlur={handleBlur}
            onKeyUp={() => {
              updateActiveStates();
            }}
            onMouseUp={() => {
              updateActiveStates();
            }}
            suppressContentEditableWarning
            /* dangerouslySetInnerHTML has been permanently removed so React doesn't overwrite your typing */
          />
        </div>
      </div>

      {/* Embedded Component Styles */}
      <style jsx>{`
        .editor-content:empty::before {
          content: attr(data-placeholder);
          color: #94a3b8;
          pointer-events: none;
        }

        .editor-content:focus:empty::before {
          color: #cbd5e1;
        }
        .editor-content :global(ul) {
          list-style-type: disc !important;
          padding-left: 22px;
          margin: 10px 0;
        }

        .editor-content :global(ol) {
          list-style-type: decimal !important;
          padding-left: 22px;
          margin: 10px 0;
        }

        .editor-content :global(li) {
          margin-bottom: 4px;
          padding-left: 3px;
        }

        .editor-content :global(p) {
          margin: 0 0 8px;
        }

        .editor-content :global(strong) {
          font-weight: 700;
        }

        .editor-content :global(em) {
          font-style: italic;
        }
      `}</style>
    </>
  );
};

export default Index;
