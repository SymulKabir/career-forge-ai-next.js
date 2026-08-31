"use client";

import { useMemo, useState } from "react";

type Job = {
  id: number;
  title: string;
  company: string;
  initial: string;
  logoClass: string;
  match: number;
  location: string;
  type: string;
  salary: string;
  saved: string;
  skills: string[];
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Google",
    initial: "G",
    logoClass: "bg-slate-50 text-blue-600",
    match: 95,
    location: "Remote",
    type: "Full-time",
    salary: "$120k – $160k",
    saved: "Saved 2 days ago",
    skills: ["React", "Node.js", "TypeScript"],
  },
  {
    id: 2,
    title: "React Developer",
    company: "Microsoft",
    initial: "M",
    logoClass: "bg-blue-50 text-blue-600",
    match: 90,
    location: "Remote",
    type: "Full-time",
    salary: "$110k – $145k",
    saved: "Saved 3 days ago",
    skills: ["React", "TypeScript", "Redux"],
  },
  {
    id: 3,
    title: "Senior UI Developer",
    company: "Shopify",
    initial: "S",
    logoClass: "bg-green-50 text-green-600",
    match: 88,
    location: "Remote",
    type: "Full-time",
    salary: "$100k – $130k",
    saved: "Saved 5 days ago",
    skills: ["React", "CSS", "UI/UX"],
  },
  {
    id: 4,
    title: "Frontend Engineer",
    company: "Amazon",
    initial: "A",
    logoClass: "bg-slate-100 text-slate-700",
    match: 87,
    location: "Remote",
    type: "Full-time",
    salary: "$130k – $170k",
    saved: "Saved 1 week ago",
    skills: ["JavaScript", "React", "AWS"],
  },
];

