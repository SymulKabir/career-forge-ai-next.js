"use client";

import React, { useState } from "react";
import TypographyGroup from "../TypographyGroup";
import { useResume } from "../../../../../hooks";
import { useResumeContext } from "../../../../../context/resume-editor-context";

const Index = () => { 
  const { handleSettingChange, handleToolbarChange} = useResume();
  const { setting, toolBar } = useResumeContext();

  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200">
      {/* TOP COLLAPSIBLE HEADER */}
      <button
        type="button"
        onClick={() => handleToolbarChange({
          propertyPath: "collapse.section",
          value: !toolBar.collapse.section
        })}
        className="flex w-full items-center justify-between border-b border-slate-100 bg-slate-50/50 px-3.5 py-3 text-left transition hover:bg-slate-50"
      >
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900">Section Customization</h3>

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
              !toolBar.collapse.section ? "rotate-180" : ""
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
 
      {/* ===================================================
            SECTION TYPOGRAPHY (COLLAPSIBLE CONTENT)
        =================================================== */}

      {!toolBar.collapse.section && (
        <div className="p-3 space-y-3 animate-fadeIn">
          {/* SECTION TITLE */}
          <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">
            <TypographyGroup
              title="Section Title"
              description="Main section headings"
              path="sections.sectionTitle"
              config={setting?.sections?.sectionTitle}
              handleSettingChange={handleSettingChange}
              fontSizeMax={40}
            />
          </div>

          {/* SUBSECTION TITLE */}
          <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">
            <TypographyGroup
              title="Subsection Title"
              description="Secondary section headings"
              path="sections.subSectionTitle"
              config={setting?.sections?.subSectionTitle}
              handleSettingChange={handleSettingChange}
              fontSizeMax={24}
            />
          </div>

          {/* ORGANIZATION TITLE */}
          <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">
            <TypographyGroup
              title="Organization Title"
              description="Company, school or organization"
              path="sections.organizationTitle"
              config={setting?.sections?.organizationTitle}
              handleSettingChange={handleSettingChange}
              fontSizeMax={24}
            />
          </div>

          {/* METADATA */}
          <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">
            <TypographyGroup
              title="Metadata"
              description="Dates, locations and supporting details"
              path="sections.metadata"
              config={setting?.sections?.metadata}
              handleSettingChange={handleSettingChange}
              fontSizeMax={20}
              fontWeightMin={300}
              fontWeightMax={700}
            />
          </div>
        </div>
      )} 
    </section>
  );
};

export default Index;