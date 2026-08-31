"use client";

import { useState } from "react";

interface JobCardProps {
  initial: string;
  initialClass: string;
  title: string;
  company: string;
  location: string;
  type: string;
  skills: string[];
  match: string;
  salary: string;
  support: string;
}

interface MatchBarProps {
  label: string;
  value: string;
  width: string;
}

interface PreferenceProps {
  label: string;
  value: string;
}

interface SavedSearchProps {
  title: string;
  description: string;
  count: string;
  date: string;
  empty?: boolean;
}

const Index = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("All job types");

  const handleSearch = () => {
    console.log({
      search,
      location,
      jobType,
    });
  };

  return (
      <div className="mx-auto max-w-[1500px] space-y-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}

        <section className="relative overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-6 shadow-soft sm:p-8">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />

          <div className="absolute -bottom-24 right-40 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_300px] lg:items-center">

            <div>

              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-violet-600">
                ✦ AI-powered job discovery
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                Find jobs that{" "}
                <span className="gradient-text">fit you.</span>
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                CareerForge AI analyzes your resume, skills, experience and
                preferences to find the jobs where you&apos;re most likely to
                succeed.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5"
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

                  Find My Matches
                </button>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-violet-200 hover:text-violet-600"
                >
                  Edit Preferences
                </button>

              </div>

            </div>

            {/* MATCH SCORE */}

            <div className="rounded-2xl border border-white bg-white/80 p-5 shadow-card backdrop-blur">

              <div className="flex items-center justify-between">

                <div>
                  <div className="text-sm font-bold text-slate-800">
                    Profile matchability
                  </div>

                  <div className="mt-1 text-xs text-slate-400">
                    Based on your profile
                  </div>
                </div>

                <div className="text-2xl font-extrabold text-violet-600">
                  92%
                </div>

              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-violet-600 to-blue-500" />
              </div>

              <div className="mt-4 flex items-center gap-2">

                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-600">
                  ✓
                </span>

                <span className="text-xs font-medium text-slate-500">
                  Resume is ready for matching
                </span>

              </div>

            </div>

          </div>
        </section>

        {/* ================================================= */}
        {/* SEARCH / FILTER */}
        {/* ================================================= */}

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-base font-bold">
                Find your next opportunity
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Customize your search to get better matches.
              </p>
            </div>

            <span className="hidden rounded-full bg-violet-50 px-3 py-1.5 text-[10px] font-bold text-violet-600 sm:block">
              AI Matching Enabled
            </span>

          </div>

          {/* SEARCH */}

          <div className="mt-5 grid gap-3 lg:grid-cols-[1.5fr_1fr_1fr_auto]">

            {/* Keyword */}

            <div className="relative">

              <svg
                className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
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
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Job title, skill or keyword"
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100"
              />

            </div>

            {/* Location */}

            <div className="relative">

              <svg
                className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
                />

                <circle cx="12" cy="9" r="2.5" />
              </svg>

              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100"
              />

            </div>

            {/* Job Type */}

            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="h-11 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-600 outline-none transition focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100"
            >
              <option>All job types</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>

            <button
              type="button"
              onClick={handleSearch}
              className="h-11 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 text-sm font-bold text-white shadow-lg shadow-violet-100 transition hover:-translate-y-0.5"
            >
              Search
            </button>

          </div>

          {/* FILTERS */}

          <div className="mt-4 flex flex-wrap gap-2">

            <button
              type="button"
              className="rounded-lg border border-violet-200 bg-violet-50 px-3 py-2 text-xs font-semibold text-violet-600"
            >
              Remote
            </button>

            {[
              "Visa Sponsorship",
              "5+ Years Experience",
              "Easy Apply",
              "Posted Today",
              "More Filters",
            ].map((filter) => (
              <button
                key={filter}
                type="button"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-500 hover:border-violet-200 hover:text-violet-600"
              >
                {filter}
              </button>
            ))}

          </div>

        </section>

        {/* ================================================= */}
        {/* STATS */}
        {/* ================================================= */}

        <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">

          <StatCard
            label="Jobs analyzed"
            value="1,284"
            description="↑ 18% this week"
            descriptionClass="text-emerald-600"
          />

          <StatCard
            label="Strong matches"
            value="24"
            description="80%+ match score"
            descriptionClass="text-violet-600"
          />

          <StatCard
            label="New today"
            value="5"
            description="Fresh opportunities"
            descriptionClass="text-emerald-600"
          />

          <StatCard
            label="Saved jobs"
            value="18"
            description="Across all searches"
            descriptionClass="text-slate-400"
          />

        </section>

        {/* ================================================= */}
        {/* JOB RESULTS + AI INSIGHT */}
        {/* ================================================= */}

        <section className="grid gap-6 xl:grid-cols-[1fr_350px]">

          {/* JOBS */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-base font-bold">
                  Best matches for you
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Ranked by AI based on your profile
                </p>
              </div>

              <select className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 outline-none">
                <option>Best Match</option>
                <option>Newest</option>
                <option>Salary</option>
              </select>

            </div>

            <div className="mt-5 space-y-3">

              <JobCard
                initial="G"
                initialClass="bg-blue-50 text-blue-600"
                title="Senior Full Stack Developer"
                company="Google"
                location="Remote"
                type="Full-time"
                skills={["React", "TypeScript", "Node.js"]}
                match="95%"
                salary="$120k – $160k"
                support="✓ Visa sponsorship"
              />

              <JobCard
                initial="M"
                initialClass="bg-blue-50 text-blue-600"
                title="Senior React Developer"
                company="Microsoft"
                location="Remote"
                type="Full-time"
                skills={["React", "Next.js", "Azure"]}
                match="91%"
                salary="$110k – $145k"
                support="✓ Visa sponsorship"
              />

              <JobCard
                initial="S"
                initialClass="bg-green-50 text-green-600"
                title="Senior Software Engineer"
                company="Shopify"
                location="Berlin"
                type="Full-time"
                skills={["Node.js", "TypeScript", "AWS"]}
                match="88%"
                salary="€75k – €105k"
                support="✓ Relocation support"
              />

              <JobCard
                initial="A"
                initialClass="bg-orange-50 text-orange-500"
                title="Frontend Engineer"
                company="Amazon"
                location="Luxembourg"
                type="Full-time"
                skills={["React", "TypeScript", "AWS"]}
                match="87%"
                salary="€70k – €100k"
                support="✓ Visa sponsorship"
              />

            </div>

            <button
              type="button"
              className="mt-5 w-full rounded-xl border border-slate-200 bg-slate-50 py-3 text-xs font-bold text-slate-600 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
            >
              Load More Jobs
            </button>

          </div>

          {/* RIGHT PANEL */}

          <div className="space-y-6">

            {/* AI ANALYSIS */}

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 p-6 text-white shadow-lg shadow-violet-200">

              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

              <div className="relative">

                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet-200">
                  <span className="text-lg">✦</span>
                  AI Match Analysis
                </div>

                <h2 className="mt-4 text-lg font-extrabold">
                  Why these jobs fit you
                </h2>

                <p className="mt-2 text-xs leading-5 text-violet-100">
                  Your strongest matching signals are based on your
                  experience, technical skills and career preferences.
                </p>

                <MatchBar
                  label="Technical skills"
                  value="96%"
                  width="96%"
                />

                <MatchBar
                  label="Experience"
                  value="94%"
                  width="94%"
                />

                <MatchBar
                  label="Job preferences"
                  value="90%"
                  width="90%"
                />

                <MatchBar
                  label="Education"
                  value="84%"
                  width="84%"
                />

                <button
                  type="button"
                  className="mt-6 w-full rounded-xl bg-white px-4 py-3 text-xs font-bold text-violet-700 shadow-lg transition hover:-translate-y-0.5"
                >
                  Improve My Match Score →
                </button>

              </div>

            </div>

            {/* PREFERENCES */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">

              <div className="flex items-center justify-between">

                <div>
                  <h3 className="text-sm font-bold">
                    Your job preferences
                  </h3>

                  <p className="mt-1 text-[11px] text-slate-400">
                    Used to personalize matches
                  </p>
                </div>

                <button
                  type="button"
                  className="text-xs font-bold text-violet-600 hover:text-violet-700"
                >
                  Edit
                </button>

              </div>

              <div className="mt-5 space-y-4">

                <Preference
                  label="Preferred role"
                  value="Full Stack Developer"
                />

                <Preference
                  label="Experience"
                  value="5+ years"
                />

                <Preference
                  label="Work style"
                  value="Remote"
                />

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Visa sponsorship
                  </span>

                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
                    Required
                  </span>
                </div>

                <Preference
                  label="Preferred locations"
                  value="Germany, EU"
                />

              </div>

            </div>

            {/* PROFILE WARNING */}

            <div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 to-orange-50 p-5">

              <div className="flex gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-amber-500 shadow-sm">
                  !
                </div>

                <div>

                  <h3 className="text-sm font-bold text-slate-800">
                    Improve your matches
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Adding your education and preferred salary range could
                    improve matching accuracy.
                  </p>

                  <button
                    type="button"
                    className="mt-3 text-xs font-bold text-amber-600 hover:text-amber-700"
                  >
                    Complete Profile →
                  </button>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================================================= */}
        {/* SAVED SEARCHES */}
        {/* ================================================= */}

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-base font-bold">
                Saved searches
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Get notified when new matching jobs appear.
              </p>
            </div>

            <button
              type="button"
              className="rounded-lg bg-violet-50 px-3 py-2 text-xs font-bold text-violet-600 hover:bg-violet-100"
            >
              + New Search
            </button>

          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">

            <SavedSearch
              title="Full Stack Developer"
              description="Germany · Remote · Visa Sponsorship"
              count="12 new jobs"
              date="Updated today"
            />

            <SavedSearch
              title="React Developer"
              description="Europe · Remote · Full-time"
              count="8 new jobs"
              date="Updated today"
            />

            <SavedSearch
              title="Next.js Engineer"
              description="Germany · Berlin · Full-time"
              count="No new jobs"
              date="Updated yesterday"
              empty
            />

          </div>

        </section>

      </div>
  );
};

