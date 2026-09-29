"use client";

import React, { useState } from "react";
import TextEditor from "../TextEditor";
import SubSectionToolBar from "../SubSectionToolBar";
import useEditor from "../../hooks/useEditor";
import { useResume } from "../../../../hooks";
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
  const sectionStyle = getSettingValue(sectionSettingPath);
  const subSectionTitleStyles = sectionStyle?.subSectionTitle;
  const metadataStyles = sectionStyle?.metadata;
  const resumeBorderStyles = sectionStyle.border
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
        .description-card-container.${sectionClassName} {
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
        }
      `}</style>

      <div className={`description-card-container ${sectionClassName}`}>
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
