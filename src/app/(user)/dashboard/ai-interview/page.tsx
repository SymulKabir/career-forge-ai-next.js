"use client";

import React from "react";

const Index = () => {
  return (
    <div className="mx-auto max-w-[1500px] space-y-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      {/* ========================================================= */}
      {/* PAGE HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-6 shadow-soft sm:p-8">
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="absolute -bottom-20 right-32 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_340px] lg:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-violet-600">
              <span>✦</span>
              AI-powered interview practice
            </div>

            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Practice smarter.{" "}
              <span className="gradient-text">Interview better.</span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Practice realistic job interviews with your AI interviewer. Get
              instant feedback on your answers, communication, and technical
              skills.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5">
                Start AI Interview
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

              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-violet-200 hover:text-violet-600">
                View Interview History
              </button>
            </div>
          </div>

          {/* Interview Visual */}

          <div className="relative mx-auto flex w-full max-w-[300px] items-center justify-center">
            <div className="pulse-ring flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 shadow-2xl shadow-violet-200">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-violet-600 shadow-xl">
                  <svg
                    className="h-9 w-9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <path
                      strokeLinecap="round"
                      d="M8 10h.01M12 10h.01M16 10h.01M8 14h8"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-5 rounded-xl border border-white bg-white px-3 py-2 shadow-card">
              <div className="text-[10px] font-semibold text-slate-400">
                AI Feedback
              </div>

              <div className="mt-0.5 text-sm font-extrabold text-emerald-600">
                94%
              </div>
            </div>

            <div className="absolute bottom-3 left-0 rounded-xl border border-white bg-white px-3 py-2 shadow-card">
              <div className="text-[10px] font-semibold text-slate-400">
                Interviews
              </div>

              <div className="mt-0.5 text-sm font-extrabold text-violet-600">
                8 completed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* STATS */}
      {/* ========================================================= */}

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Interviews */}

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
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <path
                  strokeLinecap="round"
                  d="M8 10h.01M12 10h.01M16 10h.01M8 14h8"
                />
              </svg>
            </div>

            <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
              +2
            </span>
          </div>

          <div className="mt-5 text-xs font-medium text-slate-400">
            Interviews Completed
          </div>

          <div className="mt-1 text-3xl font-extrabold">8</div>

          <div className="mt-1 text-xs text-slate-400">
            Total practice sessions
          </div>
        </div>

        {/* Score */}

        <div className="card-hover rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="flex items-start justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="8" />
                <path strokeLinecap="round" d="M8 12l2.5 2.5L16 9" />
              </svg>
            </div>

            <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
              +12%
            </span>
          </div>

          <div className="mt-5 text-xs font-medium text-slate-400">
            Average Score
          </div>

          <div className="mt-1 text-3xl font-extrabold">86%</div>

          <div className="mt-1 text-xs text-slate-400">
            Overall interview performance
          </div>

          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500" />
          </div>
        </div>

        {/* Technical */}

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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"
                />
              </svg>
            </div>

            <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-bold text-blue-600">
              Strong
            </span>
          </div>

          <div className="mt-5 text-xs font-medium text-slate-400">
            Technical Skills
          </div>

          <div className="mt-1 text-3xl font-extrabold">91%</div>

          <div className="mt-1 text-xs text-slate-400">
            Technical answer quality
          </div>
        </div>

        {/* Communication */}

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
                <path strokeLinecap="round" d="M5 5h14v10H9l-4 4V5Z" />
              </svg>
            </div>

            <span className="rounded-full bg-orange-50 px-2 py-1 text-[10px] font-bold text-orange-600">
              +6%
            </span>
          </div>

          <div className="mt-5 text-xs font-medium text-slate-400">
            Communication
          </div>

          <div className="mt-1 text-3xl font-extrabold">82%</div>

          <div className="mt-1 text-xs text-slate-400">
            Clarity and confidence
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTERVIEW SETUP + AI COACH */}
      {/* ========================================================= */}

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Start Interview */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
          <div>
            <h2 className="text-base font-bold">Start a new interview</h2>

            <p className="mt-1 text-xs text-slate-400">
              Choose an interview type and let AI simulate a real interview.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {/* Technical */}

            <button className="card-hover group rounded-2xl border border-violet-200 bg-violet-50/50 p-5 text-left">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"
                    />
                  </svg>
                </div>

                <span className="text-lg text-slate-300 transition group-hover:translate-x-1 group-hover:text-violet-600">
                  →
                </span>
              </div>

              <h3 className="mt-5 text-sm font-bold">Technical Interview</h3>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Practice coding, architecture, frameworks, and technical
                questions.
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-slate-500">
                  15 questions
                </span>

                <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-slate-500">
                  ~25 min
                </span>
              </div>
            </button>

            {/* Behavioral */}

            <button className="card-hover group rounded-2xl border border-blue-200 bg-blue-50/50 p-5 text-left">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" d="M6 5h12v10H9l-3 3V5Z" />
                    <path strokeLinecap="round" d="M9 9h6M9 12h4" />
                  </svg>
                </div>

                <span className="text-lg text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600">
                  →
                </span>
              </div>

              <h3 className="mt-5 text-sm font-bold">Behavioral Interview</h3>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Practice leadership, teamwork, problem-solving, and HR
                questions.
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-slate-500">
                  10 questions
                </span>

                <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-slate-500">
                  ~15 min
                </span>
              </div>
            </button>

            {/* Mixed */}

            <button className="card-hover group rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 text-left">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="9" cy="9" r="4" />
                    <circle cx="15" cy="15" r="4" />
                    <path strokeLinecap="round" d="m12 12 1 1" />
                  </svg>
                </div>

                <span className="text-lg text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-600">
                  →
                </span>
              </div>

              <h3 className="mt-5 text-sm font-bold">Full Mock Interview</h3>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Experience a complete interview combining technical and
                behavioral questions.
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-slate-500">
                  20 questions
                </span>

                <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-slate-500">
                  ~35 min
                </span>
              </div>
            </button>

            {/* Job Specific */}

            <button className="card-hover group rounded-2xl border border-orange-200 bg-orange-50/50 p-5 text-left">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="7" width="18" height="13" rx="2" />
                    <path
                      strokeLinecap="round"
                      d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                    />
                  </svg>
                </div>

                <span className="text-lg text-slate-300 transition group-hover:translate-x-1 group-hover:text-orange-500">
                  →
                </span>
              </div>

              <h3 className="mt-5 text-sm font-bold">Job-Specific Interview</h3>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Upload a job description and practice questions tailored to that
                role.
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-slate-500">
                  AI tailored
                </span>

                <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-slate-500">
                  Smart
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* AI Coach */}

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 p-6 text-white shadow-lg shadow-violet-200">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

          <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet-200">
              <span className="text-lg">✦</span>
              AI Interview Coach
            </div>

            <h2 className="mt-5 text-xl font-extrabold">
              Your interview performance
            </h2>

            <p className="mt-3 text-sm leading-6 text-violet-100">
              You're improving consistently. Focus on concise answers and
              stronger examples to reach the next level.
            </p>

            <div className="mt-6 flex items-center gap-5">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-white/15">
                <div className="text-center">
                  <div className="text-2xl font-extrabold">86%</div>

                  <div className="text-[9px] text-violet-200">Score</div>
                </div>
              </div>

              <div className="space-y-3">
                <CoachProgress label="Technical" value="91%" width="91%" />

                <CoachProgress label="Communication" value="82%" width="82%" />

                <CoachProgress label="Confidence" value="85%" width="85%" />
              </div>
            </div>

            <button className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-violet-700 shadow-lg transition hover:-translate-y-0.5">
              View Detailed Feedback
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
        </div>
      </section>

      {/* ========================================================= */}
      {/* RECENT INTERVIEWS */}
      {/* ========================================================= */}

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold">Recent interviews</h2>

            <p className="mt-1 text-xs text-slate-400">
              Review your latest practice sessions
            </p>
          </div>

          <button className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-violet-50 hover:text-violet-600">
            View all
          </button>
        </div>

        <div className="mt-5 divide-y divide-slate-100">
          <InterviewRow
            title="Senior Full Stack Developer"
            subtitle="Technical Interview · Today"
            score="92%"
            status="Excellent"
            iconClass="bg-violet-50 text-violet-600"
            icon="chat"
            statusClass="bg-emerald-50 text-emerald-600"
          />

          <InterviewRow
            title="Behavioral Mock Interview"
            subtitle="Behavioral · Yesterday"
            score="84%"
            status="Good"
            iconClass="bg-blue-50 text-blue-600"
            icon="message"
            statusClass="bg-blue-50 text-blue-600"
          />

          <InterviewRow
            title="Frontend Engineer Mock Interview"
            subtitle="Full Mock Interview · 3 days ago"
            score="79%"
            status="Improving"
            iconClass="bg-orange-50 text-orange-500"
            icon="document"
            statusClass="bg-orange-50 text-orange-600"
          />
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTERVIEW TIPS */}
      {/* ========================================================= */}

      <section>
        <div className="mb-4">
          <h2 className="text-base font-bold">Interview preparation</h2>

          <p className="mt-1 text-xs text-slate-400">
            Improve the areas that matter most
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <PreparationTip
            icon="🎯"
            iconClass="bg-violet-50 text-violet-600"
            title="Practice STAR answers"
            description="Structure behavioral answers using Situation, Task, Action, and Result."
          />

          <PreparationTip
            icon="💬"
            iconClass="bg-blue-50 text-blue-600"
            title="Keep answers concise"
            description="Aim for clear answers that communicate your point without unnecessary detail."
          />

          <PreparationTip
            icon="🧠"
            iconClass="bg-emerald-50 text-emerald-600"
            title="Know your projects"
            description="Be prepared to explain your technical decisions and the impact of your projects."
          />

          <PreparationTip
            icon="🎤"
            iconClass="bg-orange-50 text-orange-500"
            title="Build confidence"
            description="Practice speaking naturally and confidently before your real interview."
          />
        </div>
      </section>
    </div>
  );
};

