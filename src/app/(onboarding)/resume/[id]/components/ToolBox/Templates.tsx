"use client";

import { useState } from "react";

type Template = {
  id: string;
  name: string;
  description: string;
  region: "europe" | "global" | "us";
  regionLabel: string;
  regionEmoji: string;
  style: "professional" | "creative";
  ats: boolean;
  isNew: boolean;
  selected?: boolean;
};

const templates: Template[] = [
  {
    id: "executive-pro",
    name: "Executive Pro",
    description: "Clean executive layout",
    region: "europe",
    regionLabel: "Europe",
    regionEmoji: "🇪🇺",
    style: "professional",
    ats: true,
    isNew: true,
    selected: true,
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Simple and highly readable",
    region: "global",
    regionLabel: "Global",
    regionEmoji: "🌍",
    style: "professional",
    ats: true,
    isNew: false,
  },
  {
    id: "american",
    name: "American Standard",
    description: "Traditional US resume format",
    region: "us",
    regionLabel: "US",
    regionEmoji: "🇺🇸",
    style: "professional",
    ats: true,
    isNew: false,
  },
  {
    id: "creative-edge",
    name: "Creative Edge",
    description: "Modern design for creative roles",
    region: "global",
    regionLabel: "Global",
    regionEmoji: "🌍",
    style: "creative",
    ats: false,
    isNew: true,
  },
  {
    id: "euro-modern",
    name: "Euro Modern",
    description: "European-style professional CV",
    region: "europe",
    regionLabel: "Europe",
    regionEmoji: "🇪🇺",
    style: "professional",
    ats: true,
    isNew: false,
  },
];

const filters = ["All", "Professional", "ATS Friendly", "Creative"];

