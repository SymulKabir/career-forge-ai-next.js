"use client";

import React from "react";

const Index = () => {
  return (
      <div className="mx-auto max-w-[1500px] space-y-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* ================================================= */}
        {/* PAGE HERO */}
        {/* ================================================= */}

        <section className="relative overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-6 shadow-soft sm:p-8">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl"></div>

          <div className="absolute -bottom-24 right-40 h-52 w-52 rounded-full bg-blue-200/30 blur-3xl"></div>

          <div className="relative grid gap-8 lg:grid-cols-[1fr_300px] lg:items-center">
            {/* Hero Text */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-violet-600">
                <span>✦</span>
                AI-powered career planning
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Your Career <span className="gradient-text">Roadmap</span>
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                A personalized step-by-step plan to help you move from your
                current skill level toward your target career.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5">
                  <span>✦</span>
                  Generate AI Roadmap
                </button>

                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-violet-200 hover:text-violet-600">
                  Edit Career Goal
                </button>
              </div>
            </div>

            {/* Progress */}
            <div className="rounded-2xl border border-white bg-white/85 p-5 shadow-card backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-slate-400">
                    Roadmap progress
                  </div>

                  <div className="mt-1 text-3xl font-extrabold text-slate-900">
                    42%
                  </div>
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-full border-[6px] border-violet-100 border-t-violet-600 text-xs font-extrabold text-violet-600">
                  42%
                </div>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[42%] rounded-full bg-gradient-to-r from-violet-600 to-blue-500"></div>
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">
                  5 of 12 milestones completed
                </span>

                <span className="font-semibold text-violet-600">On track</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* TARGET CAREER + ROADMAP SUMMARY */}
        {/* ================================================= */}

        <section className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Target Career */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-50 to-blue-50 text-2xl">
                  💼
                </div>

                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Target career
                  </div>

                  <h2 className="mt-1 text-xl font-extrabold">
                    Senior Full Stack Developer
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    Software Engineering · Web Development
                  </p>
                </div>
              </div>

              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-600 transition hover:border-violet-200 hover:text-violet-600">
                Change goal
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Timeline
                </div>
                <div className="mt-1 text-sm font-extrabold">6–9 months</div>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Milestones
                </div>
                <div className="mt-1 text-sm font-extrabold">12</div>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Skills
                </div>
                <div className="mt-1 text-sm font-extrabold">18</div>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  Readiness
                </div>
                <div className="mt-1 text-sm font-extrabold text-emerald-600">
                  74%
                </div>
              </div>
            </div>
          </div>

          {/* AI Status */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 p-6 text-white shadow-lg shadow-violet-200">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 blur-2xl"></div>

            <div className="relative">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet-200">
                <span>✦</span>
                AI Roadmap Status
              </div>

              <h3 className="mt-4 text-xl font-extrabold">
                You're making progress 🚀
              </h3>

              <p className="mt-2 text-xs leading-5 text-violet-100">
                Your current progress is aligned with your target role. Focus on
                the next milestone to keep your momentum.
              </p>

              <button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-violet-700 shadow-lg transition hover:-translate-y-0.5">
                View AI Advice
                <span>→</span>
              </button>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* CURRENT PHASE */}
        {/* ================================================= */}

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-50 text-sm text-violet-600">
                  2
                </span>

                <h2 className="text-base font-bold">
                  Current phase: Skill Development
                </h2>
              </div>

              <p className="mt-2 text-xs text-slate-400">
                Strengthen the technical skills required for your target role.
              </p>
            </div>

            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-600">
              ● In progress
            </span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-violet-100 bg-violet-50/50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-violet-700">
                  TypeScript
                </span>

                <span className="text-[10px] font-bold text-violet-600">
                  80%
                </span>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white">
                <div className="h-full w-[80%] rounded-full bg-violet-500"></div>
              </div>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-700">
                  System Design
                </span>

                <span className="text-[10px] font-bold text-blue-600">55%</span>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white">
                <div className="h-full w-[55%] rounded-full bg-blue-500"></div>
              </div>
            </div>

            <div className="rounded-xl border border-orange-100 bg-orange-50/50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-orange-700">AWS</span>

                <span className="text-[10px] font-bold text-orange-600">
                  40%
                </span>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white">
                <div className="h-full w-[40%] rounded-full bg-orange-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* ROADMAP + SKILL GAP */}
        {/* ================================================= */}

        <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          {/* Main Roadmap */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold">Your career journey</h2>

                <p className="mt-1 text-xs text-slate-400">
                  Follow your personalized milestones
                </p>
              </div>

              <button className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-violet-50 hover:text-violet-600">
                Edit roadmap
              </button>
            </div>

            {/* Timeline */}
            <div className="relative mt-8">
              {/* Line */}
              <div className="roadmap-line absolute left-[18px] top-5 h-[calc(100%-45px)] w-[2px]"></div>

              <div className="space-y-8">
                {/* Completed */}
                <div className="relative flex gap-4">
                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white ring-4 ring-emerald-50">
                    ✓
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                          Completed · Phase 1
                        </span>

                        <h3 className="mt-1 text-sm font-bold">
                          Define Career Direction
                        </h3>
                      </div>

                      <span className="text-[10px] text-slate-400">
                        Completed
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      Target role, preferred industry, work environment and
                      career objectives identified.
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600">
                        Career goal
                      </span>

                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600">
                        Target role
                      </span>
                    </div>
                  </div>
                </div>

                {/* Current */}
                <div className="relative flex gap-4">
                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-sm font-bold text-white ring-4 ring-violet-100 shadow-lg shadow-violet-200">
                    2
                  </div>

                  <div className="min-w-0 flex-1 rounded-2xl border border-violet-100 bg-violet-50/40 p-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-violet-600">
                          Current · Phase 2
                        </span>

                        <h3 className="mt-1 text-sm font-bold">
                          Build Technical Skills
                        </h3>
                      </div>

                      <span className="rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-bold text-violet-700">
                        68%
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Close the most important skill gaps for Senior Full Stack
                      Developer roles.
                    </p>

                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white">
                      <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"></div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      <span className="rounded-lg bg-white px-3 py-2 text-[10px] font-semibold text-slate-600">
                        TypeScript
                      </span>

                      <span className="rounded-lg bg-white px-3 py-2 text-[10px] font-semibold text-slate-600">
                        Next.js
                      </span>

                      <span className="rounded-lg bg-white px-3 py-2 text-[10px] font-semibold text-slate-600">
                        AWS
                      </span>

                      <span className="rounded-lg bg-white px-3 py-2 text-[10px] font-semibold text-slate-600">
                        System Design
                      </span>
                    </div>

                    <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-violet-200 transition hover:bg-violet-700">
                      Continue learning
                      <span>→</span>
                    </button>
                  </div>
                </div>

                {/* Upcoming */}
                <div className="relative flex gap-4">
                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-blue-200 bg-white text-sm font-bold text-blue-600 ring-4 ring-blue-50">
                    3
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                          Upcoming · Phase 3
                        </span>

                        <h3 className="mt-1 text-sm font-bold">
                          Build Portfolio Projects
                        </h3>
                      </div>

                      <span className="text-[10px] font-semibold text-slate-400">
                        Next
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      Build production-quality projects that demonstrate your
                      technical capabilities.
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-600">
                        2 projects
                      </span>

                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-600">
                        GitHub
                      </span>

                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-600">
                        Deployment
                      </span>
                    </div>
                  </div>
                </div>

                {/* Phase 4 */}
                <div className="relative flex gap-4">
                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-sm font-bold text-slate-400 ring-4 ring-slate-50">
                    4
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Phase 4
                    </span>

                    <h3 className="mt-1 text-sm font-bold">
                      Optimize Resume & LinkedIn
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      Position your profile for senior-level opportunities and
                      improve ATS visibility.
                    </p>
                  </div>
                </div>

                {/* Phase 5 */}
                <div className="relative flex gap-4">
                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-sm font-bold text-slate-400 ring-4 ring-slate-50">
                    5
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Final Phase
                    </span>

                    <h3 className="mt-1 text-sm font-bold">
                      Apply & Prepare for Interviews
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      Apply strategically, practice interviews and track your
                      applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skill Gap */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold">Skill gap analysis</h2>

                <p className="mt-1 text-xs text-slate-400">
                  What you should focus on next
                </p>
              </div>

              <span className="rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-bold text-violet-600">
                AI analyzed
              </span>
            </div>

            <div className="mt-6 space-y-5">
              {/* Skill */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-400"></span>
                    <span className="text-xs font-bold">System Design</span>
                  </div>

                  <span className="text-[10px] font-bold text-red-500">
                    High priority
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[45%] rounded-full bg-red-400"></div>
                </div>

                <div className="mt-1 text-right text-[10px] text-slate-400">
                  45% ready
                </div>
              </div>

              {/* Skill */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-400"></span>
                    <span className="text-xs font-bold">AWS / Cloud</span>
                  </div>

                  <span className="text-[10px] font-bold text-orange-500">
                    Medium
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[58%] rounded-full bg-orange-400"></div>
                </div>

                <div className="mt-1 text-right text-[10px] text-slate-400">
                  58% ready
                </div>
              </div>

              {/* Skill */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                    <span className="text-xs font-bold">
                      Docker & Kubernetes
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-blue-500">
                    Good
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[72%] rounded-full bg-blue-400"></div>
                </div>

                <div className="mt-1 text-right text-[10px] text-slate-400">
                  72% ready
                </div>
              </div>

              {/* Skill */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                    <span className="text-xs font-bold">React / Next.js</span>
                  </div>

                  <span className="text-[10px] font-bold text-emerald-500">
                    Strong
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[88%] rounded-full bg-emerald-400"></div>
                </div>

                <div className="mt-1 text-right text-[10px] text-slate-400">
                  88% ready
                </div>
              </div>
            </div>

            <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-4 py-3 text-xs font-bold text-violet-700 transition hover:bg-violet-600 hover:text-white">
              View complete skill analysis
              <span>→</span>
            </button>
          </div>
        </section>

        {/* ================================================= */}
        {/* THIS WEEK */}
        {/* ================================================= */}

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Weekly Plan */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold">This week's plan</h2>

                <p className="mt-1 text-xs text-slate-400">
                  Your recommended actions
                </p>
              </div>

              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
                3 / 5 done
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {/* Task */}
              <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                  ✓
                </div>

                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold line-through text-slate-400">
                    Update GitHub profile
                  </div>

                  <div className="mt-0.5 text-[10px] text-slate-400">
                    20 min
                  </div>
                </div>
              </div>

              {/* Task */}
              <div className="flex items-center gap-3 rounded-xl border border-violet-100 bg-violet-50/40 p-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-violet-500 bg-white text-xs font-bold text-violet-600">
                  2
                </div>

                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold">
                    Complete System Design lesson
                  </div>

                  <div className="mt-0.5 text-[10px] text-slate-400">
                    60 min · High priority
                  </div>
                </div>

                <span className="text-violet-500">→</span>
              </div>

              {/* Task */}
              <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-xs font-bold text-slate-400">
                  3
                </div>

                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold">
                    Build API scaling project
                  </div>

                  <div className="mt-0.5 text-[10px] text-slate-400">
                    2 hrs · Portfolio
                  </div>
                </div>
              </div>

              {/* Task */}
              <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-xs font-bold text-slate-400">
                  4
                </div>

                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold">
                    Complete AWS fundamentals
                  </div>

                  <div className="mt-0.5 text-[10px] text-slate-400">
                    45 min · Skill
                  </div>
                </div>
              </div>
            </div>

            <button className="mt-5 w-full rounded-xl bg-slate-50 px-4 py-3 text-xs font-bold text-slate-600 transition hover:bg-violet-50 hover:text-violet-600">
              View weekly plan
            </button>
          </div>

          {/* Recommended Learning */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold">Recommended next steps</h2>

                <p className="mt-1 text-xs text-slate-400">
                  AI-selected based on your career goal
                </p>
              </div>

              <button className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-violet-50 hover:text-violet-600">
                See all
              </button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {/* Recommendation */}
              <div className="card-hover rounded-xl border border-slate-100 p-4">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500">
                    ◈
                  </div>

                  <span className="rounded-full bg-red-50 px-2 py-1 text-[9px] font-bold text-red-500">
                    High priority
                  </span>
                </div>

                <h3 className="mt-4 text-xs font-bold">Learn System Design</h3>

                <p className="mt-1 text-[11px] leading-5 text-slate-400">
                  Improve architecture and scalability knowledge for senior
                  roles.
                </p>

                <button className="mt-4 text-[10px] font-bold text-violet-600">
                  Start learning →
                </button>
              </div>

              {/* Recommendation */}
              <div className="card-hover rounded-xl border border-slate-100 p-4">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    ☁
                  </div>

                  <span className="rounded-full bg-orange-50 px-2 py-1 text-[9px] font-bold text-orange-500">
                    Medium
                  </span>
                </div>

                <h3 className="mt-4 text-xs font-bold">
                  Strengthen AWS Skills
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-slate-400">
                  Build cloud deployment knowledge to improve job readiness.
                </p>

                <button className="mt-4 text-[10px] font-bold text-violet-600">
                  Start learning →
                </button>
              </div>

              {/* Recommendation */}
              <div className="card-hover rounded-xl border border-slate-100 p-4">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                    ⌘
                  </div>

                  <span className="rounded-full bg-blue-50 px-2 py-1 text-[9px] font-bold text-blue-500">
                    Career boost
                  </span>
                </div>

                <h3 className="mt-4 text-xs font-bold">
                  Build a Cloud Project
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-slate-400">
                  Demonstrate real-world cloud architecture in your portfolio.
                </p>

                <button className="mt-4 text-[10px] font-bold text-violet-600">
                  View project idea →
                </button>
              </div>

              {/* Recommendation */}
              <div className="card-hover rounded-xl border border-slate-100 p-4">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                    ✦
                  </div>

                  <span className="rounded-full bg-violet-50 px-2 py-1 text-[9px] font-bold text-violet-600">
                    Recommended
                  </span>
                </div>

                <h3 className="mt-4 text-xs font-bold">
                  Practice Senior Interviews
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-slate-400">
                  Prepare for behavioral and technical interview rounds.
                </p>

                <button className="mt-4 text-[10px] font-bold text-violet-600">
                  Practice with AI →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* AI INSIGHT */}
        {/* ================================================= */}

        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 p-6 text-white shadow-lg shadow-violet-200 sm:p-7">
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-20 left-20 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl"></div>

          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet-200">
                <span className="text-lg">✦</span>
                AI Career Insight
              </div>

              <h2 className="mt-4 text-xl font-extrabold sm:text-2xl">
                Your next biggest opportunity is System Design.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-violet-100">
                Based on your target role and current skill profile, improving
                your architecture and scalability knowledge could have the
                biggest impact on your career readiness.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-semibold">
                  High demand
                </span>

                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-semibold">
                  Senior roles
                </span>

                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-semibold">
                  Skill gap
                </span>
              </div>
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-violet-700 shadow-lg transition hover:-translate-y-0.5">
              Create learning plan
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
      </div>
  );
};

export default Index;
