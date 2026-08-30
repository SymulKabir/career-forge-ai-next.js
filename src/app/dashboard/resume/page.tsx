import React from "react"
import DashboardLayout from "@/src/layout/DashboardLayout"

const Index = () => {
  return <DashboardLayout>
    <section>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-violet-600">
            <span>✦</span>
            Resume Workspace
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            My <span className="gradient-text">Resumes</span>
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Create, manage, and optimize your resumes for your next career
            opportunity.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14M5 12h14"
            />
          </svg>

          Create New Resume
        </button>
      </div>
    </section>

    {/* RESUME STATS */}
    <section className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {/* Total Resumes */}
      <div className="card-hover rounded-2xl border border-slate-200 bg-white p-4 shadow-card sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600 sm:h-11 sm:w-11">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
              />
              <path
                strokeLinecap="round"
                d="M14 3v5h5M8 13h8M8 17h6"
              />
            </svg>
          </div>
        </div>

        <div className="mt-4 text-[11px] font-medium text-slate-400 sm:text-xs">
          Total Resumes
        </div>

        <div className="mt-1 text-2xl font-extrabold sm:text-3xl">3</div>

        <div className="mt-1 text-[10px] text-slate-400 sm:text-xs">
          Saved resumes
        </div>
      </div>

      {/* Best ATS */}
      <div className="card-hover rounded-2xl border border-slate-200 bg-white p-4 shadow-card sm:p-5">
        <div className="flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 sm:h-11 sm:w-11">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="8" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>

          <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-600 sm:text-[10px]">
            Excellent
          </span>
        </div>

        <div className="mt-4 text-[11px] font-medium text-slate-400 sm:text-xs">
          Best ATS Score
        </div>

        <div className="mt-1 text-2xl font-extrabold sm:text-3xl">92</div>

        <div className="mt-1 text-[10px] text-slate-400 sm:text-xs">
          Excellent compatibility
        </div>
      </div>

      {/* Profile */}
      <div className="card-hover rounded-2xl border border-slate-200 bg-white p-4 shadow-card sm:p-5">
        <div className="flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:h-11 sm:w-11">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="8" r="3" />
              <path
                strokeLinecap="round"
                d="M5 20c.7-3.5 3-5 7-5s6.3 1.5 7 5"
              />
            </svg>
          </div>
        </div>

        <div className="mt-4 text-[11px] font-medium text-slate-400 sm:text-xs">
          Profile Completion
        </div>

        <div className="mt-1 text-2xl font-extrabold sm:text-3xl">86%</div>

        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-violet-600 to-blue-500" />
        </div>
      </div>

      {/* Last Updated */}
      <div className="card-hover rounded-2xl border border-slate-200 bg-white p-4 shadow-card sm:p-5">
        <div className="flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500 sm:h-11 sm:w-11">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="8" />
              <path strokeLinecap="round" d="M12 8v4l2.5 2.5" />
            </svg>
          </div>
        </div>

        <div className="mt-4 text-[11px] font-medium text-slate-400 sm:text-xs">
          Last Updated
        </div>

        <div className="mt-1 text-base font-extrabold sm:text-xl">Today</div>

        <div className="mt-1 text-[10px] text-slate-400 sm:text-xs">
          10:30 AM
        </div>
      </div>
    </section>

    {/* TOOLBAR */}
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card sm:p-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}
        <div className="relative w-full lg:max-w-md">
          <svg
            className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" />
            <path strokeLinecap="round" d="m20 20-4-4" />
          </svg>

          <input
            type="text"
            placeholder="Search your resumes..."
            className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-xs outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100 sm:text-sm"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2">
          <select className="h-10 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs font-semibold text-slate-600 outline-none focus:border-violet-300 sm:flex-none sm:text-sm">
            <option>All Resumes</option>
            <option>Published</option>
            <option>Drafts</option>
          </select>

          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M4 7h16M7 12h10M10 17h4" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    {/* PRIMARY RESUME */}
    <section>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold">Your resumes</h2>

          <p className="mt-1 text-xs text-slate-400">
            Manage and optimize your saved resumes.
          </p>
        </div>

        <span className="hidden rounded-full bg-violet-50 px-3 py-1.5 text-[10px] font-bold text-violet-600 sm:inline-flex">
          3 resumes
        </span>
      </div>

      {/* Resume Grid */}
      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {/* Resume Card 1 */}
        <article className="card-hover overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-card">
          {/* Preview */}
          <div className="relative bg-gradient-to-br from-violet-50 via-white to-blue-50 p-5">
            {/* Active Badge */}
            <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-2.5 py-1 text-[9px] font-bold text-white shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Primary Resume
            </div>

            {/* More */}
            <button
              type="button"
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 text-slate-500 shadow-sm backdrop-blur hover:text-violet-600"
            >
              ⋮
            </button>

            {/* Paper */}
            <div className="resume-paper mx-auto mt-8 max-w-[210px] overflow-hidden rounded-md bg-white p-4 shadow-xl ring-1 ring-slate-200">
              <div className="border-b border-slate-200 pb-3">
                <div className="text-[11px] font-extrabold text-slate-900">
                  Saimon Pranta
                </div>

                <div className="mt-1 text-[6px] font-medium text-violet-600">
                  FULL STACK DEVELOPER
                </div>

                <div className="mt-1 text-[5px] text-slate-400">
                  Dhaka, Bangladesh · saimon@example.com
                </div>
              </div>

              <div className="mt-3">
                <div className="text-[6px] font-bold uppercase tracking-wider text-slate-700">
                  Summary
                </div>

                <div className="mt-1 space-y-1">
                  <div className="h-1 w-full rounded bg-slate-100" />
                  <div className="h-1 w-[94%] rounded bg-slate-100" />
                  <div className="h-1 w-[82%] rounded bg-slate-100" />
                </div>
              </div>

              <div className="mt-3">
                <div className="text-[6px] font-bold uppercase tracking-wider text-slate-700">
                  Experience
                </div>

                <div className="mt-2">
                  <div className="h-1 w-[65%] rounded bg-violet-100" />
                  <div className="mt-1 h-1 w-full rounded bg-slate-100" />
                  <div className="mt-1 h-1 w-[88%] rounded bg-slate-100" />
                  <div className="mt-1 h-1 w-[76%] rounded bg-slate-100" />
                </div>

                <div className="mt-2">
                  <div className="h-1 w-[55%] rounded bg-violet-100" />
                  <div className="mt-1 h-1 w-full rounded bg-slate-100" />
                  <div className="mt-1 h-1 w-[84%] rounded bg-slate-100" />
                </div>
              </div>

              <div className="mt-3">
                <div className="text-[6px] font-bold uppercase tracking-wider text-slate-700">
                  Skills
                </div>

                <div className="mt-1 flex flex-wrap gap-1">
                  <span className="h-2 w-8 rounded bg-violet-100" />
                  <span className="h-2 w-10 rounded bg-violet-100" />
                  <span className="h-2 w-7 rounded bg-violet-100" />
                  <span className="h-2 w-9 rounded bg-violet-100" />
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="truncate text-sm font-bold text-slate-900">
                  Senior Full Stack Developer
                </h3>

                <p className="mt-1 text-[11px] text-slate-400">
                  Modern ATS Resume · Updated today
                </p>
              </div>

              <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-600">
                Active
              </span>
            </div>

            {/* ATS */}
            <div className="mt-5 rounded-xl bg-slate-50 p-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold text-slate-500">
                  ATS Compatibility
                </span>

                <span className="text-sm font-extrabold text-emerald-600">
                  92%
                </span>
              </div>

              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-3 py-2.5 text-xs font-bold text-white transition hover:-translate-y-0.5"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />

                  <path
                    strokeLinecap="round"
                    d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
                  />
                </svg>

                Preview
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-700 transition hover:border-violet-200 hover:text-violet-600"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    d="M12 4v11M8 11l4 4 4-4"
                  />

                  <path strokeLinecap="round" d="M5 20h14" />
                </svg>

                Download
              </button>
            </div>

            <button
              type="button"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-xs font-bold text-slate-600 transition hover:bg-violet-50 hover:text-violet-600"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" d="M12 3v18M3 12h18" />
              </svg>

              Edit Resume
            </button>
          </div>
        </article>

        {/* Resume Card 2 */}
        <article className="card-hover overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
          <div className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-5">
            <button
              type="button"
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 text-slate-500 shadow-sm backdrop-blur hover:text-violet-600"
            >
              ⋮
            </button>

            <div className="resume-paper mx-auto mt-8 max-w-[210px] overflow-hidden rounded-md bg-white p-4 shadow-xl ring-1 ring-slate-200">
              <div className="border-b border-slate-200 pb-3">
                <div className="text-[11px] font-extrabold text-slate-900">
                  Saimon Pranta
                </div>

                <div className="mt-1 text-[6px] font-medium text-blue-600">
                  SOFTWARE ENGINEER
                </div>

                <div className="mt-1 text-[5px] text-slate-400">
                  Dhaka, Bangladesh · saimon@example.com
                </div>
              </div>

              <div className="mt-3">
                <div className="text-[6px] font-bold uppercase tracking-wider text-slate-700">
                  Professional Summary
                </div>

                <div className="mt-1 space-y-1">
                  <div className="h-1 w-full rounded bg-slate-100" />
                  <div className="h-1 w-[92%] rounded bg-slate-100" />
                  <div className="h-1 w-[75%] rounded bg-slate-100" />
                </div>
              </div>

              <div className="mt-3">
                <div className="text-[6px] font-bold uppercase tracking-wider text-slate-700">
                  Experience
                </div>

                <div className="mt-2 space-y-1">
                  <div className="h-1 w-[70%] rounded bg-blue-100" />
                  <div className="h-1 w-full rounded bg-slate-100" />
                  <div className="h-1 w-[86%] rounded bg-slate-100" />
                  <div className="h-1 w-[70%] rounded bg-slate-100" />
                </div>
              </div>

              <div className="mt-3">
                <div className="text-[6px] font-bold uppercase tracking-wider text-slate-700">
                  Projects
                </div>

                <div className="mt-2 space-y-1">
                  <div className="h-1 w-[65%] rounded bg-blue-100" />
                  <div className="h-1 w-full rounded bg-slate-100" />
                  <div className="h-1 w-[82%] rounded bg-slate-100" />
                </div>
              </div>

              <div className="mt-3">
                <div className="text-[6px] font-bold uppercase tracking-wider text-slate-700">
                  Skills
                </div>

                <div className="mt-1 flex flex-wrap gap-1">
                  <span className="h-2 w-8 rounded bg-blue-100" />
                  <span className="h-2 w-10 rounded bg-blue-100" />
                  <span className="h-2 w-7 rounded bg-blue-100" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="truncate text-sm font-bold">
                  Software Engineer
                </h3>

                <p className="mt-1 text-[11px] text-slate-400">
                  Tech Resume · Updated 2 days ago
                </p>
              </div>

              <span className="shrink-0 rounded-full bg-blue-50 px-2 py-1 text-[9px] font-bold text-blue-600">
                Draft
              </span>
            </div>

            <div className="mt-5 rounded-xl bg-slate-50 p-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold text-slate-500">
                  ATS Compatibility
                </span>

                <span className="text-sm font-extrabold text-blue-600">78%</span>
              </div>

              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-3 py-2.5 text-xs font-bold text-white transition hover:-translate-y-0.5"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />

                  <path
                    strokeLinecap="round"
                    d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
                  />
                </svg>

                Preview
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-700 transition hover:border-violet-200 hover:text-violet-600"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" d="M15 6 9 12l6 6" />
                  <path strokeLinecap="round" d="M9 12h11" />
                </svg>

                Edit
              </button>
            </div>

            <button
              type="button"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-xs font-bold text-slate-600 transition hover:bg-violet-50 hover:text-violet-600"
            >
              ✦
              Improve with AI
            </button>
          </div>
        </article>

        {/* Create New Card */}
        <button
          type="button"
          className="group flex min-h-[500px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white p-6 text-center shadow-card transition hover:border-violet-300 hover:bg-violet-50/30 lg:min-h-0"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 transition group-hover:scale-110 group-hover:bg-violet-100">
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v14M5 12h14"
              />
            </svg>
          </div>

          <h3 className="mt-5 text-base font-bold text-slate-800">
            Create a new resume
          </h3>

          <p className="mt-2 max-w-xs text-xs leading-5 text-slate-400">
            Start from scratch or let AI build a resume using your professional
            profile.
          </p>

          <span className="mt-5 inline-flex items-center gap-2 rounded-xl bg-violet-50 px-4 py-2.5 text-xs font-bold text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
            Create Resume
            <span>→</span>
          </span>
        </button>
      </div>
    </section>

    {/* AI RESUME INSIGHT */}
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 p-6 text-white shadow-lg shadow-violet-200 sm:p-7">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-24 left-10 h-52 w-52 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-violet-200">
            <span className="text-lg">✦</span>
            AI Resume Insight
          </div>

          <h2 className="mt-3 text-xl font-extrabold sm:text-2xl">
            Your resume is strong — but it can be better.
          </h2>

          <p className="mt-3 text-sm leading-6 text-violet-100">
            Your current resume has a strong ATS score. Adding measurable
            achievements and a few role-specific keywords could improve your
            chances of getting shortlisted.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-semibold">
              Add measurable results
            </span>

            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-semibold">
              Improve keywords
            </span>

            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-semibold">
              Optimize summary
            </span>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-violet-700 shadow-lg transition hover:-translate-y-0.5"
        >
          Improve Resume with AI

          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>

    {/* RECENT RESUME ACTIVITY */}
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold">Resume activity</h2>

          <p className="mt-1 text-xs text-slate-400">
            Recent changes and actions
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg bg-slate-50 px-3 py-2 text-[10px] font-semibold text-slate-600 transition hover:bg-violet-50 hover:text-violet-600 sm:text-xs"
        >
          View all
        </button>
      </div>

      <div className="mt-6 divide-y divide-slate-100">
        {/* Activity 1 */}
        <div className="flex gap-3 py-4 first:pt-0">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-sm font-bold text-emerald-600">
            ✓
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs font-bold text-slate-800 sm:text-sm">
                Resume updated
              </div>

              <div className="text-[9px] text-slate-400 sm:text-[10px]">
                Today, 10:30 AM
              </div>
            </div>

            <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
              Senior Full Stack Developer resume was updated.
            </p>
          </div>
        </div>

        {/* Activity 2 */}
        <div className="flex gap-3 py-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
            ◎
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs font-bold text-slate-800 sm:text-sm">
                ATS analysis completed
              </div>

              <div className="text-[9px] text-slate-400 sm:text-[10px]">
                Yesterday, 4:45 PM
              </div>
            </div>

            <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
              ATS score increased from 86% to 92%.
            </p>
          </div>
        </div>

        {/* Activity 3 */}
        <div className="flex gap-3 py-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-sm font-bold text-violet-600">
            ✦
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs font-bold text-slate-800 sm:text-sm">
                AI optimization completed
              </div>

              <div className="text-[9px] text-slate-400 sm:text-[10px]">
                2 days ago
              </div>
            </div>

            <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
              AI improved your professional summary and keywords.
            </p>
          </div>
        </div>

        {/* Activity 4 */}
        <div className="flex gap-3 py-4 last:pb-0">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-sm font-bold text-orange-500">
            ↓
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs font-bold text-slate-800 sm:text-sm">
                Resume downloaded
              </div>

              <div className="text-[9px] text-slate-400 sm:text-[10px]">
                3 days ago
              </div>
            </div>

            <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
              Senior Full Stack Developer resume downloaded as PDF.
            </p>
          </div>
        </div>
      </div>
    </section>
  </DashboardLayout>

}


export default Index;
