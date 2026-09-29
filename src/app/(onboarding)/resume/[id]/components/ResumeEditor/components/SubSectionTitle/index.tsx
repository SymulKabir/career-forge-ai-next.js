import React from "react";
import InputField from "../InputField";
import { px } from "../../utils/resumeEditor";
import { useResume } from "../../../../hooks";
import { sensitizeClassName } from "../../utils";

const Index = ({ name, placeholderPath, sectionSettingPath }: any) => {
  const { getSettingValue } = useResume();
  const subSectionTitle = getSettingValue(
    `${sectionSettingPath}.subSectionTitle`,
  );
  const sectionClassName = sensitizeClassName(sectionSettingPath);

  return (
    <>
      <style>
        {`
          .primary-title.${sectionClassName} {
            font-size: ${px(subSectionTitle?.fontSize)};
            font-weight: ${subSectionTitle?.fontWeight};
            color: ${subSectionTitle?.fontColor};
            line-height: ${subSectionTitle?.lineHeight};
            letter-spacing: ${px(subSectionTitle?.letterSpacing)};
            text-transform: ${subSectionTitle?.textTransform};
            margin: 0 0 ${px(subSectionTitle?.gap)} 0;
            display: inline-block;
            width: 100%;
          }
        `}
      </style>

      <InputField
        tag="h3"
        className={`primary-title avoid-default ${sectionClassName}`}
        name={name}
        placeholderPath={placeholderPath}
      />
    </>
  );
};

export default Index;
