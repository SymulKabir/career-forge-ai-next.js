"use client";

import DashboardLayout from "@/src/layout/DashboardLayout";
import { useMemo, useState } from "react";

type ApplicationStatus =
  | "Applied"
  | "Screening"
  | "Interview"
  | "Offer"
  | "Rejected"
  | "Withdrawn";

type JobType = "Full-time" | "Contract" | "Part-time" | "Internship";

interface Application {
  id: number;
  company: string;
  position: string;
  status: ApplicationStatus;
  type: JobType;
  applied: string;
  nextStep: string;
  salary: string;
}

const applications: Application[] = [
  {
    id: 1,
    company: "Google",
    position: "Senior Full Stack Developer",
    status: "Interview",
    type: "Full-time",
    applied: "Aug 25, 2026",
    nextStep: "Technical Interview",
    salary: "$120k – $160k",
  },
  {
    id: 2,
    company: "Microsoft",
    position: "React Developer",
    status: "Applied",
    type: "Full-time",
    applied: "Aug 24, 2026",
    nextStep: "Waiting for response",
    salary: "$110k – $145k",
  },
  {
    id: 3,
    company: "Shopify",
    position: "Senior UI Developer",
    status: "Screening",
    type: "Full-time",
    applied: "Aug 22, 2026",
    nextStep: "Recruiter call",
    salary: "$100k – $130k",
  },
  {
    id: 4,
    company: "Amazon",
    position: "Frontend Engineer",
    status: "Applied",
    type: "Full-time",
    applied: "Aug 20, 2026",
    nextStep: "Waiting for response",
    salary: "$130k – $170k",
  },
  {
    id: 5,
    company: "Interhyp Group",
    position: "Senior .NET Developer",
    status: "Interview",
    type: "Full-time",
    applied: "Aug 18, 2026",
    nextStep: "Recruiter follow-up",
    salary: "$105k – $140k",
  },
  {
    id: 6,
    company: "Meta",
    position: "Software Engineer",
    status: "Offer",
    type: "Full-time",
    applied: "Aug 15, 2026",
    nextStep: "Offer review",
    salary: "$140k – $180k",
  },
];

const statusClasses: Record<ApplicationStatus, string> = {
  Applied: "bg-blue-50 text-blue-600",
  Screening: "bg-violet-50 text-violet-600",
  Interview: "bg-orange-50 text-orange-600",
  Offer: "bg-emerald-50 text-emerald-600",
  Rejected: "bg-red-50 text-red-600",
  Withdrawn: "bg-slate-100 text-slate-500",
};

