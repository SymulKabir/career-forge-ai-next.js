"use client";

import { useMemo, useState } from "react";
import type { ResumeLayoutItem } from "../../types";
import ResumeLayoutCard from "./ResumeLayoutCard";
import { DEFAULT_RESUME_LAYOUT } from "../../constants/resume-utils";
import { useResumeContext } from "../../context/resume-editor-context";

type DraggedSection = {
  pageIndex: number;
  columnIndex: number;
  sectionIndex: number;
};

type DropTarget = {
  pageIndex: number;
  columnIndex: number;
  sectionIndex: number;
};

type RearrangeModalProps = {
  layoutItems?: ResumeLayoutItem[];
  onCancel?: () => void;
  onSave?: (layout: ResumeLayoutItem[]) => void;
};

const RearrangeModal = ({
  layoutItems = DEFAULT_RESUME_LAYOUT,
  onSave,
}: RearrangeModalProps) => {
  const {
    setting,
    layoutResumeData,
    setActiveTool,
    setLayoutResumeData,
  } = useResumeContext();

  const [draggedSection, setDraggedSection] =
    useState<DraggedSection | null>(null);

  const [dropTarget, setDropTarget] =
    useState<DropTarget | null>(null);

  /* =========================================================
     PAGE GROUPS
  ========================================================= */

  const pageGroups = useMemo(() => {
    const pages = new Map<number, ResumeLayoutItem[]>();

    layoutItems.forEach((item) => {
      const pageItems = pages.get(item.page) ?? [];

      pageItems.push(item);

      pages.set(item.page, pageItems);
    });

    return Array.from(pages.entries())
      .sort(([pageA], [pageB]) => pageA - pageB)
      .map(([page, items]) => {
        const fullItems = items
          .filter((item) => item.column === "full")
          .sort((a, b) => a.order - b.order);

        const leftItems = items
          .filter((item) => item.column === "left")
          .sort((a, b) => a.order - b.order);

        const rightItems = items
          .filter((item) => item.column === "right")
          .sort((a, b) => a.order - b.order);

        return {
          page,
          fullItems,
          leftItems,
          rightItems,
        };
      });
  }, [layoutItems]);

  /* =========================================================
     DRAG START
  ========================================================= */

  const handleDragStart = (
    pageIndex: number,
    columnIndex: number,
    sectionIndex: number,
  ) => {
    setDraggedSection({
      pageIndex,
      columnIndex,
      sectionIndex,
    });
  };

  /* =========================================================
     DRAG OVER
  ========================================================= */

  const handleDragOver = (
    event: React.DragEvent,
    pageIndex: number,
    columnIndex: number,
    sectionIndex: number,
  ) => {
    event.preventDefault();

    setDropTarget({
      pageIndex,
      columnIndex,
      sectionIndex,
    });
  };

  /* =========================================================
     DRAG OVER COLUMN
  ========================================================= */

  const handleColumnDragOver = (
    event: React.DragEvent,
    pageIndex: number,
    columnIndex: number,
  ) => {
    event.preventDefault();

    setDropTarget({
      pageIndex,
      columnIndex,
      sectionIndex: -1,
    });
  };

  /* =========================================================
     DROP
  ========================================================= */

  const handleDrop = (
    event: React.DragEvent,
    targetPageIndex: number,
    targetColumnIndex: number,
    targetSectionIndex: number = -1,
  ) => {
    event.preventDefault();

    if (!draggedSection) {
      return;
    }

    const {
      pageIndex: sourcePageIndex,
      columnIndex: sourceColumnIndex,
      sectionIndex: sourceSectionIndex,
    } = draggedSection;

    /*
     * Create a deep copy.
     *
     * DO NOT mutate layoutResumeData directly.
     */
    const pages = structuredClone(layoutResumeData.pages);

    const sourceColumn = pages[sourcePageIndex]?.[sourceColumnIndex];

    if (!sourceColumn) {
      setDraggedSection(null);
      setDropTarget(null);
      return;
    }

    const [movedSection] = sourceColumn.splice(
      sourceSectionIndex,
      1,
    );

    if (!movedSection) {
      setDraggedSection(null);
      setDropTarget(null);
      return;
    }

    const targetColumn = pages[targetPageIndex]?.[targetColumnIndex];

    if (!targetColumn) {
      setDraggedSection(null);
      setDropTarget(null);
      return;
    }

    /*
     * If moving inside the same column,
     * account for the removed item.
     */
    let insertIndex = targetSectionIndex;

    if (
      sourcePageIndex === targetPageIndex &&
      sourceColumnIndex === targetColumnIndex &&
      targetSectionIndex > sourceSectionIndex
    ) {
      insertIndex -= 1;
    }

    /*
     * Drop at the end of the column.
     */
    if (insertIndex < 0 || insertIndex > targetColumn.length) {
      insertIndex = targetColumn.length;
    }

    targetColumn.splice(insertIndex, 0, movedSection);

    /*
     * Update the state.
     */
    setLayoutResumeData({
      ...layoutResumeData,
      pages,
    });

    setDraggedSection(null);
    setDropTarget(null);
  };

  /* =========================================================
     DRAG END
  ========================================================= */

  const handleDragEnd = () => {
    setDraggedSection(null);
    setDropTarget(null);
  };

  /* =========================================================
     CANCEL
  ========================================================= */

  const handleCancel = () => {
    setDraggedSection(null);
    setDropTarget(null);

    setActiveTool(null);
  };

  /* =========================================================
     SAVE
  ========================================================= */

  const handleSave = () => {
    onSave?.(layoutItems);
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      <div
        id="rearrangeModal"
        className="
          absolute
          inset-0
          top-0
          z-[100]
          flex
          items-center
          justify-center
          bg-slate-950/55
          backdrop-blur-sm
          hidden
        "
      >
        <div
          className="
            relative
            flex
            h-max
            max-h-[calc(100%-20px)]
            w-[calc(100%-40px)]
            flex-col
            overflow-hidden
            rounded-2xl
            bg-white
            shadow-2xl
            sm:rounded-3xl
            md:w-[800px]
          "
        >
          {/* =================================================
              HEADER
          ================================================= */}

          <div
            className="
              flex
              shrink-0
              items-center
              justify-between
              border-b
              border-slate-200
              px-4
              py-4
              sm:px-6
              sm:py-5
            "
          >
            <div className="min-w-0">
              <h2
                className="
                  truncate
                  text-base
                  font-extrabold
                  text-slate-900
                  sm:text-xl
                "
              >
                Rearrange your resume
              </h2>

              <p
                className="
                  mt-1
                  text-[10px]
                  leading-4
                  text-slate-400
                  sm:text-xs
                "
              >
                Drag and drop sections to change their order and layout.
              </p>
            </div>

            <button
              id="closeRearrangeModal"
              type="button"
              aria-label="Close"
              onClick={handleCancel}
              className="
                ml-3
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                text-slate-400
                transition
                hover:bg-slate-100
                hover:text-slate-700
              "
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  d="M6 6l12 12M18 6 6 18"
                />
              </svg>
            </button>
          </div>

          {/* =================================================
              BODY
          ================================================= */}

          <div
            id="rearrangeContent"
            className="
              min-h-0
              flex-1
              overflow-y-auto
              bg-slate-50/70
              px-3
              py-5
              sm:px-6
              sm:py-6
            "
          >
            <div
              id="resumeLayoutPages"
              className="
                mx-auto
                flex
                max-w-3xl
                flex-col
                gap-8
              "
            >
              {/* =================================================
                  ACTUAL RESUME LAYOUT
              ================================================= */}

              <div className="page container">
                {layoutResumeData.pages.map(
                  (page, pageIndex) => {
                    const pageHeight =
                      setting.resumePageHeight;

                    const marginY =
                      setting.margin.y;

                    const marginX =
                      setting.margin.x;

                    return (
                      <div
                        key={pageIndex}
                        className="
                          relative
                          mx-auto
                          mb-8
                          w-full
                          max-w-[794px]
                          overflow-hidden
                          bg-white
                          shadow-[0_8px_30px_rgba(15,23,42,0.12)]
                        "
                        style={{
                          minHeight: `${pageHeight}px`,
                          margin: `${marginY}px ${marginX}px`,
                          transform: "scale(0.8)",
                          transformOrigin: "top center",
                        }}
                      >
                        {/* =================================================
                            PAGE HEADER
                        ================================================= */}

                        {pageIndex === 0 && (
                          <div
                            className="
                              border-b
                              border-slate-200
                              p-4
                            "
                          >
                            <div
                              className="
                                rounded
                                border
                                border-dashed
                                border-slate-300
                                p-3
                                text-center
                                text-xs
                                text-slate-400
                              "
                            >
                              Resume Header
                            </div>
                          </div>
                        )}

                        {/* =================================================
                            PAGE BODY
                        ================================================= */}

                        <div
                          className="
                            grid
                            grid-cols-2
                            items-start
                            gap-4
                          "
                          style={{
                            padding: `${marginY}px ${marginX}px`,
                          }}
                        >
                          {page.map(
                            (
                              column,
                              columnIndex,
                            ) => {
                              return (
                                <div
                                  key={columnIndex}
                                  className={`
                                    relative
                                    min-h-[180px]
                                    rounded-lg
                                    border-2
                                    border-dashed
                                    p-2
                                    transition
                                    ${
                                      dropTarget?.pageIndex ===
                                        pageIndex &&
                                      dropTarget?.columnIndex ===
                                        columnIndex
                                        ? "border-violet-400 bg-violet-50/70"
                                        : "border-slate-200"
                                    }
                                  `}
                                  onDragOver={(event) =>
                                    handleColumnDragOver(
                                      event,
                                      pageIndex,
                                      columnIndex,
                                    )
                                  }
                                  onDrop={(event) =>
                                    handleDrop(
                                      event,
                                      pageIndex,
                                      columnIndex,
                                      -1,
                                    )
                                  }
                                >
                                  {/* COLUMN LABEL */}

                                  <div
                                    className="
                                      mb-2
                                      text-center
                                      text-[9px]
                                      font-bold
                                      uppercase
                                      tracking-widest
                                      text-slate-300
                                    "
                                  >
                                    Column{" "}
                                    {columnIndex + 1}
                                  </div>

                                  {/* =================================================
                                      SECTIONS
                                  ================================================= */}

                                  {column.map(
                                    (
                                      section,
                                      sectionIndex,
                                    ) => {
                                      const isDragging =
                                        draggedSection?.pageIndex ===
                                          pageIndex &&
                                        draggedSection?.columnIndex ===
                                          columnIndex &&
                                        draggedSection?.sectionIndex ===
                                          sectionIndex;

                                      const isDropTarget =
                                        dropTarget?.pageIndex ===
                                          pageIndex &&
                                        dropTarget?.columnIndex ===
                                          columnIndex &&
                                        dropTarget?.sectionIndex ===
                                          sectionIndex;

                                      return (
                                        <div
                                          key={
                                            section.id ??
                                            `${pageIndex}-${columnIndex}-${sectionIndex}`
                                          }
                                          className="relative"
                                          onDragOver={(
                                            event,
                                          ) =>
                                            handleDragOver(
                                              event,
                                              pageIndex,
                                              columnIndex,
                                              sectionIndex,
                                            )
                                          }
                                          onDrop={(
                                            event,
                                          ) =>
                                            handleDrop(
                                              event,
                                              pageIndex,
                                              columnIndex,
                                              sectionIndex,
                                            )
                                          }
                                        >
                                          {/* DROP INDICATOR */}

                                          {isDropTarget &&
                                            !isDragging && (
                                              <div
                                                className="
                                                  absolute
                                                  -top-1
                                                  left-0
                                                  right-0
                                                  z-20
                                                  h-1
                                                  rounded-full
                                                  bg-violet-500
                                                "
                                              />
                                            )}

                                          {/* =================================================
                                              DRAGGABLE SECTION
                                          ================================================= */}

                                          <div
                                            draggable
                                            onDragStart={() =>
                                              handleDragStart(
                                                pageIndex,
                                                columnIndex,
                                                sectionIndex,
                                              )
                                            }
                                            onDragEnd={
                                              handleDragEnd
                                            }
                                            className={`
                                              group
                                              mb-2
                                              cursor-grab
                                              select-none
                                              rounded-lg
                                              border
                                              bg-white
                                              shadow-sm
                                              transition-all
                                              active:cursor-grabbing
                                              ${
                                                isDragging
                                                  ? "scale-[0.98] opacity-40"
                                                  : "hover:-translate-y-[1px] hover:shadow-md"
                                              }
                                            `}
                                          >
                                            {/* DRAG HANDLE */}

                                            <div
                                              className="
                                                flex
                                                items-center
                                                gap-2
                                                border-b
                                                border-slate-100
                                                px-2
                                                py-1
                                                text-[8px]
                                                text-slate-300
                                              "
                                            >
                                              <span
                                                className="
                                                  cursor-grab
                                                  tracking-widest
                                                "
                                              >
                                                ⋮⋮
                                              </span>

                                              <span>
                                                Drag to move
                                              </span>
                                            </div>

                                            {/* SECTION CONTENT */}

                                            <div className="p-2">
                                              <p
                                                className="
                                                  text-xs
                                                  font-semibold
                                                  text-slate-700
                                                "
                                              >
                                                {
                                                  section
                                                    .sectionTitle
                                                    ?.content
                                                }
                                              </p>

                                              {section.sectionHeight && (
                                                <p
                                                  className="
                                                    mt-1
                                                    text-[9px]
                                                    text-slate-400
                                                  "
                                                >
                                                  Height:{" "}
                                                  {
                                                    section.sectionHeight
                                                  }
                                                  px
                                                </p>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    },
                                  )}

                                  {/* =================================================
                                      EMPTY COLUMN
                                  ================================================= */}

                                  {column.length ===
                                    0 && (
                                    <div
                                      className="
                                        flex
                                        min-h-[120px]
                                        items-center
                                        justify-center
                                        rounded-md
                                        border
                                        border-dashed
                                        border-slate-200
                                        text-[10px]
                                        text-slate-300
                                      "
                                    >
                                      Drop section here
                                    </div>
                                  )}
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                    );
                  },
                )}
              </div>

              {/* =================================================
                  OLD LAYOUT PREVIEW
              ================================================= */}

              {pageGroups.map(
                ({
                  page,
                  fullItems,
                  leftItems,
                  rightItems,
                }) => (
                  <div
                    key={page}
                    className="layout-page"
                    data-page={page}
                  >
                    <div className="mb-2 text-center">
                      <span
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[.15em]
                          text-slate-400
                        "
                      >
                        Page {page}
                      </span>
                    </div>

                    <div
                      className="
                        relative
                        mx-auto
                        w-full
                        max-w-[430px]
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        p-2
                        shadow-[0_8px_30px_rgba(15,23,42,0.08)]
                        sm:p-3
                      "
                    >
                      {/* FULL */}

                      <div
                        className="
                          layout-column
                          layout-full
                          mb-1.5
                          min-h-[30px]
                        "
                        data-page={page}
                        data-column="full"
                      >
                        {fullItems.map((item) => (
                          <ResumeLayoutCard
                            key={item.id}
                            item={item}
                          />
                        ))}
                      </div>

                      {/* LEFT + RIGHT */}

                      <div
                        className="
                          grid
                          grid-cols-[1fr_1fr]
                          items-start
                          gap-1.5
                        "
                      >
                        <div
                          className="
                            layout-column
                            min-h-[180px]
                          "
                          data-page={page}
                          data-column="left"
                        >
                          {leftItems.map(
                            (item) => (
                              <ResumeLayoutCard
                                key={item.id}
                                item={item}
                              />
                            ),
                          )}
                        </div>

                        <div
                          className="
                            layout-column
                            min-h-[180px]
                          "
                          data-page={page}
                          data-column="right"
                        >
                          {rightItems.map(
                            (item) => (
                              <ResumeLayoutCard
                                key={item.id}
                                item={item}
                              />
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* =================================================
              FOOTER
          ================================================= */}

          <div
            className="
              flex
              shrink-0
              flex-col-reverse
              gap-2
              border-t
              border-slate-200
              bg-white
              px-4
              py-3
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-6
            "
          >
            <div className="text-center sm:text-left">
              <span
                id="layoutStatus"
                className="
                  text-[10px]
                  font-medium
                  text-slate-400
                "
              >
                Drag sections to rearrange your resume.
              </span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <button
                id="cancelRearrange"
                type="button"
                onClick={handleCancel}
                className="
                  rounded-xl
                  border
                  border-slate-200
                  px-4
                  py-2.5
                  text-[10px]
                  font-bold
                  text-slate-600
                  transition
                  hover:bg-slate-50
                "
              >
                Cancel
              </button>

              <button
                id="saveRearrange"
                type="button"
                onClick={handleSave}
                className="
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  to-indigo-600
                  px-5
                  py-2.5
                  text-[10px]
                  font-bold
                  text-white
                  shadow-md
                  shadow-violet-200
                  transition
                  hover:-translate-y-0.5
                  hover:shadow-lg
                "
              >
                Save layout
              </button>
            </div>
          </div>
        </div>
      </div>

      <input
        type="hidden"
        id="resumeLayoutJson"
        name="ResumeLayoutJson"
        value={JSON.stringify(layoutItems)}
        readOnly
      />
    </>
  );
};

export default RearrangeModal;