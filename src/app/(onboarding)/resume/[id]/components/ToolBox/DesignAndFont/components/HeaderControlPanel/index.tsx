"use client";

import React, { useState } from "react";
import { useResumeContext } from "@/src/app/(onboarding)/resume/[id]/context/resume-editor-context";
import { useResume } from "@/src/app/(onboarding)/resume/[id]/hooks/index";
import SelectField from "../SelectField"
import RangeField from "../RangeField"
import ColorField from "../ColorField" 

export default function HeaderControlPanel() {
  const { setting, toolBar } = useResumeContext();
  const { handleSettingChange, handleToolbarChange } = useResume(); 

  // Safely mapped to your complete header schema defaults
  const headerLayout = setting?.header?.layout || "split";
  const headerBackground = setting?.header?.background || "#FFF";
  const nameSize = setting?.header?.nameSize ?? 36;
  const nameWeight = setting?.header?.nameWeight ?? 800;
  const nameColor = setting?.header?.nameColor || "#000000";
  const titleSize = setting?.header?.titleSize ?? 20;
  const titleWeight = setting?.header?.titleWeight ?? 600;
  const titleColor = setting?.header?.titleColor || "#0084ff";
  const metaTextSize = setting?.header?.metaTextSize ?? 14;
  const metaTextColor = setting?.header?.metaTextColor || "#4b5563";
  const imageSize = setting?.header?.imageSize ?? 130;
  const imageRadius = setting?.header?.imageRadius || "50%";
  const headerGap = setting?.header?.gap ?? 20;
  const paddingBottom = setting?.header?.paddingBottom ?? 20;

  const layouts = [
    { name: "Split", value: "split", description: "Details left, Photo right" },
    { name: "Reverse", value: "reverse", description: "Photo left, Details right" },
    { name: "Center", value: "center", description: "Stacked centered layout" },
    { name: "Minimal", value: "minimal", description: "No profile image layout" },
  ];

  const radiusOptions = [
    { label: "Square (0%)", value: "0%" },
    { label: "Rounded (20%)", value: "20%" },
    { label: "Soft (50%)", value: "50%" },
    { label: "Pill / Circle", value: "9999px" },
  ];

  const weightOptions = [
    { label: "Light (300)", value: 300 },
    { label: "Regular (400)", value: 400 },
    { label: "Medium (500)", value: 500 },
    { label: "Semi Bold (600)", value: 600 },
    { label: "Bold (700)", value: 700 },
    { label: "Extra Bold (800)", value: 800 },
  ];
 

  return (
    <div id="headerControlPanel" className="space-y-2 pb-3">
      {/* HEADER & CONTAINER SECTION */}
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200">
        {/* TOP COLLAPSIBLE HEADER */}
        <button
          type="button"
          onClick={() => handleToolbarChange({
            propertyPath: "collapse.header",
            value: !toolBar.collapse.header
          })}
          className="flex w-full items-center justify-between border-b border-slate-100 bg-slate-50/50 px-3.5 py-3 text-left transition hover:bg-slate-50"
        >
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-slate-900">Header Customization</h3>
              <span className="rounded bg-violet-100 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-violet-700">
                PRO
              </span>
            </div>
            <p className="mt-0.5 text-[10px] text-slate-400">
              Manage complete header typography, colors, and layout structure
            </p>
          </div>

          {/* Chevron Indicator */}
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm transition-transform duration-200">
            <svg
              className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
                !toolBar.collapse.header ? "rotate-180" : ""
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
        {!toolBar.collapse.header && (
          <div className="divide-y divide-slate-100 animate-fadeIn">
            {/* LAYOUT SELECTOR */}
            <div className="p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-800">Header Layout</span>
                <span className="text-[10px] text-slate-400 capitalize">{headerLayout}</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {layouts.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() =>
                      handleSettingChange({ propertyPath: "header.layout", value: item.value })
                    }
                    className={`rounded-lg border p-2 text-left transition ${
                      headerLayout === item.value
                        ? "border-violet-400 bg-violet-50/60 ring-1 ring-violet-100"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <p className="truncate text-[11px] font-semibold text-slate-700">
                      {item.name}
                    </p>
                    <p className="truncate text-[9px] text-slate-400">
                      {item.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* BACKGROUND & SPACING */}
            <div className="p-3 space-y-3">
              <div className="text-xs font-semibold text-slate-800">Canvas & Container</div>

              <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">
                <ColorField
                  label="Header Background"
                  value={headerBackground}
                  onChange={(value) =>
                    handleSettingChange({ propertyPath: "header.background", value })
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">
                  <RangeField
                    label="Content Gap"
                    value={headerGap}
                    min={10}
                    max={40}
                    suffix="px"
                    onChange={(value) =>
                      handleSettingChange({ propertyPath: "header.gap", value })
                    }
                  />
                </div>

                <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">
                  <RangeField
                    label="Bottom Padding"
                    value={paddingBottom}
                    min={0}
                    max={60}
                    suffix="px"
                    onChange={(value) =>
                      handleSettingChange({ propertyPath: "header.paddingBottom", value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* NAME STYLING */}
            <div className="p-3 space-y-3">
              <div className="text-xs font-semibold text-slate-800">Name Styling</div>

              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100 flex flex-col justify-center">
                  <RangeField
                    label="Name Size"
                    value={nameSize}
                    min={20}
                    max={50}
                    suffix="px"
                    onChange={(value) =>
                      handleSettingChange({ propertyPath: "header.nameSize", value })
                    }
                  />
                </div>

                <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100 flex flex-col justify-center">
                  <SelectField
                    label="Name Weight"
                    value={nameWeight}
                    options={weightOptions}
                    onChange={(value) =>
                      handleSettingChange({ propertyPath: "header.nameWeight", value: Number(value) })
                    }
                  />
                </div>
              </div>

              <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">
                <ColorField
                  label="Name Color"
                  value={nameColor}
                  onChange={(value) =>
                    handleSettingChange({ propertyPath: "header.nameColor", value })
                  }
                />
              </div>
            </div>

            {/* TITLE STYLING */}
            <div className="p-3 space-y-3">
              <div className="text-xs font-semibold text-slate-800">Job Title Styling</div>

              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100 flex flex-col justify-center">
                  <RangeField
                    label="Title Size"
                    value={titleSize}
                    min={14}
                    max={30}
                    suffix="px"
                    onChange={(value) =>
                      handleSettingChange({ propertyPath: "header.titleSize", value })
                    }
                  />
                </div>

                <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100 flex flex-col justify-center">
                  <SelectField
                    label="Title Weight"
                    value={titleWeight}
                    options={weightOptions}
                    onChange={(value) =>
                      handleSettingChange({ propertyPath: "header.titleWeight", value: Number(value) })
                    }
                  />
                </div>
              </div>

              <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">
                <ColorField
                  label="Title Color"
                  value={titleColor}
                  onChange={(value) =>
                    handleSettingChange({ propertyPath: "header.titleColor", value })
                  }
                />
              </div>
            </div>

            {/* METADATA (CONTACT INFO) STYLING */}
            <div className="p-3 space-y-3">
              <div className="text-xs font-semibold text-slate-800">Metadata / Contact Info Styling</div>

              <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">
                <RangeField
                  label="Meta Text Size"
                  value={metaTextSize}
                  min={10}
                  max={18}
                  suffix="px"
                  onChange={(value) =>
                    handleSettingChange({ propertyPath: "header.metaTextSize", value })
                  }
                />
              </div>

              <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">
                <ColorField
                  label="Meta Text Color"
                  value={metaTextColor}
                  onChange={(value) =>
                    handleSettingChange({ propertyPath: "header.metaTextColor", value })
                  }
                />
              </div>
            </div>

            {/* PROFILE IMAGE CONFIGURATION */}
            <div className="p-3 space-y-3">
              <div className="text-xs font-semibold text-slate-800">Profile Image Customization</div>

              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100 flex flex-col justify-center">
                  <RangeField
                    label="Image Size"
                    value={imageSize}
                    min={80}
                    max={180}
                    step={5}
                    suffix="px"
                    onChange={(value) =>
                      handleSettingChange({ propertyPath: "header.imageSize", value })
                    }
                  />
                </div>

                <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100 flex flex-col justify-center">
                  <SelectField
                    label="Image Radius"
                    value={imageRadius}
                    options={radiusOptions}
                    onChange={(value) =>
                      handleSettingChange({ propertyPath: "header.imageRadius", value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </section> 
    </div>
  );
}