"use client";

import React from "react";
import InputField from "../InputField";
import TextEditor from "../TextEditor";
import { useResumeContext } from "../../../../context/resume-editor-context";
import { useResume } from "../../../../hooks/index";
import SubSectionTitle from "../SubSectionTitle";
import SubSectionToolBar from "../SubSectionToolBar";
import useEditor from "../../hooks/useEditor";
import IconPreview from "../../IconPreview";

interface ExperienceProps {
  data?: any;
  name?: any;
  syncWithProp?: any;
}

const px = (value?: number | string) => {
  if (value === undefined || value === null) return "0px";
  if (typeof value === "string")
    return value.includes("px") ? value : `${value}px`;
  return `${value}px`;
};

const Index: React.FC<ExperienceProps> = ({ data, name, syncWithProp }) => {
  const { setting } = useResumeContext();
  const { getValue } = useEditor();
  const { getResumeValue } = useResume();
  const { textStyles, colors } = setting || {};
  const sectionTitle = textStyles?.sectionTitle;
  const body = textStyles?.body;
  const metadata = textStyles?.metadata;
  const highlight = textStyles?.highlight;
  const resumeBorder = colors?.border || "#1a202c";
  const logoBackground = colors?.companyLogoBackground || "#edf2f7";
  const gapValue = px(setting?.gap);


  return (
    <>
      <style>{`
        .badge-title-container {
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
            .subtitle-icon-box {
              flex-shrink: 0; 
              border-radius: 8px;
              display: flex;
              align-items: start;
              justify-content: center;
            }
            .experience-content {
              flex-grow: 1;
              min-width: 0;
            }
            .metadata-row {
              display: flex; 
              flex-wrap: wrap; 
              gap: 20px;
            } 
    

            .resume-metadata-item {
              display: flex;
              align-items: center;
              gap: 6px; 
            }

            .resume-link-text {
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

      <div className="badge-title-container">
        {(data?.items || []).map((item: any, itemIndex: number) => {
          const isVisible = getResumeValue(
            `${name}.items.${item.positionIndex}.orgImg.isVisible`,
          );
          return (
            <div
              key={itemIndex}
              tabIndex={item.positionIndex}
              className="subsection-card sub-section-padding sub-section-divider active-focus"
            >
              <SubSectionToolBar
                variant="subsection"
                propertyPath={`${name}.items.${item.positionIndex}`}
              />
              {/* {isVisible && ( */}
              <div className="subtitle-icon-box">
                <IconPreview
                  rootPath={`${name}.items.${item.positionIndex}.orgImg`}
                />
              </div>
              {/* )} */}

              <div className="experience-content">
                {getValue(
                  `${name}.items.${item.positionIndex}.title.isVisible`,
                ) && (
                    <SubSectionTitle
                      name={`${name}.items.${item.positionIndex}.title.content`}
                    />
                  )}


                {/* Metadata */}
                {(getValue(
                  `${name}.items.${item.positionIndex}.duration.isVisible`,
                ) ||
                  getValue(
                    `${name}.items.${item.positionIndex}.location.isVisible`,
                  )) && (
                    <div className="metadata-row">
                      {getValue(
                        `${name}.items.${item.positionIndex}.duration.isVisible`,
                      ) && (
                          <div className="resume-metadata-item">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <rect x="3" y="4" width="18" height="18" rx="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            <InputField
                              tag="span"
                              name={`${name}.items.${item.positionIndex}.duration.content.from`}
                            />
                          </div>
                        )}


                    </div>
                  )}

                {getValue(
                  `${name}.items.${item.positionIndex}.description.isVisible`,
                ) && (
                    <TextEditor
                      name={`${name}.items.${item.positionIndex}.description.content`}
                      mode="description"
                      syncWithProp={syncWithProp}
                    />
                  )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Index;
