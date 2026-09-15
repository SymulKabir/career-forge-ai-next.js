"use client";

import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { getResumeFormat } from "../../../../utils/resume";
import { useResume } from "../../../../hooks";

interface EditableTextProps {
  tag?: any;
  name?: string;
  className?: string;
  placeholderPath?: string | null;
  disabled?: boolean;
}

const Index: React.FC<EditableTextProps> = ({
  tag = "span",
  name,
  className,
  placeholderPath = null,
  disabled = false,
}) => {
  const { updateResume, getResumeValue, addResumeListItem } = useResume();

  const editorRef = useRef<HTMLElement | null>(null);

  /**
   * Controls the small tools modal.
   */
  const [showTools, setShowTools] = useState(false);

  /**
   * Store the latest value that was written by the user.
   */
  const lastInputValueRef = useRef("");

  /**
   * Track whether the user is currently editing.
   */
  const isEditingRef = useRef(false);

  const Component = tag as any;

  const placeholder = placeholderPath
    ? getResumeFormat(placeholderPath) || "Typing here..."
    : "Typing here...";

  // ==========================================
  // SYNC RESUME VALUE → DOM
  // ==========================================
  useLayoutEffect(() => {
    const element = editorRef.current;

    if (!element || !name) return;

    const resumeValue = getResumeValue(name) ?? "";
    const value = String(resumeValue);

    /**
     * Never replace innerHTML while the user is typing.
     */
    if (isEditingRef.current) {
      return;
    }

    /**
     * Only update DOM if value is actually different.
     */
    if (element.textContent !== value) {
      element.textContent = value;
    }

    lastInputValueRef.current = value;
  }, [name, getResumeValue]);

  // ==========================================
  // INPUT
  // ==========================================
  const handleInput = (event: React.FormEvent<HTMLElement>) => {
    if (!name) return;
    if (disabled) return;

    const element = event.currentTarget;

    /**
     * Mark editor as active.
     */
    isEditingRef.current = true;

    /**
     * Read directly from DOM.
     */
    const value = element.textContent || "";

    lastInputValueRef.current = value;

    updateResume({
      propertyPath: name,
      value,
    });
  };

  // ==========================================
  // FOCUS
  // ==========================================
  const handleFocus = () => {
    if (disabled) return;

    isEditingRef.current = true;

    /**
     * Show tools modal.
     */
    setShowTools(true);
  };

  // ==========================================
  // BLUR
  // ==========================================
  const handleBlur = () => {
    isEditingRef.current = false;

    /**
     * Add a slight timeout so that clicking the button 
     * registers its click event before the modal hides.
     */
    setTimeout(() => {
      setShowTools(false);
    }, 200);
  };

  // ==========================================
  // ADD TAG
  // ==========================================
  const addTag = () => {
    if (!name) return;

    const lastDot = name.lastIndexOf(".");

    const parentPath = name.slice(0, lastDot) || "";
    const index = Number(name.slice(lastDot + 1));

    addResumeListItem(parentPath, "", index + 1);
  };

  // ==========================================
  // KEYBOARD
  // ==========================================
  const handleNewTag = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    addTag();
  };

  // ==========================================
  // CLEANUP
  // ==========================================
  useEffect(() => {
    return () => {
      isEditingRef.current = false;
    };
  }, []);

  return (
    <>
      <style>
        {`
          .editable-field {
            outline: none !important;
            border: none !important;
            box-shadow: none !important;
            border-radius: 4px;
            transition: background-color 0.2s ease;
            background-color: transparent;
          }

          .editable-field:hover {
            background-color: transparent;
          }

          .editable-field:focus {
            outline: none !important;
            border: none !important;
            box-shadow: none !important;
          }

          .editable-field.editable-disabled {
            cursor: default;
            user-select: text;
            opacity: 1;
          }

          .editable-field[contenteditable]:empty::before {
            content: attr(data-placeholder);
            color: #9ca3af;
            pointer-events: none;
            display: block;
          }

          @keyframes modalPopUp {
            0% { opacity: 0; transform: translateY(4px) scale(0.97); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }

          .animate-modal-popup {
            animation: modalPopUp 0.16s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>

      <div className="relative">
        {/* ==========================================
            MODERN COMPACT TOOLS MODAL (SHOWS ABOVE)
        ========================================== */}
        {showTools && !disabled && (
          <div
            className="
              animate-modal-popup
              absolute
              left-0
              bottom-full
              z-50
              mb-2
              flex
              items-center
              gap-1
              rounded-xl
              border
              border-indigo-100
              bg-white/95
              backdrop-blur-xl
              p-1
              shadow-[0_10px_25px_rgba(15,23,42,0.08)]
              ring-1
              ring-slate-900/5
            "
            onMouseDown={(e) => {
              /**
               * Prevent the editable field from losing focus
               * before the button click is processed.
               */
              e.preventDefault();
            }}
          >
            {/* Primary Action Button - Smaller & More Compact */}
            <button
              type="button"
              onClick={addTag}
              className="
                group
                flex
                items-center
                gap-1
                rounded-lg
                bg-gradient-to-r
                from-indigo-600
                to-violet-600
                px-2
                py-1
                text-[10px]
                font-medium
                !text-white
                shadow-sm
                shadow-indigo-500/20
                transition-all
                duration-150
                hover:from-indigo-500
                hover:to-violet-500
                active:scale-95
                w-[max-content]
              "
            >
              <span className="flex h-3 w-3 items-center justify-center transition-transform group-hover:rotate-90 duration-300 text-[10px]">
                +
              </span>
              <span>Add Tag</span>
            </button>
          </div>
        )}

        {/* ==========================================
            EDITABLE FIELD
        ========================================== */}
        <Component
          ref={editorRef}
          className={`
            editable-field
            bg-transparent
            ${disabled ? "editable-disabled" : ""}
            ${className || ""}
          `}
          name={name}
          contentEditable={!disabled}
          suppressContentEditableWarning
          data-placeholder={placeholder}
          onFocus={handleFocus}
          onInput={handleInput}
          onBlur={handleBlur}
          onKeyDown={handleNewTag}
        />
      </div>
    </>
  );
};

export default Index;