import React from "react";
import InputField from "../InputField";
import { useResumeContext } from "../../../../context/resume-editor-context";
import { px } from "../../utils/resumeEditor";

const Index = ({ value = "", name }) => {
  const { setting } = useResumeContext();

  return (
    <>
      <style>
        {`
            .section-header-wrapper { 
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
        <InputField tag="h2" value={value} name={name} />
      </div>
    </>
  );
};

export default Index;
