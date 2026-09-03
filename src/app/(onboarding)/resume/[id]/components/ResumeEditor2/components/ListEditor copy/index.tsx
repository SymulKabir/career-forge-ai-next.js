import React, {
  useEffect,
  useRef,
  useState,
  MouseEvent,
} from "react";
import useEditor from "../../hooks/useEditor";

interface EditableTextProps {
  tag?: keyof JSX.IntrinsicElements;
  name?: string;
  className?: string;
  placeholder?: string;
}

const Index: React.FC<EditableTextProps> = ({
  tag = "div",
  name,
  className = "",
  placeholder = "Start typing...",
}) => {
  const {
    getValue,
    handleInputChange,
  } = useEditor();

  const editorRef = useRef<HTMLElement | null>(null);

  const Component = tag as any;

  const [showToolbar, setShowToolbar] = useState(false);

  // -----------------------------------------
  // INITIAL VALUE
  // -----------------------------------------

  useEffect(() => {
    if (!editorRef.current) return;

    const value = name ? getValue(name) : "";

    if (editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || "";
    }
  }, [name, getValue]);

  // -----------------------------------------
  // SAVE CONTENT
  // -----------------------------------------

  const saveContent = () => {
    if (!editorRef.current || !name) return;

    const html = editorRef.current.innerHTML;

    // handleInputChange(name, html);
  };

  // -----------------------------------------
  // EXECUTE COMMAND
  // -----------------------------------------

  const execCommand = (
    command: string,
    value: string | undefined = undefined
  ) => {
    editorRef.current?.focus();

    document.execCommand(command, false, value);

    saveContent();
  };

  // -----------------------------------------
  // TOOLBAR BUTTON
  // -----------------------------------------

  const ToolButton = ({
    command,
    children,
    value,
    title,
  }: {
    command: string;
    children: React.ReactNode;
    value?: string;
    title: string;
  }) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      execCommand(command, value);
    };

    return (
      <button
        type="button"
        title={title}
        className="editor-tool-button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  };

  // -----------------------------------------
  // ENTER HANDLING
  // -----------------------------------------

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLElement>
  ) => {
    if (e.key === "Enter") {
      /*
       * Normal Enter:
       *
       * Browser creates:
       *
       * <div>...</div>
       *
       * or inside list:
       *
       * <li>...</li>
       *
       * Shift + Enter:
       *
       * <br>
       */

      if (e.shiftKey) {
        e.preventDefault();

        document.execCommand("insertLineBreak");

        saveContent();

        return;
      }

      /*
       * If we're inside a list, let browser create
       * the next <li>.
       */
      const selection = window.getSelection();

      if (!selection || selection.rangeCount === 0) {
        return;
      }

      const node = selection.anchorNode;

      if (!node) return;

      const element =
        node.nodeType === Node.TEXT_NODE
          ? node.parentElement
          : (node as HTMLElement);

      const listItem = element?.closest("li");

      if (listItem) {
        // Browser handles new list item.
        return;
      }

      /*
       * Outside a list create a new paragraph.
       */

      e.preventDefault();

      document.execCommand(
        "insertHTML",
        false,
        "<div><br></div>"
      );

      saveContent();
    }
  };

  // -----------------------------------------
  // INPUT
  // -----------------------------------------

  const handleInput = () => {
    saveContent();
  };

  // -----------------------------------------
  // FOCUS
  // -----------------------------------------

  const handleFocus = () => {
    setShowToolbar(true);
  };

  const handleBlur = () => {
    /*
     * Delay so toolbar buttons can still be clicked.
     */
    setTimeout(() => {
      setShowToolbar(false);
    }, 150);

    saveContent();
  };

  // -----------------------------------------
  // RENDER
  // -----------------------------------------

  return (
    <div className="rich-editor-wrapper">

      {/* =====================================
          TOOLBAR
      ===================================== */}

      {showToolbar && (
        <div className="rich-editor-toolbar">

          {/* TEXT STYLE */}

          <ToolButton
            command="bold"
            title="Bold"
          >
            <strong>B</strong>
          </ToolButton>

          <ToolButton
            command="italic"
            title="Italic"
          >
            <em>I</em>
          </ToolButton>

          <ToolButton
            command="underline"
            title="Underline"
          >
            <u>U</u>
          </ToolButton>

          <ToolButton
            command="strikeThrough"
            title="Strikethrough"
          >
            <s>S</s>
          </ToolButton>

          <div className="editor-divider" />

          {/* LIST */}

          <ToolButton
            command="insertUnorderedList"
            title="Bullet List"
          >
            •
          </ToolButton>

          <ToolButton
            command="insertOrderedList"
            title="Numbered List"
          >
            1.
          </ToolButton>

          <div className="editor-divider" />

          {/* ALIGNMENT */}

          <ToolButton
            command="justifyLeft"
            title="Align Left"
          >
            ≡
          </ToolButton>

          <ToolButton
            command="justifyCenter"
            title="Align Center"
          >
            ≡
          </ToolButton>

          <ToolButton
            command="justifyRight"
            title="Align Right"
          >
            ≡
          </ToolButton>

          <div className="editor-divider" />

          {/* COLOR */}

          <label
            className="editor-color-button"
            title="Text Color"
          >
            A
            <input
              type="color"
              onChange={(e) =>
                execCommand(
                  "foreColor",
                  e.target.value
                )
              }
            />
          </label>

          {/* HIGHLIGHT */}

          <label
            className="editor-color-button"
            title="Highlight"
          >
            🖍
            <input
              type="color"
              onChange={(e) =>
                execCommand(
                  "hiliteColor",
                  e.target.value
                )
              }
            />
          </label>

          <div className="editor-divider" />

          {/* LINK */}

          <button
            type="button"
            className="editor-tool-button"
            title="Add Link"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              const url = window.prompt(
                "Enter URL"
              );

              if (url) {
                execCommand(
                  "createLink",
                  url
                );
              }
            }}
          >
            🔗
          </button>

          {/* REMOVE FORMAT */}

          <ToolButton
            command="removeFormat"
            title="Clear Formatting"
          >
            Tx
          </ToolButton>

        </div>
      )}

      {/* =====================================
          EDITOR
      ===================================== */}

      <Component
        ref={editorRef}
        className={`editable-field ${className}`}
        contentEditable
        suppressContentEditableWarning
        data-placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
      />

      <style>{`

        /* =========================================
           EDITOR WRAPPER
        ========================================= */

        .rich-editor-wrapper {
          position: relative;
          width: 100%;
        }

        /* =========================================
           EDITOR
        ========================================= */

        .editable-field {
          min-height: 24px;

          outline: none !important;
          border: none !important;
          box-shadow: none !important;

          border-radius: 4px;

          padding: 2px 4px;

          background-color: transparent;

          transition:
            background-color 0.2s ease;
        }

        .editable-field:hover {
          background-color: rgba(
            37,
            99,
            235,
            0.03
          );
        }

        .editable-field:focus {
          background-color: rgba(
            37,
            99,
            235,
            0.05
          );

          outline: none !important;
          border: none !important;
          box-shadow: none !important;
        }

        /* =========================================
           PLACEHOLDER
        ========================================= */

        .editable-field:empty::before {
          content: attr(data-placeholder);

          color: #9ca3af;

          pointer-events: none;
        }

        /* =========================================
           LISTS
        ========================================= */

        .editable-field ul {
          padding-left: 22px;
          margin: 4px 0;
        }

        .editable-field ol {
          padding-left: 22px;
          margin: 4px 0;
        }

        .editable-field li {
          margin: 2px 0;
        }

        /* =========================================
           TOOLBAR
        ========================================= */

        .rich-editor-toolbar {
          position: absolute;

          left: 0;
          bottom: calc(100% + 6px);

          display: flex;
          align-items: center;
          gap: 2px;

          padding: 5px;

          background: #ffffff;

          border: 1px solid #e5e7eb;

          border-radius: 7px;

          box-shadow:
            0 4px 12px rgba(0, 0, 0, 0.08);

          z-index: 9999;
        }

        /* =========================================
           TOOL BUTTON
        ========================================= */

        .editor-tool-button {
          width: 30px;
          height: 30px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: none;
          border-radius: 4px;

          background: transparent;

          color: #374151;

          font-size: 14px;

          cursor: pointer;

          transition:
            background-color 0.15s ease,
            color 0.15s ease;
        }

        .editor-tool-button:hover {
          background: #f3f4f6;
          color: #111827;
        }

        .editor-tool-button:active {
          background: #e5e7eb;
        }

        /* =========================================
           DIVIDER
        ========================================= */

        .editor-divider {
          width: 1px;
          height: 20px;

          margin: 0 4px;

          background: #e5e7eb;
        }

        /* =========================================
           COLOR PICKER
        ========================================= */

        .editor-color-button {
          position: relative;

          width: 30px;
          height: 30px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 4px;

          cursor: pointer;

          font-weight: 600;
        }

        .editor-color-button:hover {
          background: #f3f4f6;
        }

        .editor-color-button input {
          position: absolute;

          opacity: 0;

          width: 1px;
          height: 1px;
        }

      `}</style>
    </div>
  );
};

export default Index;