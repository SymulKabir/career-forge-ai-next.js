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
  useInitResume();

  const sectionRefs = useRef({});
  const headerRef = useRef(null);
  const [paginatedPages, setPaginatedPages] = useState<any[][]>([[]]);

  console.log("sectionRefs --->>>", sectionRefs.current);
  useLayoutEffect(() => {
    if (!structuredResumeData?.columns?.length) return;

    const pages: any[][] = [[]];

    let currentPageIndex = 0;
    let currentHeight = 0;
    const state: any = {};
    console.log("hello 1");
    const pageHight = setting.resumePageHeight - setting.margin.y * 2;
    console.log("hello 2");

    const paginate = () => {
      for (const [rowIndex, row] of structuredResumeData?.columns.entries()) {
        console.log("rowIndex--->>>", rowIndex);
        console.log("row--->>>", row);
        if (!state[rowIndex]) {
          state[rowIndex] = { currentPageIndex: 0, currentHeight: 0 };
        }
        for (const [sectionIndex, section] of row.entries()) {
          console.log("sectionIndex ---->>>", sectionIndex);
          console.log("section1 ---->>>", section);
          const result = paginateResumeSections({
            pageHight,
            section,
            rowIndex,
            sectionIndex,
            pages,
            currentPageIndex: state[rowIndex].currentPageIndex,
            currentHeight: state[rowIndex].currentHeight,
            sectionRefs,
            headerRef,
          });

          // state[rowIndex].currentPageIndex = result.currentPageIndex;
          // state[rowIndex].currentHeight = result.currentHeight;
        }
      }
      console.log("pages =====>>>>", pages);
      // setPaginatedPages([...pages]);
    };
    paginate();
    // requestAnimationFrame(paginate);
  }, [structuredResumeData, setting]);

  console.log("structuredResumeData --->>>>", structuredResumeData);
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
      <div className="resume-main-editor-container not-visible debugging">
        {" "}
        // use 'debugging' class to show the page
        {structuredResumeData?.columns?.length &&
          [[...structuredResumeData.columns]].map((columns, pageIndex) => {
            return (
              <PageMaker
                key={pageIndex}
                columns={columns}
                pageIndex={pageIndex}
                sectionRefs={sectionRefs}
                headerRef={headerRef}
                syncWithProp={true}
              />
            );
          })}
      </div>

      <div className="resume-main-editor-container">
        {false &&
          paginatedPages.map((pageSections, pageIndex) => {
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
  columns,
  pageIndex,
  sectionRefs,
  headerRef,
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
            &.gird-2{
              display: grid;
              grid-template-columns: 1fr 40%;
              gap: 20px;

            }
            .body-item{
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
          <div className="resume-body gird-2">
            {columns.map((column: any, columnIndex: number) => {
              console.log("columnIndex->>", columnIndex);
              return (
                <div className="body-item">
                  {column.map((section: any, index: number) => {
                    const name = `sections.${section.positionIndex}`;

                    return (
                      <div
                        key={pageIndex + columnIndex + index}
                        ref={(el) => {
                          sectionRefs.current[columnIndex] ??= {};
                          console.log("el333---->>>>", el);
                          if (el) {
                            sectionRefs.current[columnIndex][index] = el;
                          }  
                          console.log("sectionRefs.current --->>>", sectionRefs.current)
                        }}
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
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
