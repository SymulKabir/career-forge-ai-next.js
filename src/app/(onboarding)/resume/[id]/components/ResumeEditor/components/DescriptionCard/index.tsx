"use client";

import React, { useState } from "react";
import InputField from "../InputField";
import TextEditor from "../TextEditor";
import { useResumeContext } from "../../../../context/resume-editor-context";
import SectionTitle from "../SectionTitle";
import PrimaryTitle from "../PrimaryTitle";
import SecondaryTitle from "../SecondaryTitle";
import SubSectionToolBar from "../SubSectionToolBar";
import useEditor from "../../hooks/useEditor";

interface ExperienceProps {
  data?: any;
  name?: any;
  sectionRefs?: any;
  originalIndex: number;
}

const px = (value?: number | string) => {
  if (value === undefined || value === null) return "0px";
  if (typeof value === "string")
    return value.includes("px") ? value : `${value}px`;
  return `${value}px`;
};

const Index: React.FC<ExperienceProps> = ({
  data,
  name,
  sectionRefs,
  originalIndex,
}) => {
  const { setting } = useResumeContext();
  const { getValue } = useEditor();
  const { font, textStyles, colors } = setting || {};
  const sectionTitle = textStyles?.sectionTitle;
  const body = textStyles?.body;
  const metadata = textStyles?.metadata;
  const highlight = textStyles?.highlight;
  const link = textStyles?.link;

  const fontFamily = font?.family || "Inter, sans-serif";
  const resumeBorder = colors?.border || "#1a202c";
  const resumeBackground = colors?.background || "#ffffff";
  const logoBackground = colors?.companyLogoBackground || "#edf2f7";
  const gapValue = px(setting?.gap);

  return (
    <>
      <style>{`
        .milestone-container {
            .section-header-wrapper {
              padding-bottom: 3px;
              margin-bottom: 5px;
              border-bottom: 2px solid ${resumeBorder};
              h2{
              font-size: ${px(sectionTitle?.fontSize)};
              font-weight: ${sectionTitle?.fontWeight ?? 700};
              color: ${sectionTitle?.color || "#1a202c"};
              line-height: ${sectionTitle?.lineHeight ?? 1.2};
              letter-spacing: ${px(sectionTitle?.letterSpacing)};
              text-transform: ${sectionTitle?.textTransform || "none"};
              margin: 0;
              padding: 0;
              display: inline-block;
              width: 100%;
              }
            }
            .subsection-card {
              display: flex;
              gap: 7px !important;
              position: relative; 
              width: 100%;
              box-sizing: border-box;
              gap: ${gapValue};
            } 
            .metadata-row {
              display: flex; 
              flex-wrap: wrap; 
              gap: 20px;
            } 
    



            .resume-link-text {
              font-size: ${px(link?.fontSize)};
              font-weight: ${link?.fontWeight ?? 500};
              color: ${link?.color || "#2563eb"};
              display: inline-flex;
              align-items: center;
              gap: 4px;
              cursor: text;
            }

            .resume-body-text {
              font-size: ${px(body?.fontSize)};
              font-weight: ${body?.fontWeight ?? 400};
              color: ${body?.color || "#4b5563"};
              line-height: ${body?.lineHeight ?? 1.5};
              letter-spacing: ${px(body?.letterSpacing)};
              margin: 0 0 12px 0;
            }

            .highlights-list {
              margin: 0;
              padding-left: 18px;
            }

            .resume-highlight-item {
              font-size: ${px(highlight?.fontSize)};
              font-weight: ${highlight?.fontWeight ?? 400};
              color: ${highlight?.color || "#4b5563"};
              line-height: ${highlight?.lineHeight ?? 1.5};
              margin-bottom: 6px;

            }
        }

         
      `}</style>

      <div
        className="milestone-container "
        // ref={(el) => (sectionRefs.current[originalIndex] = el)}
      > 

        {(data?.items || []).map((item: any, itemIndex: number) => (
          <div
            key={itemIndex}
            tabIndex={item.positionIndex}
            className="subsection-card sub-section-padding active-focus"
          >
            <SubSectionToolBar
              variant="subsection"
              propertyPath={`${name}.items.${item.positionIndex}`}
            />
            {getValue(`${name}.items.${item.positionIndex}.description.isVisible`) && (
              <TextEditor
                name={`${name}.items.${item.positionIndex}.description.content`}
                mode="description"
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Index;
