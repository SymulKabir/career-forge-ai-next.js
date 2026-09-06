import React, { useLayoutEffect, useState, useRef } from "react";
import "./style.scss";
import { RESUME_CONSTANTS } from "../../constants/resume-utils";
import { RESUME_SETTING } from "./constants/resumeSetting";
import BulletsCard from "./components/BulletsCard";
import DescriptionCard from "./components/DescriptionCard";
import { useResumeContext } from "../../context/resume-editor-context";
import SubSectionToolBar from "./components/SubSectionToolBar";
import SectionTitle from "./components/SectionTitle";


const paginateResumeSections = ({
  pageHight,
  section,
  originalIndex,
  pages,
  currentPageIndex,
  currentHeight,
  sectionRefs,
}: {
  pageHight: number;
  section: any;
  originalIndex: number;
  pages: any[][];
  currentPageIndex: number;
  currentHeight: number;
  sectionRefs: React.MutableRefObject<{
    [key: number]: HTMLDivElement | null;
  }>;
}) => {

  const el = sectionRefs.current[originalIndex];

  const sectionHeight = el
    ? el.getBoundingClientRect().height
    : 150;

  let currentSection = { ...section };
  console.log("=====start ======")
  console.log("currentPageIndex->", currentPageIndex)
  console.log("cunt 1->", {
    currentHeight,
    sectionHeight,
    total: currentHeight + sectionHeight,
    pageHight,
  })
  if (currentHeight + sectionHeight > pageHight) {
    let totalSubSectionHeight = 0;
    let validItemIndex = -1;

    const subSections = el?.querySelectorAll(".subsection-card");
    // const sectionHeader = el?.querySelectorAll(".section-header-card");

    subSections?.forEach((element, index) => {
      const currentSubsectionHeight =
        element.getBoundingClientRect().height || 0;
      console.log("cunt 1->", {
        currentHeight,
        totalSubSectionHeight,
        currentSubsectionHeight,
        total: currentHeight + totalSubSectionHeight + currentSubsectionHeight,
        pageHight
      })
      if (
        Number(
          currentHeight +
          totalSubSectionHeight +
          currentSubsectionHeight,
        ) < pageHight
      ) {
        totalSubSectionHeight =
          totalSubSectionHeight + currentSubsectionHeight;

        validItemIndex += 1;

        return;
      }
    });

    const subsections = section.items;

    const validSubsections = subsections.slice(
      0,
      validItemIndex,
    );

    const nextPageSubsections = subsections.slice(
      validItemIndex,
    );

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
        ...currentSection
      });

    }
    if (pages[currentPageIndex].length > 0) {
      pages.push([]);
      currentPageIndex++;
    }

    //  pages.push([]);
    // currentPageIndex++;
    currentHeight = 0;
    if (nextPageSubsections.length) {

      const selfResult = paginateResumeSections(
        {
          pageHight,
          section: currentSection,
          originalIndex,
          pages,
          currentPageIndex,
          currentHeight,
          sectionRefs
        })
      return selfResult
    }

  }

  pages[currentPageIndex].push({
    ...currentSection
  });
  currentHeight += sectionHeight;

  return {
    currentPageIndex,
    currentHeight,
  };
};
const Index = () => {
  const { resumeData } = useResumeContext();

  const [resumeSetting] = useState({
    ...RESUME_SETTING,
  });

  const sectionRefs = useRef<{
    [key: number]: HTMLDivElement | null;
  }>({});

  const [paginatedPages, setPaginatedPages] = useState<any[][]>([
    [],
  ]);

  useLayoutEffect(() => {
    if (!resumeData?.sections) return;

    const pages: any[][] = [[]];

    let currentPageIndex = 0;
    let currentHeight = 0;
    console.log("start loop")
    resumeData.sections.forEach(
      (section: any, originalIndex: number) => {
        const result = paginateResumeSections(
          {
            pageHight: resumeSetting.resumePageHeight - (resumeSetting.margin.y * 2),
            section,
            originalIndex,
            pages,
            currentPageIndex,
            currentHeight,
            sectionRefs,
          }
        );

        currentPageIndex = result.currentPageIndex;
        currentHeight = result.currentHeight;
      },
    );

    setPaginatedPages([...pages]);

    console.log("pages --->>>", pages);
  }, [resumeData, resumeSetting]);
  return (
    <section
      className="resume-editor"
      style={
        {
          "--container-height": `calc(100vh - ${RESUME_CONSTANTS.headerHeight}px - ${RESUME_CONSTANTS.toolBarHeight}px)`,
          "--section-gap": `${resumeSetting.sectionGap}px`,
          "--page-height": `${resumeSetting.resumePageHeight}px`,
        } as React.CSSProperties
      }
    > 
      <div className="resume-main-editor-container not-visible debugging">
        {[[...resumeData.sections]].map((pageSections, pageIndex) => {
          return <PageMaker key={pageIndex} pageSections={pageSections} pageIndex={pageIndex} sectionRefs={sectionRefs} className="not-visible" />
        })}
      </div> 

     <div className="resume-main-editor-container">
        {paginatedPages.map((pageSections, pageIndex) => {
          return <PageMaker key={pageIndex} pageSections={pageSections} pageIndex={pageIndex} />
        })}
      </div>
    </section>
  );
};


const PageMaker = ({ pageSections, pageIndex, sectionRefs, className }: any) => {
  const [resumeSetting] = useState({
    ...RESUME_SETTING,
  });
  return <div
    key={pageIndex}
    className={`page ${className}`}
    style={{
      paddingLeft: `${resumeSetting.margin.x}px`,
      paddingRight: `${resumeSetting.margin.x}px`,
      paddingTop: `${resumeSetting.margin.y}px`,
      paddingBottom: `${resumeSetting.margin.y}px`,
      background: "#FFFFFF",
      marginBottom: "40px",

      "--page-number": `"Page ${pageIndex + 1}"`,
    } as React.CSSProperties}
  >
    <div className="page-inner-container">
      {pageIndex === 0 && (
        <header className="resume-header active-focus" />
      )}

      <div className="resume-body">
        {pageSections.map(
          (section: any, index: number) => {
            // return <></>
            const name = `sections.${section.positionIndex}`;
            return (
              <div
                key={pageIndex + index}
                ref={
                  sectionRefs
                    ? (el) => {
                      sectionRefs.current[section.positionIndex] = el;
                    }
                    : undefined
                }
                className="section-container section-styles active-focus"
              >
                <SubSectionToolBar variant="section" />

                <SectionTitle
                  name={`${name}.sectionTitle.content`}
                />

                {section.sectionLayout ===
                  "BulletsCard" && (
                    <BulletsCard
                      data={section}
                      name={name}
                    />
                  )}

                {section.sectionLayout ===
                  "DescriptionCard" && (
                    <DescriptionCard
                      data={section}
                      name={name}
                    />
                  )}
              </div>
            );
          },
        )}
      </div>
    </div>
  </div>
}


export default Index;