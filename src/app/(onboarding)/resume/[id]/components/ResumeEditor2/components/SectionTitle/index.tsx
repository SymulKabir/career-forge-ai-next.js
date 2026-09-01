import React from "react";
import EditableText from "../EditableText";
import { useResumeEditor } from "../../../../context/resume-editor-context";
import { px } from "../../utils/resumeEditor";

const Index = ({ value = "" }) => {
  const { setting } = useResumeEditor(); 
  return (
    <>
      <style>
        {`
            .section-header-wrapper {
          padding-bottom: 6px;
          margin-bottom: 20px;
          border-bottom: 2px solid ${setting.colors?.border};
           h2{
           font-size: ${px(setting.textStyles?.sectionTitle)};
          font-weight: ${setting.textStyles?.sectionTitle?.fontWeight ?? 700};
          color: ${setting.textStyles?.sectionTitle?.color || "#1a202c"};
          line-height: ${setting.textStyles?.sectionTitle?.lineHeight ?? 1.2};
          letter-spacing: ${px(setting.textStyles?.sectionTitle?.letterSpacing)};
          text-transform: ${setting.textStyles?.sectionTitle?.textTransform || "none"};
          margin: 0;
          padding: 0;
          display: inline-block;
          width: 100%;
          }
        }
          `}
      </style>
      <div className="section-header-wrapper">
        <EditableText
          tag="h2"
          value={value}
          //   onChange={handleSectionTitleChange}
        />
      </div>
    </>
  );
};

export default Index;
