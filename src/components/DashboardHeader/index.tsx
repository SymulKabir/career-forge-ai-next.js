import Logo from '@/src/ui/Logo'
const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="flex h-[72px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* Mobile Logo */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white">
            ✦
          </div>

          <span className="text-sm font-extrabold">
            CareerForge{" "}
            <span className="text-violet-600">AI</span>
          </span>
        </div>

        {/* Search */}
        <div className="hidden max-w-xl flex-1 md:block">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m20 20-4-4" />
            </svg>

            <input
              type="text"
              placeholder="Search tools, jobs, or resources..."
              className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-16 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100"
            />

            <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg bg-white px-2 py-1 text-[10px] font-semibold text-slate-400 shadow-sm">
              ⌘K
            </span>
          </div>
        </div>

        {/* Header Right */}
        <div className="flex items-center gap-3">

          {/* Notification */}
          <button
            type="button"
            aria-label="Notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"
              />
              <path strokeLinecap="round" d="M10 21h4" />
            </svg>

            <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[8px] font-bold text-white">
              3
            </span>
          </button>

          {/* User */}
          <button
            type="button"
            aria-label="Open user menu"
            className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-slate-50"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-sm font-bold text-white ring-2 ring-white">
              SP
            </div>

            <div className="hidden text-left lg:block">
              <div className="text-xs font-bold text-slate-800">
                Saimon Pranta
              </div>

              <div className="flex items-center gap-1 text-[10px] text-slate-400">
                <span className="text-amber-500">◆</span>
                Free Plan
              </div>
            </div>

            <svg
              className="hidden h-4 w-4 text-slate-400 lg:block"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m6 9 6 6 6-6"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;