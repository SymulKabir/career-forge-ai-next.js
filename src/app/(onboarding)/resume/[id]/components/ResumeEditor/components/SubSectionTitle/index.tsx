import React from "react";
import InputField from "../InputField";
import { useResumeContext } from "../../../../context/resume-editor-context";
import { px } from "../../utils/resumeEditor";

const Index = ({ name }) => {
  const { setting } = useResumeContext();


  return (
    <>
      <style>
        {`
          .primary-title {
            font-size: ${px(setting?.sections?.subSectionTitle?.fontSize )};
            font-weight: ${setting?.sections?.subSectionTitle?.fontWeight};
            color: ${setting?.sections?.subSectionTitle?.fontColor};
            line-height: ${setting?.sections?.subSectionTitle?.lineHeight};
            letter-spacing: ${px(setting?.sections?.subSectionTitle?.letterSpacing )};
            text-transform: ${setting?.sections?.subSectionTitle?.textTransform};
            margin: 0 0 ${px(setting?.sections?.subSectionTitle?.gap)} 0;
            display: inline-block;
            width: 100%;
          }
        `}
      </style>

      <InputField
        tag="h3"
        className="primary-title avoid-default"
        name={name}
      />
    </>
  );
};

export default Index;