export default function SavedJobsPage() {
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All jobs");
  const [sortBy, setSortBy] = useState("Best match");

  const filteredJobs = useMemo(() => {
    let result = [...jobs];

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (job) =>
          job.title.toLowerCase().includes(query) ||
          job.company.toLowerCase().includes(query),
      );
    }

    if (selectedStatus === "80%+ Match") {
      result = result.filter((job) => job.match >= 80);
    }

    if (sortBy === "Best match") {
      result.sort((a, b) => b.match - a.match);
    }

    if (sortBy === "Recently saved") {
      result.sort((a, b) => a.id - b.id);
    }

    return result;
  }, [search, selectedStatus, sortBy]);

  return (
    <div className="mx-auto max-w-[1500px] space-y-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      {/* PAGE HEADER */}
      <section>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-violet-600">
              <span>♡</span>
              Your opportunities
            </div>

            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Saved Jobs
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Keep track of the opportunities you're interested in and apply
              when you're ready.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m20 20-4-4" />
            </svg>

            Find More Jobs
          </button>
        </div>
      </section>

      {/* SUMMARY STATS */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {/* Saved */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 4h12v17l-6-3-6 3V4Z"
                />
              </svg>
            </div>

            <span className="text-[10px] font-bold text-violet-600">
              Total
            </span>
          </div>

          <div className="mt-4 text-2xl font-extrabold">{jobs.length}</div>

          <div className="mt-1 text-xs text-slate-400">Saved jobs</div>
        </div>

        {/* High Match */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="8" />
                <path strokeLinecap="round" d="m9 12 2 2 4-4" />
              </svg>
            </div>

            <span className="text-[10px] font-bold text-emerald-600">
              80%+
            </span>
          </div>

          <div className="mt-4 text-2xl font-extrabold">
            {jobs.filter((job) => job.match >= 80).length}
          </div>

          <div className="mt-1 text-xs text-slate-400">Strong matches</div>
        </div>

        {/* Applications */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <rect x="4" y="3" width="16" height="18" rx="2" />
                <path strokeLinecap="round" d="M8 8h8M8 12h8M8 16h5" />
              </svg>
            </div>

            <span className="text-[10px] font-bold text-blue-600">Active</span>
          </div>

          <div className="mt-4 text-2xl font-extrabold">4</div>

          <div className="mt-1 text-xs text-slate-400">Applications</div>
        </div>

        {/* Closing Soon */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="8" />
                <path strokeLinecap="round" d="M12 8v4l2.5 2.5" />
              </svg>
            </div>

            <span className="text-[10px] font-bold text-orange-500">
              Attention
            </span>
          </div>

          <div className="mt-4 text-2xl font-extrabold">3</div>

          <div className="mt-1 text-xs text-slate-400">Closing soon</div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          {/* Search */}
          <div className="relative flex-1 xl:max-w-md">
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
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by job title or company..."
              className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-xs outline-none transition focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedStatus("All jobs")}
              className={`inline-flex h-10 items-center gap-2 rounded-xl border px-3 text-xs font-semibold ${
                selectedStatus === "All jobs"
                  ? "border-violet-200 bg-violet-50 text-violet-600"
                  : "border-slate-200 bg-white text-slate-600 hover:border-violet-200 hover:text-violet-600"
              }`}
            >
              All jobs
              <span className="text-slate-400">{jobs.length}</span>

              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setSelectedStatus("80%+ Match")}
              className={`inline-flex h-10 items-center gap-2 rounded-xl border px-3 text-xs font-semibold ${
                selectedStatus === "80%+ Match"
                  ? "border-violet-200 bg-violet-50 text-violet-600"
                  : "border-slate-200 bg-white text-slate-600 hover:border-violet-200 hover:text-violet-600"
              }`}
            >
              Match score

              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 hover:border-violet-200 hover:text-violet-600"
            >
              Location

              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 hover:border-violet-200 hover:text-violet-600"
            >
              Status

              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
              title="More filters"
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
                  d="M4 6h16M7 12h10M10 18h4"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Sort */}
        <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-slate-400">
            Showing{" "}
            <span className="font-bold text-slate-700">
              {filteredJobs.length} saved jobs
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Sort by</span>

            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="cursor-pointer bg-transparent text-xs font-semibold text-slate-700 outline-none"
            >
              <option value="Best match">Best match</option>
              <option value="Recently saved">Recently saved</option>
            </select>
          </div>
        </div>
      </section>

      {/* JOB LIST */}
      <section className="space-y-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <article
              key={job.id}
              className="job-card rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition hover:border-violet-200 sm:p-6"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
                <div className="flex min-w-0 flex-1 gap-4">
                  {/* Company Logo */}
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-xl font-extrabold ${job.logoClass}`}
                  >
                    {job.initial}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-sm font-bold text-slate-900 sm:text-base">
                        {job.title}
                      </h2>

                      <span
                        className={`rounded-full px-2 py-1 text-[9px] font-bold ${
                          job.match >= 90
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-amber-50 text-amber-600"
                        }`}
                      >
                        {job.match}% MATCH
                      </span>
                    </div>

                    <p className="mt-1 text-xs font-medium text-slate-500">
                      {job.company}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z"
                          />
                          <circle cx="12" cy="10" r="2" />
                        </svg>

                        {job.location}
                      </span>

                      <span>•</span>
                      <span>{job.type}</span>

                      <span>•</span>
                      <span>{job.salary}</span>

                      <span>•</span>
                      <span>{job.saved}</span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-slate-500"
                        >
                          {skill}
                        </span>
                      ))}

                      <span className="rounded-lg bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
                        +{job.id + 3}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-row items-center justify-between gap-3 border-t border-slate-100 pt-4 lg:border-0 lg:pt-0">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="favorite-btn flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition hover:bg-violet-100"
                      title="Remove from saved jobs"
                    >
                      <svg
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 4h12v17l-6-3-6 3V4Z" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      className="hidden h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 sm:flex"
                      title="More"
                    >
                      ⋯
                    </button>
                  </div>

                  <button
                    type="button"
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-xs font-bold text-white transition hover:bg-violet-600"
                  >
                    View Job

                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        d="M5 12h14M13 6l6 6-6 6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <div className="text-sm font-bold text-slate-700">
              No saved jobs found
            </div>

            <p className="mt-1 text-xs text-slate-400">
              Try changing your search or filters.
            </p>
          </div>
        )}
      </section>

      {/* PAGINATION */}
      <section className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-card sm:flex-row">
        <div className="text-xs text-slate-400">
          Showing <span className="font-semibold text-slate-700">1–4</span> of{" "}
          <span className="font-semibold text-slate-700">12</span> saved jobs
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            disabled
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400"
          >
            ‹
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-xs font-bold text-white"
          >
            1
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-semibold text-slate-600 hover:bg-violet-50 hover:text-violet-600"
          >
            2
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-semibold text-slate-600 hover:bg-violet-50 hover:text-violet-600"
          >
            3
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50"
          >
            ›
          </button>
        </div>
      </section>

      {/* AI TIP */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 p-6 text-white shadow-lg shadow-violet-200">
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
              ✦
            </div>

            <div>
              <div className="text-sm font-bold">AI application tip</div>

              <p className="mt-1 max-w-2xl text-xs leading-5 text-violet-100">
                You have 7 saved jobs with an 80%+ match score. Prioritize
                these opportunities to maximize your chances of getting
                interviews.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="shrink-0 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-violet-700 transition hover:-translate-y-0.5"
          >
            View Top Matches →
          </button>
        </div>
      </section>
    </div>
  );
}