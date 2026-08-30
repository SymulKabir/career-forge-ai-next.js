"use client";

import Link from "next/link";
import './styles.scss'
import { usePathname } from "next/navigation";
import Logo from "@/src/components/Logo";

type NavItem = {
  action: string;
  label: string;
  icon: React.ReactNode;
};

const DashboardSideNav = () => {
  const pathname = usePathname();

  const isActive = (action: string) => {
    const routeMap: Record<string, string> = {
      Index: "/dashboard",
      Resume: "/dashboard/resume",
      AtsChecker: "/dashboard/ats-checker",
      CoverLetter: "/dashboard/cover-letter",
      JobMatcher: "/dashboard/job-matcher",
      AiInterview: "/dashboard/ai-interview",
      CareerRoadmap: "/dashboard/career-roadmap",
      SkillAnalyzer: "/dashboard/skill-analyzer",
      SavedJobs: "/dashboard/saved-jobs",
      Applications: "/dashboard/applications",
      Profile: "/dashboard/profile",
      Settings: "/dashboard/settings",
    };

    return pathname === routeMap[action];
  };

  const navItems: NavItem[] = [
    {
      action: "Index",
      label: "Dashboard",
      icon: (
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
            d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z"
          />
        </svg>
      ),
    },

    {
      action: "Resume",
      label: "My Resume",
      icon: (
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
          <path strokeLinecap="round" d="M14 3v5h5M8 13h8M8 17h6" />
        </svg>
      ),
    },

    {
      action: "AtsChecker",
      label: "ATS Checker",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <path
            strokeLinecap="round"
            d="M12 4v2M20 12h-2M12 18v2M6 12H4"
          />
        </svg>
      ),
    },

    {
      action: "CoverLetter",
      label: "Cover Letter AI",
      icon: (
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
            d="M5 4h14v16H5z"
          />
          <path strokeLinecap="round" d="M8 8h8M8 12h5" />
          <path strokeLinecap="round" d="m15 16 1.5 1.5L20 14" />
        </svg>
      ),
    },

    {
      action: "JobMatcher",
      label: "Job Matcher",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="16" r="3" />
          <path strokeLinecap="round" d="M11.5 10.5 14.5 13.5" />
        </svg>
      ),
    },

    {
      action: "AiInterview",
      label: "AI Interview",
      icon: (
        <svg
          className="h-5 w-5"
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
      ),
    },

    {
      action: "CareerRoadmap",
      label: "Career Roadmap",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" d="M4 19c4-7 8-7 12-14" />
          <circle cx="4" cy="19" r="2" />
          <circle cx="16" cy="5" r="2" />
          <path strokeLinecap="round" d="m15 17 2 2 3-4" />
        </svg>
      ),
    },

    {
      action: "SkillAnalyzer",
      label: "Skill Analyzer",
      icon: (
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
            d="m12 3 2.3 5.2L20 9l-4 4 1 5.7-5-2.7-5 2.7 1-5.7-4-4 5.7-.8L12 3Z"
          />
        </svg>
      ),
    },

    {
      action: "SavedJobs",
      label: "Saved Jobs",
      icon: (
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
            d="M6 4h12v17l-6-3-6 3V4Z"
          />
        </svg>
      ),
    },

    {
      action: "Applications",
      label: "Applications",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path strokeLinecap="round" d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      ),
    },

    {
      action: "Profile",
      label: "Profile",
      icon: (
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
      ),
    },

    {
      action: "Settings",
      label: "Settings",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="3" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V20h-2.6v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H4v-2.6h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1-1.6V4h2.6v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0 .3 1.9 1.7 1.7 0 0 0 1.6 1Z"
          />
        </svg>
      ),
    },
  ];

  const routeMap: Record<string, string> = {
    Index: "/dashboard",
    Resume: "/dashboard/resume",
    AtsChecker: "/dashboard/ats-checker",
    CoverLetter: "/dashboard/cover-letter",
    JobMatcher: "/dashboard/job-matcher",
    AiInterview: "/dashboard/ai-interview",
    CareerRoadmap: "/dashboard/career-roadmap",
    SkillAnalyzer: "/dashboard/skill-analyzer",
    SavedJobs: "/dashboard/saved-jobs",
    Applications: "/dashboard/applications",
    Profile: "/dashboard/profile",
    Settings: "/dashboard/settings",
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[250px] border-r border-slate-200/80 bg-white/90 backdrop-blur-xl md:flex md:flex-col">
        {/* Logo */}
        <div className="flex h-[82px] items-center px-6">
          <Logo/>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-5">
          <div className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Workspace
          </div>

          {navItems.map((item) => (
            <div key={item.action}>
              {item.label === "Saved Jobs" && (
                <div className="my-5 border-t border-slate-100" />
              )}

              <Link
                href={routeMap[item.action]}
                className={`nav-item flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 ${
                  isActive(item.action) ? "active" : ""
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </div>
          ))}
        </nav>

        {/* Sidebar Bottom */}
        <div className="space-y-3 p-4">
          {/* Upgrade */}
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-50 p-4 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
              ✦
            </div>

            <h3 className="text-sm font-bold text-slate-800">
              Upgrade to Pro
            </h3>

            <p className="mt-1 text-[11px] leading-5 text-slate-500">
              Unlock advanced AI career features.
            </p>

            <button
              type="button"
              className="mt-3 w-full rounded-xl bg-white px-3 py-2 text-xs font-bold text-violet-600 shadow-sm transition hover:bg-violet-600 hover:text-white"
            >
              Upgrade Now →
            </button>
          </div>

          {/* Logout */}
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-red-50 hover:text-red-600"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M10 17l5-5-5-5M15 12H3" />
              <path strokeLinecap="round" d="M21 19V5a2 2 0 0 0-2-2h-6" />
            </svg>

            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-safe-area fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 px-3 py-2 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-around">
          {/* Home */}
          <Link
            href="/dashboard"
            className={`mobile-nav-item flex min-w-[55px] flex-col items-center gap-1 py-1 text-[9px] font-semibold ${
              isActive("Index") ? "active" : "text-slate-400"
            }`}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z" />
            </svg>
            Home
          </Link>

          {/* Resume */}
          <Link
            href="/dashboard/resume"
            className={`mobile-nav-item flex min-w-[55px] flex-col items-center gap-1 py-1 text-[9px] font-semibold ${
              isActive("Resume") ? "active" : "text-slate-400"
            }`}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
              <path d="M14 3v5h5" />
            </svg>
            Resume
          </Link>

          {/* Create */}
          <button
            type="button"
            className="-mt-7 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-2xl font-light text-white shadow-xl shadow-violet-300"
          >
            +
          </button>

          {/* Jobs */}
          <Link
            href="/dashboard/saved-jobs"
            className={`mobile-nav-item flex min-w-[55px] flex-col items-center gap-1 py-1 text-[9px] font-semibold ${
              isActive("SavedJobs") ? "active" : "text-slate-400"
            }`}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
            Jobs
          </Link>

          {/* Profile */}
          <Link
            href="/dashboard/profile"
            className={`mobile-nav-item flex min-w-[55px] flex-col items-center gap-1 py-1 text-[9px] font-semibold ${
              isActive("Profile") ? "active" : "text-slate-400"
            }`}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="8" r="3" />
              <path d="M5 20c.7-3.5 3-5 7-5s6.3 1.5 7 5" />
            </svg>
            Profile
          </Link>
        </div>
      </nav>
    </>
  );
};

export default DashboardSideNav;
