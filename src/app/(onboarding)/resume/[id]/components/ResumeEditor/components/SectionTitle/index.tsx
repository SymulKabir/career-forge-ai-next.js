import React from "react";
import InputField from "../InputField";
import { px } from "../../utils/resumeEditor";
import { useResume } from "../../../../hooks";

const Index = ({ name, placeholderPath, sectionSettingPath }: any) => {
  const { getSettingValue } = useResume();

  const sectionSetting = getSettingValue(sectionSettingPath) || {};
  const sectionTitle = sectionSetting?.sectionTitle; 
 

  return (
    <>
      <style>
        {`
          .section-header-card {
            ${
              sectionTitle?.border?.enabled && sectionTitle?.border?.position === "bottom"
                ? `border-bottom: ${px(sectionTitle?.border?.width)} ${sectionTitle?.border.style} ${sectionTitle?.border?.color};`
                : ""
            }

            ${
              sectionTitle?.border?.enabled && sectionTitle?.border?.position === "top"
                ? `border-top: ${px(sectionTitle?.border?.width)} ${sectionTitle?.border?.style} ${sectionTitle?.border?.color};`
                : ""
            }

            ${
              sectionTitle?.border?.enabled && sectionTitle?.border?.position === "both"
                ? `
                border-top: ${px(sectionTitle?.border?.width)} ${sectionTitle?.border?.style} ${sectionTitle?.border?.color};
                border-bottom: ${px(sectionTitle?.border?.width)} ${sectionTitle?.border?.style} ${sectionTitle?.border?.color};
              `
                : ""
            }

            border-radius: ${px(sectionTitle?.border?.radius ?? 0)};
            padding-bottom: ${px(sectionTitle?.border?.spacing ?? 0)};
          }

          .section-header-card h2 {
            font-size: ${px(sectionTitle?.fontSize)};
            font-weight: ${sectionTitle?.fontWeight};
            color: ${sectionTitle?.fontColor};
            line-height: ${sectionTitle?.lineHeight};
            letter-spacing: ${px(sectionTitle?.letterSpacing)};
            text-transform: ${sectionTitle?.textTransform};
            margin: 0;
            margin-bottom: ${px(sectionTitle?.gap)};
            padding: 0;
            display: inline-block;
            width: 100%;
          }
        `}
      </style>

      <div className="section-header-card avoid-default">
        <InputField tag="h2" name={name} placeholderPath={placeholderPath} />
      </div>
    </>
  );
};

export default Index;
