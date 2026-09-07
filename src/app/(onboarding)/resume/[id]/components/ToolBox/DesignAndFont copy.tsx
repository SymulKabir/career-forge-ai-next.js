"use client";

import { useState } from "react";
import { useResumeContext } from "../../context/resume-editor-context"
import { useResume } from "../../hooks/index"

export default function DesignFontPanel() {

  const [quickStyle, setQuickStyle] = useState("Minimal");
  const [pageMargins, setPageMargins] = useState(1);
  const [sectionSpacing, setSectionSpacing] = useState(2);
  const [radius, setRadius] = useState("Soft");
  const { setting, setSetting } = useResumeContext();
  const { handleSettingChange } = useResume()
  // PAGE MARGINS

  const [color, setColor] = useState("#7C3AED");
  const [customColor, setCustomColor] = useState("#7C3AED");

  /* =========================================================
     FONT STATE
  ========================================================= */

  const [fontSize, setFontSize] = useState("Small");
  const [lineHeight, setLineHeight] = useState(1);
  const [letterSpacing, setLetterSpacing] = useState(0);

  /* =========================================================
     COLUMN STATE
  ========================================================= */

  const [columns, setColumns] = useState(1);
  const [columnGap, setColumnGap] = useState(24);

  /* =========================================================
     BACKGROUND STATE
  ========================================================= */

  const [background, setBackground] = useState("None");

  /* =========================================================
     SIGNATURE STATE
  ========================================================= */

  const [signatureAlignment, setSignatureAlignment] =
    useState("Center");

  /* =========================================================
     BRANDING STATE
  ========================================================= */

  const [brandingEnabled, setBrandingEnabled] =
    useState(true);

  /* =========================================================
     RESET
  ========================================================= */

  const resetDesign = () => {
    setQuickStyle("Minimal");
    setPageMargins(1);
    setSectionSpacing(2);
    setRadius("Soft");

    setColor("#7C3AED");
    setCustomColor("#7C3AED");
    setFontSize("Small");
    setLineHeight(1);
    setLetterSpacing(0);

    setColumns(1);
    setColumnGap(24);

    setBackground("None");

    setSignatureAlignment("Center");

    setBrandingEnabled(true);
  };

  return (
    <div
      id="designFontPanel"
      className="space-y-4 pb-6"
    >
      {/* ========================================================= */}
      {/* 1. DESIGN & FONT */}
      {/* ========================================================= */}

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Header */}

        <div className="border-b border-slate-100 p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xs font-extrabold tracking-tight text-slate-800">
                Design & Font
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-slate-400">
                Fine-tune spacing, typography and visual
                balance.
              </p>
            </div>

            <span className="rounded-lg bg-violet-50 px-2 py-1 text-[9px] font-bold text-violet-600">
              PRO
            </span>
          </div>
        </div>

        {/* =======================================================
            DESIGN PRESETS
        ======================================================== */}

        <div className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Quick Style
            </span>

            <button
              type="button"
              onClick={() => setQuickStyle("Minimal")}
              className="text-[9px] font-bold text-violet-600 hover:text-violet-700"
            >
              Reset
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {/* Minimal */}

            <button
              type="button"
              onClick={() => setQuickStyle("Minimal")}
              className={`group rounded-xl p-2 text-left ${quickStyle === "Minimal"
                ? "border-2 border-violet-500 bg-violet-50"
                : "border border-slate-200 bg-white hover:border-violet-300"
                }`}
            >
              <div className="mb-2 h-12 rounded-lg border border-slate-200 bg-white p-2">
                <div className="h-1.5 w-12 rounded bg-slate-800" />

                <div className="mt-2 h-1 w-full rounded bg-slate-200" />

                <div className="mt-1 h-1 w-4/5 rounded bg-slate-200" />

                <div className="mt-2 h-1 w-8 rounded bg-violet-500" />
              </div>

              <span
                className={`block text-[9px] font-extrabold ${quickStyle === "Minimal"
                  ? "text-violet-600"
                  : "text-slate-600"
                  }`}
              >
                Minimal
              </span>
            </button>

            {/* Professional */}

            <button
              type="button"
              onClick={() => setQuickStyle("Professional")}
              className={`group rounded-xl p-2 text-left ${quickStyle === "Professional"
                ? "border-2 border-violet-500 bg-violet-50"
                : "border border-slate-200 bg-white hover:border-violet-300"
                }`}
            >
              <div className="mb-2 h-12 rounded-lg border border-slate-200 bg-white p-2">
                <div className="flex gap-1">
                  <div className="h-2 w-8 rounded bg-slate-800" />

                  <div className="h-2 w-12 rounded bg-violet-500" />
                </div>

                <div className="mt-2 h-1 w-full rounded bg-slate-200" />

                <div className="mt-1 h-1 w-3/4 rounded bg-slate-200" />

                <div className="mt-2 h-1 w-full rounded bg-slate-300" />
              </div>

              <span
                className={`block text-[9px] font-extrabold ${quickStyle === "Professional"
                  ? "text-violet-600"
                  : "text-slate-600"
                  }`}
              >
                Professional
              </span>
            </button>

            {/* Creative */}

            <button
              type="button"
              onClick={() => setQuickStyle("Creative")}
              className={`group rounded-xl p-2 text-left ${quickStyle === "Creative"
                ? "border-2 border-violet-500 bg-violet-50"
                : "border border-slate-200 bg-white hover:border-violet-300"
                }`}
            >
              <div className="relative mb-2 h-12 overflow-hidden rounded-lg border border-slate-200 bg-white p-2">
                <div className="absolute left-0 top-0 h-full w-4 bg-violet-600" />

                <div className="ml-5 h-2 w-12 rounded bg-slate-800" />

                <div className="ml-5 mt-2 h-1 w-16 rounded bg-slate-200" />

                <div className="ml-5 mt-1 h-1 w-12 rounded bg-slate-200" />
              </div>

              <span
                className={`block text-[9px] font-extrabold ${quickStyle === "Creative"
                  ? "text-violet-600"
                  : "text-slate-600"
                  }`}
              >
                Creative
              </span>
            </button>
          </div>
        </div>

        {/* =======================================================
    PAGE MARGINS
======================================================== */}

        <div className="border-t border-slate-100 p-4">
          <div className="mb-4">
            <div className="text-[10px] font-bold text-slate-700">
              Page Margins
            </div>

            <div className="mt-0.5 text-[9px] text-slate-400">
              Control vertical and horizontal page whitespace
            </div>
          </div>

          {/* Vertical Margins */}
          <div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Top & Bottom
                </div>

                <div className="mt-0.5 text-[9px] text-slate-400">
                  Vertical page margin
                </div>
              </div>

              <span className="min-w-[42px] rounded-lg bg-violet-50 px-2 py-1 text-center text-[9px] font-bold text-violet-600">
                {setting?.margin?.y}px
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <span className="text-[9px] text-slate-400">
                Compact
              </span>

              <input
                type="range"
                min="10"
                max="80"
                value={setting.margin.y}
                step="1"
                onChange={(event) =>
                  handleSettingChange({ propertyPath: "margin.y", value: Number(event.target.value) })
                }
                className="w-full accent-violet-600"
              />

              <span className="text-[9px] text-slate-400">
                Wide
              </span>
            </div>
          </div>

          {/* Horizontal Margins */}
          <div className="mt-5 border-t border-slate-100 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Left & Right
                </div>

                <div className="mt-0.5 text-[9px] text-slate-400">
                  Horizontal page margin
                </div>
              </div>

              <span className="min-w-[42px] rounded-lg bg-violet-50 px-2 py-1 text-center text-[9px] font-bold text-violet-600">
                {setting.margin.x}px
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <span className="text-[9px] text-slate-400">
                Compact
              </span>

              <input
                type="range"
                min="10"
                max="80"
                value={setting.margin.x}
                step="1"
                onChange={(event) =>
                  handleSettingChange({ propertyPath: "margin.x", value: Number(event.target.value) })
                }
                className="w-full accent-violet-600"
              />

              <span className="text-[9px] text-slate-400">
                Wide
              </span>
            </div>
          </div>
        </div>
        {/* ========================================================= */}
        {/* 5. SECTION TYPOGRAPHY */}
        {/* ========================================================= */}

        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Header */}

          <div className="border-b border-slate-100 p-4">
            <div>
              <h3 className="text-xs font-extrabold tracking-tight text-slate-800">
                Section Typography
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-slate-400">
                Control typography and spacing for every resume section.
              </p>
            </div>
          </div>

          <div className="p-4 space-y-5">

            {/* ===================================================== */}
            {/* SECTION TITLE */}
            {/* ===================================================== */}

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">

              <div className="flex items-start justify-between gap-3">

                <div>
                  <div className="text-[10px] font-extrabold text-slate-700">
                    Section Title
                  </div>

                  <div className="mt-0.5 text-[9px] text-slate-400">
                    Example: Experience, Education, Skills
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Toggle section title"
                  aria-pressed={setting.sections.sectionTitle.enabled}
                  onClick={() =>
                    handleSettingChange({
                      propertyPath: "sections.sectionTitle.enabled",
                      value: !setting.sections.sectionTitle.enabled,
                    })
                  }
                  className={`relative h-5 w-9 rounded-full transition ${setting.sections.sectionTitle.enabled
                      ? "bg-violet-600"
                      : "bg-slate-300"
                    }`}
                >
                  <span
                    className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${setting.sections.sectionTitle.enabled
                        ? "right-0.5"
                        : "left-0.5"
                      }`}
                  />
                </button>

              </div>

              {setting.sections.sectionTitle.enabled && (
                <div className="mt-4 space-y-4">

                  {/* Font Size */}

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Font Size
                      </span>

                      <span className="rounded-lg bg-violet-50 px-2 py-1 text-[9px] font-bold text-violet-600">
                        {setting.sections.sectionTitle.fontSize}px
                      </span>
                    </div>

                    <input
                      type="range"
                      min="10"
                      max="32"
                      step="1"
                      value={setting.sections.sectionTitle.fontSize}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.sectionTitle.fontSize",
                          value: Number(event.target.value),
                        })
                      }
                      className="mt-2 w-full accent-violet-600"
                    />
                  </div>

                  {/* Font Weight */}

                  <label className="block">
                    <span className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Font Weight
                    </span>

                    <select
                      value={setting.sections.sectionTitle.fontWeight}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.sectionTitle.fontWeight",
                          value: Number(event.target.value),
                        })
                      }
                      className="h-9 w-full rounded-xl border border-slate-200 bg-white px-3 text-[10px] font-medium text-slate-700 outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-50"
                    >
                      <option value="400">Regular — 400</option>
                      <option value="500">Medium — 500</option>
                      <option value="600">Semibold — 600</option>
                      <option value="700">Bold — 700</option>
                      <option value="800">Extra Bold — 800</option>
                    </select>
                  </label>

                  {/* Color */}

                  <div>
                    <span className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Font Color
                    </span>

                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={setting.sections.sectionTitle.fontColor}
                        onChange={(event) =>
                          handleSettingChange({
                            propertyPath: "sections.sectionTitle.fontColor",
                            value: event.target.value,
                          })
                        }
                        className="h-9 w-9 cursor-pointer rounded-lg border-0 bg-transparent"
                      />

                      <input
                        type="text"
                        value={setting.sections.sectionTitle.fontColor}
                        onChange={(event) =>
                          handleSettingChange({
                            propertyPath: "sections.sectionTitle.fontColor",
                            value: event.target.value,
                          })
                        }
                        className="h-9 flex-1 rounded-xl border border-slate-200 bg-white px-3 font-mono text-[10px] uppercase outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-50"
                      />
                    </div>
                  </div>

                  {/* Line Height */}

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Line Height
                      </span>

                      <span className="rounded-lg bg-slate-100 px-2 py-1 text-[9px] font-bold text-slate-500">
                        {setting.sections.sectionTitle.lineHeight.toFixed(1)}
                      </span>
                    </div>

                    <input
                      type="range"
                      min="0.8"
                      max="2"
                      step="0.1"
                      value={setting.sections.sectionTitle.lineHeight}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.sectionTitle.lineHeight",
                          value: Number(event.target.value),
                        })
                      }
                      className="mt-2 w-full accent-violet-600"
                    />
                  </div>

                  {/* Letter Spacing */}

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Letter Spacing
                      </span>

                      <span className="rounded-lg bg-slate-100 px-2 py-1 text-[9px] font-bold text-slate-500">
                        {setting.sections.sectionTitle.letterSpacing}px
                      </span>
                    </div>

                    <input
                      type="range"
                      min="-2"
                      max="5"
                      step="0.5"
                      value={setting.sections.sectionTitle.letterSpacing}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.sectionTitle.letterSpacing",
                          value: Number(event.target.value),
                        })
                      }
                      className="mt-2 w-full accent-violet-600"
                    />
                  </div>

                  {/* Text Transform */}

                  <label className="block">
                    <span className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Text Transform
                    </span>

                    <select
                      value={setting.sections.sectionTitle.textTransform}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.sectionTitle.textTransform",
                          value: event.target.value,
                        })
                      }
                      className="h-9 w-full rounded-xl border border-slate-200 bg-white px-3 text-[10px] font-medium text-slate-700 outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-50"
                    >
                      <option value="none">None</option>
                      <option value="uppercase">UPPERCASE</option>
                      <option value="lowercase">lowercase</option>
                      <option value="capitalize">Capitalize</option>
                    </select>
                  </label>

                  {/* Gap */}

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Title Gap
                      </span>

                      <span className="text-[9px] font-bold text-slate-500">
                        {setting.sections.sectionTitle.gap}px
                      </span>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="24"
                      step="1"
                      value={setting.sections.sectionTitle.gap}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.sectionTitle.gap",
                          value: Number(event.target.value),
                        })
                      }
                      className="mt-2 w-full accent-violet-600"
                    />
                  </div>

                  {/* Section Gap */}

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Section Gap
                      </span>

                      <span className="text-[9px] font-bold text-slate-500">
                        {setting.sections.sectionTitle.sectionGap}px
                      </span>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="40"
                      step="1"
                      value={setting.sections.sectionTitle.sectionGap}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.sectionTitle.sectionGap",
                          value: Number(event.target.value),
                        })
                      }
                      className="mt-2 w-full accent-violet-600"
                    />
                  </div>

                </div>
              )}
            </div>


            {/* ===================================================== */}
            {/* SUBSECTION TITLE */}
            {/* ===================================================== */}

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">

              <div className="flex items-start justify-between gap-3">

                <div>
                  <div className="text-[10px] font-extrabold text-slate-700">
                    Subsection Title
                  </div>

                  <div className="mt-0.5 text-[9px] text-slate-400">
                    Example: Job Title / Degree
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Toggle subsection title"
                  aria-pressed={setting.sections.subSectionTitle.enabled}
                  onClick={() =>
                    handleSettingChange({
                      propertyPath: "sections.subSectionTitle.enabled",
                      value: !setting.sections.subSectionTitle.enabled,
                    })
                  }
                  className={`relative h-5 w-9 rounded-full transition ${setting.sections.subSectionTitle.enabled
                      ? "bg-violet-600"
                      : "bg-slate-300"
                    }`}
                >
                  <span
                    className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${setting.sections.subSectionTitle.enabled
                        ? "right-0.5"
                        : "left-0.5"
                      }`}
                  />
                </button>

              </div>

              {setting.sections.subSectionTitle.enabled && (
                <div className="mt-4 space-y-4">

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Font Size
                      </span>

                      <span className="rounded-lg bg-violet-50 px-2 py-1 text-[9px] font-bold text-violet-600">
                        {setting.sections.subSectionTitle.fontSize}px
                      </span>
                    </div>

                    <input
                      type="range"
                      min="10"
                      max="24"
                      step="1"
                      value={setting.sections.subSectionTitle.fontSize}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.subSectionTitle.fontSize",
                          value: Number(event.target.value),
                        })
                      }
                      className="mt-2 w-full accent-violet-600"
                    />
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Font Weight
                    </span>

                    <select
                      value={setting.sections.subSectionTitle.fontWeight}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.subSectionTitle.fontWeight",
                          value: Number(event.target.value),
                        })
                      }
                      className="h-9 w-full rounded-xl border border-slate-200 bg-white px-3 text-[10px] outline-none"
                    >
                      <option value="400">Regular — 400</option>
                      <option value="500">Medium — 500</option>
                      <option value="600">Semibold — 600</option>
                      <option value="700">Bold — 700</option>
                      <option value="800">Extra Bold — 800</option>
                    </select>
                  </label>

                  <div>
                    <span className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Font Color
                    </span>

                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={setting.sections.subSectionTitle.fontColor}
                        onChange={(event) =>
                          handleSettingChange({
                            propertyPath: "sections.subSectionTitle.fontColor",
                            value: event.target.value,
                          })
                        }
                        className="h-9 w-9 rounded-lg"
                      />

                      <input
                        type="text"
                        value={setting.sections.subSectionTitle.fontColor}
                        onChange={(event) =>
                          handleSettingChange({
                            propertyPath: "sections.subSectionTitle.fontColor",
                            value: event.target.value,
                          })
                        }
                        className="h-9 flex-1 rounded-xl border border-slate-200 bg-white px-3 font-mono text-[10px] uppercase outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Line Height
                      </span>

                      <span className="text-[9px] font-bold text-slate-500">
                        {setting.sections.subSectionTitle.lineHeight.toFixed(1)}
                      </span>
                    </div>

                    <input
                      type="range"
                      min="0.8"
                      max="2"
                      step="0.1"
                      value={setting.sections.subSectionTitle.lineHeight}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.subSectionTitle.lineHeight",
                          value: Number(event.target.value),
                        })
                      }
                      className="mt-2 w-full accent-violet-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Letter Spacing
                      </span>

                      <span className="text-[9px] font-bold text-slate-500">
                        {setting.sections.subSectionTitle.letterSpacing}px
                      </span>
                    </div>

                    <input
                      type="range"
                      min="-2"
                      max="5"
                      step="0.5"
                      value={setting.sections.subSectionTitle.letterSpacing}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.subSectionTitle.letterSpacing",
                          value: Number(event.target.value),
                        })
                      }
                      className="mt-2 w-full accent-violet-600"
                    />
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Text Transform
                    </span>

                    <select
                      value={setting.sections.subSectionTitle.textTransform}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.subSectionTitle.textTransform",
                          value: event.target.value,
                        })
                      }
                      className="h-9 w-full rounded-xl border border-slate-200 bg-white px-3 text-[10px] outline-none"
                    >
                      <option value="none">None</option>
                      <option value="uppercase">UPPERCASE</option>
                      <option value="lowercase">lowercase</option>
                      <option value="capitalize">Capitalize</option>
                    </select>
                  </label>

                  <div>
                    <div className="flex justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Gap
                      </span>

                      <span className="text-[9px] font-bold text-slate-500">
                        {setting.sections.subSectionTitle.gap}px
                      </span>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="24"
                      value={setting.sections.subSectionTitle.gap}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.subSectionTitle.gap",
                          value: Number(event.target.value),
                        })
                      }
                      className="mt-2 w-full accent-violet-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Section Gap
                      </span>

                      <span className="text-[9px] font-bold text-slate-500">
                        {setting.sections.subSectionTitle.sectionGap}px
                      </span>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="40"
                      value={setting.sections.subSectionTitle.sectionGap}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.subSectionTitle.sectionGap",
                          value: Number(event.target.value),
                        })
                      }
                      className="mt-2 w-full accent-violet-600"
                    />
                  </div>

                </div>
              )}
            </div>


            {/* ===================================================== */}
            {/* ORGANIZATION TITLE */}
            {/* ===================================================== */}

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">

              <div className="flex items-start justify-between">

                <div>
                  <div className="text-[10px] font-extrabold text-slate-700">
                    Organization Title
                  </div>

                  <div className="mt-0.5 text-[9px] text-slate-400">
                    Example: Company / University
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Toggle organization title"
                  aria-pressed={setting.sections.organizationTitle.enabled}
                  onClick={() =>
                    handleSettingChange({
                      propertyPath: "sections.organizationTitle.enabled",
                      value: !setting.sections.organizationTitle.enabled,
                    })
                  }
                  className={`relative h-5 w-9 rounded-full transition ${setting.sections.organizationTitle.enabled
                      ? "bg-violet-600"
                      : "bg-slate-300"
                    }`}
                >
                  <span
                    className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${setting.sections.organizationTitle.enabled
                        ? "right-0.5"
                        : "left-0.5"
                      }`}
                  />
                </button>

              </div>

              {setting.sections.organizationTitle.enabled && (
                <div className="mt-4 space-y-4">

                  <div>
                    <div className="flex justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Font Size
                      </span>

                      <span className="text-[9px] font-bold text-violet-600">
                        {setting.sections.organizationTitle.fontSize}px
                      </span>
                    </div>

                    <input
                      type="range"
                      min="10"
                      max="24"
                      value={setting.sections.organizationTitle.fontSize}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.organizationTitle.fontSize",
                          value: Number(event.target.value),
                        })
                      }
                      className="mt-2 w-full accent-violet-600"
                    />
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Font Weight
                    </span>

                    <select
                      value={setting.sections.organizationTitle.fontWeight}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.organizationTitle.fontWeight",
                          value: Number(event.target.value),
                        })
                      }
                      className="h-9 w-full rounded-xl border border-slate-200 bg-white px-3 text-[10px] outline-none"
                    >
                      <option value="400">Regular — 400</option>
                      <option value="500">Medium — 500</option>
                      <option value="600">Semibold — 600</option>
                      <option value="700">Bold — 700</option>
                      <option value="800">Extra Bold — 800</option>
                    </select>
                  </label>

                  <div>
                    <span className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Font Color
                    </span>

                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={setting.sections.organizationTitle.fontColor}
                        onChange={(event) =>
                          handleSettingChange({
                            propertyPath: "sections.organizationTitle.fontColor",
                            value: event.target.value,
                          })
                        }
                        className="h-9 w-9 rounded-lg"
                      />

                      <input
                        type="text"
                        value={setting.sections.organizationTitle.fontColor}
                        onChange={(event) =>
                          handleSettingChange({
                            propertyPath: "sections.organizationTitle.fontColor",
                            value: event.target.value,
                          })
                        }
                        className="h-9 flex-1 rounded-xl border border-slate-200 bg-white px-3 font-mono text-[10px] uppercase outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Line Height
                      </span>

                      <span className="text-[9px] font-bold text-slate-500">
                        {setting.sections.organizationTitle.lineHeight.toFixed(1)}
                      </span>
                    </div>

                    <input
                      type="range"
                      min="0.8"
                      max="2"
                      step="0.1"
                      value={setting.sections.organizationTitle.lineHeight}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.organizationTitle.lineHeight",
                          value: Number(event.target.value),
                        })
                      }
                      className="mt-2 w-full accent-violet-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Letter Spacing
                      </span>

                      <span className="text-[9px] font-bold text-slate-500">
                        {setting.sections.organizationTitle.letterSpacing}px
                      </span>
                    </div>

                    <input
                      type="range"
                      min="-2"
                      max="5"
                      step="0.5"
                      value={setting.sections.organizationTitle.letterSpacing}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.organizationTitle.letterSpacing",
                          value: Number(event.target.value),
                        })
                      }
                      className="mt-2 w-full accent-violet-600"
                    />
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Text Transform
                    </span>

                    <select
                      value={setting.sections.organizationTitle.textTransform}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.organizationTitle.textTransform",
                          value: event.target.value,
                        })
                      }
                      className="h-9 w-full rounded-xl border border-slate-200 bg-white px-3 text-[10px] outline-none"
                    >
                      <option value="none">None</option>
                      <option value="uppercase">UPPERCASE</option>
                      <option value="lowercase">lowercase</option>
                      <option value="capitalize">Capitalize</option>
                    </select>
                  </label>

                  <div>
                    <div className="flex justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Gap
                      </span>

                      <span className="text-[9px] font-bold text-slate-500">
                        {setting.sections.organizationTitle.gap}px
                      </span>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="24"
                      value={setting.sections.organizationTitle.gap}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.organizationTitle.gap",
                          value: Number(event.target.value),
                        })
                      }
                      className="mt-2 w-full accent-violet-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Section Gap
                      </span>

                      <span className="text-[9px] font-bold text-slate-500">
                        {setting.sections.organizationTitle.sectionGap}px
                      </span>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="40"
                      value={setting.sections.organizationTitle.sectionGap}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.organizationTitle.sectionGap",
                          value: Number(event.target.value),
                        })
                      }
                      className="mt-2 w-full accent-violet-600"
                    />
                  </div>

                </div>
              )}
            </div>


            {/* ===================================================== */}
            {/* METADATA */}
            {/* ===================================================== */}

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">

              <div className="flex items-start justify-between">

                <div>
                  <div className="text-[10px] font-extrabold text-slate-700">
                    Metadata
                  </div>

                  <div className="mt-0.5 text-[9px] text-slate-400">
                    Example: Date, Location, Duration
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Toggle metadata"
                  aria-pressed={setting.sections.metadata.enabled}
                  onClick={() =>
                    handleSettingChange({
                      propertyPath: "sections.metadata.enabled",
                      value: !setting.sections.metadata.enabled,
                    })
                  }
                  className={`relative h-5 w-9 rounded-full transition ${setting.sections.metadata.enabled
                      ? "bg-violet-600"
                      : "bg-slate-300"
                    }`}
                >
                  <span
                    className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${setting.sections.metadata.enabled
                        ? "right-0.5"
                        : "left-0.5"
                      }`}
                  />
                </button>

              </div>

              {setting.sections.metadata.enabled && (
                <div className="mt-4 space-y-4">

                  <div>
                    <div className="flex justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Font Size
                      </span>

                      <span className="text-[9px] font-bold text-violet-600">
                        {setting.sections.metadata.fontSize}px
                      </span>
                    </div>

                    <input
                      type="range"
                      min="9"
                      max="20"
                      value={setting.sections.metadata.fontSize}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.metadata.fontSize",
                          value: Number(event.target.value),
                        })
                      }
                      className="mt-2 w-full accent-violet-600"
                    />
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Font Weight
                    </span>

                    <select
                      value={setting.sections.metadata.fontWeight}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.metadata.fontWeight",
                          value: Number(event.target.value),
                        })
                      }
                      className="h-9 w-full rounded-xl border border-slate-200 bg-white px-3 text-[10px] outline-none"
                    >
                      <option value="300">Light — 300</option>
                      <option value="400">Regular — 400</option>
                      <option value="500">Medium — 500</option>
                      <option value="600">Semibold — 600</option>
                      <option value="700">Bold — 700</option>
                    </select>
                  </label>

                  <div>
                    <span className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Font Color
                    </span>

                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={setting.sections.metadata.fontColor}
                        onChange={(event) =>
                          handleSettingChange({
                            propertyPath: "sections.metadata.fontColor",
                            value: event.target.value,
                          })
                        }
                        className="h-9 w-9 rounded-lg"
                      />

                      <input
                        type="text"
                        value={setting.sections.metadata.fontColor}
                        onChange={(event) =>
                          handleSettingChange({
                            propertyPath: "sections.metadata.fontColor",
                            value: event.target.value,
                          })
                        }
                        className="h-9 flex-1 rounded-xl border border-slate-200 bg-white px-3 font-mono text-[10px] uppercase outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Line Height
                      </span>

                      <span className="text-[9px] font-bold text-slate-500">
                        {setting.sections.metadata.lineHeight.toFixed(1)}
                      </span>
                    </div>

                    <input
                      type="range"
                      min="0.8"
                      max="2"
                      step="0.1"
                      value={setting.sections.metadata.lineHeight}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.metadata.lineHeight",
                          value: Number(event.target.value),
                        })
                      }
                      className="mt-2 w-full accent-violet-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Letter Spacing
                      </span>

                      <span className="text-[9px] font-bold text-slate-500">
                        {setting.sections.metadata.letterSpacing}px
                      </span>
                    </div>

                    <input
                      type="range"
                      min="-2"
                      max="5"
                      step="0.5"
                      value={setting.sections.metadata.letterSpacing}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.metadata.letterSpacing",
                          value: Number(event.target.value),
                        })
                      }
                      className="mt-2 w-full accent-violet-600"
                    />
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Text Transform
                    </span>

                    <select
                      value={setting.sections.metadata.textTransform}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.metadata.textTransform",
                          value: event.target.value,
                        })
                      }
                      className="h-9 w-full rounded-xl border border-slate-200 bg-white px-3 text-[10px] outline-none"
                    >
                      <option value="none">None</option>
                      <option value="uppercase">UPPERCASE</option>
                      <option value="lowercase">lowercase</option>
                      <option value="capitalize">Capitalize</option>
                    </select>
                  </label>

                  <div>
                    <div className="flex justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Gap
                      </span>

                      <span className="text-[9px] font-bold text-slate-500">
                        {setting.sections.metadata.gap}px
                      </span>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="24"
                      value={setting.sections.metadata.gap}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.metadata.gap",
                          value: Number(event.target.value),
                        })
                      }
                      className="mt-2 w-full accent-violet-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Section Gap
                      </span>

                      <span className="text-[9px] font-bold text-slate-500">
                        {setting.sections.metadata.sectionGap}px
                      </span>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="40"
                      value={setting.sections.metadata.sectionGap}
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath: "sections.metadata.sectionGap",
                          value: Number(event.target.value),
                        })
                      }
                      className="mt-2 w-full accent-violet-600"
                    />
                  </div>

                </div>
              )}
            </div>

          </div>
        </div>
        {/* =======================================================
            SECTION SPACING
        ======================================================== */}

        <div className="border-t border-slate-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold text-slate-700">
                Section Spacing
              </div>

              <div className="mt-0.5 text-[9px] text-slate-400">
                Space between resume sections
              </div>
            </div>

            <span className="min-w-[30px] rounded-lg bg-violet-50 px-2 py-1 text-center text-[9px] font-bold text-violet-600">
              {setting.sectionGap}
            </span>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <span className="text-[9px] text-slate-400">
              Tight
            </span>

            <input
              type="range"
              min="0"
              max="80"
              value={setting.sectionGap}
              step="5"
              onChange={(event) => handleSettingChange({
                propertyPath: "sectionGap",
                value: Number(event.target.value)
              })
              }
              className="w-full accent-violet-600"
            />

            <span className="text-[9px] text-slate-400">
              Relaxed
            </span>
          </div>
        </div>

        {/* =======================================================
            RADIUS
        ======================================================== */}

        <div className="border-t border-slate-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold text-slate-700">
                Corner Style
              </div>

              <div className="mt-0.5 text-[9px] text-slate-400">
                Control visual softness
              </div>
            </div>

            <span className="rounded-lg bg-slate-100 px-2 py-1 text-[9px] font-bold text-slate-500">
              {radius}
            </span>
          </div>

          <div className="mt-3 grid grid-cols-4 gap-2">
            {["Sharp", "Soft", "Round", "Pill"].map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setRadius(item)}
                  className={`rounded-lg px-2 py-2 text-[9px] font-bold ${radius === item
                    ? "border-2 border-violet-500 bg-violet-50 text-violet-600"
                    : "border border-slate-200 text-slate-500 hover:border-violet-300"
                    }`}
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. COLORS */}
      {/* ========================================================= */}

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-xs font-extrabold text-slate-800">
              Colors
            </h3>

            <p className="mt-1 text-[10px] text-slate-400">
              Build a consistent visual identity.
            </p>
          </div>

          <span
            className="h-5 w-5 rounded-full ring-4 ring-violet-50"
            style={{ backgroundColor: color }}
          />
        </div>

        {/* Preset Colors */}

        <div className="grid grid-cols-7 gap-2">
          {[
            ["#7c3aed", "Violet"],
            ["#2563eb", "Blue"],
            ["#0891b2", "Cyan"],
            ["#059669", "Emerald"],
            ["#dc2626", "Red"],
            ["#ea580c", "Orange"],
            ["#0f172a", "Slate"],
          ].map(([value, title]) => (
            <button
              key={value}
              type="button"
              title={title}
              onClick={() => {
                setColor(value);
                setCustomColor(value);
              }}
              className={`h-8 w-8 rounded-full transition hover:scale-110 ${color.toLowerCase() ===
                value.toLowerCase()
                ? "ring-2 ring-violet-500 ring-offset-2"
                : ""
                }`}
              style={{ backgroundColor: value }}
            />
          ))}
        </div>

        {/* Custom */}

        <div className="mt-4 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <input
            id="customColor"
            type="color"
            value={customColor}
            onChange={(event) => {
              const value = event.target.value.toUpperCase();

              setCustomColor(value);
              setColor(value);
            }}
            className="h-9 w-9 cursor-pointer overflow-hidden rounded-lg border-0 bg-transparent"
          />

          <div className="flex-1">
            <div className="text-[10px] font-bold text-slate-700">
              Use custom color
            </div>

            <div className="mt-0.5 text-[9px] text-slate-400">
              Create your own brand color
            </div>
          </div>

          <span className="rounded-lg bg-white px-2 py-1 font-mono text-[9px] font-bold text-slate-500 shadow-sm">
            {customColor.toUpperCase()}
          </span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. FONT STYLE */}
      {/* ========================================================= */}

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4">
          <h3 className="text-xs font-extrabold text-slate-800">
            Font Style
          </h3>

          <p className="mt-1 text-[10px] text-slate-400">
            Create a readable and professional hierarchy.
          </p>
        </div>

        {/* Font Family */}

        <label className="block">
          <span className="mb-2 block text-[9px] font-bold uppercase tracking-wider text-slate-400">
            Font Family
          </span>

          <select
            value={setting.font.family}
            onChange={(event) =>
              setSetting((state: any) => {
                return {
                  ...state,
                  font: {
                    ...state.font,
                    family: event.target.value
                  }
                }
              })
            }
            className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs font-medium text-slate-700 outline-none transition focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-50"
          >
            <option value="Rubik">Rubik</option>
            <option value="Inter">Inter</option>
            <option value="DM Sans">DM Sans</option>
            <option value="Roboto">Roboto</option>
            <option value="Poppins">Poppins</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Roboto Slab">
              Roboto Slab
            </option>
            <option value="Merriweather">
              Merriweather
            </option>
            <option value="Georgia">Georgia</option>
          </select>
        </label>

        {/* Font Preview */}

        <div
          className="mt-3 rounded-xl bg-slate-50 p-3"
          style={{ fontFamily: setting.font.family }}
        >
          <div className="text-[18px] font-bold text-slate-800">
            Alex Morgan
          </div>

          <div className="mt-1 text-[10px] font-medium text-violet-600">
            Senior Software Engineer
          </div>

          <div className="mt-2 text-[9px] leading-4 text-slate-500">
            Product-minded engineer building scalable web
            applications, APIs and AI-powered products.
          </div>
        </div>

        {/* Font Size */}

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Font Size
            </span>

            <span className="rounded-lg bg-violet-50 px-2 py-1 text-[9px] font-bold text-violet-600">
              {fontSize}
            </span>
          </div>

          <div className="mt-2 grid grid-cols-3 gap-2">
            {["Small", "Medium", "Large"].map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFontSize(item)}
                  className={`rounded-xl px-3 py-2.5 text-[9px] font-extrabold ${fontSize === item
                    ? "border-2 border-violet-500 bg-violet-50 text-violet-600"
                    : "border border-slate-200 bg-white text-slate-500 hover:border-violet-300"
                    }`}
                >
                  {item.toUpperCase()}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Line Height */}

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Line Height
            </span>

            <span className="rounded-lg bg-slate-100 px-2 py-1 text-[9px] font-bold text-slate-500">
              {lineHeight.toFixed(1)}
            </span>
          </div>

          <input
            type="range"
            min="0.8"
            max="2"
            step="0.1"
            value={lineHeight}
            onChange={(event) =>
              setLineHeight(
                Number(event.target.value),
              )
            }
            className="mt-3 w-full accent-violet-600"
          />
        </div>

        {/* Letter Spacing */}

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Letter Spacing
            </span>

            <span className="rounded-lg bg-slate-100 px-2 py-1 text-[9px] font-bold text-slate-500">
              {letterSpacing === 0
                ? "Normal"
                : `${letterSpacing}px`}
            </span>
          </div>

          <input
            type="range"
            min="-1"
            max="3"
            step="0.5"
            value={letterSpacing}
            onChange={(event) =>
              setLetterSpacing(
                Number(event.target.value),
              )
            }
            className="mt-3 w-full accent-violet-600"
          />
        </div>
      </div>

      {/* ========================================================= */}
      {/* 4. COLUMN LAYOUT */}
      {/* ========================================================= */}

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4">
          <h3 className="text-xs font-extrabold text-slate-800">
            Column Layout
          </h3>

          <p className="mt-1 text-[10px] text-slate-400">
            Choose the structure that fits your content.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {/* 1 */}

          <button
            type="button"
            onClick={() => setColumns(1)}
            className={`rounded-xl p-2 ${columns === 1
              ? "border-2 border-violet-500 bg-violet-50"
              : "border border-slate-200 bg-white hover:border-violet-300"
              }`}
          >
            <div className="h-16 rounded-lg bg-white p-2">
              <div className="h-full rounded bg-violet-100" />
            </div>

            <div
              className={`mt-2 text-[9px] font-extrabold ${columns === 1
                ? "text-violet-600"
                : "text-slate-500"
                }`}
            >
              1
            </div>
          </button>

          {/* 2 */}

          <button
            type="button"
            onClick={() => setColumns(2)}
            className={`rounded-xl p-2 ${columns === 2
              ? "border-2 border-violet-500 bg-violet-50"
              : "border border-slate-200 bg-white hover:border-violet-300"
              }`}
          >
            <div className="flex h-16 gap-1 rounded-lg bg-white">
              <div className="w-1/3 rounded bg-slate-200" />
              <div className="flex-1 rounded bg-slate-100" />
            </div>

            <div
              className={`mt-2 text-[9px] font-extrabold ${columns === 2
                ? "text-violet-600"
                : "text-slate-500"
                }`}
            >
              2
            </div>
          </button>

          {/* 3 */}

          <button
            type="button"
            onClick={() => setColumns(3)}
            className={`rounded-xl p-2 ${columns === 3
              ? "border-2 border-violet-500 bg-violet-50"
              : "border border-slate-200 bg-white hover:border-violet-300"
              }`}
          >
            <div className="grid h-16 grid-cols-[25%_50%_25%] gap-1 rounded-lg bg-white">
              <div className="rounded bg-slate-200" />
              <div className="rounded bg-slate-100" />
              <div className="rounded bg-slate-200" />
            </div>

            <div
              className={`mt-2 text-[9px] font-extrabold ${columns === 3
                ? "text-violet-600"
                : "text-slate-500"
                }`}
            >
              3
            </div>
          </button>

          {/* 4 */}

          <button
            type="button"
            onClick={() => setColumns(4)}
            className={`rounded-xl p-2 ${columns === 4
              ? "border-2 border-violet-500 bg-violet-50"
              : "border border-slate-200 bg-white hover:border-violet-300"
              }`}
          >
            <div className="grid h-16 grid-cols-4 gap-1 rounded-lg bg-white">
              <div className="rounded bg-slate-200" />
              <div className="rounded bg-slate-100" />
              <div className="rounded bg-slate-200" />
              <div className="rounded bg-slate-100" />
            </div>

            <div
              className={`mt-2 text-[9px] font-extrabold ${columns === 4
                ? "text-violet-600"
                : "text-slate-500"
                }`}
            >
              4
            </div>
          </button>
        </div>

        {/* Column Gap */}

        <div className="mt-4 rounded-xl bg-slate-50 p-3">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Column Gap
            </span>

            <span className="text-[9px] font-bold text-slate-500">
              {columnGap}px
            </span>
          </div>

          <input
            type="range"
            min="8"
            max="48"
            value={columnGap}
            onChange={(event) =>
              setColumnGap(
                Number(event.target.value),
              )
            }
            className="mt-2 w-full accent-violet-600"
          />
        </div>
      </div>

      {/* ========================================================= */}
      {/* 5. BACKGROUNDS */}
      {/* ========================================================= */}

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4">
          <h3 className="text-xs font-extrabold text-slate-800">
            Backgrounds
          </h3>

          <p className="mt-1 text-[10px] text-slate-400">
            Add subtle visual depth without hurting
            readability.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {/* None */}

          <button
            type="button"
            onClick={() => setBackground("None")}
            className={`rounded-xl p-1.5 ${background === "None"
              ? "border-2 border-violet-500 bg-violet-50"
              : "border border-slate-200 bg-white hover:border-violet-300"
              }`}
          >
            <div className="h-20 rounded-lg border border-slate-200 bg-white" />

            <span
              className={`mt-1.5 block text-[9px] font-bold ${background === "None"
                ? "text-violet-600"
                : "text-slate-500"
                }`}
            >
              None
            </span>
          </button>

          {/* Soft */}

          <button
            type="button"
            onClick={() => setBackground("Soft")}
            className={`rounded-xl p-1.5 ${background === "Soft"
              ? "border-2 border-violet-500 bg-violet-50"
              : "border border-slate-200 bg-white hover:border-violet-300"
              }`}
          >
            <div className="h-20 rounded-lg bg-gradient-to-br from-violet-50 via-white to-slate-100" />

            <span
              className={`mt-1.5 block text-[9px] font-bold ${background === "Soft"
                ? "text-violet-600"
                : "text-slate-500"
                }`}
            >
              Soft
            </span>
          </button>

          {/* Image */}

          <button
            type="button"
            onClick={() => setBackground("Image")}
            className={`overflow-hidden rounded-xl p-1.5 ${background === "Image"
              ? "border-2 border-violet-500 bg-violet-50"
              : "border border-slate-200 bg-white hover:border-violet-300"
              }`}
          >
            <img
              src="https://app.enhancv.com/images/lgbtqIcon-3066830cf2e82b8397b4.png"
              alt="Background"
              className="h-20 w-full rounded-lg object-cover"
            />

            <span
              className={`mt-1.5 block text-[9px] font-bold ${background === "Image"
                ? "text-violet-600"
                : "text-slate-500"
                }`}
            >
              Image
            </span>
          </button>
        </div>

        <button
          type="button"
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 py-2.5 text-[9px] font-bold text-slate-500 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600"
        >
          <span className="text-sm">＋</span>
          Add background
        </button>
      </div>

      {/* ========================================================= */}
      {/* 6. SIGNATURE */}
      {/* ========================================================= */}

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xs font-extrabold text-slate-800">
              Signature
            </h3>

            <p className="mt-1 text-[10px] text-slate-400">
              Add a handwritten or digital signature.
            </p>
          </div>

          <span className="rounded-lg bg-slate-100 px-2 py-1 text-[9px] font-bold text-slate-400">
            Optional
          </span>
        </div>

        {/* Signature Preview */}

        <div className="mt-4 flex h-20 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50">
          <div
            className={`text-center ${signatureAlignment === "Left"
              ? "mr-auto ml-4"
              : signatureAlignment === "Right"
                ? "ml-auto mr-4"
                : ""
              }`}
          >
            <div className="font-serif text-xl italic text-slate-400">
              Your Signature
            </div>

            <div className="mt-1 text-[8px] text-slate-400">
              Preview
            </div>
          </div>
        </div>

        <button
          type="button"
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-2.5 text-[10px] font-bold text-white shadow-sm transition hover:bg-violet-700"
        >
          <span className="text-base">＋</span>
          Add New
        </button>

        {/* Alignment */}

        <div className="mt-3 grid grid-cols-3 gap-2">
          {["Left", "Center", "Right"].map(
            (item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setSignatureAlignment(item)
                }
                className={`rounded-lg py-2 text-[9px] font-bold ${signatureAlignment === item
                  ? "border-2 border-violet-500 bg-violet-50 text-violet-600"
                  : "border border-slate-200 text-slate-500 hover:border-violet-300"
                  }`}
              >
                {item}
              </button>
            ),
          )}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 7. BRANDING */}
      {/* ========================================================= */}

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xs font-extrabold text-slate-800">
              Branding
            </h3>

            <p className="mt-1 text-[10px] text-slate-400">
              Add your personal brand to your resume.
            </p>
          </div>

          {/* Toggle */}

          <button
            type="button"
            aria-label="Toggle branding"
            aria-pressed={brandingEnabled}
            onClick={() =>
              setBrandingEnabled(
                (previous) => !previous,
              )
            }
            className={`relative h-5 w-9 rounded-full transition ${brandingEnabled
              ? "bg-violet-600"
              : "bg-slate-300"
              }`}
          >
            <span
              className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${brandingEnabled
                ? "right-0.5"
                : "left-0.5"
                }`}
            />
          </button>
        </div>

        {/* Branding Content */}

        {brandingEnabled && (
          <div className="mt-4 space-y-3">
            {/* Brand Name */}

            <label className="block">
              <span className="mb-1.5 block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                Brand Name
              </span>

              <input
                type="text"
                defaultValue="Alex Morgan"
                placeholder="Your name or brand"
                className="h-9 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-[10px] outline-none focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-50"
              />
            </label>

            {/* Website */}

            <label className="block">
              <span className="mb-1.5 block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                Website / Portfolio
              </span>

              <input
                type="text"
                placeholder="yourwebsite.com"
                className="h-9 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-[10px] outline-none focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-50"
              />
            </label>

            {/* Branding Options */}

            <div className="rounded-xl bg-slate-50 p-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold text-slate-600">
                  Show branding in footer
                </span>

                <span className="rounded-md bg-emerald-50 px-1.5 py-1 text-[8px] font-bold text-emerald-600">
                  ON
                </span>
              </div>

              <p className="mt-1 text-[9px] leading-4 text-slate-400">
                Your website or brand will appear subtly
                at the bottom of the resume.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* SAVE / RESET */}
      {/* ========================================================= */}

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={resetDesign}
          className="flex-1 rounded-xl border border-slate-200 bg-white py-2.5 text-[10px] font-bold text-slate-600 shadow-sm transition hover:bg-slate-50"
        >
          Reset Design
        </button>

        <button
          type="button"
          className="flex-1 rounded-xl bg-slate-900 py-2.5 text-[10px] font-bold text-white shadow-sm transition hover:bg-slate-800"
        >
          Save Style
        </button>
      </div>
    </div>
  );
} 