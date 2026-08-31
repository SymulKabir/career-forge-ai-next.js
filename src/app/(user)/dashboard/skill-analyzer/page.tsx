"use client";

import { useMemo, useState } from "react";

type SkillCategory = "frontend" | "backend" | "devops" | "database";

type Skill = {
  name: string;
  category: SkillCategory;
  description: string;
  score: number;
  level: string;
  icon: string;
  iconClass: string;
  iconBgClass: string;
  barClass: string;
};

const skills: Skill[] = [
  {
    name: "TypeScript",
    category: "frontend",
    description: "Frontend · Backend",
    score: 90,
    level: "Expert",
    icon: "TS",
    iconClass: "text-blue-600",
    iconBgClass: "bg-blue-50",
    barClass: "bg-blue-500",
  },
  {
    name: "React.js",
    category: "frontend",
    description: "Frontend",
    score: 88,
    level: "Expert",
    icon: "⚛",
    iconClass: "text-cyan-600",
    iconBgClass: "bg-cyan-50",
    barClass: "bg-cyan-500",
  },
  {
    name: "Next.js",
    category: "frontend",
    description: "Frontend · Full Stack",
    score: 86,
    level: "Advanced",
    icon: "N",
    iconClass: "text-slate-700",
    iconBgClass: "bg-slate-100",
    barClass: "bg-slate-700",
  },
  {
    name: "Node.js",
    category: "backend",
    description: "Backend",
    score: 84,
    level: "Advanced",
    icon: "JS",
    iconClass: "text-green-600",
    iconBgClass: "bg-green-50",
    barClass: "bg-green-500",
  },
  {
    name: "Docker",
    category: "devops",
    description: "DevOps",
    score: 76,
    level: "Advanced",
    icon: "◈",
    iconClass: "text-blue-600",
    iconBgClass: "bg-blue-50",
    barClass: "bg-blue-500",
  },
  {
    name: "Kubernetes",
    category: "devops",
    description: "DevOps",
    score: 70,
    level: "Intermediate",
    icon: "K8s",
    iconClass: "text-violet-600",
    iconBgClass: "bg-violet-50",
    barClass: "bg-violet-500",
  },
];

