"use client";

import { TOOL_ITEMS } from "../../constants/resume-utils";
import { useResumeEditor } from "../../context/resume-editor-context";
import { TOOL_ICONS } from "../ResumeToolbarIcons";
import useDrag from "./hooks/useDrag";
import useBtnClick from "./hooks/useBtnClick";

const Index = () => {
  const { activeTool, setActiveTool } = useResumeEditor();

  const {
    canScrollLeft,
    canScrollRight,
    toolbarRef,
    hasDraggedRef,
    handlePointerDown,
    handlePointerMove,
    stopDragging,
    handleWheel,
    scrollToolbar,
  } = useDrag({ activeTool, setActiveTool });
  const { handleToolClick } = useBtnClick({ activeTool, setActiveTool });

  const handleDownloadVectorPdf = async () => {
    const resumeElement = document.querySelector(".resume-editor");

    if (!resumeElement) {
      console.error("Resume element not found");
      return;
    }

    let cssText = "";

    for (const styleSheet of Array.from(document.styleSheets)) {
      try {
        if (styleSheet.cssRules) {
          cssText += Array.from(styleSheet.cssRules)
            .map((rule) => rule.cssText)
            .join("\n");
        }
      } catch (error) {
        console.warn("Unable to read stylesheet:", styleSheet.href);
      }
    }

    const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />

        <style>
          ${cssText}

          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          html,
          body {
            margin: 0;
            padding: 0;
            background: #ffffff;
          }

          body {
            width: 940px;
          }

          .resume-editor {
            height: auto !important;
            max-height: none !important;
          }

          .resume-main-editor-container {
            height: auto !important;
            max-height: none !important;
            overflow: visible !important;
          }

          .page {
            margin: 0 !important;
            border: none !important;
            box-shadow: none !important;
            background: #ffffff !important;
          }

          .page:first-child {
            margin-top: 0 !important;
          }
        </style>
      </head>

      <body>
        ${resumeElement.outerHTML}
      </body>
    </html>
  `;

    const response = await fetch("/api/generate-pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ htmlContent }),
    });

    if (!response.ok) throw new Error("Network response was not ok");

    // Convert the response stream into a downloadable blob link
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  const handleDownloadVectorPdf2 = async () => {
    // Select your resume container DOM element
    const resumeElement = document.querySelector(".page");
    if (!resumeElement) return;

    // Package the HTML with inline styles/stylesheets reference
    const htmlContent = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>Resume</title>
                <!-- Include your compiled global CSS or stylesheet links here -->
                <link rel="stylesheet" href="${window.location.origin}/_next/static/css/app/layout.css">
                <style>
                    body { margin: 0; background: #ffffff; }
                    .page { box-shadow: none !important; margin: 0 auto !important; }
                </style>
            </head>
            <body>
                ${resumeElement.outerHTML}
            </body>
        </html>
    `;

    try {
      const response = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ htmlContent }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      // Convert the response stream into a downloadable blob link
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err);
    }
  };
  return (
    <header className="sticky top-[65px] z-40 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div
        className="
          flex h-[45px] w-full items-center
          gap-1.5 px-2
          sm:gap-2 sm:px-4
          lg:gap-3 lg:px-6
          xl:px-8
        "
      >
        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div
            className={`
              pointer-events-none
              absolute left-0 top-0 z-20
              h-full w-10
              bg-gradient-to-r
              from-white
              via-white/80
              to-transparent
              transition-opacity duration-200
              ${canScrollLeft ? "opacity-100" : "opacity-0"}
            `}
          />
          <button
            type="button"
            aria-label="Scroll toolbar left"
            title="Scroll left"
            onClick={() => scrollToolbar(-250)}
            className={`
              absolute left-1 top-1/2 z-30
              flex h-7 w-7
              -translate-y-1/2
              items-center justify-center
              rounded-full
              border border-slate-200
              bg-white/95
              text-slate-500
              shadow-sm
              transition-all duration-200
              hover:border-violet-300
              hover:bg-violet-50
              hover:text-violet-600
              active:scale-95
              ${
                canScrollLeft
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }
            `}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15 18-6-6 6-6"
              />
            </svg>
          </button>
          <div
            ref={toolbarRef}
            id="resumeToolbar"
            className="
              flex w-full min-w-0
              items-center justify-start
              gap-1
              overflow-x-auto
              overscroll-x-contain
              px-10 py-1

              sm:gap-1.5
              sm:px-10 sm:py-1

              lg:gap-2

              cursor-grab
              select-none

              touch-pan-x
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDragging}
            onPointerCancel={stopDragging}
            onWheel={handleWheel}
          >
            {TOOL_ITEMS.map((item) => {
              const Icon = TOOL_ICONS[item.icon];

              const isActive = activeTool === item.title;

              return (
                <button
                  key={item.title}
                  type="button"
                  title={item.title}
                  aria-label={item.title}
                  data-action-group={item.actionGroup}
                  data-child-id={item.childId}
                  onClick={(event) => {
                    if (hasDraggedRef.current) {
                      event.preventDefault();
                      event.stopPropagation();
                      return;
                    }

                    handleToolClick(item.title);
                  }}
                  className={`
                    group
                    flex shrink-0
                    select-none
                    items-center
                    gap-1
                    rounded-lg
                    px-2 py-1.5
                    text-[9px]
                    font-semibold
                    transition-all
                    duration-200
                    active:scale-95

                    sm:gap-1.5
                    sm:px-2.5
                    sm:py-2
                    sm:text-[10px]

                    lg:px-3

                    ${item.buttonClass}

                    ${
                      isActive
                        ? `
                            bg-violet-50
                            text-violet-600
                            border
                            border-violet-200
                            shadow-[0_1px_2px_rgb(124_58_237_/_0.08)]
                        `
                        : ""
                    }
                  `}
                >
                  {/* =========================================
                      ICON
                  ========================================== */}

                  <span
                    className={`
                      flex
                      h-5 w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-md

                      sm:h-6 sm:w-6

                      ${item.iconClass}
                       ${isActive ? "bg-violet-100 text-violet-600" : ""}
                    `}
                  >
                    <Icon
                      className="
                        h-3 w-3
                        sm:h-3.5
                        sm:w-3.5
                      "
                    />
                  </span>

                  {/* =========================================
                      TITLE
                  ========================================== */}

                  <span className="whitespace-nowrap">{item.title}</span>

                  {/* =========================================
                      BADGE
                  ========================================== */}

                  {item.badge && (
                    <span
                      className="
                        rounded
                        bg-emerald-50
                        px-1 py-0.5
                        text-[7px]
                        font-bold
                        text-emerald-600
                        sm:text-[8px]
                      "
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            aria-label="Scroll toolbar right"
            title="Scroll right"
            onClick={() => scrollToolbar(250)}
            className={`
              absolute right-1 top-1/2 z-30
              flex h-7 w-7
              -translate-y-1/2
              items-center justify-center
              rounded-full
              border border-slate-200
              bg-white/95
              text-slate-500
              shadow-sm
              transition-all duration-200
              hover:border-violet-300
              hover:bg-violet-50
              hover:text-violet-600
              active:scale-95
              ${
                canScrollRight
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }
            `}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 18 6-6-6-6"
              />
            </svg>
          </button>
          <div
            className={`
              pointer-events-none
              absolute right-0 top-0 z-20
              h-full w-10
              bg-gradient-to-l
              from-white
              via-white/80
              to-transparent
              transition-opacity duration-200
              ${canScrollRight ? "opacity-100" : "opacity-0"}
            `}
          />
        </div>
        <div
          className="
            flex shrink-0
            items-center
            gap-1
            sm:gap-1.5
            lg:gap-2
          "
        >
          <button
            id="undoBtn"
            type="button"
            title="Undo"
            aria-label="Undo"
            className="
              hidden
              h-8 w-8
              items-center
              justify-center
              rounded-lg
              border border-slate-200
              bg-white
              text-slate-500
              transition-all duration-200
              hover:border-violet-200
              hover:bg-violet-50
              hover:text-violet-600
              active:scale-95

              sm:flex
              sm:h-9 sm:w-9

              lg:h-10 lg:w-10
            "
          >
            <svg
              className="h-3.5 w-3.5 lg:h-4 lg:w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 7 4 12l5 5"
              />
              <path strokeLinecap="round" d="M4 12h10a6 6 0 0 1 6 6" />
            </svg>
          </button>
          <button
            id="redoBtn"
            type="button"
            title="Redo"
            aria-label="Redo"
            className="
              hidden
              h-8 w-8
              items-center
              justify-center
              rounded-lg
              border border-slate-200
              bg-white
              text-slate-500
              transition-all duration-200
              hover:border-violet-200
              hover:bg-violet-50
              hover:text-violet-600
              active:scale-95

              sm:flex
              sm:h-9 sm:w-9

              lg:h-10 lg:w-10
            "
          >
            <svg
              className="h-3.5 w-3.5 lg:h-4 lg:w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15 7 5 5-5 5"
              />
              <path strokeLinecap="round" d="M20 12H10a6 6 0 0 0-6 6" />
            </svg>
          </button>
          <button
            id="previewResumeBtn"
            type="button"
            title="Preview Resume"
            aria-label="Preview Resume"
            className="
              group
              flex
              h-8 w-8
              shrink-0
              items-center
              justify-center
              rounded-lg
              border border-slate-200
              bg-white
              text-slate-500
              transition-all duration-200
              hover:border-violet-200
              hover:bg-violet-50
              hover:text-violet-600
              active:scale-95

              sm:h-9 sm:w-9
              lg:h-10 lg:w-10
            "
          >
            <svg
              className="
                h-3.5 w-3.5
                transition-transform
                duration-200
                group-hover:scale-110
                lg:h-4 lg:w-4
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
              />
              <circle cx="12" cy="12" r="2.5" />
            </svg>
          </button>
          <button
            id="downloadResumeBtn"
            type="button"
            title="Download Resume"
            aria-label="Download Resume"
            onClick={handleDownloadVectorPdf}
            className="
              group
              flex
              h-8 w-8
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-gradient-to-r
              from-violet-600
              to-indigo-600
              text-white
              shadow-sm
              shadow-violet-200
              transition-all duration-200
              hover:-translate-y-0.5
              hover:shadow-md
              active:scale-95

              sm:h-9 sm:w-9
              lg:h-10 lg:w-10
            "
          >
            <svg
              className="
                h-3.5 w-3.5
                transition-transform
                duration-200
                group-hover:translate-y-0.5
                lg:h-4 lg:w-4
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M12 3v12" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m7 10 5 5 5-5"
              />
              <path strokeLinecap="round" d="M5 21h14" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Index;
