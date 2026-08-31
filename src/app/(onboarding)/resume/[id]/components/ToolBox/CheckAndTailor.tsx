import React from "react";

const Index = () => {
  return <div id="checkTailorPanel" className="space-y-4">
    {/* ========================================================= */}
    {/* HEADER                                                    */}
    {/* ========================================================= */}

    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="6" />

              <path strokeLinecap="round" d="m16 16 4 4" />

              <path strokeLinecap="round" d="M8.5 11h5M11 8.5v5" />
            </svg>
          </div>

          <div className="min-w-0">
            <h2 className="text-sm font-extrabold text-slate-900">
              Check & Tailor
            </h2>

            <p className="mt-1 text-[10px] leading-4 text-slate-500">
              Compare your resume against a specific job and discover exactly
              what you should improve.
            </p>
          </div>
        </div>

        <span className="shrink-0 rounded-full bg-blue-50 px-2 py-1 text-[8px] font-bold text-blue-600">
          AI POWERED
        </span>
      </div>
    </div>

    {/* ========================================================= */}
    {/* JOB INFORMATION                                           */}
    {/* ========================================================= */}

    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-xs font-extrabold text-slate-900">
            Job information
          </h3>

          <p className="mt-1 text-[10px] text-slate-400">
            Add basic information about the position.
          </p>
        </div>

        <span className="text-[9px] font-semibold text-slate-400">
          Optional
        </span>
      </div>

      {/* Job title */}

      <label className="block">
        <span className="mb-1.5 block text-[10px] font-bold text-slate-500">
          Job title
        </span>

        <input
          id="checkJobTitle"
          type="text"
          placeholder="e.g. Senior Full Stack Developer"
          className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
        />
      </label>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {/* Company */}

        <label>
          <span className="mb-1.5 block text-[10px] font-bold text-slate-500">
            Company
          </span>

          <input
            id="checkCompany"
            type="text"
            placeholder="e.g. Microsoft"
            className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
          />
        </label>

        {/* Location */}

        <label>
          <span className="mb-1.5 block text-[10px] font-bold text-slate-500">
            Location
          </span>

          <input
            id="checkLocation"
            type="text"
            placeholder="e.g. Berlin, Germany"
            className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
          />
        </label>
      </div>
    </div>

    {/* ========================================================= */}
    {/* JOB DESCRIPTION                                           */}
    {/* ========================================================= */}

    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xs font-extrabold text-slate-900">
            Job description
          </h3>

          <p className="mt-1 text-[10px] leading-4 text-slate-400">
            Copy the complete job posting and paste it below.
          </p>
        </div>

        {/* Character counter */}

        <span
          id="jobDescriptionCounter"
          className="shrink-0 text-[9px] font-bold text-slate-400"
        >
          0 characters
        </span>
      </div>

      {/* Paste area */}

      <div className="relative mt-3">
        <textarea
          id="jobDescription"
          rows={12}
          placeholder={`Paste the complete job description here...

Example:
About the company
About the role
Responsibilities
Requirements
Technical skills
Education
Benefits
Salary
Location
etc.`}
          className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-[11px] leading-5 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
        />
      </div>

      {/* Paste tips */}

      <div className="mt-3 rounded-xl bg-slate-50 p-3">
        <div className="flex gap-2">
          <svg
            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="9" />

            <path strokeLinecap="round" d="M12 11v5" />

            <path strokeLinecap="round" d="M12 8h.01" />
          </svg>

          <p className="text-[9px] leading-4 text-slate-500">
            For the most accurate analysis, paste the entire job posting rather
            than only the requirements section.
          </p>
        </div>
      </div>

      {/* Actions */}

      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          id="clearJobDescription"
          type="button"
          className="flex h-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-[10px] font-bold text-slate-500 transition hover:border-slate-300 hover:bg-slate-50"
        >
          Clear
        </button>

        <button
          id="analyzeJobBtn"
          type="button"
          className="group flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 text-[10px] font-extrabold text-white shadow-sm shadow-blue-200 transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-[.98]"
        >
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2M19 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            />

            <circle cx="12" cy="12" r="4" />
          </svg>
          Analyze My Resume
        </button>
      </div>
    </div>

    {/* ========================================================= */}
    {/* ANALYZING STATE                                           */}
    {/* ========================================================= */}

    <div
      id="checkTailorLoading"
      className="hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-violet-50 p-5"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
          <svg
            className="h-5 w-5 animate-spin"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="9" className="opacity-25" />

            <path d="M21 12a9 9 0 0 0-9-9" strokeLinecap="round" />
          </svg>
        </div>

        <div>
          <h3 className="text-xs font-extrabold text-slate-900">
            Analyzing your resume...
          </h3>

          <p id="analysisStatus" className="mt-1 text-[10px] text-slate-500">
            Extracting job requirements and keywords
          </p>
        </div>
      </div>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
      </div>
    </div>

    {/* ========================================================= */}
    {/* RESULTS                                                   */}
    {/* ========================================================= */}

    <div id="checkTailorResults" className="hidden space-y-4">
      {/* ===================================================== */}
      {/* OVERALL SCORE                                         */}
      {/* ===================================================== */}

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Overall match
            </span>

            <h3 className="mt-1 text-sm font-extrabold text-slate-900">
              Your resume is a strong match
            </h3>
          </div>

          <div className="relative flex h-16 w-16 items-center justify-center">
            <svg
              className="absolute inset-0 h-full w-full -rotate-90"
              viewBox="0 0 36 36"
            >
              <circle
                cx="18"
                cy="18"
                r="15.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-slate-100"
              />

              <circle
                id="overallScoreCircle"
                cx="18"
                cy="18"
                r="15.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="97.4"
                strokeDashoffset="14"
                className="text-emerald-500"
              />
            </svg>

            <span
              id="overallScore"
              className="text-sm font-extrabold text-slate-900"
            >
              86
            </span>
          </div>
        </div>

        {/* Score breakdown */}

        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <div className="rounded-xl bg-slate-50 p-3">
            <span className="text-[8px] font-bold uppercase text-slate-400">
              ATS
            </span>

            <div className="mt-1 flex items-end gap-1">
              <strong className="text-lg font-extrabold text-emerald-600">
                92
              </strong>

              <span className="mb-1 text-[8px] text-slate-400">/100</span>
            </div>
          </div>

          <div className="rounded-xl bg-slate-50 p-3">
            <span className="text-[8px] font-bold uppercase text-slate-400">
              Keywords
            </span>

            <div className="mt-1 flex items-end gap-1">
              <strong className="text-lg font-extrabold text-blue-600">
                84
              </strong>

              <span className="mb-1 text-[8px] text-slate-400">%</span>
            </div>
          </div>

          <div className="rounded-xl bg-slate-50 p-3">
            <span className="text-[8px] font-bold uppercase text-slate-400">
              Skills
            </span>

            <div className="mt-1 flex items-end gap-1">
              <strong className="text-lg font-extrabold text-violet-600">
                88
              </strong>

              <span className="mb-1 text-[8px] text-slate-400">%</span>
            </div>
          </div>

          <div className="rounded-xl bg-slate-50 p-3">
            <span className="text-[8px] font-bold uppercase text-slate-400">
              Experience
            </span>

            <div className="mt-1 flex items-end gap-1">
              <strong className="text-lg font-extrabold text-emerald-600">
                91
              </strong>

              <span className="mb-1 text-[8px] text-slate-400">%</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* MATCHED / MISSING KEYWORDS                            */}
      {/* ===================================================== */}

      <div className="grid grid-cols-1 gap-4">
        {/* Matched */}

        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xs font-extrabold text-slate-900">
                Matched keywords
              </h3>

              <p className="mt-1 text-[9px] text-slate-500">
                Keywords already present in your resume.
              </p>
            </div>

            <span className="rounded-full bg-emerald-100 px-2 py-1 text-[8px] font-bold text-emerald-700">
              18 found
            </span>
          </div>

          <div id="matchedKeywords" className="mt-3 flex flex-wrap gap-1.5">
            <span className="rounded-lg bg-white px-2 py-1 text-[8px] font-semibold text-emerald-700 shadow-sm">
              React
            </span>

            <span className="rounded-lg bg-white px-2 py-1 text-[8px] font-semibold text-emerald-700 shadow-sm">
              Node.js
            </span>

            <span className="rounded-lg bg-white px-2 py-1 text-[8px] font-semibold text-emerald-700 shadow-sm">
              TypeScript
            </span>

            <span className="rounded-lg bg-white px-2 py-1 text-[8px] font-semibold text-emerald-700 shadow-sm">
              Docker
            </span>

            <span className="rounded-lg bg-white px-2 py-1 text-[8px] font-semibold text-emerald-700 shadow-sm">
              AWS
            </span>
          </div>
        </div>

        {/* Missing */}

        <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xs font-extrabold text-slate-900">
                Missing keywords
              </h3>

              <p className="mt-1 text-[9px] text-slate-500">
                Important terms from the job that are missing.
              </p>
            </div>

            <span className="rounded-full bg-amber-100 px-2 py-1 text-[8px] font-bold text-amber-700">
              5 missing
            </span>
          </div>

          <div id="missingKeywords" className="mt-3 flex flex-wrap gap-1.5">
            <span className="rounded-lg border border-amber-200 bg-white px-2 py-1 text-[8px] font-semibold text-amber-700">
              Kubernetes
            </span>

            <span className="rounded-lg border border-amber-200 bg-white px-2 py-1 text-[8px] font-semibold text-amber-700">
              GraphQL
            </span>

            <span className="rounded-lg border border-amber-200 bg-white px-2 py-1 text-[8px] font-semibold text-amber-700">
              CI/CD
            </span>
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* AI SUGGESTIONS                                        */}
      {/* ===================================================== */}

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
            ✦
          </div>

          <div>
            <h3 className="text-xs font-extrabold text-slate-900">
              AI improvement suggestions
            </h3>

            <p className="mt-1 text-[10px] leading-4 text-slate-400">
              Changes that could improve your match for this position.
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          {/* Suggestion */}

          <div className="rounded-xl border border-slate-200 p-3">
            <div className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-[10px] font-extrabold text-amber-600">
                1
              </span>

              <div className="min-w-0">
                <h4 className="text-[10px] font-extrabold text-slate-800">
                  Add Kubernetes experience
                </h4>

                <p className="mt-1 text-[9px] leading-4 text-slate-500">
                  Kubernetes is an important requirement in this job description
                  but is not clearly represented in your current resume.
                </p>

                <button
                  type="button"
                  className="mt-2 text-[9px] font-bold text-violet-600 hover:text-violet-700"
                >
                  Improve this section →
                </button>
              </div>
            </div>
          </div>

          {/* Suggestion */}

          <div className="rounded-xl border border-slate-200 p-3">
            <div className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[10px] font-extrabold text-blue-600">
                2
              </span>

              <div className="min-w-0">
                <h4 className="text-[10px] font-extrabold text-slate-800">
                  Strengthen your experience bullets
                </h4>

                <p className="mt-1 text-[9px] leading-4 text-slate-500">
                  Your experience matches the role, but several bullets focus on
                  responsibilities instead of measurable achievements.
                </p>

                <button
                  type="button"
                  className="mt-2 text-[9px] font-bold text-violet-600 hover:text-violet-700"
                >
                  Improve this section →
                </button>
              </div>
            </div>
          </div>

          {/* Suggestion */}

          <div className="rounded-xl border border-slate-200 p-3">
            <div className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-[10px] font-extrabold text-violet-600">
                3
              </span>

              <div className="min-w-0">
                <h4 className="text-[10px] font-extrabold text-slate-800">
                  Match the job&apos;s terminology
                </h4>

                <p className="mt-1 text-[9px] leading-4 text-slate-500">
                  Some of your skills use alternative terminology. Consider
                  using the exact terminology used in the job posting where it
                  accurately reflects your experience.
                </p>

                <button
                  type="button"
                  className="mt-2 text-[9px] font-bold text-violet-600 hover:text-violet-700"
                >
                  Review keywords →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* TAILOR RESUME CTA                                     */}
      {/* ===================================================== */}

      <div className="rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 p-5 text-white shadow-lg shadow-violet-200">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
            ✦
          </div>

          <div>
            <h3 className="text-sm font-extrabold">
              Ready to tailor your resume?
            </h3>

            <p className="mt-1 text-[10px] leading-4 text-white/75">
              Let AI optimize your resume for this specific job while keeping
              your experience truthful and ATS-friendly.
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            id="tailorResumeBtn"
            type="button"
            className="flex h-10 flex-1 items-center justify-center rounded-xl bg-white px-4 text-[10px] font-extrabold text-violet-600 shadow-sm transition hover:bg-violet-50 active:scale-[.98]"
          >
            ✦ Tailor My Resume
          </button>

          <button
            id="reanalyzeResumeBtn"
            type="button"
            className="flex h-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 text-[10px] font-bold text-white transition hover:bg-white/15"
          >
            Re-analyze
          </button>
        </div>
      </div>
    </div>
  </div>;
};

export default Index;
