import React, { useLayoutEffect, useState, useRef } from "react";
import "./style.scss";
import "./template.scss"
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
import { RESUME_FORMAT } from "./constants/resumeForma";
import SectionGallery from "./components/SectionGallery";

const Index = () => {
  const {
    setting,
    structuredResumeData,
    layoutResumeData,
    setLayoutResumeData,
    currentTemplate
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

      setLayoutResumeData((state: any) => {
        return { ...state, pages: pages };
      });
    };
    requestAnimationFrame(paginate);
  }, [structuredResumeData, setting]);

  return (
    <>
      <section
        className={`resume-editor ${currentTemplate}`}
        style={
          {
            "--container-height": `calc(100vh - ${RESUME_CONSTANTS.headerHeight}px - ${RESUME_CONSTANTS.toolBarHeight}px)`,
            "--section-gap": `${setting.sectionGap}px`,
            "--page-height": `${setting.resumePageHeight}px`,
            "--page-width": `${setting.resumePageWidth}px`,
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
    </>
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
  const {
    handleSettingChange,
    addResumeListItem,
    updateResume,
    getSettingValue,
  } = useResume();
  const metadata = setting?.sections?.metadata;
  const textTransform = getSettingValue("sections.sectionTitle.textTransform");

  const handleTextTransform = (obj: any) => {
    // Update actual resume setting
    handleSettingChange({
      propertyPath: "sections.sectionTitle.textTransform",
      value: obj.value,
    });

    // Update active state
    setToolsConfig((state) => ({
      ...state,
      setting: {
        ...state.setting,
        dropdownList: state.setting.dropdownList.map(
          (item: any, index: number) => ({
            ...item,
            active: index === obj.index,
          }),
        ),
      },
    }));
  };
  const addEntry = () => {
    const formatData = RESUME_FORMAT[format];
    const newData = formatData.items[0];
    addResumeListItem(`${propertyPath}.items`, newData, 0);
  };
  const [toolsConfig, setToolsConfig] = useState({
    entry: { action: addEntry },
    delete: {},
    rearrange: {},
    setting: {
      dropdownList: [
        {
          label: "Uppercase",
          value: "uppercase",
          active: textTransform === "uppercase",
          action: handleTextTransform,
        },
        {
          label: "Lowercase",
          value: "lowercase",
          active: textTransform === "lowercase",
          action: handleTextTransform,
        },
        {
          label: "Capitalize",
          value: "capitalize",
          active: textTransform === "capitalize",
          action: handleTextTransform,
        },
        {
          label: "None",
          value: "none",
          active: textTransform === "none",
          action: handleTextTransform,
        },
      ],
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
        className={`page  ${sectionRefs ? "display-page" : ""}`}
        style={
          {
            paddingLeft: `${setting.margin.x}px`,
            paddingRight: `${setting.margin.x}px`,
            paddingTop: `${setting.margin.y}px`,
            paddingBottom: `${setting.margin.y}px`,
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
          <div className="resume-body"> 
            {columns.map((column: any, columnIndex: number) => {
              return (
                <div key={columnIndex} className="body-item">
                  {column.map((section: any, index: number) => {
                    const name = `sections.${section.positionIndex}`;
                    if (!section.isVisible) return null;
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
                          format={section.format}
                        />

                        <SectionTitle
                          name={`${name}.sectionTitle.content`}
                          placeholderPath={`${section.format}.sectionTitle.placeholder`}
                        />

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
      <SectionGallery />
    </>
  );
};

export default Index;
