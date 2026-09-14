import React  from "react";
import useEditor from "../../hooks/useEditor";
import {getResumeFormat} from "../../../../utils/resume"

// ==========================================
// REUSABLE EDITABLE TEXT COMPONENT
// ==========================================
interface EditableTextProps {
  tag?: any;
  name?: string;
  className?: string;
  placeholderPath?: string | null; 
}

const Index: React.FC<EditableTextProps> = ({
  tag = "span",
  name,
  className,
  placeholderPath=null
}) => {
  const { getValue } = useEditor();
  const Component = tag as any;
  const placeholder = placeholderPath ? getResumeFormat(placeholderPath) || "Typing here..." : "Typing here..."
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
          /* background-color: rgba(37, 99, 235, 0.03); */
        }

        .editable-field:focus { 
          outline: none !important;
          border: none !important;
          box-shadow: none !important;
        }

        /* 2. CSS trick for contentEditable placeholder */
        .editable-field[contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #9ca3af; /* Muted placeholder color */
          pointer-events: none;
          display: block; /* Ensures it stays visible on empty block elements */
        }
        `}
      </style>
      <Component
        className={`editable-field ${className || ""}`}
        name={name}
        contentEditable
        suppressContentEditableWarning
        data-placeholder={placeholder} // 3. Pass placeholder string as data attribute
      >
        {name ? getValue(name) : ""}
      </Component>
    </>
  );
};

export default Index;