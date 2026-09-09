import React, { useLayoutEffect, useState, useRef } from "react";
import "./style.scss";
import { RESUME_CONSTANTS } from "../../constants/resume-utils";
import BulletsCard from "./components/BulletsCard";
import DescriptionCard from "./components/DescriptionCard";
import { useResumeContext } from "../../context/resume-editor-context";
import SubSectionToolBar from "./components/SubSectionToolBar";
import SectionTitle from "./components/SectionTitle";
import { px } from "./utils/resumeEditor";

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
  const subSections = el.querySelectorAll(".subsection-card");

  const renderedSectionHight = Array.from(subSections ?? [])
    .slice(0, initSubSectionIndex)
    .reduce((total, subsection) => {
      return total + subsection.getBoundingClientRect().height;
    }, 0);
  const unrenderedSectionHight = sectionHeight - renderedSectionHight;

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
  if (currentHeight + unrenderedSectionHight <= pageHight) {
    pages[currentPageIndex].push({
      ...section,
    });

    return {
      currentPageIndex,
      currentHeight: currentHeight + unrenderedSectionHight,
    };
  }

  /*
   * =====================================================
   * CASE 2:
   * Section doesn't fit.
   * Try to split using subsections.
   * =====================================================
   */

  // const subSections = el.querySelectorAll(".subsection-card");

  let totalSubSectionHeight = 0;
  let validItemIndex = 0;

  for (let index = initSubSectionIndex; index < subSections.length; index++) {
    const element = subSections[index];

    const currentSubsectionHeight = element.getBoundingClientRect().height || 0;

    const nextHeight =
      currentHeight + totalSubSectionHeight + currentSubsectionHeight;

    if (nextHeight <= pageHight) {
      totalSubSectionHeight += currentSubsectionHeight;
      validItemIndex++;
    } else {
      break;
    }
  }

  const subsections = section.items || [];

  const validSubsections = subsections.slice(0, validItemIndex);

  const nextPageSubsections = subsections.slice(validItemIndex);

  if (validSubsections.length > 0) {
    pages[currentPageIndex].push({
      ...section,
      items: validSubsections,
    });
  }
  if (nextPageSubsections.length > 0) {
    currentPageIndex++;
    // pageHight = 0;
    pages[currentPageIndex] = [];

    currentHeight = 0;
    const nextSection = {
      ...section,
      items: nextPageSubsections,
    };
    // if (currentPageIndex < 5) {
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
    // }
  } else {
    currentHeight = totalSubSectionHeight;
  }

  return {
    currentPageIndex,
    currentHeight,
  };
};
const Index = () => {
  const { resumeData, setting } = useResumeContext();

  const sectionRefs = useRef<{
    [key: number]: HTMLDivElement | null;
  }>({});

  const [paginatedPages, setPaginatedPages] = useState<any[][]>([[]]);

  useLayoutEffect(() => {
    if (!resumeData?.sections?.length) return;

    const pages: any[][] = [[]];

    let currentPageIndex = 0;
    let currentHeight = 0;

    const pageHight = setting.resumePageHeight - setting.margin.y * 2;

    const paginate = () => {
      for (const [originalIndex, section] of resumeData.sections.entries()) {
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
      }

      setPaginatedPages([...pages]);
    };

    requestAnimationFrame(paginate);
  }, [resumeData, setting]);
  return (
    <section
      className="resume-editor"
      style={
        {
          "--container-height": `calc(100vh - ${RESUME_CONSTANTS.headerHeight}px - ${RESUME_CONSTANTS.toolBarHeight}px)`,
          "--section-gap": `${setting.sectionGap}px`,
          "--page-height": `${setting.resumePageHeight}px`,
          "--font-family": setting.font.family,
        } as React.CSSProperties
      }
    >
      <div className="resume-main-editor-container not-visible">
        {[[...resumeData.sections]].map((pageSections, pageIndex) => {
          return (
            <PageMaker
              key={pageIndex}
              pageSections={pageSections}
              pageIndex={pageIndex}
              sectionRefs={sectionRefs}
              className="not-visible"
              syncWithProp={true}
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
  syncWithProp,
}: any) => {
  const { setting } = useResumeContext();
  const metadata = setting?.sections?.metadata;

  return (
    <>
      <style>
        {`
          .resume-body {
            font-family: ${setting?.font?.family || "Inter, sans-serif"};
            font-size: ${px(metadata?.fontSize ?? 13)};
            font-weight: ${metadata?.fontWeight ?? 400};
            color: ${metadata?.fontColor ?? "#6b7280"};
            line-height: ${metadata?.lineHeight ?? 1.4};
            letter-spacing: ${px(metadata?.letterSpacing ?? 0)};
            text-transform: ${metadata?.textTransform ?? "none"};
          }

          .resume-body *:not(.avoid-default, .avoid-default *) {
            font-family: inherit;
            font-size: inherit;
            font-weight: inherit;
            color: inherit;
            line-height: inherit;
            letter-spacing: inherit;
            text-transform: inherit;
          }
          }
      `}
      </style>
      <div
        key={pageIndex}
        className={`page ${className}`}
        style={
          {
            paddingLeft: `${setting.margin.x}px`,
            paddingRight: `${setting.margin.x}px`,
            paddingTop: `${setting.margin.y}px`,
            paddingBottom: `${setting.margin.y}px`,
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
                    <BulletsCard
                      data={section}
                      name={name}
                      syncWithProp={syncWithProp}
                    />
                  )}

                  {section.sectionLayout === "DescriptionCard" && (
                    <DescriptionCard
                      data={section}
                      name={name}
                      syncWithProp={syncWithProp}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
