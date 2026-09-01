"use client";

import { useMemo } from "react";
import type { ResumeLayoutItem } from "../../types";
import ResumeLayoutCard from "./ResumeLayoutCard";
import { DEFAULT_RESUME_LAYOUT } from "../../constants/resume-utils";
import { useResumeContext } from "../../context/resume-editor-context";

type RearrangeModalProps = {
  layoutItems?: ResumeLayoutItem[];
  onCancel?: () => void;
  onSave?: (layout: ResumeLayoutItem[]) => void;
};

const RearrangeModal = ({
  layoutItems = DEFAULT_RESUME_LAYOUT,
  onSave,
}: RearrangeModalProps) => {
  const { setActiveTool } = useResumeContext();

  /* =========================================================
     GROUP LAYOUT ITEMS BY PAGE
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
     SAVE
  ========================================================= */

  const handleSave = () => {
    onSave?.(layoutItems);
  };

  /* =========================================================
     CANCEL
  ========================================================= */

  const handleCancel = () => {
    onCancel?.();
  };

  return (
    <>
      {/* =======================================================
          REARRANGE MODAL
      ======================================================= */}

      <div
        id="rearrangeModal"
        className={`absolute inset-0 top-0 z-[100] flex items-center justify-center bg-slate-950/55 backdrop-blur-sm hidden`}
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
              onClick={() => {
                setActiveTool(null);
              }}
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
              {pageGroups.map(({ page, fullItems, leftItems, rightItems }) => (
                <div key={page} className="layout-page" data-page={page}>
                  {/* PAGE TITLE */}

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

                  {/* A4 PREVIEW */}

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
                    {/* =====================================
                          FULL WIDTH
                      ===================================== */}

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
                        <ResumeLayoutCard key={item.id} item={item} />
                      ))}
                    </div>

                    {/* =====================================
                          TWO COLUMNS
                      ===================================== */}

                    <div
                      className="
                          grid
                          grid-cols-[1fr_1fr]
                          items-start
                          gap-1.5
                        "
                    >
                      {/* LEFT */}

                      <div
                        className="
                            layout-column
                            min-h-[180px]
                          "
                        data-page={page}
                        data-column="left"
                      >
                        {leftItems.map((item) => (
                          <ResumeLayoutCard key={item.id} item={item} />
                        ))}
                      </div>

                      {/* RIGHT */}

                      <div
                        className="
                            layout-column
                            min-h-[180px]
                          "
                        data-page={page}
                        data-column="right"
                      >
                        {rightItems.map((item) => (
                          <ResumeLayoutCard key={item.id} item={item} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

      {/* =======================================================
          FINAL LAYOUT JSON
      ======================================================= */}

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
