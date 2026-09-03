import React from "react";
import EditableText from "../EditableText";
import { useResumeContext } from "../../../../context/resume-editor-context";
import { px } from "../../utils/resumeEditor";

const Index = ({ name }) => {
  const { setting } = useResumeContext();
  return (
    <>
      <style>
        {`
            .secondary-title {
              font-size: ${px(setting?.textStyles?.secondary?.fontSize)};
              font-weight: ${setting?.textStyles?.secondary?.fontWeight ?? 500};
              color: ${setting?.textStyles?.secondary?.color || "#2563eb"};
              line-height: ${setting?.textStyles?.secondary?.lineHeight ?? 1.4};
              letter-spacing: ${px(setting?.textStyles?.secondary?.letterSpacing)};
              text-transform: ${setting?.textStyles?.secondary?.textTransform || "none"};
              display: inline-block;
              margin-bottom: 6px;
              cursor: text;
            }
          `}
      </style>
      <EditableText
        tag="h3"
        className="secondary-title"
        name={name}
      />
    </>
  );
};

export default Index;
