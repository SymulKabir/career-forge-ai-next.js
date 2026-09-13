"use client";

import React from "react";
import InputField from "../InputField";
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
  const { getResumeValue } = useResume();
  const { textStyles, colors } = setting || {};
  const sectionTitle = textStyles?.sectionTitle;
  const body = textStyles?.body;
  const resumeBorder = colors?.border || "#1a202c";
  const chipBackground = colors?.companyLogoBackground || "#edf2f7";
  const gapValue = px(setting?.gap);

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
          const itemPath = `${name}.items.${item.positionIndex ?? itemIndex}`;
          const isTitleVisible = getValue(`${itemPath}.title.isVisible`);
          const listContent = getResumeValue(`${itemPath}.lists.content`) || [];
          return (
            <div
              key={itemIndex}
              tabIndex={item.positionIndex ?? itemIndex}
              className="skill-group-card sub-section-padding sub-section-divider active-focus"
            >
              <SubSectionToolBar variant="subsection" propertyPath={itemPath} />

              {isTitleVisible && (
                <div className="skill-title-wrapper">
                  <SubSectionTitle name={`${itemPath}.title.content`} />
                </div>
              )}

              <div className="list-input-container full-border-style">
                {listContent.map((_, skillIdx: number) => {
                  return (
                    <InputField
                      tag="p"
                      name={`${itemPath}.lists.content.${skillIdx}`}
                      className="item"
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SkillsCard;
