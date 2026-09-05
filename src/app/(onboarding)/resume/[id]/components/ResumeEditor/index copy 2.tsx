import React, { useLayoutEffect, useState, useRef } from "react";
import "./style.scss";
import { RESUME_CONSTANTS } from "../../constants/resume-utils";
import { RESUME_SETTING } from "./constants/resumeSetting";
import BulletsCard from "./components/BulletsCard";
import DescriptionCard from "./components/DescriptionCard";
import { useResumeContext } from "../../context/resume-editor-context";

const Index = () => {
  const { resumeData } = useResumeContext();
  const [resumeSetting] = useState({ ...RESUME_SETTING });
  const [currentConfig] = useState<any>({});
  const containerHeight = RESUME_CONSTANTS.editorShell.resumeEditorHeight;

  // Reference to hold measured section elements
  const sectionRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const [paginatedPages, setPaginatedPages] = useState<any[][]>([[]]);

  // Max pixel height allowed per page (matches your SCSS page height minus padding)
  const MAX_PAGE_HEIGHT = 500;

  useLayoutEffect(() => {
    if (!resumeData?.sections) return;

    const pages: any[][] = [[]];
    let currentPageIndex = 0;
    let currentHeight = 0;

    resumeData.sections.forEach((section: any, originalIndex: number) => {
      const el = sectionRefs.current[originalIndex];
      // Fallback to 150px if element isn't rendered yet
      const sectionHeight = el ? el.getBoundingClientRect().height : 150;

      if (
        currentHeight + sectionHeight > MAX_PAGE_HEIGHT &&
        pages[currentPageIndex].length > 0
      ) {
        pages.push([]);
        currentPageIndex++;
        currentHeight = 0;
      }
      console.log("pages[currentPageIndex] ->", pages[currentPageIndex]);
      pages[currentPageIndex].push({ section, originalIndex });
      currentHeight += sectionHeight;
    });

    setPaginatedPages(pages);
    console.log("pages --->>>", pages);
  }, [resumeData, resumeSetting]);

  return (
    <section
      className="resume-editor"
      style={
        {
          "--container-height": `${containerHeight}`,
          "--section-gap": `${resumeSetting.sectionGap}px`,
        } as React.CSSProperties
      }
    >
      {/* Hidden measurement container to get true DOM heights before splitting */}
      <div
        style={{
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none",
          width: "940px",
        }}
      >
        {resumeData?.sections?.map((section: any, originalIndex: number) => (
          <div
            key={originalIndex}
            ref={(el) => (sectionRefs.current[originalIndex] = el)}
            className="section-container section-styles"
          >
            {section.sectionLayout === "BulletsCard" && (
              <BulletsCard data={section} name={`sections.${originalIndex}`} />
            )}
            {section.sectionLayout === "DescriptionCard" && (
              <DescriptionCard
                data={section}
                name={`sections.${originalIndex}`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="resume-main-editor-container">
        {paginatedPages.map((pageSections, pageIndex) => (
          <div
            key={pageIndex}
            className="page"
            style={{
              paddingLeft: `${resumeSetting.margin.x}px`,
              paddingRight: `${resumeSetting.margin.x}px`,
              paddingTop: `${resumeSetting.margin.y}px`,
              paddingBottom: `${resumeSetting.margin.y}px`,
              background: currentConfig?.selectedSectionOrder
                ? "#e4e4e4"
                : "#FFFFFF",
              marginBottom: "40px",
            }}
          >
            <div className="page-inner-container">
              {pageIndex === 0 && (
                <header className="resume-header active-focus"></header>
              )}
              <div className="resume-body">
                {pageSections.map(({ section, originalIndex }) => (
                  <div
                    key={originalIndex}
                    className="section-container section-styles active-focus"
                  >
                    {section.sectionLayout === "BulletsCard" && (
                      <BulletsCard
                        data={section}
                        name={`sections.${originalIndex}`}
                      />
                    )}
                    {section.sectionLayout === "DescriptionCard" && (
                      <DescriptionCard
                        data={section}
                        name={`sections.${originalIndex}`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Index;
