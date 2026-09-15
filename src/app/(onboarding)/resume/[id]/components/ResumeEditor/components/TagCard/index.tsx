"use client";

import React from "react";
import TagInputField from "../TagInputField";
import { useResumeContext } from "../../../../context/resume-editor-context";
import { useResume } from "../../../../hooks/index";
import SubSectionTitle from "../SubSectionTitle";
import SubSectionToolBar from "../SubSectionToolBar";
import useEditor from "../../hooks/useEditor";

interface SkillsProps {
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

const SkillsCard: React.FC<SkillsProps> = ({ data, name, syncWithProp }) => {
  const { setting } = useResumeContext();
  const { getValue } = useEditor();
  const { getResumeValue, updateResume } = useResume();
  const { textStyles, colors } = setting || {};
  const sectionTitle = textStyles?.sectionTitle;
  const resumeBorder = colors?.border || "#1a202c";
  const gapValue = px(setting?.gap);
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

  const isActiveStyle = (styleName: string) => {
    if (!data.tagStyle) {
      return styleName === "full-border-style";
    }
    return data.tagStyle === styleName;
  };
  const makeStyleAction = (obj: any) => {
    updateResume({
      propertyPath: `${name}.tagStyle`,
      value: obj.value,
    });
  };

  return (
    <>
      <style>{`
        .skills-container {
          .section-header-wrapper {
            padding-bottom: 3px;
            margin-bottom: 5px;
            border-bottom: 2px solid ${resumeBorder};
          }
          .section-header-wrapper h2 {
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
          .skill-group-card {
            position: relative; 
            width: 100%;
            box-sizing: border-box;
            margin-bottom: ${gapValue};
          }
          .skill-title-wrapper {
            margin-bottom: 6px;
          }
          
          /* Flat, valid CSS classes (no nesting) */
          .list-input-container {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
          }
          .list-input-container .item {
            position: relative;
            font-weight: 700;
            display: inline-block;
          }
          
          /* List style comma separator */
          .list-input-container.list-style .item:not(:last-child):after {
            position: absolute;
            content: ",";
            right: -6px;
            top: 50%;
            transform: translateY(-50%); 
          }
          
          /* Bullet style */
          .list-input-container.bullet-style {
            flex-direction: column;
            align-items: start; 
          }
          .list-input-container.bullet-style .item {
            padding-left: 20px;
          }
          .list-input-container.bullet-style .item:before {
            position: absolute;
            content: "";
            left: 5px;
            top: 50%;
            transform: translateY(-50%); 
            height: 5px;
            width: 5px;
            border-radius: 50%;
            background: #4c4444;
          }
          
          /* Bottom border style */
          .list-input-container.bottom-border-style .item {
            border-bottom: 1.5px solid #8e8080 !important;
            padding: 4px 7px;
            border-radius: 0px
          }
          /* Full border style */
          .list-input-container.full-border-style .item {
            border: 1.5px solid #8e8080 !important;
            padding: 4px 7px;
            border-radius: 0px
          }
        }
      `}</style>

      <div className="skills-container">
        {(data?.items || []).map((item: any, itemIndex: number) => {
          if (!item.isVisible) return null;
          const rootPathName = `${name}.items.${item.positionIndex}`;
          const rootPlaceholderPathName = `${data.format}.items.0`;
          const isTitleVisible = getValue(`${rootPathName}.title.isVisible`);
          const isListVisible = getValue(`${rootPathName}.lists.isVisible`);
          const listContent =
            getResumeValue(`${rootPathName}.lists.content`) || [];
          const toolsConfig = {
            entry: {},
            duration: {},
            delete: {},
            move: {
              maxIndex: data?.items?.length ? data?.items?.length - 1 : 0,
            },
            display: {
              dropdownList: [
                createDisplayItem(rootPathName, "Title", "title"),
                createDisplayItem(rootPathName, "Lists", "lists"),
              ],
            },
            setting: {
              dropdownList: [
                {
                  header: "Tags Style",
                },
                {
                  label: "Full Border",
                  value: "full-border-style",
                  active: isActiveStyle("full-border-style"),
                  action: makeStyleAction,
                },
                {
                  label: "Bottom Border Style",
                  value: "bottom-border-style",
                  active: isActiveStyle("bottom-border-style"),
                  action: makeStyleAction,
                },
                {
                  label: "List Style",
                  value: "list-style",
                  active: isActiveStyle("list-style"),
                  action: makeStyleAction,
                },
                {
                  label: "Bullet Style",
                  value: "bullet-style",
                  active: isActiveStyle("bullet-style"),
                  action: makeStyleAction,
                },
              ],
            },
          };

          return (
            <div
              key={itemIndex}
              tabIndex={item.positionIndex ?? itemIndex}
              className="skill-group-card sub-section-padding sub-section-divider active-focus"
            >
              <SubSectionToolBar
                variant="subsection"
                propertyPath={rootPathName}
                tools={toolsConfig}
                format={data.format}
              />
              {isTitleVisible && (
                <div className="skill-title-wrapper">
                  <SubSectionTitle 
                  name={`${rootPathName}.title.content`} 
                   placeholderPath={`${rootPlaceholderPathName}.title.placeholder`}
                  />
                </div>
              )}

              {isListVisible && (
                <div
                  className={`list-input-container ${data.tagStyle || "full-border-style"}`}
                >
                  {" "}
                  {/* full-border-style, bottom-border-style, list-style, bullet-style */}
                  {listContent.map((_, skillIdx: number) => {
                    return (
                      <TagInputField
                        tag="p"
                        name={`${rootPathName}.lists.content.${skillIdx}`}
                        placeholderPath={`${rootPlaceholderPathName}.lists.placeholder.${skillIdx}`}
                        className="item"
                      />
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SkillsCard;
