import React, { useState } from "react";
import RangeField from "../RangeField";
import { useResume } from "../../../../../hooks";
import { useResumeContext } from "../../../../../context/resume-editor-context";
import SelectField from "../SelectField";

const Index = () => {
  const { handleSettingChange, handleToolbarChange } = useResume();
  const { setting, setSetting, toolBar } = useResumeContext(); 
  const [lineHeight, setLineHeight] = useState(1);
  const [letterSpacing, setLetterSpacing] = useState(0);

  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200">
      {/* HEADER WITH TOGGLE CONTROL */}
      <button
        type="button"
        onClick={() => handleToolbarChange({propertyPath: "collapse.marginFont", value: !toolBar.collapse.marginFont})}
        className="flex w-full items-center justify-between border-b border-slate-100 bg-slate-50/50 px-3.5 py-3 text-left transition hover:bg-slate-50"
      >
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900">Margin & Font</h3>

            <span className="rounded bg-violet-100 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-violet-700">
              PRO
            </span>
          </div>

          <p className="mt-0.5 text-[10px] text-slate-400">
            Customize your resume appearance
          </p>
        </div>

        {/* Chevron Indicator */}
        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm transition-transform duration-200">
          <svg
            className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
              !toolBar.collapse.marginFont ? "rotate-180" : ""
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
      {!toolBar.collapse.marginFont && (
        <div className="divide-y divide-slate-100 animate-fadeIn">
          {/* ===================================================
                PAGE MARGINS
            =================================================== */}

          <div className="p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-800">
                Page Margins
              </span>

              <span className="text-[10px] text-slate-400">
                {setting.margin.y} / {setting.margin.x}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">
                <RangeField
                  label="Top / Bottom"
                  value={setting.margin.y}
                  min={10}
                  max={80}
                  step={10}
                  displayValue={`${setting.margin.y}px`}
                  onChange={(value) =>
                    handleSettingChange({
                      propertyPath: "margin.y",
                      value,
                    })
                  }
                />
              </div>

              <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">
                <RangeField
                  label="Left / Right"
                  value={setting.margin.x}
                  min={10}
                  max={80}
                  step={10}
                  displayValue={`${setting.margin.x}px`}
                  onChange={(value) =>
                    handleSettingChange({
                      propertyPath: "margin.x",
                      value,
                    })
                  }
                />
              </div>
            </div>
          </div>

          {/* =====================================================
              FONT STYLE
          ===================================================== */}

          <div className="p-3">
            <div className="mb-2.5">
              <h3 className="text-xs font-semibold text-slate-800">
                Font Style
              </h3>
              <p className="text-[10px] text-slate-400">
                Control your resume typography
              </p>
            </div>

            <SelectField
              label="Font Family"
              value={setting.font?.family || "Inter"}
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
            <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-2.5 shadow-inner">
              <div className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                Preview
              </div>

              <p
                className="text-sm font-medium text-slate-800"
                style={{
                  fontFamily: setting.font?.family,
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
          </div>
        </div>
      )}
    </section>
  );
};

Index.displayName = "DesignFontSection";

export default Index;
