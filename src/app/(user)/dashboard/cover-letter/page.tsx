import React from "react";

const Index = () => {
  return (
    <div className="mx-auto max-w-[1500px] space-y-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      {/* =============================================== */}
      {/* PAGE HERO */}
      {/* =============================================== */}

      <section className="relative overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-6 shadow-soft sm:p-8">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="absolute -bottom-24 right-20 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-violet-600">
            ✦ AI-powered writing assistant
          </div>

          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                Create a winning{" "}
                <span className="gradient-text">cover letter</span>
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Tell us about the job and your experience. CareerForge AI will
                create a personalized cover letter tailored to the role.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white bg-white/80 px-4 py-3 shadow-card">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                ✦
              </div>

              <div>
                <div className="text-xs font-bold text-slate-800">
                  12 letters generated
                </div>

                <div className="mt-0.5 text-[10px] text-slate-400">
                  3 this week
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================== */}
      {/* MAIN WORKSPACE */}
      {/* =============================================== */}

      <section className="grid gap-6 xl:grid-cols-[430px_minmax(0,1fr)]">
        {/* ============================================= */}
        {/* LEFT: GENERATOR FORM */}
        {/* ============================================= */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
          <div>
            <h2 className="text-base font-bold">Cover letter details</h2>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              Add the job information and choose how you want your letter to
              sound.
            </p>
          </div>

          {/* Resume */}

          <div className="mt-6">
            <label
              htmlFor="resume"
              className="mb-2 block text-xs font-bold text-slate-700"
            >
              Use resume
            </label>

            <button
              type="button"
              className="flex w-full items-center justify-between rounded-xl border border-violet-200 bg-violet-50/50 p-3 text-left transition hover:border-violet-300"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-violet-600 shadow-sm">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                    />

                    <path d="M14 3v5h5" />
                  </svg>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-800">
                    Senior Full Stack Developer
                  </div>

                  <div className="mt-0.5 text-[10px] text-slate-400">
                    Updated today
                  </div>
                </div>
              </div>

              <svg
                className="h-4 w-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>

          {/* Job Title */}

          <div className="mt-5">
            <label
              htmlFor="job-title"
              className="mb-2 block text-xs font-bold text-slate-700"
            >
              Job title <span className="text-red-500">*</span>
            </label>

            <input
              id="job-title"
              type="text"
              defaultValue="Senior Full Stack Developer"
              placeholder="e.g. Senior Software Engineer"
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100"
            />
          </div>

          {/* Company */}

          <div className="mt-5">
            <label
              htmlFor="company"
              className="mb-2 block text-xs font-bold text-slate-700"
            >
              Company <span className="text-red-500">*</span>
            </label>

            <input
              id="company"
              type="text"
              defaultValue="Google"
              placeholder="e.g. Google"
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100"
            />
          </div>

          {/* Job Description */}

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="job-description"
                className="text-xs font-bold text-slate-700"
              >
                Job description <span className="text-red-500">*</span>
              </label>

              <span className="text-[10px] text-slate-400">
                Paste from job posting
              </span>
            </div>

            <textarea
              id="job-description"
              rows={6}
              defaultValue="We are looking for a Senior Full Stack Developer to build scalable web applications using React, TypeScript, Node.js and cloud technologies. Experience with modern software architecture, APIs, databases and DevOps is preferred."
              placeholder="Paste the job description here..."
              className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs leading-5 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100"
            />

            <div className="mt-2 flex justify-end">
              <button
                type="button"
                className="text-[10px] font-semibold text-violet-600 hover:text-violet-700"
              >
                ✨ Extract requirements with AI
              </button>
            </div>
          </div>

          {/* Tone */}

          <div className="mt-5">
            <label className="mb-2 block text-xs font-bold text-slate-700">
              Writing tone
            </label>

            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                className="rounded-xl border border-violet-300 bg-violet-50 px-2 py-3 text-center"
              >
                <div className="text-xs font-bold text-violet-700">
                  Professional
                </div>

                <div className="mt-1 text-[9px] text-violet-500">
                  Recommended
                </div>
              </button>

              <button
                type="button"
                className="rounded-xl border border-slate-200 bg-white px-2 py-3 text-center transition hover:border-violet-200"
              >
                <div className="text-xs font-semibold text-slate-600">
                  Confident
                </div>

                <div className="mt-1 text-[9px] text-slate-400">
                  Direct & strong
                </div>
              </button>

              <button
                type="button"
                className="rounded-xl border border-slate-200 bg-white px-2 py-3 text-center transition hover:border-violet-200"
              >
                <div className="text-xs font-semibold text-slate-600">
                  Friendly
                </div>

                <div className="mt-1 text-[9px] text-slate-400">
                  Warm & human
                </div>
              </button>
            </div>
          </div>

          {/* Length */}

          <div className="mt-5">
            <label className="mb-2 block text-xs font-bold text-slate-700">
              Letter length
            </label>

            <div className="flex rounded-xl bg-slate-100 p-1">
              <button
                type="button"
                className="flex-1 rounded-lg bg-white px-3 py-2 text-[11px] font-bold text-violet-600 shadow-sm"
              >
                Concise
              </button>

              <button
                type="button"
                className="flex-1 rounded-lg px-3 py-2 text-[11px] font-semibold text-slate-500"
              >
                Standard
              </button>

              <button
                type="button"
                className="flex-1 rounded-lg px-3 py-2 text-[11px] font-semibold text-slate-500"
              >
                Detailed
              </button>
            </div>
          </div>

          {/* Generate */}

          <button
            type="button"
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5"
          >
            <span>✦</span>
            Generate Cover Letter
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

          <p className="mt-3 text-center text-[10px] text-slate-400">
            AI-generated content can be edited before use.
          </p>
        </div>

        {/* ============================================= */}
        {/* RIGHT: PREVIEW */}
        {/* ============================================= */}

        <div className="min-w-0 rounded-2xl border border-slate-200 bg-slate-100/70 p-4 shadow-card sm:p-6">
          {/* Preview Header */}

          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold">Cover letter preview</h2>

                <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-600">
                  AI Generated
                </span>
              </div>

              <p className="mt-1 text-xs text-slate-400">
                Review and customize your letter before sending.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-violet-200 hover:text-violet-600"
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
                    d="M8 8h12v12H8zM4 16H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1"
                  />
                </svg>
                Copy
              </button>

              <button
                type="button"
                className="flex items-center gap-2 rounded-xl bg-violet-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-violet-700"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" d="M12 3v12m0 0 4-4m-4 4-4-4" />

                  <path strokeLinecap="round" d="M5 20h14" />
                </svg>
                Download
              </button>
            </div>
          </div>

          {/* Paper */}

          <div className="flex justify-center">
            <div className="paper w-full max-w-[760px] rounded-sm bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.10)] sm:p-12">
              {/* Letter Header */}

              <div className="flex flex-col gap-5 border-b border-slate-100 pb-7 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight">
                    Saimon Pranta
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-slate-400">
                    Dhaka, Bangladesh
                    <br />
                    saimonpranta@gmail.com
                    <br />
                    +880 1881 476432
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <div className="text-xs font-bold text-slate-700">
                    August 25, 2026
                  </div>

                  <div className="mt-3 text-xs font-semibold text-slate-700">
                    Hiring Team
                  </div>

                  <div className="mt-1 text-[11px] text-slate-400">Google</div>
                </div>
              </div>

              {/* Letter Content */}

              <div className="mt-8 space-y-5 text-[12px] leading-6 text-slate-600">
                <div>Dear Hiring Team,</div>

                <p>
                  I am excited to apply for the{" "}
                  <strong className="font-bold text-slate-800">
                    Senior Full Stack Developer
                  </strong>{" "}
                  position at Google. With more than five years of professional
                  experience building modern web applications, I bring hands-on
                  expertise across frontend development, backend systems, cloud
                  infrastructure, and scalable application architecture.
                </p>

                <p>
                  My experience with{" "}
                  <strong className="font-bold text-slate-800">
                    React, Next.js, TypeScript, Node.js, Docker, AWS, and
                    Kubernetes
                  </strong>{" "}
                  has allowed me to build and maintain production-ready
                  applications while focusing on performance, maintainability,
                  and user experience. I particularly enjoy solving complex
                  technical problems and turning product requirements into
                  reliable software.
                </p>

                <p>
                  I believe my combination of full-stack development experience
                  and strong interest in modern cloud and DevOps practices would
                  allow me to contribute effectively to your engineering team. I
                  would welcome the opportunity to discuss how my background and
                  experience could support Google&apos;s products and
                  engineering goals.
                </p>

                <p>
                  Thank you for considering my application. I look forward to
                  the opportunity to speak with you.
                </p>

                <div className="pt-2">
                  <div>Kind regards,</div>

                  <div className="mt-4 text-sm font-bold text-slate-800">
                    Saimon Pranta
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Suggestions */}

          <div className="mx-auto mt-5 max-w-[760px] rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 to-blue-50 p-4">
            <div className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                ✦
              </div>

              <div className="min-w-0">
                <div className="text-xs font-bold text-slate-800">
                  AI improvement suggestions
                </div>

                <p className="mt-1 text-[11px] leading-5 text-slate-500">
                  Your letter is strong. Adding one specific achievement related
                  to the company&apos;s requirements could make it more
                  compelling.
                </p>

                <button
                  type="button"
                  className="mt-2 text-[10px] font-bold text-violet-600 hover:text-violet-700"
                >
                  Improve with AI →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================== */}
      {/* RECENT COVER LETTERS */}
      {/* =============================================== */}

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold">Recent cover letters</h2>

            <p className="mt-1 text-xs text-slate-400">
              Your previously generated letters
            </p>
          </div>

          <button
            type="button"
            className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-violet-50 hover:text-violet-600"
          >
            View all
          </button>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {/* Card 1 */}

          <div className="card-hover rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-extrabold text-blue-600">
                G
              </div>

              <button
                type="button"
                aria-label="More options"
                className="text-slate-300 hover:text-slate-600"
              >
                •••
              </button>
            </div>

            <div className="mt-4">
              <h3 className="truncate text-sm font-bold">
                Senior Full Stack Developer
              </h3>

              <p className="mt-1 text-xs text-slate-400">Google</p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
                Generated
              </span>

              <span className="text-[10px] text-slate-400">Today</span>
            </div>

            <button
              type="button"
              className="mt-4 w-full rounded-xl bg-slate-50 py-2.5 text-xs font-bold text-slate-600 transition hover:bg-violet-50 hover:text-violet-600"
            >
              Open Letter
            </button>
          </div>

          {/* Card 2 */}

          <div className="card-hover rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-extrabold text-blue-600">
                M
              </div>

              <button
                type="button"
                aria-label="More options"
                className="text-slate-300 hover:text-slate-600"
              >
                •••
              </button>
            </div>

            <div className="mt-4">
              <h3 className="truncate text-sm font-bold">React Developer</h3>

              <p className="mt-1 text-xs text-slate-400">Microsoft</p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="rounded-full bg-violet-50 px-2 py-1 text-[10px] font-bold text-violet-600">
                Saved
              </span>

              <span className="text-[10px] text-slate-400">Yesterday</span>
            </div>

            <button
              type="button"
              className="mt-4 w-full rounded-xl bg-slate-50 py-2.5 text-xs font-bold text-slate-600 transition hover:bg-violet-50 hover:text-violet-600"
            >
              Open Letter
            </button>
          </div>

          {/* Card 3 */}

          <div className="card-hover rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-sm font-extrabold text-green-600">
                S
              </div>

              <button
                type="button"
                aria-label="More options"
                className="text-slate-300 hover:text-slate-600"
              >
                •••
              </button>
            </div>

            <div className="mt-4">
              <h3 className="truncate text-sm font-bold">Frontend Engineer</h3>

              <p className="mt-1 text-xs text-slate-400">Shopify</p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="rounded-full bg-orange-50 px-2 py-1 text-[10px] font-bold text-orange-600">
                Edited
              </span>

              <span className="text-[10px] text-slate-400">Aug 22</span>
            </div>

            <button
              type="button"
              className="mt-4 w-full rounded-xl bg-slate-50 py-2.5 text-xs font-bold text-slate-600 transition hover:bg-violet-50 hover:text-violet-600"
            >
              Open Letter
            </button>
          </div>
        </div>
      </section>

      {/* =============================================== */}
      {/* TIPS */}
      {/* =============================================== */}

      <section className="grid gap-4 md:grid-cols-3">
        {/* Tip 1 */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
            01
          </div>

          <h3 className="mt-4 text-sm font-bold">Match the job</h3>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            Include skills and keywords that appear in the job description.
          </p>
        </div>

        {/* Tip 2 */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            02
          </div>

          <h3 className="mt-4 text-sm font-bold">Show impact</h3>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            Highlight measurable achievements instead of simply listing
            responsibilities.
          </p>
        </div>

        {/* Tip 3 */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            03
          </div>

          <h3 className="mt-4 text-sm font-bold">Keep it human</h3>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            AI creates the first draft. Always personalize it before submitting
            your application.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
