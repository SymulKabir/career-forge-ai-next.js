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
  initSubSectionIndex = 0,
  sectionRefs,
}: {
  pageHight: number;
  section: any;
  originalIndex: number;
  pages: any[][];
  currentPageIndex: number;
  currentHeight: number;
  initSubSectionIndex?: number;
  sectionRefs: React.MutableRefObject<{
    [key: number]: HTMLDivElement | null;
  }>;
}) => {
  const el = sectionRefs.current[originalIndex];

  if (!el) {
    return {
      currentPageIndex,
      currentHeight,
    };
  }

  const sectionHeight = el.getBoundingClientRect().height || 150;

  console.log("===== START =====");
  console.log("pageHight ->", pageHight);
  console.log("currentPageIndex ->", currentPageIndex);
  console.log("currentHeight ->", currentHeight);
  console.log("sectionHeight ->", sectionHeight);

  // Make sure current page exists
  if (!pages[currentPageIndex]) {
    pages[currentPageIndex] = [];
  }

  /*
   * =====================================================
   * CASE 1:
   * Entire section fits on current page
   * =====================================================
   */
  if (currentHeight + sectionHeight <= pageHight) {
    console.log("new section in same page --->>>")
    pages[currentPageIndex].push({
      ...section,
    });

    return {
      currentPageIndex,
      currentHeight: currentHeight + sectionHeight,
    };
  }

  /*
   * =====================================================
   * CASE 2:
   * Section doesn't fit.
   * Try to split using subsections.
   * =====================================================
   */

  const subSections = el.querySelectorAll(".subsection-card");

  let totalSubSectionHeight = 0;
  let validItemIndex = 0;

  console.log("Data before loop ===>>>", {
    initSubSectionIndex,
    subSectionCount: subSections.length,
  });
  for (let index = initSubSectionIndex; index < subSections.length; index++) {
    const element = subSections[index];

    const currentSubsectionHeight = element.getBoundingClientRect().height || 0;

    const nextHeight =
      currentHeight + totalSubSectionHeight + currentSubsectionHeight;
    console.log("subsection", {
      index,
      currentHeight,
      totalSubSectionHeight,
      currentSubsectionHeight,
      nextHeight,
      pageHight,
    });

    if (nextHeight <= pageHight) {
      console.log("hello 1")
      totalSubSectionHeight += currentSubsectionHeight;
      validItemIndex++;
    } else {
      console.log("hello 2")

      break;
    }
  }
      console.log("hello 3")

  const subsections = section.items || [];

  const validSubsections = subsections.slice(0, validItemIndex);

  const nextPageSubsections = subsections.slice(validItemIndex);

  /*
   * =====================================================
   * CASE 2A:
   * Some subsections fit on current page
   * =====================================================
   */
  if (validSubsections.length > 0) {
      console.log("hello 4")

    pages[currentPageIndex].push({
      ...section,
      items: validSubsections,
    });

    /*
     * Start new page
     */
    currentPageIndex++;
    pages[currentPageIndex] = [];

    currentHeight = 0;
  }

  /*
   * =====================================================
   * CASE 2B:
   * Nothing fits on current page
   *
   * Move the whole section to a new page.
   * =====================================================
   */
  if (
    validSubsections.length === 0 &&
    nextPageSubsections.length === subsections.length
  ) {
    console.log("update page number --->>>")
    currentPageIndex++;

    pages[currentPageIndex] = [];

    currentHeight = 0;

    pages[currentPageIndex].push({
      ...section,
    });

    return {
      currentPageIndex,
      currentHeight: sectionHeight,
    };
  }

  /*
   * =====================================================
   * CASE 2C:
   * Remaining subsections need another page
   * =====================================================
   */
  if (nextPageSubsections.length > 0) {
    const nextSection = {
      ...section,
      items: nextPageSubsections,
    };
    console.log("Recursive call happend");
    return paginateResumeSections({
      pageHight,
      section: nextSection,
      originalIndex,
      pages,
      currentPageIndex,
      currentHeight,
      initSubSectionIndex: validItemIndex,
      sectionRefs,
    });
  }

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

  const [paginatedPages, setPaginatedPages] = useState<any[][]>([[]]);

  useLayoutEffect(() => {
    if (!resumeData?.sections?.length) return;

    const pages: any[][] = [[]];

    let currentPageIndex = 0;
    let currentHeight = 0;

    const pageHight =
      resumeSetting.resumePageHeight - resumeSetting.margin.y * 2;

    const paginate = () => {
      console.log("========== PAGINATION START ==========");

      for (const [originalIndex, section] of resumeData.sections.entries()) {
        console.log(`START SECTION ${originalIndex}`);

        const result = paginateResumeSections({
          pageHight,
          section,
          originalIndex,
          pages,
          currentPageIndex,
          currentHeight,
          sectionRefs,
        });

        currentPageIndex = result.currentPageIndex;
        currentHeight = result.currentHeight;

        console.log(`END SECTION ${originalIndex}`, result);
      }

      console.log("========== PAGINATION END ==========");

      console.log("pages --->>>", pages);

      setPaginatedPages([...pages]);
    };

    requestAnimationFrame(paginate);
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
          return (
            <PageMaker
              key={pageIndex}
              pageSections={pageSections}
              pageIndex={pageIndex}
              sectionRefs={sectionRefs}
              className="not-visible"
            />
          );
        })}
      </div>

      <div className="resume-main-editor-container">
        {paginatedPages.map((pageSections, pageIndex) => {
          return (
            <PageMaker
              key={pageIndex}
              pageSections={pageSections}
              pageIndex={pageIndex}
            />
          );
        })}
      </div>
    </section>
  );
};

const PageMaker = ({
  pageSections,
  pageIndex,
  sectionRefs,
  className,
}: any) => {
  const [resumeSetting] = useState({
    ...RESUME_SETTING,
  });
  return (
    <div
      key={pageIndex}
      className={`page ${className}`}
      style={
        {
          paddingLeft: `${resumeSetting.margin.x}px`,
          paddingRight: `${resumeSetting.margin.x}px`,
          paddingTop: `${resumeSetting.margin.y}px`,
          paddingBottom: `${resumeSetting.margin.y}px`,
          background: "#FFFFFF",
          marginBottom: "40px",

          "--page-number": `"Page ${pageIndex + 1}"`,
        } as React.CSSProperties
      }
    >
      <div className="page-inner-container">
        {pageIndex === 0 && <header className="resume-header active-focus" />}

        <div className="resume-body">
          {pageSections.map((section: any, index: number) => {
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

                <SectionTitle name={`${name}.sectionTitle.content`} />

                {section.sectionLayout === "BulletsCard" && (
                  <BulletsCard data={section} name={name} />
                )}

                {section.sectionLayout === "DescriptionCard" && (
                  <DescriptionCard data={section} name={name} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
