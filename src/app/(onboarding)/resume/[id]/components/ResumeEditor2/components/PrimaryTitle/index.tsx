import React from "react";
import EditableText from "../EditableText";
import { useResumeEditor } from "../../../../context/resume-editor-context";
import { px } from "../../utils/resumeEditor";

const Index = ({ value = "" }) => {
  const { setting } = useResumeEditor();
  console.log("setting --->>", setting)
  return (
    <>
      <style>
        {`
            .primary-title {
              font-size: ${px(setting?.textStyles?.primary?.fontSize)};
              font-weight: ${setting?.textStyles?.primary?.fontWeight ?? 600};
              color: ${setting?.textStyles?.primary?.color || "#1a202c"};
              line-height: ${setting?.textStyles?.primary?.lineHeight ?? 1.4};
              letter-spacing: ${px(setting?.textStyles?.primary?.letterSpacing)};
              text-transform: ${setting?.textStyles?.primary?.textTransform || "none"};
              margin: 0 0 2px 0;
              display: inline-block;
              width: 100%;
        }
          `}
      </style>
      <EditableText
        tag="h3"
        className="primary-title"
        value={value}
        // onChange={(value) => handleRoleFieldChange(itemIndex, "role", value)}
      />
    </>
  );
};

export default Index;
