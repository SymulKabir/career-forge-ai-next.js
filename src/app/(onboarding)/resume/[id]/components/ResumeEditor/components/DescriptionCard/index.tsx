"use client";

import React, { useState } from "react";
import TextEditor from "../TextEditor";
import SubSectionToolBar from "../SubSectionToolBar";
import useEditor from "../../hooks/useEditor";
import { useResume } from "../../../../hooks";

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
  const sectionStyle = getSettingValue(sectionSettingPath);
  const subSectionTitleStyles = sectionStyle?.subSectionTitle;
  const metadataStyles = sectionStyle?.metadata;
  const resumeBorderStyles = sectionStyle.border

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
            .metadata-row {
              display: flex; 
              flex-wrap: wrap; 
              gap: 20px;
            } 
    



            .resume-link-text {
              display: inline-flex;
              align-items: center;
              gap: 4px;
              cursor: text;
            }

            .resume-body-text {
              font-size: ${px(metadataStyles?.fontSize)};
              font-weight: ${metadataStyles?.fontWeight ?? 400};
              color: ${metadataStyles?.color || "#4b5563"};
              line-height: ${metadataStyles?.lineHeight ?? 1.5};
              letter-spacing: ${px(metadataStyles?.letterSpacing)};
              margin: 0 0 12px 0;
            }

            .highlights-list {
              margin: 0;
              padding-left: 18px;
            } 
        }

         
      `}</style>

      <div className="milestone-container">
        {(data?.items || []).map((item: any, itemIndex: number) => {
          if (!item.isVisible) return null;
          const rootPathName = `${name}.items.${item.positionIndex}`;
          const toolsConfig = {
            entry: {},
            duration: {},
            delete: {},
            move: {
              maxIndex: data?.items?.length ? data?.items?.length - 1 : 0,
            },
            display: {
              dropdownList: [
                createDisplayItem(rootPathName, "Description", "description"),
              ],
            },
          };
          return (
            <div
              key={itemIndex}
              tabIndex={item.positionIndex}
              className="subsection-card sub-section-padding active-focus"
            >
              <SubSectionToolBar
                variant="subsection"
                propertyPath={rootPathName}
                tools={toolsConfig}
                format={data.format}
              />
              {getValue(
                `${name}.items.${item.positionIndex}.description.isVisible`,
              ) && (
                <TextEditor
                  name={`${rootPathName}.description.content`}
                  mode="description"
                  syncWithProp={syncWithProp}
                  placeholderPath={`${rootPlaceholderPathName}.bullets.placeholder`}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Index;
