"use client";

import React from "react";
import InputField from "../InputField";
import TextEditor from "../TextEditor";
import { useResume } from "../../../../hooks/index";
import SubSectionTitle from "../SubSectionTitle";
import SubSectionToolBar from "../SubSectionToolBar";
import useEditor from "../../hooks/useEditor";
import IconPreview from "../../IconPreview";
import { sensitizeClassName } from "../../utils";

interface ExperienceProps {
  data?: any;
  name?: any;
  syncWithProp?: any;
  sectionSettingPath?: any;
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
  sectionSettingPath,
  syncWithProp,
}) => {
  const { getValue } = useEditor();
  const { getResumeValue, updateResume, getSettingValue } = useResume();
  const rootPlaceholderPathName = `${data.format}.items.0`;
  const sectionStyles = getSettingValue(sectionSettingPath);
  const subSectionTitleStyles = sectionStyles?.subSectionTitle;
  const metadataStyles = sectionStyles?.metadata;
  const resumeBorderStyles = sectionStyles?.border;
  const sectionClassName = sensitizeClassName(sectionSettingPath);

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
        .badge-title-container.${sectionClassName} {
            .section-header-wrapper {
              padding-bottom: 3px;
              margin-bottom: 5px;
              border-bottom: 2px solid ${resumeBorderStyles};
              h2{
              font-size: ${px(subSectionTitleStyles?.fontSize)};
              font-weight: ${subSectionTitleStyles?.fontWeight ?? 700};
              color: ${subSectionTitleStyles?.color || "#1a202c"};
              line-height: ${subSectionTitleStyles?.lineHeight ?? 1.2};
              letter-spacing: ${px(subSectionTitleStyles?.letterSpacing)};
              text-transform: ${subSectionTitleStyles?.textTransform || "none"};
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
            .resume-link-text {
              display: inline-flex;
              align-items: center;
              gap: 4px;
              cursor: text;
            }
        }
      `}</style>

      <div className={`badge-title-container ${sectionClassName}`}>
        {(data?.items || []).map((item: any, itemIndex: number) => {
          if (!item.isVisible) return null;
          const rootPathName = `${name}.items.${item.positionIndex}`;
          const isIconVisible = getResumeValue(
            `${rootPathName}.orgIcon.isVisible`,
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
                createDisplayItem(rootPathName, "Icon", "orgIcon"),
                createDisplayItem(rootPathName, "Title", "title"),
                createDisplayItem(rootPathName, "Link", "link"),
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
              {isIconVisible && (
                <div className="subtitle-icon-box">
                  <IconPreview rootPath={`${rootPathName}.orgIcon`} />
                </div>
              )}

              <div className="experience-content">
                {getValue(`${rootPathName}.title.isVisible`) && (
                  <SubSectionTitle
                    name={`${rootPathName}.title.content`}
                    placeholderPath={`${rootPlaceholderPathName}.title.placeholder`}
                    sectionSettingPath={sectionSettingPath}
                  />
                )}

                {getValue(`${rootPathName}.link.isVisible`) && (
                  <div>
                    <span className="resume-link-text">
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
                    placeholderPath={`${rootPlaceholderPathName}.description.placeholder`}
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
