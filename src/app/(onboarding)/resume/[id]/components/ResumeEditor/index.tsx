import React, { useLayoutEffect, useState, useRef } from "react";
import "./style.scss";
import { RESUME_CONSTANTS } from "../../constants/resume-utils";
import { RESUME_SETTING } from "./constants/resumeSetting";
import BulletsCard from "./components/BulletsCard";
import DescriptionCard from "./components/DescriptionCard";
import { useResumeContext } from "../../context/resume-editor-context";
import SubSectionToolBar from "./components/SubSectionToolBar";
import SectionTitle from "./components/SectionTitle";

const Index = () => {
  const { resumeData } = useResumeContext();
  const [resumeSetting] = useState({ ...RESUME_SETTING });
  const [currentConfig] = useState<any>({});
  const containerHeight = RESUME_CONSTANTS.editorShell.resumeEditorHeight;

  // Reference to hold measured section elements
  const sectionRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const [paginatedPages, setPaginatedPages] = useState<any[][]>([[]]);

  // Max pixel height allowed per page (matches your SCSS page height minus padding)
  const MAX_PAGE_HEIGHT = 700;

  useLayoutEffect(() => {
    if (!resumeData?.sections) return;

    const pages: any[][] = [[]];
    let currentPageIndex = 0;
    let currentHeight = 0;

    resumeData.sections.forEach((section: any, originalIndex: number) => {
      const el = sectionRefs.current[originalIndex];
      const sectionHeight = el ? el.getBoundingClientRect().height : 150;
      let currentSection = { ...section };
      let rootPropertyPath = "sections"



      if (currentHeight + sectionHeight > MAX_PAGE_HEIGHT) {
        let totalSubSectionHeight = 0;
        let validItemIndex = -1;
        const subSections = el?.querySelectorAll(".subsection-card");
        subSections?.forEach((element, index) => {
          const currentSubsectionHeight =
            element.getBoundingClientRect().height || 0;
         
          if (
            Number(
              currentHeight + totalSubSectionHeight + currentSubsectionHeight,
            ) < MAX_PAGE_HEIGHT
          ) {
            totalSubSectionHeight =
              totalSubSectionHeight + currentSubsectionHeight;
            validItemIndex = index;

            return;
          }
        });
        const subsections = section.items;
        const validSubsections = subsections.slice(0, validItemIndex);
        const nextPageSubsections = subsections.slice(validItemIndex);

        if (nextPageSubsections.length) {
          currentSection = {
            ...section,
            items: [...nextPageSubsections],
          };
          const validSection = {
            ...section,
            items: [...validSubsections],
          };
          pages[currentPageIndex].push({
            section: validSection,
            originalIndex,
          });
        }
        pages.push([]);
        currentPageIndex++;
        currentHeight = 0;
      }
      pages[currentPageIndex].push({
        section: currentSection,
        originalIndex,
      });
      currentHeight += sectionHeight;
    });

    setPaginatedPages([...pages]);
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
        {resumeData?.sections?.map((section: any, originalIndex: number) => {
          const name = `sections.${originalIndex}`;
          return (
            <div
              key={originalIndex}
              ref={(el) => (sectionRefs.current[originalIndex] = el)}
              className="section-container section-styles"
            >
              <SubSectionToolBar variant="section" />
              <SectionTitle name={`${name}.sectionTitle.content`} />
              {section.sectionLayout === "BulletsCard" && (
                <BulletsCard
                  data={section}
                  name={`sections.${originalIndex}`}
                  sectionRefs={sectionRefs}
                  originalIndex={originalIndex}
                />
              )}
              {section.sectionLayout === "DescriptionCard" && (
                <DescriptionCard
                  data={section}
                  name={`sections.${originalIndex}`}
                  sectionRefs={sectionRefs}
                  originalIndex={originalIndex}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="resume-main-editor-container">
        {paginatedPages.map((pageSections, pageIndex) => {
         
        
        console.log("pageSections[0] --->>>", pageSections[0])
          return (
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
                  {pageSections.map(({ section, originalIndex }, index) => {
                    const name = `sections.${originalIndex}`; 
                    console.log("section:-> ", section);
                    return (
                      <div
                        key={pageIndex + index}
                        //   ref={(el) => (sectionRefs.current[originalIndex] = el)}
                        className="section-container section-styles active-focus"
                      >
                        <SubSectionToolBar variant="section" />
                        <SectionTitle name={`${name}.sectionTitle.content`} />
                        {section.sectionLayout === "BulletsCard" && (
                          <BulletsCard
                            data={section}
                            name={name}
                            sectionRefs={sectionRefs}
                            originalIndex={originalIndex}
                          />
                        )}
                        {section.sectionLayout === "DescriptionCard" && (
                          <DescriptionCard
                            data={section}
                            name={name}
                            sectionRefs={sectionRefs}
                            originalIndex={originalIndex}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Index;
