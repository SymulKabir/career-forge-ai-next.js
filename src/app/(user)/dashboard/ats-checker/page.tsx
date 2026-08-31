import React from "react"

const Index = () => {
  return <div>
    <section>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-[11px] font-semibold text-violet-600">
            <span>✦</span>
            AI-powered resume analysis
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            ATS Checker
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Analyze your resume against Applicant Tracking Systems and discover
            exactly what you need to improve before applying.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5"
        >
          <span className="text-base">+</span>
          New ATS Scan
        </button>
      </div>
    </section>

    {/* ================================================= */}
    {/* RESUME SELECTOR */}
    {/* ================================================= */}

    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
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
                d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
              />
              <path strokeLinecap="round" d="M14 3v5h5M8 13h8M8 17h6" />
            </svg>
          </div>

          <div>
            <div className="text-xs font-medium text-slate-400">
              Selected resume
            </div>

            <div className="mt-1 text-sm font-bold text-slate-800">
              Senior Full Stack Developer Resume
            </div>

            <div className="mt-1 text-[11px] text-slate-400">
              Updated today · PDF · 245 KB
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-600 transition hover:border-violet-200 hover:text-violet-600"
          >
            Change Resume
          </button>

          <button
            type="button"
            className="rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-violet-600"
          >
            Upload New
          </button>
        </div>
      </div>
    </section>

    {/* ================================================= */}
    {/* SCORE + ANALYSIS */}
    {/* ================================================= */}

    <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      {/* ATS SCORE */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-100/60 blur-3xl" />

        <div className="relative">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-base font-bold">ATS compatibility</h2>

              <p className="mt-1 text-xs text-slate-400">
                Overall resume score
              </p>
            </div>

            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
              Excellent
            </span>
          </div>

          {/* Score */}
          <div className="mt-8 flex justify-center">
            <div className="score-ring flex h-48 w-48 items-center justify-center rounded-full">
              <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full bg-white">
                <div className="text-5xl font-extrabold tracking-tight">78</div>

                <div className="mt-1 text-xs font-medium text-slate-400">
                  out of 100
                </div>

                <div className="mt-2 text-[11px] font-bold text-emerald-600">
                  ↑ 8 points
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 rounded-xl bg-violet-50 p-4">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-violet-600">
                ✦
              </div>

              <div>
                <div className="text-xs font-bold text-slate-800">
                  Good score, but there's room to improve
                </div>

                <p className="mt-1 text-[11px] leading-5 text-slate-500">
                  Your resume is already competitive. Fixing the highlighted issues
                  could push your score above 90.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORY SCORES */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold">Resume analysis</h2>

            <p className="mt-1 text-xs text-slate-400">
              Performance by category
            </p>
          </div>

          <button
            type="button"
            className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-violet-50 hover:text-violet-600"
          >
            Detailed report
          </button>
        </div>

        <div className="mt-7 space-y-6">
          {/* Keywords */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  #
                </span>

                <span className="text-xs font-bold">Keywords</span>
              </div>

              <span className="text-xs font-extrabold text-blue-600">82%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="progress-bar h-full w-[82%] rounded-full bg-blue-500" />
            </div>

            <div className="mt-2 text-[10px] text-slate-400">
              41 of 50 important keywords found
            </div>
          </div>

          {/* Formatting */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  ✓
                </span>

                <span className="text-xs font-bold">Formatting</span>
              </div>

              <span className="text-xs font-extrabold text-emerald-600">94%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="progress-bar h-full w-[94%] rounded-full bg-emerald-500" />
            </div>

            <div className="mt-2 text-[10px] text-slate-400">
              Clean structure and ATS-friendly formatting
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                  ★
                </span>

                <span className="text-xs font-bold">Skills</span>
              </div>

              <span className="text-xs font-extrabold text-violet-600">76%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="progress-bar h-full w-[76%] rounded-full bg-violet-500" />
            </div>

            <div className="mt-2 text-[10px] text-slate-400">
              Strong technical coverage with a few missing skills
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                  ◉
                </span>

                <span className="text-xs font-bold">Experience</span>
              </div>

              <span className="text-xs font-extrabold text-orange-500">71%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="progress-bar h-full w-[71%] rounded-full bg-orange-500" />
            </div>

            <div className="mt-2 text-[10px] text-slate-400">
              Improve impact statements and measurable achievements
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ================================================= */}
    {/* JOB DESCRIPTION MATCH */}
    {/* ================================================= */}

    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-base font-bold">Match your resume to a job</h2>

          <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-400">
            Paste a job description to see how closely your resume matches the
            position.
          </p>
        </div>

        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-bold text-blue-600">
          ✦ Recommended
        </span>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto]">
        <div className="relative">
          <textarea
            rows={5}
            placeholder="Paste the job description here..."
            className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100"
          />

          <div className="absolute bottom-3 right-3 text-[10px] text-slate-400">
            0 / 5000
          </div>
        </div>

        <button
          type="button"
          className="flex h-fit items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 lg:self-end"
        >
          Analyze Match

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

    {/* ================================================= */}
    {/* KEYWORD GAP + RECOMMENDATIONS */}
    {/* ================================================= */}

    <section className="grid gap-6 lg:grid-cols-2">
      {/* Missing Keywords */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-base font-bold">Missing keywords</h2>

            <p className="mt-1 text-xs text-slate-400">
              Skills frequently requested for your target roles
            </p>
          </div>

          <span className="rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold text-red-500">
            9 missing
          </span>
        </div>

        <div className="mt-6 space-y-3">
          {[
            { name: "CI/CD", importance: "High importance", color: "red" },
            { name: "GraphQL", importance: "Medium importance", color: "orange" },
            { name: "Microservices", importance: "High importance", color: "red" },
            { name: "Azure", importance: "Medium importance", color: "orange" },
          ].map((keyword) => (
            <div
              key={keyword.name}
              className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-3"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-violet-600 shadow-sm">
                  +
                </span>

                <div>
                  <div className="text-xs font-bold">{keyword.name}</div>

                  <div className="text-[10px] text-slate-400">
                    {keyword.importance}
                  </div>
                </div>
              </div>

              <span
                className={
                  keyword.color === "red"
                    ? "rounded-full bg-red-50 px-2 py-1 text-[9px] font-bold text-red-500"
                    : "rounded-full bg-orange-50 px-2 py-1 text-[9px] font-bold text-orange-500"
                }
              >
                Missing
              </span>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="mt-5 w-full rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-slate-600 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
        >
          View all missing keywords
        </button>
      </div>

      {/* AI Recommendations */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-base font-bold">AI recommendations</h2>

            <p className="mt-1 text-xs text-slate-400">
              Personalized improvements for your resume
            </p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
            ✦
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {[
            {
              number: 1,
              title: "Add measurable achievements",
              description:
                "Replace generic responsibilities with measurable results such as performance improvements, revenue, users, or delivery time.",
              className: "border-violet-100 bg-violet-50/60",
              numberClass: "text-violet-600",
            },
            {
              number: 2,
              title: "Strengthen your skills section",
              description:
                "Add relevant tools and technologies that frequently appear in your target Full Stack Developer positions.",
              className: "border-blue-100 bg-blue-50/60",
              numberClass: "text-blue-600",
            },
            {
              number: 3,
              title: "Improve your professional summary",
              description:
                "Mention your years of experience, strongest technical skills and the type of role you're targeting.",
              className: "border-emerald-100 bg-emerald-50/60",
              numberClass: "text-emerald-600",
            },
          ].map((recommendation) => (
            <div
              key={recommendation.number}
              className={`rounded-xl border p-4 ${recommendation.className}`}
            >
              <div className="flex gap-3">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ${recommendation.numberClass}`}
                >
                  {recommendation.number}
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-800">
                    {recommendation.title}
                  </div>

                  <p className="mt-1 text-[11px] leading-5 text-slate-500">
                    {recommendation.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 text-xs font-bold text-white shadow-lg shadow-violet-100 transition hover:-translate-y-0.5"
        >
          Apply AI Improvements
          <span>→</span>
        </button>
      </div>
    </section>

    {/* ================================================= */}
    {/* RESUME CHECKLIST */}
    {/* ================================================= */}

    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold">ATS checklist</h2>

          <p className="mt-1 text-xs text-slate-400">
            Important ATS-friendly resume requirements
          </p>
        </div>

        <div className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-600">
          7 / 10 passed
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Standard section headings",
            status: "Passed",
            type: "success",
          },
          {
            title: "Simple formatting",
            status: "Passed",
            type: "success",
          },
          {
            title: "Contact information",
            status: "Passed",
            type: "success",
          },
          {
            title: "Relevant experience",
            status: "Passed",
            type: "success",
          },
          {
            title: "Keyword density",
            status: "Needs improvement",
            type: "warning",
          },
          {
            title: "Quantified achievements",
            status: "Needs improvement",
            type: "error",
          },
        ].map((item) => {
          const styles = {
            success: {
              container: "border-emerald-100 bg-emerald-50/60",
              icon: "text-emerald-600",
              status: "text-emerald-600",
              symbol: "✓",
            },
            warning: {
              container: "border-orange-100 bg-orange-50/60",
              icon: "text-orange-500",
              status: "text-orange-500",
              symbol: "!",
            },
            error: {
              container: "border-red-100 bg-red-50/60",
              icon: "text-red-500",
              status: "text-red-500",
              symbol: "!",
            },
          }[item.type];

          return (
            <div
              key={item.title}
              className={`flex items-center gap-3 rounded-xl border p-4 ${styles.container}`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm ${styles.icon}`}
              >
                {styles.symbol}
              </span>

              <div>
                <div className="text-xs font-bold">{item.title}</div>

                <div className={`text-[10px] ${styles.status}`}>
                  {item.status}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>

    {/* ================================================= */}
    {/* RECENT SCANS */}
    {/* ================================================= */}

    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold">Recent ATS scans</h2>

          <p className="mt-1 text-xs text-slate-400">
            Your previous resume analysis
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
        {[
          {
            title: "Senior Full Stack Developer Resume",
            date: "Today · 10:30 AM",
            score: 78,
            iconClass: "bg-blue-50 text-blue-600",
            scoreClass: "text-emerald-600",
          },
          {
            title: "Full Stack Developer Resume v2",
            date: "Aug 23 · 3:45 PM",
            score: 70,
            iconClass: "bg-violet-50 text-violet-600",
            scoreClass: "text-emerald-600",
          },
          {
            title: "Software Engineer Resume",
            date: "Aug 19 · 11:20 AM",
            score: 64,
            iconClass: "bg-orange-50 text-orange-500",
            scoreClass: "text-orange-500",
          },
        ].map((scan) => (
          <div
            key={scan.title}
            className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold ${scan.iconClass}`}
              >
                PDF
              </div>

              <div>
                <div className="text-xs font-bold">{scan.title}</div>

                <div className="mt-1 text-[10px] text-slate-400">
                  {scan.date}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="text-right">
                <div className={`text-lg font-extrabold ${scan.scoreClass}`}>
                  {scan.score}
                </div>

                <div className="text-[9px] text-slate-400">ATS score</div>
              </div>

              <button
                type="button"
                className="rounded-lg bg-slate-50 px-3 py-2 text-[10px] font-bold text-slate-600 hover:bg-violet-50 hover:text-violet-600"
              >
                View report
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ================================================= */}
    {/* CTA */}
    {/* ================================================= */}

    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 p-6 text-white shadow-lg shadow-violet-200 sm:p-8">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-20 left-20 h-52 w-52 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-wider text-violet-200">
            ✦ Ready to improve?
          </div>

          <h2 className="mt-3 text-2xl font-extrabold">
            Take your ATS score from{" "}
            <span className="text-violet-200">78 → 90+</span>
          </h2>

          <p className="mt-2 text-sm leading-6 text-violet-100">
            Let CareerForge AI optimize your resume keywords, achievements and
            job-specific content.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-violet-700 shadow-xl transition hover:-translate-y-0.5"
        >
          Optimize My Resume
          <span>→</span>
        </button>
      </div>
    </section>
  </div>

}


export default Index;
