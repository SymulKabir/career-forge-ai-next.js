import React from "react";
import InputField from "../InputField";
import { useResumeContext } from "../../../../context/resume-editor-context";
import { px } from "../../utils/resumeEditor";
import { useResume } from "../../../../hooks";
import { sensitizeClassName } from "../../utils";

const Index = ({ name, placeholderPath, sectionSettingPath }: any) => {
  const { getSettingValue } = useResume();
  const organizationTitle = getSettingValue(
    `${sectionSettingPath}.organizationTitle`,
  );
  const sectionClassName = sensitizeClassName(sectionSettingPath);

  return (
    <>
      <style>
        {`
          .organization-title.${sectionClassName} {
            font-size: ${px(organizationTitle?.fontSize)};
            font-weight: ${organizationTitle?.fontWeight};
            color: ${organizationTitle?.fontColor};
            line-height: ${organizationTitle?.lineHeight};
            letter-spacing: ${px(organizationTitle?.letterSpacing)};
            text-transform: ${organizationTitle?.textTransform};
            margin: 0 0 ${px(organizationTitle?.gap)} 0;
            display: inline-block;
            width: 100%;
            cursor: text;
          }
        `}
      </style>

      <InputField
        tag="h3"
        className={`organization-title avoid-default ${sectionClassName}`}
        name={name}
        placeholderPath={placeholderPath}
      />
    </>
  );
};

export default Index;
