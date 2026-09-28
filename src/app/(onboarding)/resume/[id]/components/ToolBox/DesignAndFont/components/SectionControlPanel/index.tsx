"use client";

import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import TypographyGroup from "../TypographyGroup";
import { useResume } from "../../../../../hooks";
import { useResumeContext } from "../../../../../context/resume-editor-context";

const Index = () => {
  const { handleSettingChange, handleToolbarChange } = useResume();
  const { setting, toolBar } = useResumeContext();

  const sections = Array.isArray(setting?.sections) ? setting.sections : [];
 
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);

  useEffect(() => {
    if (sections.length === 0) {
      setSelectedSectionIndex(0);
      return;
    }

    if (selectedSectionIndex >= sections.length) {
      setSelectedSectionIndex(sections.length - 1);
    }
  }, [sections.length, selectedSectionIndex]);


  const selectedSection = sections[selectedSectionIndex] ?? null;

  const sectionPath = (property: string) =>
    `sections.${selectedSectionIndex}.${property}`;


  const handleToggle = (propertyPath: string, currentValue: boolean) => {
    handleSettingChange({
      propertyPath,
      value: !currentValue,
    });
  };

  /**
   * ============================================================
   * TYPOGRAPHY CARD
   * ============================================================
   */

  const TypographyCard = ({
    title,
    description,
    path,
    config,
    fontSizeMax,
    fontWeightMin,
    fontWeightMax,
  }: {
    title: string;
    description: string;
    path: string;
    config: any;
    fontSizeMax: number;
    fontWeightMin?: number;
    fontWeightMax?: number;
  }) => {
    const enabled = config?.enabled ?? true;

    return (
      <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5">
        <div className="mb-2.5 flex items-center justify-between">
          <div>
            <h4 className="text-xs font-bold text-slate-800">{title}</h4>

            <p className="mt-0.5 text-[10px] text-slate-400">{description}</p>
          </div>

          <button
            type="button"
            onClick={() => handleToggle(`${path}.enabled`, enabled)}
            className={`flex h-7 w-7 items-center justify-center rounded-md border transition-all ${
              enabled
                ? "border-violet-200 bg-violet-50 text-violet-600 hover:bg-violet-100"
                : "border-slate-200 bg-white text-slate-400 hover:bg-slate-100 hover:text-slate-500"
            }`}
            aria-label={enabled ? `Hide ${title}` : `Show ${title}`}
            title={enabled ? `Hide ${title}` : `Show ${title}`}
          >
            {enabled ? <Eye size={14} /> : <EyeOff size={14} />}
          </button>
        </div>

        {enabled && (
          <TypographyGroup
            title=""
            description=""
            path={path}
            config={config}
            handleSettingChange={handleSettingChange}
            fontSizeMax={fontSizeMax}
            fontWeightMin={fontWeightMin}
            fontWeightMax={fontWeightMax}
          />
        )}
      </div>
    );
  };

  /**
   * ============================================================
   * COLOR CONTROL
   * ============================================================
   */

  const ColorControl = ({
    label,
    description,
    value,
    path,
    fallback,
  }: {
    label: string;
    description: string;
    value?: string;
    path: string;
    fallback: string;
  }) => {
    const color = value ?? fallback;

    return (
      <div className="flex items-center justify-between">
        <div>
          <label className="text-[11px] font-medium text-slate-600">
            {label}
          </label>

          <p className="text-[9px] text-slate-400">{description}</p>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="color"
            value={color}
            onChange={(event) =>
              handleSettingChange({
                propertyPath: path,
                value: event.target.value,
              })
            }
            className="h-8 w-8 cursor-pointer rounded border border-slate-200 bg-white p-0.5"
          />

          <input
            type="text"
            value={color}
            onChange={(event) =>
              handleSettingChange({
                propertyPath: path,
                value: event.target.value,
              })
            }
            className="h-8 w-24 rounded-md border border-slate-200 bg-white px-2 text-[10px] font-medium text-slate-600 outline-none focus:border-violet-400"
          />
        </div>
      </div>
    );
  };

  /**
   * ============================================================
   * RANGE CONTROL
   * ============================================================
   */

  const RangeControl = ({
    label,
    value,
    min,
    max,
    path,
    suffix = "px",
  }: {
    label: string;
    value?: number;
    min: number;
    max: number;
    path: string;
    suffix?: string;
  }) => {
    const currentValue = value ?? min;

    return (
      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label className="text-[11px] font-medium text-slate-600">
            {label}
          </label>

          <span className="rounded bg-white px-1.5 py-0.5 text-[10px] font-semibold text-slate-500">
            {currentValue}
            {suffix}
          </span>
        </div>

        <input
          type="range"
          min={min}
          max={max}
          step={1}
          value={currentValue}
          onChange={(event) =>
            handleSettingChange({
              propertyPath: path,
              value: Number(event.target.value),
            })
          }
          className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-violet-600"
        />

        <div className="mt-1 flex justify-between text-[9px] text-slate-400">
          <span>
            {min}
            {suffix}
          </span>

          <span>
            {max}
            {suffix}
          </span>
        </div>
      </div>
    );
  };

  /**
   * ============================================================
   * SECTION IMAGE CONTROLS
   * ============================================================
   */

  const renderImageControls = () => {
    const imageSettings = selectedSection?.image;

    if (!imageSettings) {
      return null;
    }

    return (
      <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5">
        <div className="mb-3 flex items-start justify-between">
          <div>
            <h4 className="text-xs font-bold text-slate-800">Section Image</h4>

            <p className="mt-0.5 text-[10px] text-slate-400">
              Customize images used throughout this section
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              handleSettingChange({
                propertyPath: sectionPath("image.enabled"),
                value: !imageSettings?.enabled,
              })
            }
            className={`flex h-7 w-7 items-center justify-center rounded-md border transition-all ${
              imageSettings?.enabled
                ? "border-violet-200 bg-violet-50 text-violet-600 hover:bg-violet-100"
                : "border-slate-200 bg-white text-slate-400 hover:bg-slate-100 hover:text-slate-500"
            }`}
            aria-label={
              imageSettings?.enabled
                ? "Hide Section Image"
                : "Show Section Image"
            }
            title={
              imageSettings?.enabled
                ? "Hide Section Image"
                : "Show Section Image"
            }
          >
            {imageSettings?.enabled ? <Eye size={14} /> : <EyeOff size={14} />}
          </button>
        </div>

        {imageSettings?.enabled && (
          <div className="space-y-3">
            <RangeControl
              label="Image Size"
              value={imageSettings?.size}
              min={20}
              max={150}
              path={sectionPath("image.size")}
            />

            <ColorControl
              label="Background"
              description="Image background color"
              value={imageSettings?.backgroundColor}
              fallback="#f3f4f6"
              path={sectionPath("image.backgroundColor")}
            />

            <ColorControl
              label="Border Color"
              description="Image border color"
              value={imageSettings?.borderColor}
              fallback="#e5e7eb"
              path={sectionPath("image.borderColor")}
            />

            <RangeControl
              label="Border Width"
              value={imageSettings?.borderWidth}
              min={0}
              max={8}
              path={sectionPath("image.borderWidth")}
            />

            <RangeControl
              label="Border Radius"
              value={imageSettings?.borderRadius}
              min={0}
              max={75}
              path={sectionPath("image.borderRadius")}
            />

            <RangeControl
              label="Padding"
              value={imageSettings?.padding}
              min={0}
              max={20}
              path={sectionPath("image.padding")}
            />

            {/* IMAGE PREVIEW */}
            <div className="rounded-md bg-slate-100 p-3">
              <div className="mb-2 text-[9px] font-medium uppercase tracking-wide text-slate-400">
                Preview
              </div>

              <div className="flex items-center justify-center">
                <div
                  className="flex items-center justify-center overflow-hidden"
                  style={{
                    width: `${imageSettings?.size ?? 40}px`,
                    height: `${imageSettings?.size ?? 40}px`,
                    padding: `${imageSettings?.padding ?? 4}px`,
                    backgroundColor:
                      imageSettings?.backgroundColor ?? "#f3f4f6",
                    border: `${imageSettings?.borderWidth ?? 1}px solid ${
                      imageSettings?.borderColor ?? "#e5e7eb"
                    }`,
                    borderRadius: `${imageSettings?.borderRadius ?? 6}px`,
                  }}
                >
                  <div className="h-full w-full rounded bg-slate-300" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  /**
   * ============================================================
   * SECTION ICON CONTROLS
   * ============================================================
   */

  const renderIconControls = () => {
    const iconSettings = selectedSection?.icons;

    if (!iconSettings) {
      return null;
    }

    return (
      <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5">
        <div className="mb-3 flex items-start justify-between">
          <div>
            <h4 className="text-xs font-bold text-slate-800">Section Icons</h4>

            <p className="mt-0.5 text-[10px] text-slate-400">
              Customize icons used throughout this section
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              handleSettingChange({
                propertyPath: sectionPath("icons.enabled"),
                value: !iconSettings?.enabled,
              })
            }
            className={`flex h-7 w-7 items-center justify-center rounded-md border transition-all ${
              iconSettings?.enabled
                ? "border-violet-200 bg-violet-50 text-violet-600 hover:bg-violet-100"
                : "border-slate-200 bg-white text-slate-400 hover:bg-slate-100 hover:text-slate-500"
            }`}
            aria-label={
              iconSettings?.enabled
                ? "Hide Section Icons"
                : "Show Section Icons"
            }
            title={
              iconSettings?.enabled
                ? "Hide Section Icons"
                : "Show Section Icons"
            }
          >
            {iconSettings?.enabled ? <Eye size={14} /> : <EyeOff size={14} />}
          </button>
        </div>

        {iconSettings?.enabled && (
          <div className="space-y-3">
            <RangeControl
              label="Icon Size"
              value={iconSettings?.size}
              min={8}
              max={40}
              path={sectionPath("icons.size")}
            />

            <ColorControl
              label="Icon Color"
              description="Color of section icons"
              value={iconSettings?.color}
              fallback="#4b5563"
              path={sectionPath("icons.color")}
            />

            <ColorControl
              label="Background"
              description="Background behind section icons"
              value={iconSettings?.backgroundColor}
              fallback="#f3f4f6"
              path={sectionPath("icons.backgroundColor")}
            />

            <ColorControl
              label="Border Color"
              description="Icon container border"
              value={iconSettings?.borderColor}
              fallback="#e5e7eb"
              path={sectionPath("icons.borderColor")}
            />

            <RangeControl
              label="Border Radius"
              value={iconSettings?.borderRadius}
              min={0}
              max={50}
              path={sectionPath("icons.borderRadius")}
            />
          </div>
        )}
      </div>
    );
  };

  /**
   * ============================================================
   * NO SECTIONS
   * ============================================================
   */

  if (sections.length === 0) {
    return (
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <button
          type="button"
          onClick={() =>
            handleToolbarChange({
              propertyPath: "collapse.section",
              value: !toolBar.collapse.section,
            })
          }
          className="flex w-full items-center justify-between border-b border-slate-100 bg-slate-50/50 px-3.5 py-3 text-left transition hover:bg-slate-50"
        >
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-slate-900">
                Section Customization
              </h3>

              <span className="rounded bg-violet-100 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-violet-700">
                PRO
              </span>
            </div>

            <p className="mt-0.5 text-[10px] text-slate-400">
              Customize your resume section appearance
            </p>
          </div>

          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm">
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

        {!toolBar.collapse.section && (
          <div className="p-4 text-center text-xs text-slate-400">
            No sections available.
          </div>
        )}
      </section>
    );
  }

  /**
   * ============================================================
   * MAIN UI
   * ============================================================
   */

  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200">
      {/* ========================================================
          TOP COLLAPSIBLE HEADER
      ======================================================== */}

      <button
        type="button"
        onClick={() =>
          handleToolbarChange({
            propertyPath: "collapse.section",
            value: !toolBar.collapse.section,
          })
        }
        className="flex w-full items-center justify-between border-b border-slate-100 bg-slate-50/50 px-3.5 py-3 text-left transition hover:bg-slate-50"
      >
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900">
              Section Customization
            </h3>

            <span className="rounded bg-violet-100 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-violet-700">
              PRO
            </span>
          </div>

          <p className="mt-0.5 text-[10px] text-slate-400">
            Customize your resume section appearance
          </p>
        </div>

        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm">
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

      {/* ========================================================
          CONTENT
      ======================================================== */}

      {!toolBar.collapse.section && (
        <div className="animate-fadeIn space-y-3 p-3">
          {/* ====================================================
              SECTION SELECTOR
          ==================================================== */}

          <div className="rounded-lg border border-violet-100 bg-violet-50/50 p-2.5">
            <div className="mb-2">
              <h4 className="text-xs font-bold text-slate-800">
                Select Section
              </h4>

              <p className="mt-0.5 text-[10px] text-slate-400">
                Select a section to customize its appearance
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {sections.map((_, index) => {
                const isSelected = selectedSectionIndex === index;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedSectionIndex(index)}
                    className={`rounded-md border px-3 py-2 text-left transition-all ${
                      isSelected
                        ? "border-violet-300 bg-violet-100 text-violet-700 shadow-sm"
                        : "border-slate-200 bg-white text-slate-600 hover:border-violet-200 hover:bg-violet-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold">
                        Section {index + 1}
                      </span>

                      {isSelected && (
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ====================================================
              SELECTED SECTION INDICATOR
          ==================================================== */}

          <div className="flex items-center justify-between rounded-md bg-slate-50 px-2.5 py-2">
            <span className="text-[10px] font-medium text-slate-500">
              Editing
            </span>

            <span className="rounded bg-violet-100 px-2 py-0.5 text-[10px] font-bold text-violet-700">
              Section {selectedSectionIndex + 1}
            </span>
          </div>

          {/* ====================================================
              SECTION TITLE
          ==================================================== */}

          <TypographyCard
            title="Section Title"
            description="Main section headings"
            path={sectionPath("sectionTitle")}
            config={selectedSection?.sectionTitle}
            fontSizeMax={40}
          />

          {/* ====================================================
              SUBSECTION TITLE
          ==================================================== */}

          <TypographyCard
            title="Subsection Title"
            description="Secondary section headings"
            path={sectionPath("subSectionTitle")}
            config={selectedSection?.subSectionTitle}
            fontSizeMax={24}
          />

          {/* ====================================================
              ORGANIZATION TITLE
          ==================================================== */}

          <TypographyCard
            title="Organization Title"
            description="Company, school or organization"
            path={sectionPath("organizationTitle")}
            config={selectedSection?.organizationTitle}
            fontSizeMax={24}
          />

          {/* ====================================================
              METADATA
          ==================================================== */}

          <TypographyCard
            title="Metadata"
            description="Dates, locations and supporting details"
            path={sectionPath("metadata")}
            config={selectedSection?.metadata}
            fontSizeMax={20}
            fontWeightMin={300}
            fontWeightMax={700}
          />

          {/* ====================================================
              SECTION IMAGE
          ==================================================== */}

          {renderImageControls()}

          {/* ====================================================
              SECTION ICONS
          ==================================================== */}

          {renderIconControls()}
        </div>
      )}
    </section>
  );
};

export default Index;
