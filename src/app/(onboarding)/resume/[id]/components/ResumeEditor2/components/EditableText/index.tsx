import React, { useState } from "react";
import useEditor from "../../hooks/useEditor"
// ==========================================
// REUSABLE EDITABLE TEXT COMPONENT
// ==========================================
interface EditableTextProps {
  tag?: any;
  name?: string;
  className?: string;
}

const Index: React.FC<EditableTextProps> = ({
  tag = "span",
  name,
  className
}) => {
  const { getValue, handleInputChange, splitAndCreateItem } = useEditor()
  const Component = tag as any;
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
          background-color: rgba(37, 99, 235, 0.03);
        }

        .editable-field:focus {
          background-color: rgba(37, 99, 235, 0.05);
          outline: none !important;
          border: none !important;
          box-shadow: none !important;
        }
        
        `}
      </style>
      <Component
        className={`editable-field ${className || ""}`}
        name={name}
        contentEditable
        suppressContentEditableWarning
        // onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
        //   if (e.key === "Enter") {
        //     splitAndCreateItem(e)
        //     console.log("Enter pressed"); 
        //   }
        // }}
        // onBlur={(e: React.FocusEvent<HTMLElement>) => {
        //   handleInputChange(e)
        // }

        // }
      >
        {name ? getValue(name) : ""}
        {/* {value} */}
      </Component>
    </>
  );
};

export default Index;