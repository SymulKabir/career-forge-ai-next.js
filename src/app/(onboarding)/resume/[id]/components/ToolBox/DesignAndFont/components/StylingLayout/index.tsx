"use client";

import { useState } from "react";
import { useResumeContext } from "@/src/app/(onboarding)/resume/[id]/context/resume-editor-context"; 
import SelectField from "../SelectField"
import RangeField from "../RangeField"
import Toggle from "../Toggle"
import { useResume } from "../../../../../hooks";
 

export default function DesignFontPanel() { 
 
  const { setting, setSetting, toolBar } = useResumeContext(); 
  const {  handleToolbarChange} = useResume()
  /* FONT */
  const [fontSize, setFontSize] = useState("Small");
  const [lineHeight, setLineHeight] = useState(1);
  const [letterSpacing, setLetterSpacing] = useState(0);

  /* COLUMNS */
  const [columns, setColumns] = useState(1);
  const [columnGap, setColumnGap] = useState(24);

  /* BACKGROUND */
  const [background, setBackground] = useState("None");

  /* SIGNATURE */
  const [signatureAlignment, setSignatureAlignment] = useState("Center");

  /* BRANDING */
  const [brandingEnabled, setBrandingEnabled] = useState(true); 
 

  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200">
      {/* TOP COLLAPSIBLE HEADER */}
      <button
        type="button"
        onClick={() => handleToolbarChange({
          propertyPath: "collapse.stylingLayout",
          value: !toolBar.collapse.stylingLayout
        })}
        className="flex w-full items-center justify-between border-b border-slate-100 bg-slate-50/50 px-3.5 py-3 text-left transition hover:bg-slate-50"
      >
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900">
              Advanced Styling & Layout
            </h3>
            <span className="rounded bg-violet-100 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-violet-700">
              OPTIONS
            </span>
          </div>
          <p className="mt-0.5 text-[10px] text-slate-400">
            Manage typography, columns, background, signature, and branding
          </p>
        </div>

        {/* Chevron Indicator */}
        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm transition-transform duration-200">
          <svg
            className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
              !toolBar.collapse.stylingLayout ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* COLLAPSIBLE CONTENT CONTAINER */}
      {!toolBar.collapse.stylingLayout && (
        <div className="divide-y divide-slate-100 p-3 space-y-4">
          {/* 1. FONT STYLE SUB-SECTION */}
          <div className="space-y-2.5 pt-1">
            <div>
              <h4 className="text-xs font-semibold text-slate-800">
                Font Style
              </h4>
              <p className="text-[10px] text-slate-400">
                Control your resume typography
              </p>
            </div>

            <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">
              <SelectField
                label="Font Family"
                value={setting.font.family}
                options={[
                  { label: "Rubik", value: "Rubik" },
                  { label: "Inter", value: "Inter" },
                  { label: "DM Sans", value: "DM Sans" },
                  { label: "Roboto", value: "Roboto" },
                  { label: "Poppins", value: "Poppins" },
                  { label: "Montserrat", value: "Montserrat" },
                  { label: "Roboto Slab", value: "Roboto Slab" },
                  { label: "Merriweather", value: "Merriweather" },
                  { label: "Georgia", value: "Georgia" },
                ]}
                onChange={(value) =>
                  setSetting({
                    ...setting,
                    font: {
                      ...setting.font,
                      family: value,
                    },
                  })
                }
              />

              {/* FONT PREVIEW */}
              <div className="mt-2.5 rounded-lg border border-slate-200 bg-white p-2.5">
                <div className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                  Preview
                </div>
                <p
                  className="text-sm font-medium text-slate-800"
                  style={{
                    fontFamily: setting.font.family,
                    lineHeight,
                    letterSpacing: `${letterSpacing}px`,
                  }}
                >
                  Alex Morgan — Product Designer
                </p>
                <p className="mt-0.5 text-[10px] text-slate-400">
                  Creating simple, useful and beautiful digital experiences.
                </p>
              </div>

              {/* FONT SETTINGS */}
              <div className="mt-2.5 grid grid-cols-2 gap-2">
                <div>
                  <label className="mb-1 block text-[11px] font-medium text-slate-600">
                    Font Size
                  </label>
                  <div className="grid grid-cols-3 gap-1">
                    {["Small", "Medium", "Large"].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setFontSize(size)}
                        className={`h-8 rounded-md border text-[10px] font-medium transition ${
                          fontSize === size
                            ? "border-violet-400 bg-violet-50 text-violet-700"
                            : "border-slate-200 bg-white text-slate-600"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <RangeField
                  label="Line Height"
                  value={lineHeight}
                  min={0.8}
                  max={2}
                  step={0.1}
                  displayValue={lineHeight.toFixed(1)}
                  onChange={setLineHeight}
                />

                <RangeField
                  label="Letter Spacing"
                  value={letterSpacing}
                  min={-1}
                  max={3}
                  step={0.5}
                  displayValue={`${letterSpacing}px`}
                  onChange={setLetterSpacing}
                  className="col-span-2"
                />
              </div>
            </div>
          </div>

          {/* 2. COLUMN LAYOUT SUB-SECTION */}
          <div className="space-y-2.5 pt-3">
            <div>
              <h4 className="text-xs font-semibold text-slate-800">
                Column Layout
              </h4>
              <p className="text-[10px] text-slate-400">
                Choose your resume structure
              </p>
            </div>

            <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100 space-y-2.5">
              <div className="grid grid-cols-4 gap-1.5">
                {[1, 2, 3, 4].map((column) => (
                  <button
                    key={column}
                    type="button"
                    onClick={() => setColumns(column)}
                    className={`rounded-lg border p-1.5 transition ${
                      columns === column
                        ? "border-violet-400 bg-violet-50"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="flex h-10 gap-1 rounded border border-slate-200 bg-slate-50 p-1">
                      {Array.from({ length: column }).map((_, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-sm bg-slate-200"
                        />
                      ))}
                    </div>
                    <span className="mt-1 block text-[10px] font-semibold text-slate-600 text-center">
                      {column}
                    </span>
                  </button>
                ))}
              </div>

              <RangeField
                label="Column Gap"
                value={columnGap}
                min={8}
                max={48}
                suffix="px"
                onChange={setColumnGap}
              />
            </div>
          </div>

          {/* 3. BACKGROUND SUB-SECTION */}
          <div className="space-y-2.5 pt-3">
            <div>
              <h4 className="text-xs font-semibold text-slate-800">
                Background
              </h4>
              <p className="text-[10px] text-slate-400">
                Add a subtle page background
              </p>
            </div>

            <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100 space-y-2">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { name: "None", preview: "bg-white" },
                  { name: "Soft", preview: "bg-slate-50" },
                  { name: "Image", preview: "" },
                ].map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setBackground(item.name)}
                    className={`rounded-lg border p-1.5 transition bg-white ${
                      background === item.name
                        ? "border-violet-400 bg-violet-50"
                        : "border-slate-200"
                    }`}
                  >
                    <div
                      className={`h-12 overflow-hidden rounded border border-slate-200 ${item.preview}`}
                    >
                      {item.name === "Image" && (
                        <img
                          src="https://app.enhancv.com/images/lgbtqIcon-3066830cf2e82b8397b4.png"
                          alt=""
                          className="h-full w-full object-cover opacity-70"
                        />
                      )}
                    </div>
                    <span className="mt-1 block text-[10px] font-medium text-slate-600 text-center">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="h-8 w-full rounded-md border border-dashed border-slate-300 bg-white text-[10px] font-semibold text-slate-500 transition hover:border-violet-300 hover:text-violet-600"
              >
                + Add Background
              </button>
            </div>
          </div>

          {/* 4. SIGNATURE SUB-SECTION */}
          <div className="space-y-2.5 pt-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-semibold text-slate-800">
                    Signature
                  </h4>
                  <span className="rounded bg-slate-200/60 px-1.5 py-0.5 text-[8px] font-semibold text-slate-500">
                    Optional
                  </span>
                </div>
                <p className="text-[10px] text-slate-400">Add your signature</p>
              </div>

              <button
                type="button"
                className="h-7 shrink-0 rounded-md bg-slate-900 px-2.5 text-[10px] font-semibold text-white transition hover:bg-slate-800"
              >
                + Add New
              </button>
            </div>

            <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100 space-y-2">
              <div className="flex h-14 items-center justify-center rounded-lg border border-dashed border-slate-200 bg-white">
                <span className="font-serif text-xl italic text-slate-300">
                  Your Signature
                </span>
              </div>

              <div className="grid grid-cols-3 gap-1.5">
                {["Left", "Center", "Right"].map((alignment) => (
                  <button
                    key={alignment}
                    type="button"
                    onClick={() => setSignatureAlignment(alignment)}
                    className={`h-8 rounded-md border text-[10px] font-medium transition bg-white ${
                      signatureAlignment === alignment
                        ? "border-violet-400 bg-violet-50 text-violet-700"
                        : "border-slate-200 text-slate-600"
                    }`}
                  >
                    {alignment}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 5. BRANDING SUB-SECTION */}
          <div className="space-y-2.5 pt-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h4 className="text-xs font-semibold text-slate-800">
                  Branding
                </h4>
                <p className="text-[10px] text-slate-400">
                  Show your personal brand
                </p>
              </div>
              <Toggle checked={brandingEnabled} onChange={setBrandingEnabled} />
            </div>

            {brandingEnabled && (
              <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100 space-y-2">
                <div>
                  <label className="mb-1 block text-[11px] font-medium text-slate-600">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Alex Morgan"
                    className="h-8 w-full rounded-md border border-slate-200 bg-white px-2 text-xs outline-none focus:border-violet-400"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[11px] font-medium text-slate-600">
                    Website / Portfolio
                  </label>
                  <input
                    type="text"
                    placeholder="alexmorgan.com"
                    className="h-8 w-full rounded-md border border-slate-200 bg-white px-2 text-xs outline-none focus:border-violet-400"
                  />
                </div>

                <div className="flex items-center gap-2 rounded-lg bg-white p-2 border border-slate-100">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-violet-100 text-[10px] font-bold text-violet-600">
                    A
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[10px] font-semibold text-slate-700">
                      Branding enabled
                    </p>
                    <p className="truncate text-[9px] text-slate-400">
                      Your name appears in the resume footer
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
