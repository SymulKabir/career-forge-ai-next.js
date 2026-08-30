import React from "react"
import DashboardLayout from "@/src/layout/DashboardLayout"

const Index = () => {
  return <DashboardLayout>
    <div className="mx-auto max-w-[1250px] px-4 py-6 pb-28 sm:px-6 lg:px-8 lg:py-8">

  {/* PAGE HEADER */}
  <div className="mb-8">

    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-[11px] font-semibold text-violet-600">
      ⚙ Account & Preferences
    </div>

    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
      Settings
    </h1>

    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
      Manage your account, career preferences, notifications, privacy,
      and AI experience from one place.
    </p>

  </div>

  {/* SETTINGS LAYOUT */}
  <div className="grid gap-6 lg:grid-cols-[220px_1fr]">

    {/* SETTINGS NAV */}
    <aside className="hidden lg:block">
      <div className="sticky top-[96px] rounded-2xl border border-slate-200 bg-white p-2 shadow-card">

        <button className="flex w-full items-center gap-3 rounded-xl bg-violet-50 px-3 py-2.5 text-left text-xs font-bold text-violet-700">
          <span>👤</span>
          Account
        </button>

        <button className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-800">
          <span>💼</span>
          Career
        </button>

        <button className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-800">
          <span>🔔</span>
          Notifications
        </button>

        <button className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-800">
          <span>🔒</span>
          Privacy & Security
        </button>

        <button className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-800">
          <span>✦</span>
          AI Preferences
        </button>

        <button className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-800">
          <span>◆</span>
          Subscription
        </button>

      </div>
    </aside>

    {/* SETTINGS BODY */}
    <div className="space-y-6">

      {/* ACCOUNT */}
      <section className="setting-card overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">

        <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <svg
                className="h-5 w-5"
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

            <div>
              <h2 className="text-sm font-bold text-slate-800">
                Account information
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Manage your personal account details.
              </p>
            </div>

          </div>
        </div>

        <div className="space-y-5 p-5 sm:p-6">

          {/* Profile */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

            <div className="relative">

              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 text-xl font-extrabold text-white shadow-lg shadow-violet-100">
                SP
              </div>

              <button className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-violet-600 text-white shadow-sm">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16 5 3 3M5 19l1-4L16 5l3 3-10 10-4 1Z"
                  />
                </svg>
              </button>

            </div>

            <div>
              <h3 className="text-sm font-bold">
                Profile photo
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                JPG, PNG or WEBP. Maximum file size 5MB.
              </p>

              <button className="mt-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-violet-200 hover:text-violet-600">
                Change photo
              </button>
            </div>

          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                First name
              </label>

              <input
                type="text"
                defaultValue="Saimon"
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Last name
              </label>

              <input
                type="text"
                defaultValue="Pranta"
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Email address
              </label>

              <input
                type="email"
                defaultValue="saimonpranta@gmail.com"
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Phone number
              </label>

              <input
                type="tel"
                placeholder="+880 1XXX XXXXXX"
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100"
              />
            </div>

          </div>

          <div className="flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-[11px] text-slate-400">
              Last updated a few minutes ago.
            </p>

            <button className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-violet-100 transition hover:-translate-y-0.5">
              Save Changes
            </button>

          </div>

        </div>
      </section>

      {/* CAREER PREFERENCES */}
      <section className="setting-card overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">

        <div className="border-b border-slate-100 px-5 py-5 sm:px-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              💼
            </div>

            <div>
              <h2 className="text-sm font-bold">
                Career preferences
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Help CareerForge AI understand your career goals.
              </p>
            </div>

          </div>

        </div>

        <div className="space-y-5 p-5 sm:p-6">

          <div className="grid gap-5 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Target job title
              </label>

              <input
                type="text"
                defaultValue="Senior Full Stack Developer"
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Experience level
              </label>

              <select
                defaultValue="Senior Level"
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100"
              >
                <option>Entry Level</option>
                <option>Mid Level</option>
                <option>Senior Level</option>
                <option>Lead / Manager</option>
                <option>Executive</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Preferred location
              </label>

              <input
                type="text"
                defaultValue="Germany"
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Work arrangement
              </label>

              <select
                defaultValue="Remote"
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100"
              >
                <option>Remote</option>
                <option>Hybrid</option>
                <option>On-site</option>
                <option>Remote & Hybrid</option>
              </select>
            </div>

          </div>

          <div>

            <label className="mb-2 block text-xs font-semibold text-slate-700">
              Preferred technologies
            </label>

            <div className="flex flex-wrap gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">

              {["React", "Next.js", "TypeScript", "Docker"].map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1 rounded-full bg-violet-100 px-3 py-1.5 text-[11px] font-semibold text-violet-700"
                >
                  {skill}
                  <button type="button">×</button>
                </span>
              ))}

              <button
                type="button"
                className="rounded-full border border-dashed border-slate-300 px-3 py-1.5 text-[11px] font-semibold text-slate-500 hover:border-violet-300 hover:text-violet-600"
              >
                + Add skill
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* NOTIFICATIONS */}
      <section className="setting-card overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">

        <div className="border-b border-slate-100 px-5 py-5 sm:px-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
              🔔
            </div>

            <div>
              <h2 className="text-sm font-bold">
                Notifications
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Choose what CareerForge AI should notify you about.
              </p>
            </div>

          </div>

        </div>

        <div className="divide-y divide-slate-100">

          {[
            {
              title: "Job recommendations",
              description:
                "Get notified when new jobs match your profile.",
              active: true,
            },
            {
              title: "ATS improvement tips",
              description:
                "Receive suggestions to improve your resume score.",
              active: true,
            },
            {
              title: "Career insights",
              description:
                "Receive personalized AI career recommendations.",
              active: true,
            },
            {
              title: "Product updates",
              description:
                "Learn about new CareerForge AI features.",
              active: false,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between gap-5 p-5 sm:px-6"
            >
              <div>
                <div className="text-sm font-semibold">
                  {item.title}
                </div>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  {item.description}
                </p>
              </div>

              <button
                type="button"
                className={`toggle shrink-0 ${item.active ? "active" : ""}`}
              />
            </div>
          ))}

        </div>
      </section>

      {/* AI PREFERENCES */}
      <section className="setting-card overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">

        <div className="border-b border-slate-100 px-5 py-5 sm:px-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              ✦
            </div>

            <div>
              <h2 className="text-sm font-bold">
                AI preferences
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Customize how CareerForge AI assists you.
              </p>
            </div>

          </div>

        </div>

        <div className="divide-y divide-slate-100">

          <div className="p-5 sm:px-6">

            <label className="mb-2 block text-xs font-semibold text-slate-700">
              AI response style
            </label>

            <select
              defaultValue="Professional & Detailed"
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100"
            >
              <option>Concise & Direct</option>
              <option>Professional & Detailed</option>
              <option>Friendly & Conversational</option>
              <option>Technical & Detailed</option>
            </select>

          </div>

          {[
            {
              title: "Smart job matching",
              description:
                "Allow AI to automatically rank jobs based on your skills and career goals.",
            },
            {
              title: "AI resume suggestions",
              description:
                "Get AI suggestions while editing your resume.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between gap-5 p-5 sm:px-6"
            >
              <div>
                <div className="text-sm font-semibold">
                  {item.title}
                </div>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  {item.description}
                </p>
              </div>

              <button
                type="button"
                className="toggle active shrink-0"
              />
            </div>
          ))}

        </div>
      </section>

      {/* PRIVACY & SECURITY */}
      <section className="setting-card overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">

        <div className="border-b border-slate-100 px-5 py-5 sm:px-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              🔒
            </div>

            <div>
              <h2 className="text-sm font-bold">
                Privacy & security
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Keep your account and career data secure.
              </p>
            </div>

          </div>

        </div>

        <div className="divide-y divide-slate-100">

          <button
            type="button"
            className="flex w-full items-center justify-between gap-5 p-5 text-left transition hover:bg-slate-50 sm:px-6"
          >
            <div>
              <div className="text-sm font-semibold">
                Change password
              </div>

              <p className="mt-1 text-xs text-slate-400">
                Update your account password.
              </p>
            </div>

            <span className="text-lg text-slate-300">
              →
            </span>
          </button>

          <button
            type="button"
            className="flex w-full items-center justify-between gap-5 p-5 text-left transition hover:bg-slate-50 sm:px-6"
          >
            <div>
              <div className="text-sm font-semibold">
                Two-factor authentication
              </div>

              <p className="mt-1 text-xs text-slate-400">
                Add an extra layer of security to your account.
              </p>
            </div>

            <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-amber-600">
              Not enabled
            </span>
          </button>

          <button
            type="button"
            className="flex w-full items-center justify-between gap-5 p-5 text-left transition hover:bg-slate-50 sm:px-6"
          >
            <div>
              <div className="text-sm font-semibold">
                Active sessions
              </div>

              <p className="mt-1 text-xs text-slate-400">
                Manage devices currently signed into your account.
              </p>
            </div>

            <span className="text-lg text-slate-300">
              →
            </span>
          </button>

        </div>
      </section>

      {/* SUBSCRIPTION */}
      <section className="relative overflow-hidden rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-6 shadow-card">

        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[10px] font-bold text-violet-600 shadow-sm">
              ◆ CURRENT PLAN
            </div>

            <h2 className="text-xl font-extrabold">
              Free Plan
            </h2>

            <p className="mt-2 max-w-lg text-xs leading-5 text-slate-500">
              Upgrade to unlock unlimited AI tools, advanced ATS
              analysis, unlimited cover letters, and premium career
              insights.
            </p>

          </div>

          <button className="relative shrink-0 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5">
            Upgrade to Pro →
          </button>

        </div>

        <div className="relative mt-6 grid gap-3 border-t border-violet-100 pt-5 sm:grid-cols-3">

          <div>
            <div className="text-lg font-extrabold">
              3 / 5
            </div>
            <div className="text-[10px] text-slate-400">
              AI generations
            </div>
          </div>

          <div>
            <div className="text-lg font-extrabold">
              12 / 20
            </div>
            <div className="text-[10px] text-slate-400">
              Job analyses
            </div>
          </div>

          <div>
            <div className="text-lg font-extrabold">
              2 / 3
            </div>
            <div className="text-[10px] text-slate-400">
              Cover letters
            </div>
          </div>

        </div>

      </section>

      {/* DANGER ZONE */}
      <section className="overflow-hidden rounded-2xl border border-red-100 bg-white shadow-card">

        <div className="border-b border-red-100 px-5 py-5 sm:px-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500">
              !
            </div>

            <div>
              <h2 className="text-sm font-bold text-red-700">
                Danger zone
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Permanent account actions.
              </p>
            </div>

          </div>

        </div>

        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">

          <div>
            <h3 className="text-sm font-semibold text-slate-800">
              Delete account
            </h3>

            <p className="mt-1 max-w-xl text-xs leading-5 text-slate-400">
              Permanently delete your CareerForge account, resumes,
              applications, preferences, and all associated data.
            </p>
          </div>

          <button
            type="button"
            className="shrink-0 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-xs font-bold text-red-600 transition hover:bg-red-600 hover:text-white"
          >
            Delete Account
          </button>

        </div>

      </section>

    </div>
  </div>
</div>
  </DashboardLayout>

}


export default Index;
