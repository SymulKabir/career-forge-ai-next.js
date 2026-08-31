import React from "react";

const Index = () => {
  return (
    <div id="fixResumePanel" className="space-y-4">
      {/* ===================================================== */}
      {/* HEADER                                                */}
      {/* ===================================================== */}

      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5 12 4 4L19 6"
                />
              </svg>
            </div>

            <div>
              <h2 className="text-sm font-extrabold text-slate-800">
                Fix Resume
              </h2>

              <p className="mt-0.5 text-[10px] text-slate-400">
                Improve your resume before applying
              </p>
            </div>
          </div>
        </div>

        <span
          id="fixResumeStatus"
          className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-600"
        >
          6 issues
        </span>
      </div>

      {/* ===================================================== */}
      {/* RESUME SCORE                                          */}
      {/* ===================================================== */}

      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4">
        <div className="flex items-center gap-4">
          {/* Score */}

          <div className="relative flex h-20 w-20 shrink-0 items-center justify-center">
            <svg
              className="absolute inset-0 h-full w-full -rotate-90"
              viewBox="0 0 80 80"
            >
              <circle
                cx="40"
                cy="40"
                r="34"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                className="text-slate-100"
              />

              <circle
                id="fixScoreCircle"
                cx="40"
                cy="40"
                r="34"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="213.6"
                strokeDashoffset="42.7"
                className="text-emerald-500 transition-all duration-500"
              />
            </svg>

            <div className="relative text-center">
              <div
                id="fixResumeScore"
                className="text-lg font-extrabold text-slate-800"
              >
                80
              </div>

              <div className="text-[8px] font-semibold text-slate-400">
                / 100
              </div>
            </div>
          </div>

          {/* Score information */}

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold text-slate-800">
                Good start
              </span>

              <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[8px] font-bold text-emerald-600">
                ATS Friendly
              </span>
            </div>

            <p className="mt-1 text-[10px] leading-4 text-slate-500">
              Your resume is strong, but a few improvements can make it more
              competitive.
            </p>

            <div className="mt-3 flex items-center gap-2">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                <div
                  id="fixResumeProgress"
                  className="h-full w-[80%] rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                />
              </div>

              <span className="text-[9px] font-bold text-slate-500">80%</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* AI QUICK ACTION                                       */}
      {/* ===================================================== */}

      <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-indigo-50 p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white shadow-sm shadow-violet-200">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v3M12 18v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M3 12h3M18 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"
              />

              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xs font-extrabold text-slate-800">
                AI Resume Fix
              </h3>

              <span className="rounded-full bg-white px-2 py-0.5 text-[8px] font-bold text-violet-600 shadow-sm">
                Recommended
              </span>
            </div>

            <p className="mt-1 text-[10px] leading-4 text-slate-500">
              Automatically improve wording, impact, ATS keywords and
              formatting.
            </p>
          </div>
        </div>

        <button
          id="fixAllResumeBtn"
          type="button"
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-2.5 text-[10px] font-extrabold text-white shadow-sm shadow-violet-200 transition hover:bg-violet-700 active:scale-[.98]"
        >
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v3M12 18v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M3 12h3M18 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"
            />

            <circle cx="12" cy="12" r="4" />
          </svg>
          Fix all issues with AI
        </button>
      </div>

      {/* ===================================================== */}
      {/* CRITICAL ISSUES                                      */}
      {/* ===================================================== */}

      <div>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-xs font-extrabold text-slate-800">
              Needs attention
            </h3>

            <span className="rounded-full bg-red-50 px-1.5 py-0.5 text-[8px] font-bold text-red-600">
              2 critical
            </span>
          </div>

          <button
            type="button"
            id="showAllIssues"
            className="text-[9px] font-bold text-violet-600 hover:text-violet-700"
          >
            View all
          </button>
        </div>

        <div className="space-y-2">
          {/* Issue */}

          <div className="fix-issue group rounded-xl border border-red-100 bg-red-50/40 p-3 transition hover:border-red-200">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" d="M12 9v4" />

                  <path strokeLinecap="round" d="M12 17h.01" />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.3 4.5 2.8 18a2 2 0 0 0 1.75 3h14.9a2 2 0 0 0 1.75-3l-7.5-13.5a2 2 0 0 0-3.4 0Z"
                  />
                </svg>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-[10px] font-extrabold text-slate-800">
                      Experience lacks measurable impact
                    </h4>

                    <p className="mt-1 text-[9px] leading-4 text-slate-500">
                      Add numbers, percentages or measurable outcomes to
                      strengthen your achievements.
                    </p>
                  </div>

                  <span className="shrink-0 rounded bg-red-100 px-1.5 py-0.5 text-[7px] font-bold text-red-600">
                    High
                  </span>
                </div>

                <button
                  type="button"
                  data-fix="impact"
                  className="fix-btn mt-2 rounded-lg bg-white px-2.5 py-1.5 text-[9px] font-bold text-red-600 shadow-sm transition hover:bg-red-50"
                >
                  Fix this →
                </button>
              </div>
            </div>
          </div>

          {/* Issue */}

          <div className="fix-issue group rounded-xl border border-amber-100 bg-amber-50/40 p-3 transition hover:border-amber-200">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="8" />

                  <path strokeLinecap="round" d="M12 8v4l2.5 2" />
                </svg>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-[10px] font-extrabold text-slate-800">
                      Summary could be stronger
                    </h4>

                    <p className="mt-1 text-[9px] leading-4 text-slate-500">
                      Your summary is generic and can better highlight your
                      strongest skills.
                    </p>
                  </div>

                  <span className="shrink-0 rounded bg-amber-100 px-1.5 py-0.5 text-[7px] font-bold text-amber-700">
                    Medium
                  </span>
                </div>

                <button
                  type="button"
                  data-fix="summary"
                  className="fix-btn mt-2 rounded-lg bg-white px-2.5 py-1.5 text-[9px] font-bold text-amber-700 shadow-sm transition hover:bg-amber-50"
                >
                  Improve summary →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* CHECKLIST                                             */}
      {/* ===================================================== */}

      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xs font-extrabold text-slate-800">
            Resume checklist
          </h3>

          <span className="text-[9px] font-bold text-slate-400">
            4 / 6 passed
          </span>
        </div>

        <div className="space-y-2.5">
          {/* Passed */}

          <div className="flex items-center gap-2.5">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5 12 4 4L19 6"
                />
              </svg>
            </div>

            <span className="flex-1 text-[10px] font-medium text-slate-600">
              Contact information
            </span>

            <span className="text-[8px] font-bold text-emerald-600">
              Passed
            </span>
          </div>

          {/* Passed */}

          <div className="flex items-center gap-2.5">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5 12 4 4L19 6"
                />
              </svg>
            </div>

            <span className="flex-1 text-[10px] font-medium text-slate-600">
              ATS-friendly formatting
            </span>

            <span className="text-[8px] font-bold text-emerald-600">
              Passed
            </span>
          </div>

          {/* Passed */}

          <div className="flex items-center gap-2.5">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5 12 4 4L19 6"
                />
              </svg>
            </div>

            <span className="flex-1 text-[10px] font-medium text-slate-600">
              Skills section
            </span>

            <span className="text-[8px] font-bold text-emerald-600">
              Passed
            </span>
          </div>

          {/* Passed */}

          <div className="flex items-center gap-2.5">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5 12 4 4L19 6"
                />
              </svg>
            </div>

            <span className="flex-1 text-[10px] font-medium text-slate-600">
              Education
            </span>

            <span className="text-[8px] font-bold text-emerald-600">
              Passed
            </span>
          </div>

          {/* Warning */}

          <div className="flex items-center gap-2.5">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-50 text-amber-600">
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="9" />

                <path strokeLinecap="round" d="M12 7v5" />

                <path strokeLinecap="round" d="M12 16h.01" />
              </svg>
            </div>

            <span className="flex-1 text-[10px] font-medium text-slate-600">
              Quantified achievements
            </span>

            <span className="text-[8px] font-bold text-amber-600">Improve</span>
          </div>

          {/* Warning */}

          <div className="flex items-center gap-2.5">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-50 text-amber-600">
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="9" />

                <path strokeLinecap="round" d="M12 7v5" />

                <path strokeLinecap="round" d="M12 16h.01" />
              </svg>
            </div>

            <span className="flex-1 text-[10px] font-medium text-slate-600">
              Keyword optimization
            </span>

            <span className="text-[8px] font-bold text-amber-600">Improve</span>
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* IMPROVEMENT CATEGORIES                                */}
      {/* ===================================================== */}

      <div>
        <h3 className="mb-2 text-xs font-extrabold text-slate-800">
          Analyze by category
        </h3>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            data-category="content"
            className="fix-category rounded-xl border border-slate-200 bg-white p-3 text-left transition hover:border-violet-200 hover:bg-violet-50/40"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 4h14v16H5z"
                  />

                  <path strokeLinecap="round" d="M8 8h8M8 12h8M8 16h5" />
                </svg>
              </span>

              <span className="text-[9px] font-bold text-amber-600">2</span>
            </div>

            <div className="mt-2 text-[10px] font-extrabold text-slate-700">
              Content
            </div>

            <div className="mt-0.5 text-[8px] text-slate-400">
              Clarity & impact
            </div>
          </button>

          <button
            type="button"
            data-category="ats"
            className="fix-category rounded-xl border border-slate-200 bg-white p-3 text-left transition hover:border-violet-200 hover:bg-violet-50/40"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="6" />

                  <path strokeLinecap="round" d="m16 16 4 4" />

                  <path strokeLinecap="round" d="M8.5 11h5M11 8.5v5" />
                </svg>
              </span>

              <span className="text-[9px] font-bold text-amber-600">1</span>
            </div>

            <div className="mt-2 text-[10px] font-extrabold text-slate-700">
              ATS
            </div>

            <div className="mt-0.5 text-[8px] text-slate-400">
              Keywords & parsing
            </div>
          </button>

          <button
            type="button"
            data-category="grammar"
            className="fix-category rounded-xl border border-slate-200 bg-white p-3 text-left transition hover:border-violet-200 hover:bg-violet-50/40"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h10M4 18h7"
                  />
                </svg>
              </span>

              <span className="text-[9px] font-bold text-emerald-600">✓</span>
            </div>

            <div className="mt-2 text-[10px] font-extrabold text-slate-700">
              Grammar
            </div>

            <div className="mt-0.5 text-[8px] text-slate-400">
              Spelling & language
            </div>
          </button>

          <button
            type="button"
            data-category="formatting"
            className="fix-category rounded-xl border border-slate-200 bg-white p-3 text-left transition hover:border-violet-200 hover:bg-violet-50/40"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" />

                  <path strokeLinecap="round" d="M8 9h8M8 13h5M8 17h8" />
                </svg>
              </span>

              <span className="text-[9px] font-bold text-emerald-600">✓</span>
            </div>

            <div className="mt-2 text-[10px] font-extrabold text-slate-700">
              Formatting
            </div>

            <div className="mt-0.5 text-[8px] text-slate-400">
              Structure & layout
            </div>
          </button>
        </div>
      </div>

      {/* ===================================================== */}
      {/* FOOTER                                                 */}
      {/* ===================================================== */}

      <div className="rounded-xl bg-slate-50 px-3 py-2.5">
        <div className="flex items-center gap-2">
          <svg
            className="h-3.5 w-3.5 shrink-0 text-slate-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="9" />

            <path strokeLinecap="round" d="M12 11v5" />

            <path strokeLinecap="round" d="M12 8h.01" />
          </svg>

          <p className="text-[8px] leading-3.5 text-slate-400">
            Changes are suggested by AI and won't be applied until you approve
            them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