/* ========================================================= */
/* STAT CARD */
/* ========================================================= */

interface StatCardProps {
  label: string;
  value: string;
  description: string;
  descriptionClass: string;
}

function StatCard({
  label,
  value,
  description,
  descriptionClass,
}: StatCardProps) {
  return (
    <div className="card-hover rounded-2xl border border-slate-200 bg-white p-5 shadow-card">

      <div className="text-xs font-medium text-slate-400">
        {label}
      </div>

      <div className="mt-2 text-3xl font-extrabold">
        {value}
      </div>

      <div className={`mt-2 text-xs font-semibold ${descriptionClass}`}>
        {description}
      </div>

    </div>
  );
}

/* ========================================================= */
/* JOB CARD */
/* ========================================================= */

function JobCard({
  initial,
  initialClass,
  title,
  company,
  location,
  type,
  skills,
  match,
  salary,
  support,
}: JobCardProps) {
  return (
    <div className="job-card rounded-2xl border border-slate-200 p-5">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

        <div className="flex gap-4">

          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-extrabold ${initialClass}`}
          >
            {initial}
          </div>

          <div>

            <h3 className="text-sm font-bold">
              {title}
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              {company} · {location} · {type}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">

              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-500"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <div className="text-right">

            <div className="text-2xl font-extrabold text-emerald-600">
              {match}
            </div>

            <div className="text-[10px] font-semibold text-slate-400">
              Match
            </div>

          </div>

          <button
            type="button"
            className="text-xl text-slate-300 hover:text-violet-600"
            aria-label={`Save ${title}`}
          >
            ♡
          </button>

        </div>

      </div>

      <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex flex-wrap gap-4 text-xs text-slate-400">

          <span>💰 {salary}</span>

          <span>📍 {location}</span>

          <span className="font-semibold text-emerald-600">
            {support}
          </span>

        </div>

        <button
          type="button"
          className="rounded-xl bg-violet-50 px-4 py-2 text-xs font-bold text-violet-600 transition hover:bg-violet-600 hover:text-white"
        >
          View Job →
        </button>

      </div>

    </div>
  );
}

/* ========================================================= */
/* MATCH BAR */
/* ========================================================= */

function MatchBar({
  label,
  value,
  width,
}: MatchBarProps) {
  return (
    <div className="mt-3">

      <div className="mb-1 flex justify-between text-[10px]">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div className="h-1.5 rounded-full bg-white/20">
        <div
          className="h-full rounded-full bg-white"
          style={{ width }}
        />
      </div>

    </div>
  );
}

/* ========================================================= */
/* PREFERENCE */
/* ========================================================= */

function Preference({
  label,
  value,
}: PreferenceProps) {
  return (
    <div className="flex items-center justify-between">

      <span className="text-xs text-slate-400">
        {label}
      </span>

      <span className="text-right text-xs font-semibold">
        {value}
      </span>

    </div>
  );
}

/* ========================================================= */
/* SAVED SEARCH */
/* ========================================================= */

function SavedSearch({
  title,
  description,
  count,
  date,
  empty = false,
}: SavedSearchProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

      <div className="flex items-center justify-between">

        <div className="text-sm font-bold">
          {title}
        </div>

        <button
          type="button"
          className="text-slate-300 hover:text-violet-600"
          aria-label={`Options for ${title}`}
        >
          ⋮
        </button>

      </div>

      <div className="mt-2 text-xs text-slate-400">
        {description}
      </div>

      <div className="mt-4 flex items-center justify-between">

        <span
          className={`rounded-full px-2 py-1 text-[10px] font-bold ${
            empty
              ? "bg-slate-100 text-slate-500"
              : "bg-emerald-50 text-emerald-600"
          }`}
        >
          {count}
        </span>

        <span className="text-[10px] text-slate-400">
          {date}
        </span>

      </div>

    </div>
  );
}

export default Index;
