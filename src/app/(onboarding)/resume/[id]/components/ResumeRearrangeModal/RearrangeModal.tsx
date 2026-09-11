"use client";

import { useMemo, useState } from "react";
import type { ResumeLayoutItem } from "../../types";
import { DEFAULT_RESUME_LAYOUT } from "../../constants/resume-utils";
import { useResumeContext } from "../../context/resume-editor-context";

type RearrangeModalProps = {
  layoutItems?: ResumeLayoutItem[];
  onCancel?: () => void;
  onSave?: (layout: ResumeLayoutItem[]) => void;
};

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

const RearrangeModal = ({
  layoutItems = DEFAULT_RESUME_LAYOUT,
  onSave,
  onCancel,
}: RearrangeModalProps) => {
  const { setting, layoutResumeData, setLayoutResumeData, setActiveTool } = useResumeContext();

  const [draggedSection, setDraggedSection] = useState<DraggedSection | null>(null);
  const [dropTarget, setDropTarget] = useState<DropTarget | null>(null);

  console.log("draggedSection ------->>>>", draggedSection)
  // Consider pageHeight as 100% (fallback to 1000px if not defined in settings)
  const totalPageHeight = setting?.resumePageHeight || 1000;

  const activeLayoutData = layoutResumeData?.pages ? layoutResumeData : {
    pages: useMemo(() => {
      const pagesMap = new Map<number, ResumeLayoutItem[]>();
      layoutItems.forEach((item) => {
        const pageItems = pagesMap.get(item.page) ?? [];
        pageItems.push(item);
        pagesMap.set(item.page, pageItems);
      });

      return Array.from(pagesMap.entries())
        .sort(([a], [b]) => a - b)
        .map(([_, items]) => {
          const left = items.filter((i) => i.column === "left").sort((a, b) => a.order - b.order);
          const right = items.filter((i) => i.column === "right").sort((a, b) => a.order - b.order);
          const full = items.filter((i) => i.column === "full").sort((a, b) => a.order - b.order);
          return [left, right, full].filter((col) => col.length > 0);
        });
    }, [layoutItems])
  };

  const handleDragStart = (pageIndex: number, columnIndex: number, sectionIndex: number) => {
    setDraggedSection({ pageIndex, columnIndex, sectionIndex });
  };

  const handleDragOver = (event: React.DragEvent, pageIndex: number, columnIndex: number, sectionIndex: number) => {
    event.preventDefault();
    setDropTarget({ pageIndex, columnIndex, sectionIndex });
  };

  const handleColumnDragOver = (event: React.DragEvent, pageIndex: number, columnIndex: number) => {
    event.preventDefault();
    setDropTarget({ pageIndex, columnIndex, sectionIndex: -1 });
  };

  const handleDrop = (event: React.DragEvent, targetPageIndex: number, targetColumnIndex: number, targetSectionIndex: number = -1) => {
    event.preventDefault();
    if (!draggedSection) return;

    const { pageIndex: sourcePageIndex, columnIndex: sourceColumnIndex, sectionIndex: sourceSectionIndex } = draggedSection;
    const pages = structuredClone(activeLayoutData.pages);
    const sourceColumn = pages[sourcePageIndex]?.[sourceColumnIndex];

    if (!sourceColumn) {
      setDraggedSection(null);
      setDropTarget(null);
      return;
    }

    const [movedSection] = sourceColumn.splice(sourceSectionIndex, 1);
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

    let insertIndex = targetSectionIndex;
    if (sourcePageIndex === targetPageIndex && sourceColumnIndex === targetColumnIndex && targetSectionIndex > sourceSectionIndex) {
      insertIndex -= 1;
    }

    if (insertIndex < 0 || insertIndex > targetColumn.length) {
      insertIndex = targetColumn.length;
    }

    movedSection.page = targetPageIndex;
    movedSection.column = targetColumnIndex === 0 ? "left" : targetColumnIndex === 1 ? "right" : "full";

    targetColumn.splice(insertIndex, 0, movedSection);

    if (setLayoutResumeData) {
      setLayoutResumeData({ pages });
    }

    setDraggedSection(null);
    setDropTarget(null);
  };

  const handleDragEnd = () => {
    setDraggedSection(null);
    setDropTarget(null);
  };

  const handleSave = () => {
    const flattenedItems: ResumeLayoutItem[] = [];
    activeLayoutData.pages.forEach((page, pIdx) => {
      page.forEach((column, cIdx) => {
        column.forEach((item, oIdx) => {
          flattenedItems.push({
            ...item,
            page: pIdx,
            column: cIdx === 0 ? "left" : cIdx === 1 ? "right" : "full",
            order: oIdx,
          });
        });
      });
    });

    onSave?.(flattenedItems);
    setActiveTool(null);
  };

  const handleCancel = () => {
    onCancel?.();
    setActiveTool(null);
  };

  return (
    <>
      <div
        id="rearrangeModal"
        className="absolute inset-0 top-0 z-[100] flex items-center justify-center bg-slate-950/55 backdrop-blur-sm"
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
            md:w-[860px]
          "
        >
          {/* Header */}
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
                <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          {/* Body */}
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
                max-w-2xl
                flex-col
                gap-8
              "
            >
              <div className="page container flex flex-col gap-8">
                {activeLayoutData.pages.map((page, pageIndex) => {
                  return (
                    <div key={pageIndex} className="flex flex-col items-center">
                      
                      {/* Page Tag */}
                      <div className="mb-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Page {pageIndex + 1}
                      </div>

                      {/* Paper Document Container */}
                      <div className="w-full rounded-2xl bg-white shadow-md border border-slate-200/90 overflow-hidden p-4">
                        
                        {/* Header Box matching screenshot style */}
                        {pageIndex === 0 && (
                          <div className="mb-4 rounded-xl bg-slate-100 border border-slate-200/80 px-4 py-3 text-slate-600 flex items-center justify-center gap-2 shadow-sm">
                            <span className="text-slate-400 text-xs">🔒</span>
                            <span className="text-xs font-bold tracking-wide">Header</span>
                          </div>
                        )}

                        {/* Columns Grid Layout */}
                        <div
                          className="grid grid-cols-2 gap-3 items-start"
                        >
                          {page.map((column:any, columnIndex:any) => {
                            const isColumnDropTarget =
                              dropTarget?.pageIndex === pageIndex && dropTarget?.columnIndex === columnIndex;

                            return (
                              <div
                                key={columnIndex}
                                className={`relative flex flex-col gap-3 min-h-[160px] rounded-xl transition-all ${
                                  isColumnDropTarget ? "ring-2 ring-indigo-500/20 bg-indigo-50/20" : ""
                                }`}
                                onDragOver={(e) => handleColumnDragOver(e, pageIndex, columnIndex)}
                                onDrop={(e) => handleDrop(e, pageIndex, columnIndex, -1)}
                              >
                                {column.map((section, sectionIndex) => {
                                  const rawHeight = section.sectionHeight || 80;
                                  
                                  {/* Calculate sectionHeight as a percentage where pageHeight represents 100% */}
                                  const percentageHeight = Number(((rawHeight / totalPageHeight) * 100).toFixed(2));

                                  const isDragging =
                                    draggedSection?.pageIndex === pageIndex &&
                                    draggedSection?.columnIndex === columnIndex &&
                                    draggedSection?.sectionIndex === sectionIndex;

                                  const isSectionDropTarget =
                                    dropTarget?.pageIndex === pageIndex &&
                                    dropTarget?.columnIndex === columnIndex &&
                                    dropTarget?.sectionIndex === sectionIndex;

                                  return (
                                    <div
                                      key={section.id ?? `${pageIndex}-${columnIndex}-${sectionIndex}`}
                                      className="relative group/section"
                                      onDragOver={(e) => handleDragOver(e, pageIndex, columnIndex, sectionIndex)}
                                      onDrop={(e) => handleDrop(e, pageIndex, columnIndex, sectionIndex)}
                                    >
                                      {/* Drop Target Indicator */}
                                      {isSectionDropTarget && !isDragging && (
                                        <div className="absolute -top-2 left-0 right-0 z-20 h-1 rounded-full bg-indigo-600 shadow-sm animate-pulse" />
                                      )}

                                      {/* Card using percentage height relative to 100% page height */}
                                      <div
                                        draggable
                                        onDragStart={() => handleDragStart(pageIndex, columnIndex, sectionIndex)}
                                        onDragEnd={handleDragEnd}
                                        className={`rounded-xl border border-slate-200/90 bg-slate-50/70 p-4 shadow-sm transition-all duration-200 cursor-grab active:cursor-grabbing select-none flex flex-col justify-center ${
                                          isDragging
                                            ? "scale-95 opacity-30 shadow-none border-dashed border-indigo-400"
                                            : "hover:bg-slate-100 hover:border-indigo-300 hover:shadow"
                                        }`}
                                        style={{ height: `${percentageHeight}%` }}
                                      >
                                        <div className="flex items-start justify-between">
                                          {/* Two-dot drag indicator handle */}
                                          <div className="text-slate-400 font-bold text-xs tracking-tighter leading-none select-none">
                                            &#8759;
                                          </div>
                                          <p className="flex-1 text-center text-xs font-bold text-slate-800 tracking-tight px-2 truncate">
                                            {section.sectionTitle?.content || "Untitled"}
                                          </p>
                                          <div className="w-3" /> {/* Spacer for symmetry */}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}

                                {column.length === 0 && (
                                  <div className="flex flex-1 items-center justify-center rounded-xl border border-dashed border-slate-200 p-6 text-center text-xs text-slate-400">
                                    Drop sections here
                                  </div>
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
            </div>
          </div>

          {/* Footer */}
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