"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";

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
  const { updateResume, getResumeValue } = useResume();

  const editorRef = useRef<HTMLElement | null>(null);

  /**
   * Store the latest value that was written by the user.
   * This prevents React state updates from overwriting
   * the contentEditable DOM while typing.
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

  useLayoutEffect(() => {
    const element = editorRef.current;

    if (!element || !name) return;

    const resumeValue = getResumeValue(name) ?? "";
    const value = String(resumeValue);

    /**
     * IMPORTANT:
     *
     * Never replace innerHTML while the user is typing.
     * Otherwise the browser selection/cursor can be lost.
     */
    if (isEditingRef.current) {
      return;
    }

    /**
     * Only update DOM if the value is actually different.
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
  };

  // ==========================================
  // BLUR
  // ==========================================
  const handleBlur = () => {
    if (!editorRef.current) return;
    isEditingRef.current = false;
  };

  // ==========================================
  // CLEANUP / EXTERNAL CHANGES
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
            user-select: 
            text; opacity: 1; 
          } 
          .editable-field[contenteditable]:empty::before {
            content: attr(data-placeholder);
            color: #9ca3af;
            pointer-events: none;
            display: block;
          }
        `}
      </style>

      <Component
        ref={editorRef}
        className={` editable-field ${disabled ? "editable-disabled" : ""} ${className || ""} `}
        name={name}
        contentEditable={!disabled}
        suppressContentEditableWarning
        data-placeholder={placeholder}
        onFocus={handleFocus}
        onInput={handleInput}
        onBlur={handleBlur}
      />
    </>
  );
};

export default Index;
