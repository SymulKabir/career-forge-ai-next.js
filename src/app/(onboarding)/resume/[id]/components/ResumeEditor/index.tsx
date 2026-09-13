import React, { useLayoutEffect, useState, useRef } from "react";
import "./style.scss";
import { RESUME_CONSTANTS } from "../../constants/resume-utils";
import BulletsCard from "./components/BulletsCard";
import DescriptionCard from "./components/DescriptionCard";
import BadgeTitleCard from "./components/BadgeTitleCard";
import LinkCard from "./components/LinkCard";
import TagCard from "./components/TagCard";
import { useResumeContext } from "../../context/resume-editor-context";
import SubSectionToolBar from "./components/SubSectionToolBar";
import SectionTitle from "./components/SectionTitle";
import { px } from "./utils/resumeEditor";
import ResumeHeader from "./components/ResumeHeader";
import { useInitResume, useResume } from "../../hooks";
import { paginateResumeSections } from "./utils";

const Index = () => {
  const {
    setting,
    structuredResumeData,
    layoutResumeData,
    setLayoutResumeData,
  } = useResumeContext();
  useInitResume();
  const sectionRefs = useRef({});
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    setLayoutResumeData((state: any) => {
      return { ...state, header: { ...structuredResumeData.personalInfo } };
    });
    if (!structuredResumeData?.columns?.length) return;
    const pages: any[][] = [[]];

    const state: any = {};
    const pageHight = setting.resumePageHeight - setting.margin.y * 2;

    const paginate = () => {
      for (const [rowIndex, row] of structuredResumeData?.columns.entries()) {
        if (!state[rowIndex]) {
          state[rowIndex] = { currentPageIndex: 0, currentHeight: 0 };
        }
        for (const [sectionIndex, section] of row.entries()) {
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
          state[rowIndex].currentPageIndex = result.currentPageIndex;
          state[rowIndex].currentHeight = result.currentHeight;
        }
      }

      console.log("pages--->>>>", pages);

      setLayoutResumeData((state: any) => {
        return { ...state, pages: pages };
      });
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
        {layoutResumeData?.pages?.map((columns, pageIndex) => {
          return (
            <PageMaker
              key={pageIndex}
              columns={columns}
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
  const { handleSettingChange, getSettingValue } = useResume()
  const metadata = setting?.sections?.metadata;
  const [toolsConfig, setToolsConfig] = useState({
    entry: {},
    delete: {},
    rearrange: {},
    setting: {
      dropdownList: [
        {
          label: "Uppercase",
          value: "uppercase",
          active: getSettingValue("sections.sectionTitle.textTransform") === "uppercase",
          action: (obj: any) => {
            handleSettingChange({
              propertyPath: "sections.sectionTitle.textTransform",
              value: obj.value
            })
            setToolsConfig((state) => {
              const setting = state.setting.map((item: any, index: number) => {
                if (index === obj.index) {
                  item["active"] = true
                }
                return {...item}
              })
              return { ...state, setting }
            })
          }
        },
        {
          label: "Lowercase",
          value: "lowercase",
          active: getSettingValue("sections.sectionTitle.textTransform") === "lowercase",
          action: (obj: any) => {
            handleSettingChange({
              propertyPath: "sections.sectionTitle.textTransform",
              value: obj.value
            })
            setToolsConfig((state) => {
              const setting = state.setting.map((item: any, index: number) => {
                if (index === obj.index) {
                  item["active"] = true
                }
                return {...item}
              })
              return { ...state, setting }
            })
          }
        },
        {
          label: "Capitalize",
          value: "capitalize",
          active: getSettingValue("sections.sectionTitle.textTransform") === "capitalize",
          action: (obj: any) => {
            handleSettingChange({
              propertyPath: "sections.sectionTitle.textTransform",
              value: obj.value
            })
            setToolsConfig((state) => {
              const setting = state.setting.map((item: any, index: number) => {
                if (index === obj.index) {
                  item["active"] = true
                }
                return {...item}
              })
              return { ...state, setting }
            })
          }

        },
        {
          label: "None",
          value: "none",
          active: getSettingValue("sections.sectionTitle.textTransform") === "none",
          action: (obj: any) => {
            handleSettingChange({
              propertyPath: "sections.sectionTitle.textTransform",
              value: obj.value
            })
            setToolsConfig((state) => {
              const setting = state.setting.map((item: any, index: number) => {
                if (index === obj.index) {
                  item["active"] = true
                }
                return {...item}
              })
              return { ...state, setting }
            })
          }

        },
      ]
    },
  });
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
              return (
                <div key={columnIndex} className="body-item">
                  {column.map((section: any, index: number) => {
                    const name = `sections.${section.positionIndex}`;
                    console.log("index--->>>", index);
                    console.log("section--->>>", section);
                    console.log("name224 ---->>>", name)
                    if (!section.isVisible) return null
                    return (
                      <div
                        key={pageIndex + columnIndex + index}
                        ref={(el) => {
                          if (!sectionRefs) return undefined;
                          sectionRefs.current[columnIndex] ??= {};
                          if (el) {
                            sectionRefs.current[columnIndex][index] = el;
                          }
                        }}
                        className="section-container section-styles active-focus"
                      >
                        <SubSectionToolBar
                          variant="section"
                          propertyPath={`${name}`}
                          tools={toolsConfig}
                          layoutType={section.sectionLayout}
                          format={section.format}
                        />

                        <SectionTitle name={`${name}.sectionTitle.content`} placeholderPath={`${section.format}.sectionTitle.placeholder`} />

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
                        {section.sectionLayout === "TagCard" && (
                          <TagCard
                            data={section}
                            name={name}
                            syncWithProp={syncWithProp}
                          />
                        )}
                        {section.sectionLayout === "BadgeTitleCard" && (
                          <BadgeTitleCard
                            data={section}
                            name={name}
                            syncWithProp={syncWithProp}
                          />
                        )}
                        {section.sectionLayout === "LinkCard" && (
                          <LinkCard
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
