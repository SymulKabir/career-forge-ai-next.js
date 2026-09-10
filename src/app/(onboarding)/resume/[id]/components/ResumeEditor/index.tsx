import React, { useLayoutEffect, useState, useRef } from "react";
import "./style.scss";
import { RESUME_CONSTANTS } from "../../constants/resume-utils";
import BulletsCard from "./components/BulletsCard";
import DescriptionCard from "./components/DescriptionCard";
import { useResumeContext } from "../../context/resume-editor-context";
import SubSectionToolBar from "./components/SubSectionToolBar";
import SectionTitle from "./components/SectionTitle";
import { px } from "./utils/resumeEditor";
import ResumeHeader from "./components/ResumeHeader";
import { useInitResume } from "../../hooks";
import { paginateResumeSections } from "./utils";



const Index = () => {
  const { resumeData, setting, structuredResumeData } = useResumeContext();
  useInitResume()
  const sectionRefs = useRef<{
    [key: number]: HTMLDivElement | null;
  }>({});
  const headerRef = useRef(null);
  console.log("structuredResumeData -->>", structuredResumeData)
  const [paginatedPages, setPaginatedPages] = useState<any[][]>([[]]);

  useLayoutEffect(() => {
    if (!structuredResumeData?.sections?.length) return;

    const pages: any[][] = [[]];

    let currentPageIndex = 0;
    let currentHeight = 0;
    const state = {}

    const pageHight = setting.resumePageHeight - setting.margin.y * 2;

    const paginate = () => {
      console.log("Rerender the editor");

      for (const [originalIndex, row] of structuredResumeData.sections.entries()) {
        console.log("originalIndex --->>", originalIndex)
        console.log("row --->>", row)
        console.log("row.columns.entries() --->>", Object.entries(row.columns))
        if (!Object.entries(row.columns).length) return
        for (const [rowIndex, section] of Object.entries(row.columns)) {
          console.log("rowIndex -->>", rowIndex)
          if (!state[rowIndex]) {
            state[rowIndex] = {
              currentPageIndex: 0,
              currentHeight: 0
            }
          }
          console.log("state -->>", state)

          const result = paginateResumeSections({
            pageHight,
            section,
            originalIndex,
            pages,
            currentPageIndex: state[rowIndex].currentPageIndex,
            currentHeight: state[rowIndex].currentHeight,
            sectionRefs,
            headerRef,
          });
          console.log("result --->>>>>", result)
          state[rowIndex].currentPageIndex = result.currentPageIndex;
          state[rowIndex].currentHeight = result.currentHeight;
        }

        // return
        // const result = paginateResumeSections({
        //   pageHight,
        //   section,
        //   originalIndex,
        //   pages,
        //   currentPageIndex,
        //   currentHeight,
        //   sectionRefs,
        //   headerRef,
        // });

        // currentPageIndex = result.currentPageIndex;
        // currentHeight = result.currentHeight;
      }
      console.log("pages =====>>>>", pages)
      setPaginatedPages([...pages]);
    };

    requestAnimationFrame(paginate);
  }, [structuredResumeData, setting]);
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
        {" "}
        // use 'debugging' class to show the page
        {[[...resumeData.sections]].map((pageSections, pageIndex) => {
          return (
            <PageMaker
              key={pageIndex}
              pageSections={pageSections}
              pageIndex={pageIndex}
              sectionRefs={sectionRefs}
              headerRef={headerRef}
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
              syncWithProp={true}
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
  headerRef,
  syncWithProp,
}: any) => {
  const { setting } = useResumeContext();
  const metadata = setting?.sections?.metadata;
  return null
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
            &.grid-2 {
              display: grid;
              /* Defines the 70% (7fr) and 30% (3fr) proportions on the container tracks, with a 20px gap */
              grid-template-columns: 7fr 3fr;
              column-gap: 20px;
              
              /* Ensures items align to the top of their track without stretching */
              align-items: start;

              /* Child items take natural/max content height without fixed widths */
              & > * {
                width: 100%;
                height: max-content;
              }
            }
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
      `}
      </style>
      <div
        key={pageIndex}
        className={`page  `}
        style={
          {
            paddingLeft: `${setting.margin.x}px`,
            paddingRight: `${setting.margin.x}px`,
            paddingTop: `${setting.margin.y}px`,
            paddingBottom: `${setting.margin.y}px`,
            background: "#FFFFFF",
            marginBottom: "40px",
            "--page-number": `"----- Page ${pageIndex + 1} -----"`,
          } as React.CSSProperties
        }
      >
        <div className="page-inner-container">
          {pageIndex === 0 && (
            <div ref={headerRef}>
              <ResumeHeader />
            </div>
          )}
          <div className="resume-body grid-21">
            {pageSections.map((section: any, index: number) => {
              console.log("section --------->>>>>", section)
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
