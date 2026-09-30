"use client";
import React from "react";
import { useResume } from "../../../../hooks";
import { px } from "../../utils/resumeEditor";

const Index = ({
  sectionClassName,
  sectionSettingPath,
}: {
  sectionClassName: string;
  sectionSettingPath: string;
}) => {
  const { getSettingValue } = useResume();
  const sectionStyles = getSettingValue(sectionSettingPath); 
  const metadataStyles = sectionStyles?.metadata;

  return (
    <style>
      {`
            .${sectionClassName} {
              font-family: ${getSettingValue("font.family") || "Inter, sans-serif"};
              font-size: ${px(metadataStyles?.fontSize ?? 13)};
              font-weight: ${metadataStyles?.fontWeight ?? 400};
              color: ${metadataStyles?.fontColor ?? "#6b7280"};
              line-height: ${metadataStyles?.lineHeight ?? 1.4};
              letter-spacing: ${px(metadataStyles?.letterSpacing ?? 0)};
              text-transform: ${metadataStyles?.textTransform ?? "none"}; 
            }
  
            .${sectionClassName} *:not(.avoid-default, .avoid-default *) {
              font-size: inherit;
              font-weight: inherit;
              color: inherit;
              line-height: inherit;
              letter-spacing: inherit;
              text-transform: inherit;
            }
            .${sectionClassName} * {
              font-size: inherit;
              font-weight: inherit;
              color: inherit;
              line-height: inherit;
              letter-spacing: inherit;
              text-transform: inherit;
            } 
        `}
    </style>
  );
};

export default Index;
