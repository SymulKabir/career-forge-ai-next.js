import React, { useState } from "react";

// ==========================================
// REUSABLE EDITABLE TEXT COMPONENT
// ==========================================
interface EditableTextProps {
  value: string;
  tag?: any;
  className?: string;
  handleInputChange?: (value: string) => void;
}

const Index: React.FC<EditableTextProps> = ({
  value,
  tag = "span",
  className,
  handleInputChange,
}) => {
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
        contentEditable
        suppressContentEditableWarning
        onChange={(e)=> {
          console.log("e of onchange----->>>>", e)
        }}
        onBlur={(e: React.FocusEvent<HTMLElement>) =>{
          console.log("e of onblur----->>>>", e)
          handleInputChange?.(e.currentTarget.textContent || "")
        }
          
        }
      >
        {value}
      </Component>
    </>
  );
};

export default Index;