export default function TemplatesView() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedTemplate, setSelectedTemplate] =
    useState("executive-pro");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const filteredTemplates = templates.filter((template) => {
    const searchMatch =
      template.name.toLowerCase().includes(search.toLowerCase()) ||
      template.description.toLowerCase().includes(search.toLowerCase());

    let filterMatch = true;

    if (activeFilter === "Professional") {
      filterMatch = template.style === "professional";
    }

    if (activeFilter === "ATS Friendly") {
      filterMatch = template.ats;
    }

    if (activeFilter === "Creative") {
      filterMatch = template.style === "creative";
    }

    if (showFavorites) {
      filterMatch = favorites.includes(template.id);
    }

    return searchMatch && filterMatch;
  });

  const toggleFavorite = (templateId: string) => {
    setFavorites((current) =>
      current.includes(templateId)
        ? current.filter((id) => id !== templateId)
        : [...current, templateId],
    );
  };

  const handleApplyTemplate = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  return (
    <div
      id="templatesView"
      className="flex h-full min-h-0 flex-col bg-white"
    >
      {/* ========================================================= */}
      {/* HEADER */}
      {/* ========================================================= */}

      <div className="shrink-0 border-b border-slate-200 px-4 py-4 sm:px-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-extrabold tracking-tight text-slate-900">
                Resume Templates
              </h2>

              <span className="rounded-full bg-violet-50 px-2 py-0.5 text-[8px] font-bold text-violet-600">
                24 Templates
              </span>
            </div>

            <p className="mt-1 text-[10px] leading-4 text-slate-400">
              Choose a professional layout for your resume.
            </p>
          </div>

          {/* Favorite templates button */}

          <button
            id="favoriteTemplates"
            type="button"
            title="Favorite templates"
            aria-label="Favorite templates"
            onClick={() => setShowFavorites((value) => !value)}
            className={`flex h-8 w-8 items-center justify-center rounded-lg border transition ${
              showFavorites
                ? "border-violet-200 bg-violet-50 text-violet-600"
                : "border-slate-200 text-slate-400 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
            }`}
          >
            {showFavorites ? "♥" : "♡"}
          </button>
        </div>

        {/* ======================================================= */}
        {/* SEARCH */}
        {/* ======================================================= */}

        <div
          className="mt-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 transition focus-within:border-violet-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-50"
        >
          <span className="text-xs text-slate-400">⌕</span>

          <input
            id="templateSearch"
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search templates..."
            className="h-9 min-w-0 flex-1 bg-transparent text-[10px] font-medium text-slate-700 outline-none placeholder:text-slate-400"
          />

          <button
            id="templateFilterButton"
            type="button"
            className="flex h-7 items-center gap-1 rounded-lg px-2 text-[9px] font-bold text-slate-500 transition hover:bg-white hover:text-violet-600"
          >
            Filters

            <span className="text-[8px]">▾</span>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* FILTERS */}
      {/* ========================================================= */}

      <div className="shrink-0 border-b border-slate-100 px-4 py-3 sm:px-5">
        <div className="flex gap-1.5 overflow-x-auto pb-0.5">
          {filters.map((filter) => {
            const active = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={
                  active
                    ? "template-filter active whitespace-nowrap rounded-full bg-violet-600 px-3 py-1.5 text-[9px] font-bold text-white"
                    : "template-filter whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[9px] font-semibold text-slate-500 transition hover:border-violet-200 hover:text-violet-600"
                }
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================= */}
      {/* TEMPLATE LIST */}
      {/* ========================================================= */}

      <div
        id="templateList"
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-slate-50/50 px-4 py-4 sm:px-5"
      >
        <div className="space-y-4">
          {filteredTemplates.map((template) => {
            const isSelected = selectedTemplate === template.id;
            const isFavorite = favorites.includes(template.id);

            return (
              <div
                key={template.id}
                className={`template-card group relative overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md ${
                  isSelected
                    ? "border-2 border-violet-500"
                    : "border border-slate-200 hover:border-violet-200"
                }`}
                data-template={template.id}
                data-region={template.region}
                data-style={template.style}
                data-ats={template.ats}
                data-new={template.isNew}
              >
                {/* Selected */}

                {isSelected && (
                  <div className="absolute right-2 top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-white shadow-sm">
                    ✓
                  </div>
                )}

                {/* New badge */}

                {template.isNew && (
                  <div className="absolute left-2 top-2 z-10">
                    <span className="rounded-md bg-emerald-500 px-2 py-1 text-[8px] font-extrabold uppercase tracking-wide text-white shadow-sm">
                      New
                    </span>
                  </div>
                )}

                {/* ================================================= */}
                {/* PREVIEW */}
                {/* ================================================= */}

                <div className="relative bg-slate-100 p-4">
                  <div
                    className={`mx-auto aspect-[0.707] w-[72%] bg-white shadow-md ${
                      template.id === "executive-pro" ||
                      template.id === "creative-edge"
                        ? "overflow-hidden"
                        : "p-5"
                    }`}
                  >
                    {/* Executive Pro */}

                    {template.id === "executive-pro" && (
                      <div className="grid h-full grid-cols-[30%_70%]">
                        <div className="bg-slate-900 p-3">
                          <div className="mx-auto h-8 w-8 rounded-full bg-slate-700" />

                          <div className="mt-3 h-1.5 w-full rounded bg-slate-600" />
                          <div className="mt-1.5 h-1 w-4/5 rounded bg-slate-700" />

                          <div className="mt-5 h-1 w-full rounded bg-slate-700" />
                          <div className="mt-2 h-1 w-4/5 rounded bg-slate-700" />
                          <div className="mt-2 h-1 w-full rounded bg-slate-700" />

                          <div className="mt-5 h-1 w-3/4 rounded bg-violet-400" />
                        </div>

                        <div className="p-4">
                          <div className="h-3 w-24 rounded bg-slate-900" />
                          <div className="mt-2 h-1.5 w-16 rounded bg-violet-500" />

                          <div className="mt-5 h-1.5 w-full rounded bg-slate-200" />
                          <div className="mt-2 h-1.5 w-11/12 rounded bg-slate-200" />
                          <div className="mt-2 h-1.5 w-4/5 rounded bg-slate-200" />

                          <div className="mt-5 h-1.5 w-20 rounded bg-slate-900" />

                          <div className="mt-2 h-1.5 w-full rounded bg-slate-200" />
                          <div className="mt-2 h-1.5 w-10/12 rounded bg-slate-200" />
                          <div className="mt-2 h-1.5 w-9/12 rounded bg-slate-200" />
                        </div>
                      </div>
                    )}

                    {/* Minimal */}

                    {template.id === "minimal" && (
                      <>
                        <div className="h-3 w-28 rounded bg-slate-900" />
                        <div className="mt-2 h-1.5 w-20 rounded bg-cyan-500" />

                        <div className="mt-6 h-1.5 w-full rounded bg-slate-200" />
                        <div className="mt-2 h-1.5 w-11/12 rounded bg-slate-200" />
                        <div className="mt-2 h-1.5 w-9/12 rounded bg-slate-200" />

                        <div className="mt-6 h-1.5 w-20 rounded bg-slate-900" />

                        <div className="mt-3 h-1.5 w-full rounded bg-slate-200" />
                        <div className="mt-2 h-1.5 w-10/12 rounded bg-slate-200" />

                        <div className="mt-6 h-1.5 w-24 rounded bg-slate-900" />

                        <div className="mt-3 h-1.5 w-full rounded bg-slate-200" />
                        <div className="mt-2 h-1.5 w-8/12 rounded bg-slate-200" />
                      </>
                    )}

                    {/* American Standard */}

                    {template.id === "american" && (
                      <>
                        <div className="text-center">
                          <div className="mx-auto h-3 w-28 rounded bg-slate-900" />

                          <div className="mx-auto mt-2 h-1.5 w-20 rounded bg-blue-600" />
                        </div>

                        <div className="mt-6 h-1.5 w-full rounded bg-slate-300" />

                        <div className="mt-3 h-1.5 w-full rounded bg-slate-200" />
                        <div className="mt-2 h-1.5 w-11/12 rounded bg-slate-200" />
                        <div className="mt-2 h-1.5 w-8/12 rounded bg-slate-200" />

                        <div className="mt-6 h-1.5 w-20 rounded bg-slate-900" />

                        <div className="mt-3 h-1.5 w-full rounded bg-slate-200" />
                        <div className="mt-2 h-1.5 w-10/12 rounded bg-slate-200" />
                        <div className="mt-2 h-1.5 w-9/12 rounded bg-slate-200" />
                      </>
                    )}

                    {/* Creative Edge */}

                    {template.id === "creative-edge" && (
                      <>
                        <div className="h-12 bg-gradient-to-r from-violet-600 to-indigo-500" />

                        <div className="p-4">
                          <div className="h-3 w-24 rounded bg-slate-900" />
                          <div className="mt-2 h-1.5 w-16 rounded bg-violet-500" />

                          <div className="mt-5 grid grid-cols-2 gap-3">
                            <div>
                              <div className="h-1.5 w-full rounded bg-slate-200" />
                              <div className="mt-2 h-1.5 w-10/12 rounded bg-slate-200" />
                              <div className="mt-2 h-1.5 w-8/12 rounded bg-slate-200" />
                            </div>

                            <div>
                              <div className="h-1.5 w-full rounded bg-slate-200" />
                              <div className="mt-2 h-1.5 w-10/12 rounded bg-slate-200" />
                              <div className="mt-2 h-1.5 w-8/12 rounded bg-slate-200" />
                            </div>
                          </div>

                          <div className="mt-5 h-1.5 w-20 rounded bg-slate-900" />

                          <div className="mt-3 h-1.5 w-full rounded bg-slate-200" />
                          <div className="mt-2 h-1.5 w-11/12 rounded bg-slate-200" />
                        </div>
                      </>
                    )}

                    {/* Euro Modern */}

                    {template.id === "euro-modern" && (
                      <>
                        <div className="flex gap-3">
                          <div className="h-10 w-10 rounded-full bg-slate-200" />

                          <div className="flex-1">
                            <div className="h-3 w-24 rounded bg-slate-900" />
                            <div className="mt-2 h-1.5 w-16 rounded bg-emerald-500" />
                          </div>
                        </div>

                        <div className="mt-5 h-px w-full bg-slate-200" />

                        <div className="mt-4 h-1.5 w-20 rounded bg-slate-900" />

                        <div className="mt-3 h-1.5 w-full rounded bg-slate-200" />
                        <div className="mt-2 h-1.5 w-11/12 rounded bg-slate-200" />
                        <div className="mt-2 h-1.5 w-9/12 rounded bg-slate-200" />

                        <div className="mt-5 h-1.5 w-20 rounded bg-slate-900" />

                        <div className="mt-3 h-1.5 w-full rounded bg-slate-200" />
                        <div className="mt-2 h-1.5 w-10/12 rounded bg-slate-200" />
                      </>
                    )}
                  </div>

                  {/* Preview overlay */}

                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 transition group-hover:bg-slate-900/10">
                    <button
                      type="button"
                      onClick={() => handleApplyTemplate(template.id)}
                      className="template-preview-btn rounded-xl bg-white px-4 py-2 text-[9px] font-bold text-slate-700 opacity-0 shadow-lg transition group-hover:opacity-100"
                    >
                      Preview
                    </button>
                  </div>
                </div>

                {/* ================================================= */}
                {/* INFORMATION */}
                {/* ================================================= */}

                <div className="p-3.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-[11px] font-extrabold text-slate-900">
                        {template.name}
                      </h3>

                      <p className="mt-0.5 text-[9px] text-slate-400">
                        {template.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      aria-label={`Favorite ${template.name}`}
                      onClick={() => toggleFavorite(template.id)}
                      className={`template-favorite text-sm transition ${
                        isFavorite
                          ? "text-rose-500"
                          : "text-slate-300 hover:text-rose-500"
                      }`}
                    >
                      {isFavorite ? "♥" : "♡"}
                    </button>
                  </div>

                  {/* Tags */}

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span
                      className={`rounded-md px-2 py-1 text-[8px] font-bold ${
                        template.region === "us"
                          ? "bg-red-50 text-red-600"
                          : template.region === "europe"
                            ? "bg-blue-50 text-blue-600"
                            : "bg-violet-50 text-violet-600"
                      }`}
                    >
                      {template.regionEmoji} {template.regionLabel}
                    </span>

                    {template.ats && (
                      <span className="rounded-md bg-emerald-50 px-2 py-1 text-[8px] font-bold text-emerald-600">
                        ATS Friendly
                      </span>
                    )}

                    <span
                      className={`rounded-md px-2 py-1 text-[8px] font-bold ${
                        template.style === "creative"
                          ? "bg-fuchsia-50 text-fuchsia-600"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {template.style === "creative"
                        ? "Creative"
                        : template.id === "minimal"
                          ? "1 Page"
                          : template.id === "american"
                            ? "Traditional"
                            : "Professional"}
                    </span>

                    {template.id === "creative-edge" && (
                      <span className="rounded-md bg-amber-50 px-2 py-1 text-[8px] font-bold text-amber-600">
                        Design
                      </span>
                    )}
                  </div>

                  {/* Apply */}

                  <button
                    type="button"
                    onClick={() => handleApplyTemplate(template.id)}
                    className={`apply-template mt-3 w-full rounded-xl py-2.5 text-[9px] font-bold transition ${
                      isSelected
                        ? "bg-violet-600 text-white shadow-sm shadow-violet-200 hover:bg-violet-700"
                        : "border border-slate-200 bg-white text-slate-700 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600"
                    }`}
                  >
                    {isSelected ? "Selected template" : "Use this template"}
                  </button>
                </div>
              </div>
            );
          })}

          {filteredTemplates.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-4 py-10 text-center">
              <p className="text-[11px] font-bold text-slate-700">
                No templates found
              </p>

              <p className="mt-1 text-[9px] text-slate-400">
                Try another search or filter.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <div className="shrink-0 border-t border-slate-200 bg-white px-4 py-3 sm:px-5">
        <button
          id="templateRecommendation"
          type="button"
          className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-violet-50 to-indigo-50 px-3 py-2.5 text-left transition hover:from-violet-100 hover:to-indigo-100"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-violet-600 shadow-sm">
              ✦
            </div>

            <div>
              <p className="text-[9px] font-extrabold text-slate-800">
                Not sure which template?
              </p>

              <p className="mt-0.5 text-[8px] text-slate-400">
                Let AI recommend the best one for your career.
              </p>
            </div>
          </div>

          <span className="text-xs font-bold text-violet-600">→</span>
        </button>
      </div>
    </div>
  );
} 