const categories = [
  { id: "all", label: "All skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "devops", label: "DevOps" },
  { id: "database", label: "Database" },
] as const;

export default function CareerRoadmapPage() {
  const [targetRole, setTargetRole] = useState("Senior Full Stack Developer");
  const [experience, setExperience] = useState("5+ years");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<"all" | SkillCategory>("all");
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const filteredSkills = useMemo(() => {
    const result = skills.filter((skill) => {
      const matchesSearch = skill.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory = category === "all" || skill.category === category;

      return matchesSearch && matchesCategory;
    });

    return showAllSkills ? result : result.slice(0, 6);
  }, [search, category, showAllSkills]);

  const handleAnalysis = () => {
    setIsAnalyzing(true);

    setTimeout(() => {
      setIsAnalyzing(false);
    }, 1200);
  };

  return (
    <div className="mx-auto max-w-[1500px] space-y-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      {/* ================================================= */}
      {/* PAGE HEADER */}
      {/* ================================================= */}

      <section className="relative overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-6 shadow-soft sm:p-8">
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="absolute -bottom-24 right-20 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-violet-600">
            ✦ AI-powered skill intelligence
          </div>

          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Skill Analyzer
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Understand where your skills stand, identify career gaps, and
                discover which capabilities can make you more competitive in
                your target role.
              </p>
            </div>

            <button
              id="analyzeButton"
              type="button"
              onClick={handleAnalysis}
              disabled={isAnalyzing}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span>{isAnalyzing ? "Analyzing..." : "Run AI Analysis"}</span>

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

      {/* ================================================= */}
      {/* TARGET ROLE */}
      {/* ================================================= */}

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-base font-bold">Analyze your career target</h2>

            <p className="mt-1 text-xs text-slate-400">
              Skill recommendations are calculated against your target position.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div>
              <label
                htmlFor="targetRole"
                className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-400"
              >
                Target role
              </label>

              <select
                id="targetRole"
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
                className="h-11 min-w-[220px] rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-700 outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
              >
                <option>Senior Full Stack Developer</option>
                <option>Frontend Engineer</option>
                <option>Backend Engineer</option>
                <option>DevOps Engineer</option>
                <option>Software Engineer</option>
                <option>Engineering Manager</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="experience"
                className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-slate-400"
              >
                Experience
              </label>

              <select
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="h-11 min-w-[160px] rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-700 outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
              >
                <option>5+ years</option>
                <option>3–5 years</option>
                <option>1–3 years</option>
                <option>Entry level</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* OVERVIEW */}
      {/* ================================================= */}

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Overall */}
        <div className="card-hover rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-medium text-slate-400">
                Overall skill score
              </div>

              <div className="mt-2 text-3xl font-extrabold">
                78{" "}
                <span className="text-sm font-medium text-slate-400">/100</span>
              </div>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              ✦
            </div>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="skill-bar h-full w-[78%] rounded-full bg-gradient-to-r from-violet-600 to-indigo-500" />
          </div>

          <div className="mt-3 text-xs font-semibold text-emerald-600">
            Strong candidate
          </div>
        </div>

        {/* Strong */}
        <div className="card-hover rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-medium text-slate-400">
                Strong skills
              </div>

              <div className="mt-2 text-3xl font-extrabold">12</div>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              ✓
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            Skills above 75% proficiency
          </p>
        </div>

        {/* Gaps */}
        <div className="card-hover rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-medium text-slate-400">
                Skill gaps
              </div>

              <div className="mt-2 text-3xl font-extrabold">4</div>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
              !
            </div>
          </div>

          <p className="mt-4 text-xs text-orange-600">2 high-priority gaps</p>
        </div>

        {/* Market */}
        <div className="card-hover rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-medium text-slate-400">
                Market readiness
              </div>

              <div className="mt-2 text-3xl font-extrabold">84%</div>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              ↗
            </div>
          </div>

          <p className="mt-4 text-xs font-semibold text-emerald-600">
            Above average
          </p>
        </div>
      </section>

      {/* ================================================= */}
      {/* MAIN ANALYSIS */}
      {/* ================================================= */}

      <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        {/* YOUR SKILLS */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-base font-bold">Your skills</h2>

              <p className="mt-1 text-xs text-slate-400">
                Current proficiency based on your profile and resume.
              </p>
            </div>

            <button
              id="addSkillButton"
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-600 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
            >
              <span className="text-base">+</span>
              Add skill
            </button>
          </div>

          {/* Search */}
          <div className="relative mt-5">
            <svg
              className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m20 20-4-4" />
            </svg>

            <input
              id="skillSearch"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search your skills..."
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-100"
            />
          </div>

          {/* Categories */}
          <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
            {categories.map((item) => {
              const active = category === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCategory(item.id as "all" | SkillCategory)}
                  className={`skill-filter shrink-0 rounded-lg px-3 py-2 text-[11px] font-bold ${
                    active
                      ? "bg-violet-600 text-white"
                      : "bg-slate-50 font-semibold text-slate-500 hover:bg-violet-50 hover:text-violet-600"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Skills */}
          <div id="skillsList" className="mt-6 space-y-5">
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-item"
                  data-category={skill.category}
                  data-name={skill.name.toLowerCase()}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold ${skill.iconBgClass} ${skill.iconClass}`}
                      >
                        {skill.icon}
                      </div>

                      <div>
                        <div className="text-sm font-bold">{skill.name}</div>

                        <div className="mt-0.5 text-[10px] text-slate-400">
                          {skill.description}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-bold text-slate-700">
                        {skill.score}%
                      </div>

                      <div className="text-[10px] font-medium text-emerald-600">
                        {skill.level}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`skill-bar h-full rounded-full ${skill.barClass}`}
                      style={{ width: `${skill.score}%` }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-xl border border-dashed border-slate-200 py-8 text-center text-xs text-slate-400">
                No skills found.
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setShowAllSkills((value) => !value)}
            className="mt-6 w-full rounded-xl border border-dashed border-slate-200 py-3 text-xs font-semibold text-slate-400 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600"
          >
            {showAllSkills ? "− Show fewer skills" : "+ Show all 18 skills"}
          </button>
        </div>

        {/* SKILL GAP */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
          <div>
            <h2 className="text-base font-bold">Skill gap analysis</h2>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              Skills that could improve your chances for the selected role.
            </p>
          </div>

          {/* Gap 1 */}
          <div className="mt-6 rounded-2xl border border-red-100 bg-red-50/50 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold">AWS</h3>

                  <span className="rounded-full bg-red-100 px-2 py-1 text-[9px] font-bold text-red-600">
                    High priority
                  </span>
                </div>

                <p className="mt-1 text-[11px] text-slate-400">
                  Cloud infrastructure
                </p>
              </div>

              <div className="text-right">
                <div className="text-xs font-bold">42%</div>

                <div className="text-[9px] text-slate-400">Target: 80%</div>
              </div>
            </div>

            <div className="mt-3 h-2 rounded-full bg-white">
              <div className="h-full w-[42%] rounded-full bg-red-400" />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-[10px] font-medium text-red-600">
                38% gap
              </span>

              <button
                type="button"
                className="text-[10px] font-bold text-violet-600 hover:underline"
              >
                View roadmap →
              </button>
            </div>
          </div>

          {/* Gap 2 */}
          <div className="mt-3 rounded-2xl border border-orange-100 bg-orange-50/50 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold">System Design</h3>

                  <span className="rounded-full bg-orange-100 px-2 py-1 text-[9px] font-bold text-orange-600">
                    Important
                  </span>
                </div>

                <p className="mt-1 text-[11px] text-slate-400">
                  Architecture & scalability
                </p>
              </div>

              <div className="text-right">
                <div className="text-xs font-bold">55%</div>

                <div className="text-[9px] text-slate-400">Target: 85%</div>
              </div>
            </div>

            <div className="mt-3 h-2 rounded-full bg-white">
              <div className="h-full w-[55%] rounded-full bg-orange-400" />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-[10px] font-medium text-orange-600">
                30% gap
              </span>

              <button
                type="button"
                className="text-[10px] font-bold text-violet-600 hover:underline"
              >
                View roadmap →
              </button>
            </div>
          </div>

          {/* Gap 3 */}
          <div className="mt-3 rounded-2xl border border-amber-100 bg-amber-50/50 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold">GraphQL</h3>

                  <span className="rounded-full bg-amber-100 px-2 py-1 text-[9px] font-bold text-amber-600">
                    Recommended
                  </span>
                </div>

                <p className="mt-1 text-[11px] text-slate-400">
                  API development
                </p>
              </div>

              <div className="text-right">
                <div className="text-xs font-bold">35%</div>

                <div className="text-[9px] text-slate-400">Target: 65%</div>
              </div>
            </div>

            <div className="mt-3 h-2 rounded-full bg-white">
              <div className="h-full w-[35%] rounded-full bg-amber-400" />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-[10px] font-medium text-amber-600">
                30% gap
              </span>

              <button
                type="button"
                className="text-[10px] font-bold text-violet-600 hover:underline"
              >
                Learn skill →
              </button>
            </div>
          </div>

          {/* AI suggestion */}
          <div className="mt-5 rounded-2xl bg-gradient-to-br from-violet-50 to-blue-50 p-4">
            <div className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                ✦
              </div>

              <div>
                <div className="text-xs font-bold text-slate-800">
                  AI recommendation
                </div>

                <p className="mt-1 text-[11px] leading-5 text-slate-500">
                  Focus on AWS and System Design first. Together, these skills
                  could increase your target-role match by an estimated 9–14%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* MARKET DEMAND */}
      {/* ================================================= */}

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        {/* Market demand */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold">Market demand</h2>

              <p className="mt-1 text-xs text-slate-400">
                How valuable your skills are in current job postings.
              </p>
            </div>

            <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-600">
              Updated recently
            </span>
          </div>

          <div className="mt-6 space-y-5">
            {[
              {
                name: "TypeScript",
                label: "Very High",
                width: 94,
                text: "text-emerald-600",
                bar: "bg-emerald-500",
              },
              {
                name: "React.js",
                label: "Very High",
                width: 92,
                text: "text-emerald-600",
                bar: "bg-emerald-500",
              },
              {
                name: "Node.js",
                label: "High",
                width: 82,
                text: "text-blue-600",
                bar: "bg-blue-500",
              },
              {
                name: "Kubernetes",
                label: "High",
                width: 76,
                text: "text-blue-600",
                bar: "bg-blue-500",
              },
              {
                name: "AWS",
                label: "Growing",
                width: 71,
                text: "text-violet-600",
                bar: "bg-violet-500",
              },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold">{skill.name}</span>

                  <span className={`text-[10px] font-bold ${skill.text}`}>
                    {skill.label}
                  </span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full ${skill.bar}`}
                    style={{ width: `${skill.width}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended skills */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
          <div>
            <h2 className="text-base font-bold">Skills worth learning</h2>

            <p className="mt-1 text-xs text-slate-400">
              AI-selected skills based on your target role.
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              {
                icon: "AWS",
                title: "AWS",
                description: "Cloud infrastructure and deployment",
                impact: "+8% career impact",
                priority: "High",
                iconClass: "bg-orange-50 text-orange-600",
              },
              {
                icon: "SD",
                title: "System Design",
                description:
                  "Architecture, scalability and distributed systems",
                impact: "+7% career impact",
                priority: "High",
                iconClass: "bg-blue-50 text-blue-600",
              },
              {
                icon: "GQL",
                title: "GraphQL",
                description: "Modern API architecture",
                impact: "+4% career impact",
                priority: "Medium",
                iconClass: "bg-pink-50 text-pink-600",
              },
              {
                icon: "PY",
                title: "Python",
                description: "AI, automation and backend development",
                impact: "+3% career impact",
                priority: "Medium",
                iconClass: "bg-emerald-50 text-emerald-600",
              },
            ].map((skill) => (
              <div
                key={skill.title}
                className="skill-chip rounded-2xl border border-slate-200 p-4"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold ${skill.iconClass}`}
                  >
                    {skill.icon}
                  </div>

                  <span
                    className={`rounded-full px-2 py-1 text-[9px] font-bold ${
                      skill.priority === "High"
                        ? "bg-red-50 text-red-600"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {skill.priority}
                  </span>
                </div>

                <h3 className="mt-3 text-sm font-bold">{skill.title}</h3>

                <p className="mt-1 text-[10px] leading-4 text-slate-400">
                  {skill.description}
                </p>

                <div className="mt-3 text-[10px] font-semibold text-violet-600">
                  {skill.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* LEARNING ROADMAP */}
      {/* ================================================= */}

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base font-bold">
              Your skill improvement roadmap
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              A practical sequence for closing your highest-value skill gaps.
            </p>
          </div>

          <button
            type="button"
            className="rounded-xl bg-violet-50 px-4 py-2.5 text-xs font-bold text-violet-600 transition hover:bg-violet-600 hover:text-white"
          >
            Open full roadmap →
          </button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {/* Phase 1 */}
          <div className="relative rounded-2xl border border-red-100 bg-red-50/40 p-5">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-red-100 px-3 py-1 text-[10px] font-bold text-red-600">
                Phase 01
              </span>

              <span className="text-[10px] font-semibold text-slate-400">
                2–4 weeks
              </span>
            </div>

            <h3 className="mt-4 text-sm font-bold">Build cloud fundamentals</h3>

            <p className="mt-2 text-xs leading-5 text-slate-400">
              Strengthen your understanding of AWS core services and production
              deployment.
            </p>

            <div className="mt-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="text-emerald-500">✓</span>
                AWS fundamentals
              </div>

              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="text-slate-300">○</span>
                IAM & security
              </div>

              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="text-slate-300">○</span>
                EC2 & networking
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative rounded-2xl border border-orange-100 bg-orange-50/40 p-5">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-orange-100 px-3 py-1 text-[10px] font-bold text-orange-600">
                Phase 02
              </span>

              <span className="text-[10px] font-semibold text-slate-400">
                3–5 weeks
              </span>
            </div>

            <h3 className="mt-4 text-sm font-bold">Master system design</h3>

            <p className="mt-2 text-xs leading-5 text-slate-400">
              Learn to design scalable systems and explain architectural
              trade-offs in interviews.
            </p>

            <div className="mt-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="text-slate-300">○</span>
                Scalability
              </div>

              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="text-slate-300">○</span>
                Caching
              </div>

              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="text-slate-300">○</span>
                Distributed systems
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative rounded-2xl border border-violet-100 bg-violet-50/40 p-5">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-violet-100 px-3 py-1 text-[10px] font-bold text-violet-600">
                Phase 03
              </span>

              <span className="text-[10px] font-semibold text-slate-400">
                2–3 weeks
              </span>
            </div>

            <h3 className="mt-4 text-sm font-bold">Expand your API stack</h3>

            <p className="mt-2 text-xs leading-5 text-slate-400">
              Add GraphQL and advanced API architecture to your existing backend
              experience.
            </p>

            <div className="mt-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="text-slate-300">○</span>
                GraphQL schema
              </div>

              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="text-slate-300">○</span>
                Resolvers
              </div>

              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="text-slate-300">○</span>
                API security
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* AI INSIGHT */}
      {/* ================================================= */}

      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 p-6 text-white shadow-lg shadow-violet-200 sm:p-8">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet-200">
              <span className="text-lg">✦</span>
              CareerForge AI insight
            </div>

            <h2 className="mt-4 text-xl font-extrabold sm:text-2xl">
              You have a strong full-stack foundation.
            </h2>

            <p className="mt-3 text-sm leading-6 text-violet-100">
              Your frontend and backend capabilities are already competitive.
              The biggest opportunity is to strengthen cloud architecture and
              system design. These skills can help you qualify for more
              senior-level positions.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-violet-700 shadow-lg transition hover:-translate-y-0.5"
          >
            Create learning plan
            <span>→</span>
          </button>
        </div>
      </section>
    </div>
  );
}
