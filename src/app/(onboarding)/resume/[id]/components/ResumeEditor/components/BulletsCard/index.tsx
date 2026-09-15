"use client";

import React, { useState } from "react";
import InputField from "../InputField";
import TextEditor from "../TextEditor";
import DateInputField from "../DateInputField";
import { useResumeContext } from "../../../../context/resume-editor-context";
import { useResume } from "../../../../hooks/index";
import SubSectionTitle from "../SubSectionTitle";
import OrganizationTitle from "../OrganizationTitle";
import SubSectionToolBar from "../SubSectionToolBar";
import useEditor from "../../hooks/useEditor";
import ImgPreview from "../../ImgPreview";
import { Calendar, MapPin, Link as LinkIcon } from "lucide-react";

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
  const { getResumeValue, updateResume } = useResume();
  const { textStyles, colors } = setting || {};
  const sectionTitle = textStyles?.sectionTitle;
  const body = textStyles?.body;
  const highlight = textStyles?.highlight;
  const resumeBorder = colors?.border || "#1a202c";
  const gapValue = px(setting?.gap);
  const rootPlaceholderPathName = `${data.format}.items.0`;
  const isVisible = (filePath: string) => {
    return getResumeValue(filePath);
  };
  const toggleVisibility = (obj: any) => {
    updateResume({
      propertyPath: obj.filePath,
      value: !obj.active,
    });
  };

  const createDisplayItem = (
    rootPathName: string,
    label: string,
    property: string,
  ) => {
    const filePath = `${rootPathName}.${property}.isVisible`;
    return {
      label,
      filePath,
      active: isVisible(filePath),
      action: toggleVisibility,
    };
  };

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
            .organization-logo-box {
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

            .date-item {
              display: flex;
              align-items: center;
              gap: 5px; 
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

      <div className="milestone-container">
        {(data?.items || []).map((item: any, itemIndex: number) => {
          if (!item.isVisible) return null;
          const rootPathName = `${name}.items.${item.positionIndex}`;
          const isImgVisible = getResumeValue(
            `${rootPathName}.orgImg.isVisible`,
          );
          const toolsConfig = {
            entry: {},
            duration: {},
            delete: {},
            move: {
              maxIndex: data?.items?.length ? data?.items?.length - 1 : 0,
            },
            display: {
              dropdownList: [
                createDisplayItem(rootPathName, "Image", "orgImg"),
                createDisplayItem(rootPathName, "Title", "title"),
                createDisplayItem(rootPathName, "Subtitle", "subtitle"),
                createDisplayItem(rootPathName, "Link", "link"),
                createDisplayItem(rootPathName, "Duration", "duration"),
                createDisplayItem(rootPathName, "Location", "location"),
                createDisplayItem(rootPathName, "Bullets", "bullets"),
                createDisplayItem(rootPathName, "Description", "description"),
              ],
            },
          };
          return (
            <div
              key={itemIndex}
              tabIndex={item.positionIndex}
              className="subsection-card sub-section-padding sub-section-divider active-focus"
            >
              <SubSectionToolBar
                variant="subsection"
                propertyPath={rootPathName}
                tools={toolsConfig}
                format={data.format}
              />
              {isImgVisible && (
                <div className="organization-logo-box">
                  <ImgPreview
                    rootPath={`${rootPathName}.orgImg`}
                    placeholder={`
                            <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                          </svg>
                      `}
                    styles={{
                      size: px(setting?.sections?.image?.size ?? 25),
                      radius: px(setting?.sections?.image?.borderRadius ?? 3),
                      backgroundColor:
                        setting?.sections?.image?.backgroundColor ?? "#f3f4f6",
                      borderColor:
                        setting?.sections?.image?.borderColor ?? "#e5e7eb",
                      borderWidth: px(
                        setting?.sections?.image?.borderWidth ?? 1,
                      ),
                      padding: px(setting?.sections?.image?.padding ?? 4),
                    }}
                    hide={{ visible: true }}
                  />
                </div>
              )}

              <div className="experience-content">
                {getValue(`${rootPathName}.title.isVisible`) && (
                  <SubSectionTitle
                    name={`${rootPathName}.title.content`}
                    placeholderPath={`${rootPlaceholderPathName}.title.placeholder`}
                  />
                )}

                {getValue(`${rootPathName}.subtitle.isVisible`) && (
                  <OrganizationTitle
                    name={`${rootPathName}.subtitle.content`}
                    placeholderPath={`${rootPlaceholderPathName}.subtitle.placeholder`}
                  />
                )}

                {/* Metadata */}
                {(getValue(`${rootPathName}.duration.isVisible`) ||
                  getValue(`${rootPathName}.location.isVisible`)) && (
                  <div className="metadata-row">
                    {getValue(`${rootPathName}.duration.isVisible`) && (
                      <div className="resume-metadata-item">
                        <div className="date-item">
                          <DateInputField
                            valuePath={`${rootPathName}.duration.content.from`}
                            placeholderPath={`${rootPlaceholderPathName}.duration.placeholder.from`}
                          />
                        </div>
                        <div className="date-item">
                          <DateInputField
                            valuePath={`${rootPathName}.duration.content.to`}
                            placeholderPath={`${rootPlaceholderPathName}.duration.placeholder.to`}
                            allowPresent
                          />
                        </div>
                      </div>
                    )}

                    {getValue(`${rootPathName}.location.isVisible`) && (
                      <div className="resume-metadata-item">
                        <MapPin size={14} strokeWidth={2} aria-hidden="true" />
                        <InputField
                          tag="span"
                          name={`${rootPathName}.location.content`}
                          placeholderPath={`${rootPlaceholderPathName}.location.placeholder`}
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Website Link */}
                {getValue(`${rootPathName}.link.isVisible`) && (
                  <div>
                    <span className="resume-link-text">
                      <LinkIcon size={12} strokeWidth={2} aria-hidden="true" />
                      <InputField
                        tag="span"
                        name={`${rootPathName}.link.content`}
                        placeholderPath={`${rootPlaceholderPathName}.link.placeholder`}
                      />
                    </span>
                  </div>
                )}

                {getValue(`${rootPathName}.description.isVisible`) && (
                  <TextEditor
                    name={`${rootPathName}.description.content`}
                    mode="description"
                    syncWithProp={syncWithProp}
                    placeholderPath={`${rootPlaceholderPathName}.description.placeholder`}
                  />
                )}
                {getValue(`${rootPathName}.bullets.isVisible`) && (
                  <TextEditor
                    name={`${rootPathName}.bullets.content`}
                    mode="list"
                    syncWithProp={syncWithProp}
                    placeholderPath={`${rootPlaceholderPathName}.bullets.placeholder`}
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
