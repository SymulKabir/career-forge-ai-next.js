"use client";

import React from "react";
import { Eye, EyeOff } from "lucide-react";
import TypographyGroup from "../TypographyGroup";
import { useResume } from "../../../../../hooks";
import { useResumeContext } from "../../../../../context/resume-editor-context";

const Index = () => {
  const {
    handleSettingChange,
    handleToolbarChange,
  } = useResume();

  const { setting, toolBar } = useResumeContext();

  const iconSettings = setting?.sections?.icons;
  const imageSettings = setting?.sections?.image;

  /*
   * =========================================
   * TOGGLE ENABLED STATE
   * =========================================
   */

  const handleToggle = (
    propertyPath: string,
    currentValue: boolean,
  ) => {
    handleSettingChange({
      propertyPath,
      value: !currentValue,
    });
  };

  /*
   * =========================================
   * TYPOGRAPHY CARD
   * =========================================
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
        {/* =========================================
            CARD HEADER
        ========================================= */}

        <div className="mb-2.5 flex items-center justify-between">
          <div>
            <h4 className="text-xs font-bold text-slate-800">
              {title}
            </h4>

            <p className="mt-0.5 text-[10px] text-slate-400">
              {description}
            </p>
          </div>

          {/* =========================================
              ENABLE / DISABLE ICON
          ========================================= */}

          <button
            type="button"
            onClick={() =>
              handleToggle(
                `${path}.enabled`,
                enabled,
              )
            }
            className={`flex h-7 w-7 items-center justify-center rounded-md border transition-all ${
              enabled
                ? "border-violet-200 bg-violet-50 text-violet-600 hover:bg-violet-100"
                : "border-slate-200 bg-white text-slate-400 hover:bg-slate-100 hover:text-slate-500"
            }`}
            aria-label={
              enabled
                ? `Hide ${title}`
                : `Show ${title}`
            }
            title={
              enabled
                ? `Hide ${title}`
                : `Show ${title}`
            }
          >
            {enabled ? (
              <Eye size={14} />
            ) : (
              <EyeOff size={14} />
            )}
          </button>
        </div>

        {/* =========================================
            TYPOGRAPHY SETTINGS
        ========================================= */}

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

  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200">
      {/* ===================================================
          TOP COLLAPSIBLE HEADER
      =================================================== */}

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

        {/* =========================================
            PARENT COLLAPSE ICON
        ========================================= */}

        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm">
          <svg
            className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
              !toolBar.collapse.section
                ? "rotate-180"
                : ""
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
          CONTENT
      =================================================== */}

      {!toolBar.collapse.section && (
        <div className="animate-fadeIn space-y-3 p-3">
          {/* =================================================
              SECTION TITLE
          ================================================= */}

          <TypographyCard
            title="Section Title"
            description="Main section headings"
            path="sections.sectionTitle"
            config={setting?.sections?.sectionTitle}
            fontSizeMax={40}
          />

          {/* =================================================
              SUBSECTION TITLE
          ================================================= */}

          <TypographyCard
            title="Subsection Title"
            description="Secondary section headings"
            path="sections.subSectionTitle"
            config={setting?.sections?.subSectionTitle}
            fontSizeMax={24}
          />

          {/* =================================================
              ORGANIZATION TITLE
          ================================================= */}

          <TypographyCard
            title="Organization Title"
            description="Company, school or organization"
            path="sections.organizationTitle"
            config={setting?.sections?.organizationTitle}
            fontSizeMax={24}
          />

          {/* =================================================
              METADATA
          ================================================= */}

          <TypographyCard
            title="Metadata"
            description="Dates, locations and supporting details"
            path="sections.metadata"
            config={setting?.sections?.metadata}
            fontSizeMax={20}
            fontWeightMin={300}
            fontWeightMax={700}
          />

          {/* =================================================
              SECTION IMAGE
          ================================================= */}

          <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5">
            {/* =========================================
                IMAGE CARD HEADER
            ========================================= */}

            <div className="mb-3 flex items-start justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-800">
                  Section Image
                </h4>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  Customize images used throughout sections
                </p>
              </div>

              {/* =========================================
                  IMAGE VISIBILITY
              ========================================= */}

              <button
                type="button"
                onClick={() =>
                  handleSettingChange({
                    propertyPath:
                      "sections.image.enabled",
                    value:
                      !imageSettings?.enabled,
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
                {imageSettings?.enabled ? (
                  <Eye size={14} />
                ) : (
                  <EyeOff size={14} />
                )}
              </button>
            </div>

            {/* =================================================
                IMAGE CONTROLS
            ================================================= */}

            {imageSettings?.enabled && (
              <div className="space-y-3">
                {/* =========================================
                    IMAGE SIZE
                ========================================= */}

                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="text-[11px] font-medium text-slate-600">
                      Image Size
                    </label>

                    <span className="rounded bg-white px-1.5 py-0.5 text-[10px] font-semibold text-slate-500">
                      {imageSettings?.size ?? 40}px
                    </span>
                  </div>

                  <input
                    type="range"
                    min={20}
                    max={150}
                    step={1}
                    value={imageSettings?.size ?? 40}
                    onChange={(event) =>
                      handleSettingChange({
                        propertyPath:
                          "sections.image.size",
                        value: Number(
                          event.target.value,
                        ),
                      })
                    }
                    className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-violet-600"
                  />

                  <div className="mt-1 flex justify-between text-[9px] text-slate-400">
                    <span>20px</span>
                    <span>150px</span>
                  </div>
                </div>

                {/* =========================================
                    BACKGROUND COLOR
                ========================================= */}

                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-[11px] font-medium text-slate-600">
                      Background
                    </label>

                    <p className="text-[9px] text-slate-400">
                      Image background color
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={
                        imageSettings?.backgroundColor ??
                        "#f3f4f6"
                      }
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath:
                            "sections.image.backgroundColor",
                          value:
                            event.target.value,
                        })
                      }
                      className="h-8 w-8 cursor-pointer rounded border border-slate-200 bg-white p-0.5"
                    />

                    <input
                      type="text"
                      value={
                        imageSettings?.backgroundColor ??
                        "#f3f4f6"
                      }
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath:
                            "sections.image.backgroundColor",
                          value:
                            event.target.value,
                        })
                      }
                      className="h-8 w-24 rounded-md border border-slate-200 bg-white px-2 text-[10px] font-medium text-slate-600 outline-none focus:border-violet-400"
                    />
                  </div>
                </div>

                {/* =========================================
                    BORDER COLOR
                ========================================= */}

                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-[11px] font-medium text-slate-600">
                      Border Color
                    </label>

                    <p className="text-[9px] text-slate-400">
                      Image border color
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={
                        imageSettings?.borderColor ??
                        "#e5e7eb"
                      }
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath:
                            "sections.image.borderColor",
                          value:
                            event.target.value,
                        })
                      }
                      className="h-8 w-8 cursor-pointer rounded border border-slate-200 bg-white p-0.5"
                    />

                    <input
                      type="text"
                      value={
                        imageSettings?.borderColor ??
                        "#e5e7eb"
                      }
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath:
                            "sections.image.borderColor",
                          value:
                            event.target.value,
                        })
                      }
                      className="h-8 w-24 rounded-md border border-slate-200 bg-white px-2 text-[10px] font-medium text-slate-600 outline-none focus:border-violet-400"
                    />
                  </div>
                </div>

                {/* =========================================
                    BORDER WIDTH
                ========================================= */}

                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="text-[11px] font-medium text-slate-600">
                      Border Width
                    </label>

                    <span className="rounded bg-white px-1.5 py-0.5 text-[10px] font-semibold text-slate-500">
                      {imageSettings?.borderWidth ?? 1}px
                    </span>
                  </div>

                  <input
                    type="range"
                    min={0}
                    max={8}
                    step={1}
                    value={
                      imageSettings?.borderWidth ?? 1
                    }
                    onChange={(event) =>
                      handleSettingChange({
                        propertyPath:
                          "sections.image.borderWidth",
                        value: Number(
                          event.target.value,
                        ),
                      })
                    }
                    className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-violet-600"
                  />

                  <div className="mt-1 flex justify-between text-[9px] text-slate-400">
                    <span>0px</span>
                    <span>8px</span>
                  </div>
                </div>

                {/* =========================================
                    BORDER RADIUS
                ========================================= */}

                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="text-[11px] font-medium text-slate-600">
                      Border Radius
                    </label>

                    <span className="rounded bg-white px-1.5 py-0.5 text-[10px] font-semibold text-slate-500">
                      {imageSettings?.borderRadius ?? 6}px
                    </span>
                  </div>

                  <input
                    type="range"
                    min={0}
                    max={75}
                    step={1}
                    value={
                      imageSettings?.borderRadius ?? 6
                    }
                    onChange={(event) =>
                      handleSettingChange({
                        propertyPath:
                          "sections.image.borderRadius",
                        value: Number(
                          event.target.value,
                        ),
                      })
                    }
                    className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-violet-600"
                  />

                  <div className="mt-1 flex justify-between text-[9px] text-slate-400">
                    <span>0px</span>
                    <span>75px</span>
                  </div>
                </div>

                {/* =========================================
                    IMAGE PADDING
                ========================================= */}

                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="text-[11px] font-medium text-slate-600">
                      Padding
                    </label>

                    <span className="rounded bg-white px-1.5 py-0.5 text-[10px] font-semibold text-slate-500">
                      {imageSettings?.padding ?? 4}px
                    </span>
                  </div>

                  <input
                    type="range"
                    min={0}
                    max={20}
                    step={1}
                    value={
                      imageSettings?.padding ?? 4
                    }
                    onChange={(event) =>
                      handleSettingChange({
                        propertyPath:
                          "sections.image.padding",
                        value: Number(
                          event.target.value,
                        ),
                      })
                    }
                    className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-violet-600"
                  />

                  <div className="mt-1 flex justify-between text-[9px] text-slate-400">
                    <span>0px</span>
                    <span>20px</span>
                  </div>
                </div>

                {/* =========================================
                    IMAGE PREVIEW
                ========================================= */}

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
                          imageSettings?.backgroundColor ??
                          "#f3f4f6",
                        border: `${
                          imageSettings?.borderWidth ?? 1
                        }px solid ${
                          imageSettings?.borderColor ??
                          "#e5e7eb"
                        }`,
                        borderRadius: `${
                          imageSettings?.borderRadius ?? 6
                        }px`,
                      }}
                    >
                      <div className="h-full w-full rounded bg-slate-300" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* =================================================
              SECTION ICONS
          ================================================= */}

          <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5">
            {/* =========================================
                ICON CARD HEADER
            ========================================= */}

            <div className="mb-3 flex items-start justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-800">
                  Section Icons
                </h4>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  Customize icons used throughout sections
                </p>
              </div>

              {/* =========================================
                  SECTION ICONS VISIBILITY
              ========================================= */}

              <button
                type="button"
                onClick={() =>
                  handleSettingChange({
                    propertyPath:
                      "sections.icons.enabled",
                    value:
                      !iconSettings?.enabled,
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
                {iconSettings?.enabled ? (
                  <Eye size={14} />
                ) : (
                  <EyeOff size={14} />
                )}
              </button>
            </div>

            {/* =================================================
                ICON CONTROLS
            ================================================= */}

            {iconSettings?.enabled && (
              <div className="space-y-3">
                {/* =========================================
                    ICON SIZE
                ========================================= */}

                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="text-[11px] font-medium text-slate-600">
                      Icon Size
                    </label>

                    <span className="rounded bg-white px-1.5 py-0.5 text-[10px] font-semibold text-slate-500">
                      {iconSettings?.size ?? 16}px
                    </span>
                  </div>

                  <input
                    type="range"
                    min={8}
                    max={40}
                    step={1}
                    value={iconSettings?.size ?? 16}
                    onChange={(event) =>
                      handleSettingChange({
                        propertyPath:
                          "sections.icons.size",
                        value: Number(
                          event.target.value,
                        ),
                      })
                    }
                    className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-violet-600"
                  />

                  <div className="mt-1 flex justify-between text-[9px] text-slate-400">
                    <span>8px</span>
                    <span>40px</span>
                  </div>
                </div>

                {/* =========================================
                    ICON COLOR
                ========================================= */}

                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-[11px] font-medium text-slate-600">
                      Icon Color
                    </label>

                    <p className="text-[9px] text-slate-400">
                      Color of all section icons
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={
                        iconSettings?.color ??
                        "#4b5563"
                      }
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath:
                            "sections.icons.color",
                          value:
                            event.target.value,
                        })
                      }
                      className="h-8 w-8 cursor-pointer rounded border border-slate-200 bg-white p-0.5"
                    />

                    <input
                      type="text"
                      value={
                        iconSettings?.color ??
                        "#4b5563"
                      }
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath:
                            "sections.icons.color",
                          value:
                            event.target.value,
                        })
                      }
                      className="h-8 w-24 rounded-md border border-slate-200 bg-white px-2 text-[10px] font-medium text-slate-600 outline-none focus:border-violet-400"
                    />
                  </div>
                </div>

                {/* =========================================
                    BACKGROUND COLOR
                ========================================= */}

                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-[11px] font-medium text-slate-600">
                      Background
                    </label>

                    <p className="text-[9px] text-slate-400">
                      Background behind section icons
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={
                        iconSettings?.backgroundColor ??
                        "#f3f4f6"
                      }
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath:
                            "sections.icons.backgroundColor",
                          value:
                            event.target.value,
                        })
                      }
                      className="h-8 w-8 cursor-pointer rounded border border-slate-200 bg-white p-0.5"
                    />

                    <input
                      type="text"
                      value={
                        iconSettings?.backgroundColor ??
                        "#f3f4f6"
                      }
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath:
                            "sections.icons.backgroundColor",
                          value:
                            event.target.value,
                        })
                      }
                      className="h-8 w-24 rounded-md border border-slate-200 bg-white px-2 text-[10px] font-medium text-slate-600 outline-none focus:border-violet-400"
                    />
                  </div>
                </div>

                {/* =========================================
                    BORDER COLOR
                ========================================= */}

                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-[11px] font-medium text-slate-600">
                      Border Color
                    </label>

                    <p className="text-[9px] text-slate-400">
                      Icon container border
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={
                        iconSettings?.borderColor ??
                        "#e5e7eb"
                      }
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath:
                            "sections.icons.borderColor",
                          value:
                            event.target.value,
                        })
                      }
                      className="h-8 w-8 cursor-pointer rounded border border-slate-200 bg-white p-0.5"
                    />

                    <input
                      type="text"
                      value={
                        iconSettings?.borderColor ??
                        "#e5e7eb"
                      }
                      onChange={(event) =>
                        handleSettingChange({
                          propertyPath:
                            "sections.icons.borderColor",
                          value:
                            event.target.value,
                        })
                      }
                      className="h-8 w-24 rounded-md border border-slate-200 bg-white px-2 text-[10px] font-medium text-slate-600 outline-none focus:border-violet-400"
                    />
                  </div>
                </div>

                {/* =========================================
                    BORDER RADIUS
                ========================================= */}

                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="text-[11px] font-medium text-slate-600">
                      Border Radius
                    </label>

                    <span className="rounded bg-white px-1.5 py-0.5 text-[10px] font-semibold text-slate-500">
                      {iconSettings?.borderRadius ?? 6}px
                    </span>
                  </div>

                  <input
                    type="range"
                    min={0}
                    max={50}
                    step={1}
                    value={
                      iconSettings?.borderRadius ?? 6
                    }
                    onChange={(event) =>
                      handleSettingChange({
                        propertyPath:
                          "sections.icons.borderRadius",
                        value: Number(
                          event.target.value,
                        ),
                      })
                    }
                    className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-violet-600"
                  />

                  <div className="mt-1 flex justify-between text-[9px] text-slate-400">
                    <span>0px</span>
                    <span>50px</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Index;