/* ========================================================= */
/* COACH PROGRESS */
/* ========================================================= */

interface CoachProgressProps {
  label: string;
  value: string;
  width: string;
}

function CoachProgress({ label, value, width }: CoachProgressProps) {
  return (
    <div>
      <div className="flex justify-between text-[10px]">
        <span className="text-violet-200">{label}</span>

        <span className="font-bold">{value}</span>
      </div>

      <div className="mt-1 h-1.5 w-32 rounded-full bg-white/10">
        <div className="h-full rounded-full bg-white" style={{ width }} />
      </div>
    </div>
  );
}

/* ========================================================= */
/* INTERVIEW ROW */
/* ========================================================= */

interface InterviewRowProps {
  title: string;
  subtitle: string;
  score: string;
  status: string;
  iconClass: string;
  icon: "chat" | "message" | "document";
  statusClass: string;
}

function InterviewRow({
  title,
  subtitle,
  score,
  status,
  iconClass,
  icon,
  statusClass,
}: InterviewRowProps) {
  return (
    <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
        >
          {icon === "chat" && (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <path strokeLinecap="round" d="M8 14h8" />
            </svg>
          )}

          {icon === "message" && (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M5 5h14v10H9l-4 4V5Z" />
            </svg>
          )}

          {icon === "document" && (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <path strokeLinecap="round" d="M8 10h8M8 14h5" />
            </svg>
          )}
        </div>

        <div>
          <h3 className="text-sm font-bold">{title}</h3>

          <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="text-right">
          <div className="text-sm font-extrabold">{score}</div>

          <div className="text-[10px] text-slate-400">Score</div>
        </div>

        <span
          className={`rounded-full px-3 py-1.5 text-[10px] font-bold ${statusClass}`}
        >
          {status}
        </span>

        <button className="text-slate-300 transition hover:text-violet-600">
          →
        </button>
      </div>
    </div>
  );
}

/* ========================================================= */
/* PREPARATION TIP */
/* ========================================================= */

interface PreparationTipProps {
  icon: string;
  iconClass: string;
  title: string;
  description: string;
}

function PreparationTip({
  icon,
  iconClass,
  title,
  description,
}: PreparationTipProps) {
  return (
    <div className="card-hover rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconClass}`}
      >
        {icon}
      </div>

      <h3 className="mt-5 text-sm font-bold">{title}</h3>

      <p className="mt-1 text-xs leading-5 text-slate-400">{description}</p>
    </div>
  );
}

export default Index;
