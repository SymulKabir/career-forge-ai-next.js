"use client";

import React, { useState } from "react";
import EditableText from "../EditableText";
import { useResumeEditor } from "../../../../context/resume-editor-context";
import SectionTitle from "../SectionTitle";
import PrimaryTitle from "../PrimaryTitle";
import SecondaryTitle from "../SecondaryTitle";

interface ExperienceProps {
  data?: any;
}

const px = (value?: number | string) => {
  if (value === undefined || value === null) return "0px";
  if (typeof value === "string")
    return value.includes("px") ? value : `${value}px`;
  return `${value}px`;
};

const Index: React.FC<ExperienceProps> = ({ data: initialData }) => {
  const [sectionData, setSectionData] = useState(initialData);
  const { setting } = useResumeEditor();

  const { font, textStyles, colors } = setting || {};

  const sectionTitle = textStyles?.sectionTitle;
  const primary = textStyles?.primary;
  const secondary = textStyles?.secondary;
  const body = textStyles?.body;
  const metadata = textStyles?.metadata;
  const highlight = textStyles?.highlight;
  const link = textStyles?.link;

  const fontFamily = font?.family || "Inter, sans-serif";
  const resumeBorder = colors?.border || "#1a202c";
  const resumeDivider = colors?.divider || "#cbd5e1";
  const resumeBackground = colors?.background || "#ffffff";
  const logoBackground = colors?.companyLogoBackground || "#edf2f7";
  const gapValue = px(setting?.gap);

  const handleSectionTitleChange = (value: string) => {
    setSectionData((prev: any) => ({ ...prev, sectionTitle: value }));
  };

  const handleRoleFieldChange = (
    index: number,
    field: string,
    value: string,
  ) => {
    setSectionData((prev: any) => {
      const updatedItems = [...(prev?.items || [])];
      updatedItems[index] = { ...updatedItems[index], [field]: value };
      return { ...prev, items: updatedItems };
    });
  };

  const handleHighlightChange = (
    itemIndex: number,
    highlightIndex: number,
    value: string,
  ) => {
    setSectionData((prev: any) => {
      const updatedItems = [...(prev?.items || [])];
      const updatedHighlights = [
        ...(updatedItems[itemIndex]?.highlights || []),
      ];
      updatedHighlights[highlightIndex] = value;
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        highlights: updatedHighlights,
      };
      return { ...prev, items: updatedItems };
    });
  };

  return (
    <>
      <style>{`
        .milestone-container {
          box-sizing: border-box;
          width: 100%;
          margin: 0 auto;
          font-family: ${fontFamily};
          background: ${resumeBackground};
         
        }
        .section-header-wrapper {
          padding-bottom: 6px;
          margin-bottom: 20px;
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
        .experience-card {
          display: flex;
          position: relative;
          margin-bottom: 24px;
          width: 100%;
          box-sizing: border-box;
          gap: ${gapValue};
        }
        .company-logo-box {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${logoBackground};
          color: ${metadata?.color || "#6b7280"};
        }
        .experience-content {
          flex-grow: 1;
          min-width: 0;
        }
        .metadata-row {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 8px;
          gap: ${gapValue};
        } 
 

        .resume-metadata-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: ${px(metadata?.fontSize)};
          font-weight: ${metadata?.fontWeight ?? 400};
          color: ${metadata?.color || "#6b7280"};
          line-height: ${metadata?.lineHeight ?? 1.4};
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

        .section-divider {
          border: none;
          margin-top: 16px;
          margin-bottom: 24px;
          border-bottom: 1px dashed ${resumeDivider};
        }
      `}</style>

      <div className="milestone-container">
        {/* Section Title */}
        <SectionTitle value={sectionData?.sectionTitle} />

        {(sectionData?.items || []).map((item: any, itemIndex: number) => (
          <div key={itemIndex}>
            <div className="experience-card">
              <div className="company-logo-box">
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
              </div>

              <div className="experience-content">
                {/* Role Title (Primary Style applied via .experience-content h3 selector) */}
                <PrimaryTitle value={item?.role || ""} />

                {/* Company Name (Secondary Style) */}
                <SecondaryTitle value={item?.company || ""} />
 

                {/* Metadata */}
                <div className="metadata-row">
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
                    <EditableText
                      tag="span"
                      value={item?.duration || ""}
                      onChange={(val) =>
                        handleRoleFieldChange(itemIndex, "duration", val)
                      }
                    />
                  </div>

                  <div className="resume-metadata-item">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <EditableText
                      tag="span"
                      value={item?.location || ""}
                      onChange={(val) =>
                        handleRoleFieldChange(itemIndex, "location", val)
                      }
                    />
                  </div>
                </div>

                {/* Website Link */}
                {item?.companyUrl && (
                  <div style={{ marginBottom: "10px" }}>
                    <span className="resume-link-text">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                      <EditableText
                        tag="span"
                        value={item.companyUrl}
                        onChange={(val) =>
                          handleRoleFieldChange(itemIndex, "companyUrl", val)
                        }
                      />
                    </span>
                  </div>
                )}

                {/* Description (Body) */}
                <EditableText
                  tag="p"
                  className="resume-body-text"
                  value={item?.description || ""}
                  onChange={(value) =>
                    handleRoleFieldChange(itemIndex, "description", value)
                  }
                />

                {/* Highlights */}
                <ul className="highlights-list">
                  {(item?.highlights || []).map(
                    (highlightText: string, highlightIndex: number) => (
                      <li
                        key={highlightIndex}
                        className="resume-highlight-item"
                      >
                        <EditableText
                          tag="span"
                          value={highlightText}
                          onChange={(value) =>
                            handleHighlightChange(
                              itemIndex,
                              highlightIndex,
                              value,
                            )
                          }
                        />
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>

            {itemIndex < (sectionData?.items?.length || 0) - 1 && (
              <hr className="section-divider" />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Index;
