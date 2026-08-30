import DashboardLayout from "@/src/layout/DashboardLayout";

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-[1500px] space-y-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

        {/* Page heading */}
        <section>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-[11px] font-semibold text-violet-600">
                <span>✦</span>
                Career profile
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                My Profile
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Manage your professional identity, career preferences, skills,
                experience, and information used by CareerForge AI.
              </p>
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" d="M12 20h9" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5Z"
                />
              </svg>

              Edit Profile
            </button>
          </div>
        </section>

        {/* PROFILE HERO */}
        <section className="relative overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-blue-50 shadow-soft">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />

          <div className="absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />

          <div className="relative p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              {/* Profile identity */}
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                {/* Avatar */}
                <div className="relative shrink-0">
                  <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 text-3xl font-extrabold text-white shadow-xl shadow-violet-200">
                    SP
                  </div>

                  <button
                    className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-xl border-4 border-white bg-white text-violet-600 shadow-md transition hover:bg-violet-600 hover:text-white"
                    title="Change profile photo"
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
                        strokeLinejoin="round"
                        d="M12 20h9"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5Z"
                      />
                    </svg>
                  </button>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-2xl font-extrabold text-slate-900">
                      Saimon Pranta
                    </h2>

                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Open to opportunities
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-semibold text-violet-600">
                    Full Stack Developer
                  </p>

                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">

                    <span className="inline-flex items-center gap-1.5">
                      <svg
                        className="h-4 w-4 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
                        />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                      Dhaka, Bangladesh
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <svg
                        className="h-4 w-4 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path strokeLinecap="round" d="m3 7 9 6 9-6" />
                      </svg>
                      saimonpranta@gmail.com
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <svg
                        className="h-4 w-4 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"
                        />
                      </svg>
                      +880 1881 476432
                    </span>

                  </div>
                </div>
              </div>

              {/* Completion */}
              <div className="w-full rounded-2xl border border-white bg-white/80 p-5 shadow-card backdrop-blur sm:max-w-xs">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-800">
                      Profile strength
                    </div>

                    <div className="mt-1 text-[11px] text-slate-400">
                      Strong profile
                    </div>
                  </div>

                  <div className="text-2xl font-extrabold text-violet-600">
                    82%
                  </div>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-violet-600 to-blue-500" />
                </div>

                <p className="mt-3 text-[11px] leading-5 text-slate-500">
                  Add your career preferences and certifications to reach 100%.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* MAIN GRID */}
        <div className="grid gap-6 xl:grid-cols-[1.45fr_0.55fr]">

          {/* LEFT */}
          <div className="space-y-6">

            {/* Personal Information */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-base font-bold">
                    Personal information
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    Your basic information and contact details
                  </p>
                </div>

                <button className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-violet-50 hover:text-violet-600">
                  Edit
                </button>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Full name
                  </label>
                  <div className="mt-2 text-sm font-semibold text-slate-800">
                    Saimon Pranta
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Professional title
                  </label>
                  <div className="mt-2 text-sm font-semibold text-slate-800">
                    Full Stack Developer
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Email address
                  </label>
                  <div className="mt-2 text-sm font-semibold text-slate-800">
                    saimonpranta@gmail.com
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Phone number
                  </label>
                  <div className="mt-2 text-sm font-semibold text-slate-800">
                    +880 1881 476432
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Location
                  </label>
                  <div className="mt-2 text-sm font-semibold text-slate-800">
                    Dhaka, Bangladesh
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Time zone
                  </label>
                  <div className="mt-2 text-sm font-semibold text-slate-800">
                    GMT +06:00
                  </div>
                </div>

              </div>
            </section>

            {/* Professional Summary */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-base font-bold">
                    Professional summary
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    A short introduction recruiters can see
                  </p>
                </div>

                <button className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-violet-50 hover:text-violet-600">
                  Edit
                </button>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Experienced Full Stack Developer focused on building scalable,
                user-friendly web applications. I work across frontend and
                backend systems with modern JavaScript frameworks, APIs,
                databases, cloud infrastructure, and DevOps technologies. I
                enjoy solving complex engineering problems and building
                products that deliver measurable value.
              </p>
            </section>

            {/* Skills */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-base font-bold">
                    Skills & expertise
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    Skills used to calculate your job matches
                  </p>
                </div>

                <button className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-violet-50 hover:text-violet-600">
                  Manage
                </button>
              </div>

              <div className="mt-6 space-y-5">

                <div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">React.js</div>
                    <div className="text-[11px] font-bold text-violet-600">
                      Advanced
                    </div>
                  </div>

                  <div className="mt-2 h-1.5 rounded-full bg-slate-100">
                    <div className="h-full w-[90%] rounded-full bg-violet-500" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Next.js</div>
                    <div className="text-[11px] font-bold text-violet-600">
                      Advanced
                    </div>
                  </div>

                  <div className="mt-2 h-1.5 rounded-full bg-slate-100">
                    <div className="h-full w-[88%] rounded-full bg-violet-500" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Node.js</div>
                    <div className="text-[11px] font-bold text-blue-600">
                      Advanced
                    </div>
                  </div>

                  <div className="mt-2 h-1.5 rounded-full bg-slate-100">
                    <div className="h-full w-[86%] rounded-full bg-blue-500" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Docker</div>
                    <div className="text-[11px] font-bold text-blue-600">
                      Intermediate
                    </div>
                  </div>

                  <div className="mt-2 h-1.5 rounded-full bg-slate-100">
                    <div className="h-full w-[72%] rounded-full bg-blue-500" />
                  </div>
                </div>

              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-violet-50 px-3 py-1.5 text-[11px] font-semibold text-violet-700">
                  TypeScript
                </span>

                <span className="rounded-full bg-violet-50 px-3 py-1.5 text-[11px] font-semibold text-violet-700">
                  Angular
                </span>

                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-semibold text-blue-700">
                  Express.js
                </span>

                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-semibold text-blue-700">
                  Laravel
                </span>

                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold text-emerald-700">
                  MySQL
                </span>

                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold text-emerald-700">
                  MongoDB
                </span>

                <span className="rounded-full bg-orange-50 px-3 py-1.5 text-[11px] font-semibold text-orange-700">
                  AWS
                </span>

                <span className="rounded-full bg-orange-50 px-3 py-1.5 text-[11px] font-semibold text-orange-700">
                  Kubernetes
                </span>
              </div>
            </section>

            {/* Experience */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-base font-bold">
                    Work experience
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    Your professional experience
                  </p>
                </div>

                <button className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-violet-50 hover:text-violet-600">
                  + Add
                </button>
              </div>

              <div className="mt-6 space-y-7">

                <div className="relative flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 font-bold text-violet-600">
                    M
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row">
                      <div>
                        <h3 className="text-sm font-bold">
                          Head of Technology
                        </h3>

                        <p className="mt-1 text-xs font-medium text-violet-600">
                          Micple Company Limited
                        </p>
                      </div>

                      <span className="text-[11px] text-slate-400">
                        2023 — Present
                      </span>
                    </div>

                    <p className="mt-3 text-xs leading-6 text-slate-500">
                      Leading technology initiatives, application architecture,
                      engineering processes, cloud infrastructure, and
                      development of scalable web platforms.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-600">
                    FS
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row">
                      <div>
                        <h3 className="text-sm font-bold">
                          Full Stack Web Developer
                        </h3>

                        <p className="mt-1 text-xs font-medium text-blue-600">
                          Professional Experience
                        </p>
                      </div>

                      <span className="text-[11px] text-slate-400">
                        2020 — 2023
                      </span>
                    </div>

                    <p className="mt-3 text-xs leading-6 text-slate-500">
                      Developed modern web applications using React, Next.js,
                      Node.js, PHP, Laravel, databases, REST APIs, Docker, and
                      cloud technologies.
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* Education */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-base font-bold">
                    Education
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    Your academic background
                  </p>
                </div>

                <button className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-violet-50 hover:text-violet-600">
                  + Add
                </button>
              </div>

              <div className="mt-6 space-y-6">

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    DU
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row">
                      <div>
                        <h3 className="text-sm font-bold">
                          Post Graduate Diploma in Information Technology
                        </h3>

                        <p className="mt-1 text-xs font-medium text-indigo-600">
                          University of Dhaka
                        </p>
                      </div>

                      <span className="text-[11px] text-slate-400">
                        2025 — 2026
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                    BBA
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row">
                      <div>
                        <h3 className="text-sm font-bold">
                          Bachelor of Business Administration
                        </h3>

                        <p className="mt-1 text-xs font-medium text-slate-500">
                          Nizampur Government College
                        </p>
                      </div>

                      <span className="text-[11px] text-slate-400">
                        2018 — 2023
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </section>

          </div>

          {/* RIGHT */}
          <aside className="space-y-6">

            {/* Career Preferences */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-base font-bold">
                    Career preferences
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    Used for job matching
                  </p>
                </div>

                <button className="text-xs font-bold text-violet-600 hover:text-violet-700">
                  Edit
                </button>
              </div>

              <div className="mt-5 space-y-4">

                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Desired role
                  </div>

                  <div className="mt-1 text-sm font-semibold">
                    Full Stack Developer
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Employment type
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-semibold text-violet-700">
                      Full-time
                    </span>

                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-700">
                      Contract
                    </span>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Work preference
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
                      Remote
                    </span>

                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-600">
                      Hybrid
                    </span>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Expected salary
                  </div>

                  <div className="mt-1 text-sm font-semibold">
                    $60k — $100k / year
                  </div>
                </div>

              </div>
            </section>

            {/* Resume */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold">
                    Primary resume
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    Used for applications
                  </p>
                </div>

                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
                  Active
                </span>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-500">
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
                      d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                    />
                    <path strokeLinecap="round" d="M14 3v5h5M8 13h8M8 17h5" />
                  </svg>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="truncate text-xs font-bold">
                    Saimon_Pranta_Resume.pdf
                  </div>

                  <div className="mt-1 text-[10px] text-slate-400">
                    Updated today · 1.8 MB
                  </div>
                </div>

                <button className="text-xs font-bold text-violet-600 hover:text-violet-700">
                  View
                </button>
              </div>

              <button className="mt-4 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-600 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600">
                Manage Resumes
              </button>
            </section>

            {/* Social Links */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-base font-bold">
                    Online presence
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    Help recruiters find you
                  </p>
                </div>

                <button className="text-xs font-bold text-violet-600 hover:text-violet-700">
                  Edit
                </button>
              </div>

              <div className="mt-5 space-y-3">

                <a
                  href="#"
                  className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 transition hover:border-violet-100 hover:bg-violet-50"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
                    GH
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold">
                      GitHub
                    </div>

                    <div className="truncate text-[10px] text-slate-400">
                      github.com/SymulKabir
                    </div>
                  </div>

                  <span className="text-slate-300">↗</span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 transition hover:border-violet-100 hover:bg-violet-50"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
                    in
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold">
                      LinkedIn
                    </div>

                    <div className="truncate text-[10px] text-slate-400">
                      linkedin.com/in/symulkabir
                    </div>
                  </div>

                  <span className="text-slate-300">↗</span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 transition hover:border-violet-100 hover:bg-violet-50"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-xs font-bold text-white">
                    W
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold">
                      Portfolio
                    </div>

                    <div className="truncate text-[10px] text-slate-400">
                      symulkabir.vercel.app
                    </div>
                  </div>

                  <span className="text-slate-300">↗</span>
                </a>

              </div>
            </section>

            {/* Profile checklist */}
            <section className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-5 shadow-card">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                  ✦
                </div>

                <div>
                  <h2 className="text-sm font-bold">
                    Complete your profile
                  </h2>

                  <p className="text-[10px] text-slate-400">
                    Improve your AI job matches
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">

                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-600">
                    ✓
                  </span>

                  <span className="text-xs font-medium text-slate-600">
                    Personal information
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-600">
                    ✓
                  </span>

                  <span className="text-xs font-medium text-slate-600">
                    Professional summary
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-600">
                    ✓
                  </span>

                  <span className="text-xs font-medium text-slate-600">
                    Skills
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 bg-white" />

                  <span className="text-xs font-medium text-slate-500">
                    Career preferences
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 bg-white" />

                  <span className="text-xs font-medium text-slate-500">
                    Certifications
                  </span>
                </div>

              </div>

              <button className="mt-5 w-full rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-violet-600 shadow-sm transition hover:bg-violet-600 hover:text-white">
                Complete Profile →
              </button>
            </section>

          </aside>
        </div>
      </div>
    </DashboardLayout>
  );
}
