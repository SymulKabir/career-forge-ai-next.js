import React from "react";
import InputField from "../InputField";
import { useResumeContext } from "../../../../context/resume-editor-context";
import { px } from "../../utils/resumeEditor";

const Index = ({ name, placeholderPath }:any) => {
  const { setting } = useResumeContext();

  const config = setting?.sections?.organizationTitle;

  return (
    <>
      <style>
        {`
          .organization-title {
            font-size: ${px(config?.fontSize)};
            font-weight: ${config?.fontWeight};
            color: ${config?.fontColor};
            line-height: ${config?.lineHeight};
            letter-spacing: ${px(config?.letterSpacing)};
            text-transform: ${config?.textTransform};
            margin: 0 0 ${px(config?.gap)} 0;
            display: inline-block;
            width: 100%;
            cursor: text;
          }
        `}
      </style>

      <InputField
        tag="h3"
        className="organization-title avoid-default"
        name={name}
        placeholderPath={placeholderPath}
      />
    </>
  );
};

export default Index;