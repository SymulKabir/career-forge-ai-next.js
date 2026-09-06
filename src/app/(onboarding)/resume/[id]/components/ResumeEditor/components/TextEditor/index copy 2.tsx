"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
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
import { useResumeContext } from "../../../../context/resume-editor-context";

interface EditableTextProps {
  name?: string;
  className?: string;
  mode?: "free" | "description" | "list";
}

const Index: React.FC<EditableTextProps> = ({
  name,
  className,
  mode = "free",
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
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
  const { resumeData } = useResumeContext()
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const { getValue, handleInputChange } = useEditor();

  useEffect(() => {
    if (caretPositionRef.current !== null) {
      restoreCaretPosition(caretPositionRef.current);
    }
  }, [resumeData])
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
    } catch (e) { }
  }, []);

  // কার্সার পজিশন নিখুঁতভাবে সেভ করার ফাংশন
  const saveCaretPosition = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || !editorRef.current) return null;
    const range = selection.getRangeAt(0);
    const preSelectionRange = range.cloneRange();
    preSelectionRange.selectNodeContents(editorRef.current);
    preSelectionRange.setEnd(range.endContainer, range.endOffset);
    return preSelectionRange.toString().length;
  };

  // কার্সার পজিশন আগের জায়গায় ফিরিয়ে নেওয়ার ফাংশন
  const restoreCaretPosition = (charIndex: number) => {
    if (!editorRef.current) return;
    const selection = window.getSelection();
    const range = document.createRange();
    range.setStart(editorRef.current, 0);
    range.collapse(true);

    let charCount = 0;
    let nodeStack: Node[] = [editorRef.current];
    let node: Node | undefined;
    let found = false;

    while (!found && (node = nodeStack.pop())) {
      if (node.nodeType === Node.TEXT_NODE) {
        const nextCharCount = charCount + (node.textContent?.length || 0);
        if (charIndex >= charCount && charIndex <= nextCharCount) {
          range.setStart(node, charIndex - charCount);
          range.collapse(true);
          found = true;
        }
        charCount = nextCharCount;
      } else {
        let i = node.childNodes.length;
        while (i--) {
          nodeStack.push(node.childNodes[i]);
        }
      }
    }

    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  const caretPositionRef = useRef<number | null>(null);

  useEffect(() => {
    if (editorRef.current && name) {
      const initialVal = getValue(name) || "";
      if (editorRef.current.innerHTML !== initialVal) {
        if (!editorRef.current.contains(document.activeElement)) {
          editorRef.current.innerHTML = initialVal;
        }
      }
    }
  }, [name, getValue]);

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
    updateActiveStates();
  };

  const handleInput = () => {
    updateActiveStates();
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (editorRef.current && name && handleInputChange) {
      handleInputChange(e as unknown as React.FormEvent<HTMLDivElement>);
    }
  };

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

  const getButtonStyle = (isActive: boolean) => {
    return `w-7 h-7 border-none rounded-md cursor-pointer flex items-center justify-center transition-all active:scale-95 ${isActive
      ? "bg-indigo-50 text-indigo-600 shadow-xs ring-1 ring-indigo-200 font-semibold"
      : "bg-transparent text-slate-600 hover:bg-white hover:text-indigo-600 hover:shadow-xs"
      }`;
  };

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
    caretPositionRef.current = saveCaretPosition();
    const nativeEvent = e.nativeEvent as InputEvent;

    if (nativeEvent.inputType === "insertParagraph" || nativeEvent.inputType === "insertLineBreak") {
      console.log("Enter pressed via onInput!");
      console.log("value ->", value)
      // caretPositionRef.current += 1
    }
    console.log("caretPositionRef.current -->", caretPositionRef.current)
    handleInput();
    const syntheticTargetEvent = {
      target: {
        name: name,
        value: value,
        innerHTML: value,
        getAttribute: (attr: string) => currentTarget.getAttribute(attr),
      },
      currentTarget: {
        name: name,
        value: value,
        innerHTML: value,
        dataset: { name },
        getAttribute: (attr: string) => currentTarget.getAttribute(attr),
      },
    };

    handleInputChange(
      syntheticTargetEvent as unknown as React.FormEvent<HTMLDivElement>,
    );

  };


  return (
    <>
      <div className="flex justify-center font-sans">
        <div className="w-full flex flex-col relative group">
          <div className="hidden group-focus-within:flex print:hidden bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-xl items-center gap-1.5 p-1.5 absolute w-max max-w-full left-1/2 -translate-x-1/2 bottom-[calc(100%+12px)] z-50 shadow-xl shadow-slate-200/50 overflow-x-auto whitespace-nowrap scrollbar-none transition-all duration-200 animate-in fade-in slide-in-from-bottom-2">
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

          <div
            ref={editorRef}
            data-name={name}
            datatype="htmlEditor"
            className={`editor-content h-max min-h-[5px] text-[15px] leading-[1.6] text-[#2d3748] outline-none overflow-y-auto ${className || ""
              }`}
            contentEditable
            onInput={handleEditorChange}
            onBlur={handleBlur}
            onKeyUp={updateActiveStates}
            onMouseUp={updateActiveStates}
            suppressContentEditableWarning
            dangerouslySetInnerHTML={{
              __html: name ? getValue(name) || "" : "",
            }}
          />
        </div>
      </div>

      <style jsx>{`
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