import React from "react";
import DashboardLayout from "@/src/layout/DashboardLayout";

const Index = () => {
    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* ============================================= */}
                {/* HERO */}
                {/* ============================================= */}

                <section className="relative overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-6 shadow-soft sm:p-8">
                    {/* Decorative */}
                    <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-200/30 blur-3xl" />

                    <div className="absolute -bottom-24 right-20 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />

                    <div className="relative grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
                        {/* Text */}
                        <div>
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-violet-600">
                                ✨ AI-powered career workspace
                            </div>

                            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                                Good morning,
                                <span className="gradient-text"> Saimon </span>
                                👋
                            </h1>

                            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                                Build a stronger career with AI. Your personalized career
                                workspace is ready to help you move forward.
                            </p>

                            {/* Buttons */}
                            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5"
                                >
                                    Build My Resume

                                    <svg
                                        className="h-4 w-4"
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

                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-violet-200 hover:text-violet-600"
                                >
                                    Explore AI Tools
                                </button>
                            </div>
                        </div>

                        {/* Profile Completion */}
                        <div className="rounded-2xl border border-white bg-white/80 p-5 shadow-card backdrop-blur">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm font-bold text-slate-800">
                                        Profile completion
                                    </div>

                                    <div className="mt-1 text-xs text-slate-400">
                                        Complete your profile
                                    </div>
                                </div>

                                <div className="text-sm font-extrabold text-violet-600">
                                    66%
                                </div>
                            </div>

                            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                                <div className="h-full w-[66%] rounded-full bg-gradient-to-r from-violet-600 to-blue-500" />
                            </div>

                            <div className="mt-5 grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                                        ✓
                                    </span>
                                    Personal info
                                </div>

                                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                    <span className="h-5 w-5 rounded-full border border-slate-200" />
                                    Education
                                </div>

                                <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                                        ✓
                                    </span>
                                    Work experience
                                </div>

                                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                    <span className="h-5 w-5 rounded-full border border-slate-200" />
                                    Preferences
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================= */}
                {/* STATS */}
                {/* ============================================= */}

                <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {/* Resume */}
                    <div className="card-hover rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
                        <div className="flex items-start justify-between">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
                                    <path d="M14 3v5h5" />
                                    <path
                                        strokeLinecap="round"
                                        d="M8 13h8M8 17h6"
                                    />
                                </svg>
                            </div>

                            <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
                                +12%
                            </span>
                        </div>

                        <div className="mt-5 text-xs font-medium text-slate-400">
                            My Resume
                        </div>

                        <div className="mt-1 text-3xl font-extrabold">
                            85%
                        </div>

                        <div className="mt-1 text-xs text-slate-400">
                            ATS compatibility
                        </div>

                        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
                            <div className="h-full w-[85%] rounded-full bg-blue-500" />
                        </div>
                    </div>

                    {/* ATS */}
                    <div className="card-hover rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
                        <div className="flex items-start justify-between">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="12" cy="12" r="8" />
                                    <circle cx="12" cy="12" r="4" />
                                </svg>
                            </div>

                            <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
                                +8%
                            </span>
                        </div>

                        <div className="mt-5 text-xs font-medium text-slate-400">
                            ATS Checker
                        </div>

                        <div className="mt-1 text-3xl font-extrabold">
                            78
                        </div>

                        <div className="mt-1 text-xs text-slate-400">
                            Overall score
                        </div>

                        <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                            ↑ 8% this week
                        </div>
                    </div>

                    {/* Cover Letters */}
                    <div className="card-hover rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
                        <div className="flex items-start justify-between">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    viewBox="0 0 24 24"
                                >
                                    <rect
                                        x="5"
                                        y="3"
                                        width="14"
                                        height="18"
                                        rx="2"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        d="M8 8h8M8 12h6M8 16h4"
                                    />
                                </svg>
                            </div>

                            <span className="rounded-full bg-orange-50 px-2 py-1 text-[10px] font-bold text-orange-600">
                                +3
                            </span>
                        </div>

                        <div className="mt-5 text-xs font-medium text-slate-400">
                            Cover Letters
                        </div>

                        <div className="mt-1 text-3xl font-extrabold">
                            12
                        </div>

                        <div className="mt-1 text-xs text-slate-400">
                            Generated
                        </div>

                        <div className="mt-4 text-xs font-semibold text-emerald-600">
                            ↑ 3 this week
                        </div>
                    </div>

                    {/* Jobs */}
                    <div className="card-hover rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
                        <div className="flex items-start justify-between">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    viewBox="0 0 24 24"
                                >
                                    <rect
                                        x="3"
                                        y="7"
                                        width="18"
                                        height="13"
                                        rx="2"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        d="M3 12h18"
                                    />
                                </svg>
                            </div>

                            <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
                                +5 new
                            </span>
                        </div>

                        <div className="mt-5 text-xs font-medium text-slate-400">
                            Job Matches
                        </div>

                        <div className="mt-1 text-3xl font-extrabold">
                            24
                        </div>

                        <div className="mt-1 text-xs text-slate-400">
                            Best matches
                        </div>

                        <div className="mt-4 text-xs font-semibold text-emerald-600">
                            5 new opportunities today
                        </div>
                    </div>
                </section>

                {/* ============================================= */}
                {/* ACTIVITY + AI INSIGHT */}
                {/* ============================================= */}

                <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    {/* Recent Activity */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-base font-bold">
                                    Recent activity
                                </h2>

                                <p className="mt-1 text-xs text-slate-400">
                                    Your latest career activity
                                </p>
                            </div>

                            <button
                                type="button"
                                className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-violet-50 hover:text-violet-600"
                            >
                                View all
                            </button>
                        </div>

                        <div className="mt-6 space-y-5">
                            {/* Activity */}
                            <div className="flex gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                    ✓
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="flex flex-wrap justify-between gap-2">
                                        <div className="text-sm font-semibold">
                                            Resume updated
                                        </div>

                                        <div className="text-[10px] text-slate-400">
                                            Today, 10:30 AM
                                        </div>
                                    </div>

                                    <p className="mt-1 text-xs text-slate-400">
                                        Senior Full Stack Developer Resume
                                    </p>
                                </div>
                            </div>

                            {/* Activity */}
                            <div className="flex gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    ◉
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="flex flex-wrap justify-between gap-2">
                                        <div className="text-sm font-semibold">
                                            ATS analysis completed
                                        </div>

                                        <div className="text-[10px] text-slate-400">
                                            Yesterday, 4:45 PM
                                        </div>
                                    </div>

                                    <p className="mt-1 text-xs text-slate-400">
                                        Score improved by 8%
                                    </p>
                                </div>
                            </div>

                            {/* Activity */}
                            <div className="flex gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                                    ✦
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="flex flex-wrap justify-between gap-2">
                                        <div className="text-sm font-semibold">
                                            Cover letter generated
                                        </div>

                                        <div className="text-[10px] text-slate-400">
                                            Yesterday, 1:20 PM
                                        </div>
                                    </div>

                                    <p className="mt-1 text-xs text-slate-400">
                                        For Senior Full Stack Developer
                                    </p>
                                </div>
                            </div>

                            {/* Activity */}
                            <div className="flex gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                                    ★
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="flex flex-wrap justify-between gap-2">
                                        <div className="text-sm font-semibold">
                                            New job matches found
                                        </div>

                                        <div className="text-[10px] text-slate-400">
                                            Yesterday
                                        </div>
                                    </div>

                                    <p className="mt-1 text-xs text-slate-400">
                                        5 new opportunities match your profile
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AI Insight */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 p-6 text-white shadow-lg shadow-violet-200">
                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

                        <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />

                        <div className="relative">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet-200">
                                <span className="text-lg">✦</span>
                                AI Career Insight
                            </div>

                            <h2 className="mt-5 text-xl font-extrabold">
                                You&apos;re on the right track! 🚀
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-violet-100">
                                Your profile has strong potential. Adding a few
                                high-demand skills could significantly improve
                                your job matches.
                            </p>

                            {/* Skills */}
                            <div className="mt-5 flex flex-wrap gap-2">
                                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-semibold">
                                    TypeScript
                                </span>

                                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-semibold">
                                    Next.js
                                </span>

                                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-semibold">
                                    Docker
                                </span>

                                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-semibold">
                                    AWS
                                </span>

                                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-semibold">
                                    Kubernetes
                                </span>
                            </div>

                            <button
                                type="button"
                                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-violet-700 shadow-lg transition hover:-translate-y-0.5"
                            >
                                Improve My Skills

                                <svg
                                    className="h-4 w-4"
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
                </section>

                {/* ============================================= */}
                {/* QUICK ACTIONS */}
                {/* ============================================= */}

                <section>
                    <div className="mb-4 flex items-end justify-between">
                        <div>
                            <h2 className="text-base font-bold">
                                Quick actions
                            </h2>

                            <p className="mt-1 text-xs text-slate-400">
                                Start building your career
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Action */}
                        <button
                            type="button"
                            className="card-hover group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-card"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                                    +
                                </div>

                                <span className="text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-violet-500">
                                    →
                                </span>
                            </div>

                            <h3 className="mt-5 text-sm font-bold">
                                Build Resume
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-slate-400">
                                Create or update your professional resume.
                            </p>
                        </button>

                        {/* Action */}
                        <button
                            type="button"
                            className="card-hover group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-card"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                    ◎
                                </div>

                                <span className="text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-500">
                                    →
                                </span>
                            </div>

                            <h3 className="mt-5 text-sm font-bold">
                                Check ATS Score
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-slate-400">
                                Analyze your resume for ATS compatibility.
                            </p>
                        </button>

                        {/* Action */}
                        <button
                            type="button"
                            className="card-hover group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-card"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                                    ✦
                                </div>

                                <span className="text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-orange-500">
                                    →
                                </span>
                            </div>

                            <h3 className="mt-5 text-sm font-bold">
                                Generate Cover Letter
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-slate-400">
                                Create personalized cover letters with AI.
                            </p>
                        </button>

                        {/* Action */}
                        <button
                            type="button"
                            className="card-hover group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-card"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    ⌕
                                </div>

                                <span className="text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-500">
                                    →
                                </span>
                            </div>

                            <h3 className="mt-5 text-sm font-bold">
                                Find Job Matches
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-slate-400">
                                Discover AI-powered job recommendations.
                            </p>
                        </button>
                    </div>
                </section>

                {/* ============================================= */}
                {/* RECOMMENDED JOBS */}
                {/* ============================================= */}

                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-base font-bold">
                                Recommended jobs
                            </h2>

                            <p className="mt-1 text-xs text-slate-400">
                                Jobs matched to your profile
                            </p>
                        </div>

                        <button
                            type="button"
                            className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-violet-50 hover:text-violet-600"
                        >
                            View all
                        </button>
                    </div>

                    <div className="mt-5 divide-y divide-slate-100">
                        {/* Job */}
                        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex min-w-0 items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-lg font-extrabold text-blue-600">
                                    G
                                </div>

                                <div className="min-w-0">
                                    <h3 className="truncate text-sm font-bold">
                                        Senior Full Stack Developer
                                    </h3>

                                    <p className="mt-1 text-xs text-slate-400">
                                        Google · Remote
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-5 sm:justify-end">
                                <div className="text-right">
                                    <div className="text-sm font-bold">
                                        $120k – $160k
                                    </div>

                                    <span className="mt-1 inline-flex rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
                                        95% Match
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    aria-label="Save Senior Full Stack Developer job"
                                    className="text-slate-300 transition hover:text-violet-600"
                                >
                                    ♡
                                </button>
                            </div>
                        </div>

                        {/* Job */}
                        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex min-w-0 items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg font-extrabold text-blue-600">
                                    M
                                </div>

                                <div className="min-w-0">
                                    <h3 className="truncate text-sm font-bold">
                                        React Developer
                                    </h3>

                                    <p className="mt-1 text-xs text-slate-400">
                                        Microsoft · Remote
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-5 sm:justify-end">
                                <div className="text-right">
                                    <div className="text-sm font-bold">
                                        $110k – $145k
                                    </div>

                                    <span className="mt-1 inline-flex rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
                                        90% Match
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    aria-label="Save React Developer job"
                                    className="text-slate-300 transition hover:text-violet-600"
                                >
                                    ♡
                                </button>
                            </div>
                        </div>

                        {/* Job */}
                        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex min-w-0 items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-lg font-extrabold text-green-600">
                                    S
                                </div>

                                <div className="min-w-0">
                                    <h3 className="truncate text-sm font-bold">
                                        Senior UI Developer
                                    </h3>

                                    <p className="mt-1 text-xs text-slate-400">
                                        Shopify · Remote
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-5 sm:justify-end">
                                <div className="text-right">
                                    <div className="text-sm font-bold">
                                        $100k – $130k
                                    </div>

                                    <span className="mt-1 inline-flex rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
                                        88% Match
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    aria-label="Save Senior UI Developer job"
                                    className="text-slate-300 transition hover:text-violet-600"
                                >
                                    ♡
                                </button>
                            </div>
                        </div>

                        {/* Job */}
                        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex min-w-0 items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-lg font-extrabold">
                                    A
                                </div>

                                <div className="min-w-0">
                                    <h3 className="truncate text-sm font-bold">
                                        Frontend Engineer
                                    </h3>

                                    <p className="mt-1 text-xs text-slate-400">
                                        Amazon · Remote
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-5 sm:justify-end">
                                <div className="text-right">
                                    <div className="text-sm font-bold">
                                        $130k – $170k
                                    </div>

                                    <span className="mt-1 inline-flex rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
                                        87% Match
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    aria-label="Save Frontend Engineer job"
                                    className="text-slate-300 transition hover:text-violet-600"
                                >
                                    ♡
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </DashboardLayout>
    );
};

export default Index;
