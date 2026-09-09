import React from "react";
import InputField from "../InputField";
import { useResumeContext } from "../../../../context/resume-editor-context";
import { px } from "../../utils/resumeEditor";

const Index = ({ name }) => {
  const { setting } = useResumeContext();

  const sectionTitle = setting?.sections?.sectionTitle;
  const border = sectionTitle?.border;

  return (
    <>
      <style>
        {`
          .section-header-card {
            ${border?.enabled && border?.position === "bottom"
              ? `border-bottom: ${px(border.width)} ${border.style} ${border.color};`
              : ""}

            ${border?.enabled && border?.position === "top"
              ? `border-top: ${px(border.width)} ${border.style} ${border.color};`
              : ""}

            ${border?.enabled && border?.position === "both"
              ? `
                border-top: ${px(border.width)} ${border.style} ${border.color};
                border-bottom: ${px(border.width)} ${border.style} ${border.color};
              `
              : ""}

            border-radius: ${px(border?.radius ?? 0)};
            padding-bottom: ${px(border?.spacing ?? 0)};
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
        <InputField tag="h2" name={name} />
      </div>
    </>
  );
};

export default Index;