export default function ApplicationsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortFilter, setSortFilter] = useState("newest");
  const [page, setPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredApplications = useMemo(() => {
    const result = applications.filter((application) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        application.company.toLowerCase().includes(searchValue) ||
        application.position.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "all" || application.status === statusFilter;

      const matchesType =
        typeFilter === "all" || application.type === typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });

    return [...result].sort((a, b) => {
      if (sortFilter === "company") {
        return a.company.localeCompare(b.company);
      }

      if (sortFilter === "status") {
        return a.status.localeCompare(b.status);
      }

      if (sortFilter === "oldest") {
        return a.id - b.id;
      }

      return b.id - a.id;
    });
  }, [search, statusFilter, typeFilter, sortFilter]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredApplications.length / 6)
  );

  const currentPage = Math.min(page, totalPages);

  const paginatedApplications = filteredApplications.slice(
    (currentPage - 1) * 6,
    currentPage * 6
  );

  const changePage = (direction: number) => {
    setPage((current) =>
      Math.max(1, Math.min(totalPages, current + direction))
    );
  };

  return (
  <DashboardLayout>
    <div className="mx-auto max-w-[1500px] space-y-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

      {/* PAGE HEADER */}
      <section>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Applications
              </h1>

              <span className="rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-bold text-violet-600">
                24 total
              </span>
            </div>

            <p className="mt-2 max-w-2xl text-sm text-slate-500">
              Track every job application, follow your progress, and never
              miss an important follow-up.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5"
          >
            <span className="text-lg leading-none">+</span>
            Add Application
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-5">

        {/* Total */}
        <div className="card-hover rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <rect x="4" y="3" width="16" height="18" rx="2" />
                <path d="M8 8h8M8 12h8M8 16h5" />
              </svg>
            </div>
          </div>

          <div className="mt-4 text-2xl font-extrabold">24</div>

          <div className="mt-1 text-xs text-slate-400">
            Total applications
          </div>
        </div>

        {/* Applied */}
        <div className="card-hover rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            ↑
          </div>

          <div className="mt-4 text-2xl font-extrabold">8</div>

          <div className="mt-1 text-xs text-slate-400">
            Applied
          </div>
        </div>

        {/* Interviews */}
        <div className="card-hover rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
            ◎
          </div>

          <div className="mt-4 text-2xl font-extrabold">4</div>

          <div className="mt-1 text-xs text-slate-400">
            Interviews
          </div>
        </div>

        {/* Offers */}
        <div className="card-hover rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            ✓
          </div>

          <div className="mt-4 text-2xl font-extrabold">2</div>

          <div className="mt-1 text-xs text-slate-400">
            Offers
          </div>
        </div>

        {/* Rejected */}
        <div className="card-hover rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500">
            ×
          </div>

          <div className="mt-4 text-2xl font-extrabold">3</div>

          <div className="mt-1 text-xs text-slate-400">
            Rejected
          </div>
        </div>
      </section>

      {/* APPLICATION PIPELINE */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">

        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

          {/* Search */}
          <div className="relative w-full xl:max-w-md">
            <svg
              className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>

            <input
              type="text"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setPage(1);
              }}
              placeholder="Search company, position..."
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2">

            <select
              value={statusFilter}
              onChange={(event) => {
                setStatusFilter(event.target.value);
                setPage(1);
              }}
              className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 outline-none focus:border-violet-300"
            >
              <option value="all">All statuses</option>
              <option value="Applied">Applied</option>
              <option value="Screening">Screening</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
              <option value="Withdrawn">Withdrawn</option>
            </select>

            <select
              value={typeFilter}
              onChange={(event) => {
                setTypeFilter(event.target.value);
                setPage(1);
              }}
              className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 outline-none focus:border-violet-300"
            >
              <option value="all">All job types</option>
              <option value="Full-time">Full-time</option>
              <option value="Contract">Contract</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
            </select>

            <select
              value={sortFilter}
              onChange={(event) => {
                setSortFilter(event.target.value);
                setPage(1);
              }}
              className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 outline-none focus:border-violet-300"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="company">Company A-Z</option>
              <option value="status">Status</option>
            </select>
          </div>
        </div>

        {/* Pipeline */}
        <div className="mt-6 overflow-x-auto">
          <div className="min-w-[900px]">

            {/* Table header */}
            <div className="grid grid-cols-[2.2fr_1.2fr_1fr_1fr_1fr_100px] items-center gap-4 border-b border-slate-100 px-4 pb-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              <div>Position</div>
              <div>Status</div>
              <div>Applied</div>
              <div>Next step</div>
              <div>Salary</div>
              <div />
            </div>

            {/* Applications */}
            <div>
              {paginatedApplications.map((application) => (
                <div
                  key={application.id}
                  className="grid grid-cols-[2.2fr_1.2fr_1fr_1fr_1fr_100px] items-center gap-4 border-b border-slate-100 px-4 py-4"
                >
                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold text-slate-900">
                      {application.position}
                    </div>

                    <div className="mt-1 text-xs text-slate-400">
                      {application.company} · {application.type}
                    </div>
                  </div>

                  <div>
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold ${statusClasses[application.status]}`}
                    >
                      {application.status}
                    </span>
                  </div>

                  <div className="text-xs text-slate-500">
                    {application.applied}
                  </div>

                  <div className="text-xs text-slate-500">
                    {application.nextStep}
                  </div>

                  <div className="text-xs font-semibold text-slate-600">
                    {application.salary}
                  </div>

                  <button
                    type="button"
                    className="rounded-lg px-3 py-2 text-xs font-semibold text-violet-600 hover:bg-violet-50"
                  >
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Empty */}
        {paginatedApplications.length === 0 && (
          <div className="py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
              🔎
            </div>

            <h3 className="mt-4 text-sm font-bold">
              No applications found
            </h3>

            <p className="mx-auto mt-1 max-w-sm text-xs leading-5 text-slate-400">
              Try changing your search or filters, or add a new application.
            </p>
          </div>
        )}

        {/* Pagination */}
        <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-slate-400">
            Showing{" "}
            <span className="font-semibold text-slate-700">
              {filteredApplications.length === 0
                ? 0
                : (currentPage - 1) * 6 + 1}
              –
              {Math.min(
                currentPage * 6,
                filteredApplications.length
              )}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-700">
              {filteredApplications.length}
            </span>{" "}
            applications
          </p>

          <div className="flex items-center gap-1">

            <button
              type="button"
              onClick={() => changePage(-1)}
              disabled={currentPage === 1}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-sm text-slate-400 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              ←
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => setPage(pageNumber)}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg text-xs font-semibold ${
                    currentPage === pageNumber
                      ? "bg-violet-600 text-white"
                      : "text-slate-600 hover:bg-violet-50 hover:text-violet-600"
                  }`}
                >
                  {pageNumber}
                </button>
              )
            )}

            <button
              type="button"
              onClick={() => changePage(1)}
              disabled={currentPage === totalPages}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-sm text-slate-500 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* FOLLOW UP REMINDER */}
      <section className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">

        {/* Follow ups */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold">
                Upcoming follow-ups
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Stay proactive with your applications
              </p>
            </div>

            <button
              type="button"
              className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-violet-50 hover:text-violet-600"
            >
              View calendar
            </button>
          </div>

          <div className="mt-5 space-y-3">

            {/* Follow up */}
            <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/70 p-4">

              <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-xl bg-white shadow-sm">
                <span className="text-[9px] font-bold uppercase text-red-500">
                  Aug
                </span>

                <span className="text-sm font-extrabold">
                  27
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-bold">
                  Senior Full Stack Developer
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  Google · Follow up after application
                </p>
              </div>

              <button
                type="button"
                className="hidden rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm hover:text-violet-600 sm:block"
              >
                Follow up
              </button>
            </div>

            {/* Follow up */}
            <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/70 p-4">

              <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-xl bg-white shadow-sm">
                <span className="text-[9px] font-bold uppercase text-orange-500">
                  Aug
                </span>

                <span className="text-sm font-extrabold">
                  29
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-bold">
                  Senior .NET Developer
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  Interhyp Group · Recruiter follow-up
                </p>
              </div>

              <button
                type="button"
                className="hidden rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm hover:text-violet-600 sm:block"
              >
                Follow up
              </button>
            </div>
          </div>
        </div>

        {/* Application success */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 p-6 text-white shadow-lg shadow-violet-200">

          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">

            <div className="text-[10px] font-bold uppercase tracking-widest text-violet-200">
              Application health
            </div>

            <div className="mt-5 text-4xl font-extrabold">
              16.7%
            </div>

            <p className="mt-2 text-xs leading-5 text-violet-100">
              Your current application-to-interview conversion rate.
            </p>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/20">
              <div className="h-full w-[66%] rounded-full bg-white" />
            </div>

            <div className="mt-3 flex justify-between text-[10px] text-violet-200">
              <span>Industry average</span>
              <span>12.4%</span>
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-xl bg-white px-4 py-3 text-xs font-bold text-violet-700 hover:-translate-y-0.5"
            >
              Improve Applications →
            </button>
          </div>
        </div>
      </section>

      {/* ADD APPLICATION MODAL PLACEHOLDER */}
      {showAddModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
          onClick={() => setShowAddModal(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">
                Add Application
              </h2>

              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="text-xl text-slate-400 hover:text-slate-700"
              >
                ×
              </button>
            </div>

            <p className="mt-2 text-sm text-slate-500">
              Add your application details here.
            </p>

            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="mt-6 w-full rounded-xl bg-violet-600 px-4 py-3 text-sm font-bold text-white hover:bg-violet-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </DashboardLayout>
  );
}
