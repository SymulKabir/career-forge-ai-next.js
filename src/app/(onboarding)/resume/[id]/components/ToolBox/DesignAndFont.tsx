"use client";

import { useState } from "react";
import { useResumeContext } from "../../context/resume-editor-context";
import { useResume } from "../../hooks/index";

/* =========================================================
   TYPES
========================================================= */

type SettingChange = (payload: { propertyPath: string; value: any }) => void;

type RangeFieldProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  displayValue?: string;
  onChange: (value: number) => void;
  className?: string;
};

type SelectOption = {
  label: string;
  value: string | number;
};

type SelectFieldProps = {
  label: string;
  value: string | number;
  options: SelectOption[];
  onChange: (value: string) => void;
  className?: string;
};

type ColorFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

type ToggleProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
};

type TypographyConfig = {
  enabled?: boolean;
  fontSize?: number;
  fontWeight?: number;
  fontColor?: string;
  lineHeight?: number;
  letterSpacing?: number;
  textTransform?: string;
  gap?: number;
  sectionGap?: number;
};

type TypographyGroupProps = {
  title: string;
  description: string;
  path: string;
  config?: TypographyConfig;
  handleSettingChange: SettingChange;
  fontSizeMax?: number;
  fontWeightMin?: number;
  fontWeightMax?: number;
};

/* =========================================================
   TOGGLE
========================================================= */

function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      aria-pressed={checked}
      className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${
        checked ? "bg-violet-600" : "bg-slate-300"
      }`}
    >
      <span
        className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${
          checked ? "left-[18px]" : "left-0.5"
        }`}
      />
    </button>
  );
}

/* =========================================================
   RANGE FIELD
========================================================= */

function RangeField({
  label,
  value,
  min,
  max,
  step = 1,
  suffix = "",
  displayValue,
  onChange,
  className = "",
}: RangeFieldProps) {
  return (
    <div className={`min-w-0 ${className}`}>
      <div className="mb-1 flex items-center justify-between gap-2">
        <span className="truncate text-[11px] font-medium text-slate-600">
          {label}
        </span>

        <span className="shrink-0 text-[10px] font-semibold text-slate-800">
          {displayValue ?? `${value}${suffix}`}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer accent-violet-600"
      />
    </div>
  );
}

/* =========================================================
   SELECT FIELD
========================================================= */

function SelectField({
  label,
  value,
  options,
  onChange,
  className = "",
}: SelectFieldProps) {
  return (
    <div className={`min-w-0 ${className}`}>
      <label className="mb-1 block truncate text-[11px] font-medium text-slate-600">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-8 w-full rounded-md border border-slate-200 bg-white px-2 text-xs text-slate-700 outline-none transition focus:border-violet-400 focus:ring-1 focus:ring-violet-100"
      >
        {options.map((option) => (
          <option key={`${option.label}-${option.value}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

/* =========================================================
   COLOR FIELD
========================================================= */

function ColorField({
  label,
  value,
  onChange,
  className = "",
}: ColorFieldProps) {
  const safeValue = value || "#000000";

  return (
    <div className={`min-w-0 ${className}`}>
      <label className="mb-1 block text-[11px] font-medium text-slate-600">
        {label}
      </label>

      <div className="flex h-8 items-center gap-1.5">
        <input
          type="color"
          value={safeValue}
          onChange={(e) => onChange(e.target.value)}
          className="h-8 w-9 shrink-0 cursor-pointer rounded-md border border-slate-200 bg-white p-0.5"
        />

        <input
          type="text"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          className="h-8 min-w-0 flex-1 rounded-md border border-slate-200 bg-white px-2 text-xs uppercase text-slate-700 outline-none focus:border-violet-400"
        />
      </div>
    </div>
  );
}

/* =========================================================
   TYPOGRAPHY GROUP
========================================================= */

function TypographyGroup({
  title,
  description,
  path,
  config,
  handleSettingChange,
  fontSizeMax = 24,
  fontWeightMin = 400,
  fontWeightMax = 800,
}: TypographyGroupProps) {
  type BorderConfig = {
    enabled?: boolean;
    width?: number;
    style?: string;
    color?: string;
    position?: string;
    radius?: number;
    spacing?: number;
  };

  const safeConfig = {
    enabled: config?.enabled ?? false,
    fontSize: config?.fontSize ?? 16,
    fontWeight: config?.fontWeight ?? 400,
    fontColor: config?.fontColor ?? "#000000",
    lineHeight: config?.lineHeight ?? 1,
    letterSpacing: config?.letterSpacing ?? 0,
    textTransform: config?.textTransform ?? "none",
    gap: config?.gap ?? 0,
    sectionGap: config?.sectionGap ?? 0,
  };

  const safeBorder = {
    enabled: config?.border?.enabled ?? false,
    width: config?.border?.width ?? 2,
    style: config?.border?.style ?? "solid",
    color: config?.border?.color ?? "#1a202c",
    position: config?.border?.position ?? "bottom",
    radius: config?.border?.radius ?? 0,
    spacing: config?.border?.spacing ?? 6,
  };

  const change = (field: string, value: any) => {
    handleSettingChange({
      propertyPath: `${path}.${field}`,
      value,
    });
  };

  const borderChange = (field: string, value: any) => {
    handleSettingChange({
      propertyPath: `${path}.border.${field}`,
      value,
    });
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-2.5">
      {/* GROUP HEADER */}
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h4 className="truncate text-xs font-semibold text-slate-800">
              {title}
            </h4>

            {safeConfig.enabled && (
              <span className="rounded bg-violet-100 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-violet-700">
                On
              </span>
            )}
          </div>

          <p className="mt-0.5 truncate text-[10px] text-slate-400">
            {description}
          </p>
        </div>

        <Toggle
          checked={safeConfig.enabled}
          onChange={(value) => change("enabled", value)}
        />
      </div>

      {/* GROUP CONTROLS */}
      {safeConfig.enabled && (
        <div className="mt-2.5 grid grid-cols-2 gap-x-3 gap-y-2.5">
          <RangeField
            label="Font Size"
            value={safeConfig.fontSize}
            min={10}
            max={fontSizeMax}
            suffix="px"
            onChange={(value) => change("fontSize", value)}
          />

          <SelectField
            label="Weight"
            value={safeConfig.fontWeight}
            options={[
              { label: "Light", value: 300 },
              { label: "Regular", value: 400 },
              { label: "Medium", value: 500 },
              { label: "Semi Bold", value: 600 },
              { label: "Bold", value: 700 },
              { label: "Extra Bold", value: 800 },
            ].filter(
              (option) =>
                Number(option.value) >= fontWeightMin &&
                Number(option.value) <= fontWeightMax,
            )}
            onChange={(value) => change("fontWeight", Number(value))}
          />

          <ColorField
            label="Color"
            value={safeConfig.fontColor}
            onChange={(value) => change("fontColor", value)}
            className="col-span-2"
          />

          <RangeField
            label="Line Height"
            value={safeConfig.lineHeight}
            min={0.8}
            max={2}
            step={0.1}
            displayValue={safeConfig.lineHeight.toFixed(1)}
            onChange={(value) => change("lineHeight", value)}
          />

          <RangeField
            label="Letter Spacing"
            value={safeConfig.letterSpacing}
            min={-2}
            max={5}
            step={0.5}
            displayValue={`${safeConfig.letterSpacing}px`}
            onChange={(value) => change("letterSpacing", value)}
          />

          <SelectField
            label="Transform"
            value={safeConfig.textTransform}
            options={[
              { label: "None", value: "none" },
              { label: "Uppercase", value: "uppercase" },
              { label: "Lowercase", value: "lowercase" },
              { label: "Capitalize", value: "capitalize" },
            ]}
            onChange={(value) => change("textTransform", value)}
          />

          <RangeField
            label="Gap"
            value={safeConfig.gap}
            min={0}
            max={24}
            suffix="px"
            onChange={(value) => change("gap", value)}
          />

          <RangeField
            label="Section Gap"
            value={safeConfig.sectionGap}
            min={0}
            max={40}
            suffix="px"
            onChange={(value) => change("sectionGap", value)}
          />
        </div>
      )}

      {/* BORDER */}
      {path === "sections.sectionTitle" && (
        <div className="col-span-2 rounded-lg border border-slate-200 bg-white p-2.5">
          {/* Header */}
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h5 className="text-[11px] font-semibold text-slate-800">
                  Border
                </h5>

                {safeBorder.enabled && (
                  <span className="rounded bg-violet-100 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-violet-700">
                    On
                  </span>
                )}
              </div>

              <p className="mt-0.5 text-[9px] text-slate-400">
                Style the section title divider
              </p>
            </div>

            <Toggle
              checked={safeBorder.enabled}
              onChange={(value) => borderChange("enabled", value)}
            />
          </div>

          {/* Controls */}
          {safeBorder.enabled && (
            <div className="mt-2.5 grid grid-cols-2 gap-x-3 gap-y-2.5">
              {/* Position */}
              <SelectField
                label="Position"
                value={safeBorder.position}
                options={[
                  { label: "Bottom", value: "bottom" },
                  { label: "Top", value: "top" },
                  { label: "Top + Bottom", value: "both" },
                ]}
                onChange={(value) => borderChange("position", value)}
              />

              {/* Style */}
              <SelectField
                label="Style"
                value={safeBorder.style}
                options={[
                  { label: "Solid", value: "solid" },
                  { label: "Dashed", value: "dashed" },
                  { label: "Dotted", value: "dotted" },
                  { label: "Double", value: "double" },
                ]}
                onChange={(value) => borderChange("style", value)}
              />

              {/* Width */}
              <RangeField
                label="Width"
                value={safeBorder.width}
                min={1}
                max={6}
                step={1}
                suffix="px"
                onChange={(value) => borderChange("width", value)}
              />

              {/* Radius */}
              <RangeField
                label="Radius"
                value={safeBorder.radius}
                min={0}
                max={12}
                step={1}
                suffix="px"
                onChange={(value) => borderChange("radius", value)}
              />

              {/* Spacing */}
              <RangeField
                label="Title Spacing"
                value={safeBorder.spacing}
                min={0}
                max={20}
                step={1}
                suffix="px"
                onChange={(value) => borderChange("spacing", value)}
              />

              {/* Color */}
              <ColorField
                label="Color"
                value={safeBorder.color}
                onChange={(value) => borderChange("color", value)}
              />

              {/* Preview */}
              <div className="col-span-2 mt-0.5 rounded-md bg-slate-50 px-2.5 py-2">
                <div
                  className="text-[11px] font-bold uppercase"
                  style={{
                    color: safeConfig.fontColor,
                    borderTop:
                      safeBorder.position === "top" ||
                      safeBorder.position === "both"
                        ? `${safeBorder.width}px ${safeBorder.style} ${safeBorder.color}`
                        : undefined,
                    borderBottom:
                      safeBorder.position === "bottom" ||
                      safeBorder.position === "both"
                        ? `${safeBorder.width}px ${safeBorder.style} ${safeBorder.color}`
                        : undefined,
                    borderRadius: `${safeBorder.radius}px`,
                    paddingTop:
                      safeBorder.position === "top" ||
                      safeBorder.position === "both"
                        ? `${safeBorder.spacing}px`
                        : undefined,
                    paddingBottom:
                      safeBorder.position === "bottom" ||
                      safeBorder.position === "both"
                        ? `${safeBorder.spacing}px`
                        : undefined,
                  }}
                >
                  Experience
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* =========================================================
   MAIN DESIGN & FONT PANEL
========================================================= */

export default function DesignFontPanel() {
  /* QUICK STYLE */
  const [quickStyle, setQuickStyle] = useState("Minimal");

  /* PAGE MARGINS */
  const [pageMargins, setPageMargins] = useState(1);

  /* SECTION SPACING */
  const [sectionSpacing, setSectionSpacing] = useState(2);

  /* RADIUS */
  const [radius, setRadius] = useState("Soft");

  /* RESUME CONTEXT */
  const { setting, setSetting } = useResumeContext();
  const { handleSettingChange } = useResume();

  /* COLORS */
  const [color, setColor] = useState("#7C3AED");
  const [customColor, setCustomColor] = useState("#7C3AED");

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

  /* =========================================================
     RESET DESIGN
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

  /* =========================================================
     OPTIONS
  ========================================================= */

  const colors = [
    "#7C3AED",
    "#2563EB",
    "#0891B2",
    "#059669",
    "#DC2626",
    "#EA580C",
    "#0F172A",
  ];

  const quickStyles = [
    {
      name: "Minimal",
      description: "Clean & simple",
      preview: "bg-white",
    },
    {
      name: "Professional",
      description: "Classic & polished",
      preview: "bg-slate-50",
    },
    {
      name: "Creative",
      description: "Bold & modern",
      preview: "bg-violet-50",
    },
  ];

  const radiusOptions = ["Sharp", "Soft", "Round", "Pill"];

  console.log("setting ---->>>>", setting);

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div id="designFontPanel" className="space-y-2 pb-3">
      {/* =====================================================
          DESIGN & FONT
      ===================================================== */}

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {/* HEADER */}

        <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2.5">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-slate-900">
                Design & Font
              </h3>

              <span className="rounded bg-violet-100 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-violet-700">
                PRO
              </span>
            </div>

            <p className="mt-0.5 text-[10px] text-slate-400">
              Customize your resume appearance
            </p>
          </div>
        </div>

        {/* ===================================================
            QUICK STYLE
        =================================================== */}

        <div className="border-b border-slate-100 p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-800">
              Quick Style
            </span>

            <span className="text-[10px] text-slate-400">{quickStyle}</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {quickStyles.map((style) => (
              <button
                key={style.name}
                type="button"
                onClick={() => setQuickStyle(style.name)}
                className={`rounded-lg border p-1.5 text-left transition ${
                  quickStyle === style.name
                    ? "border-violet-400 bg-violet-50 ring-1 ring-violet-100"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div
                  className={`mb-1.5 h-9 rounded border border-slate-200 ${style.preview}`}
                >
                  <div className="space-y-1 p-1.5">
                    <div className="h-1 w-1/2 rounded bg-slate-400" />
                    <div className="h-0.5 w-3/4 rounded bg-slate-200" />
                    <div className="h-0.5 w-full rounded bg-slate-200" />
                    <div className="h-0.5 w-2/3 rounded bg-slate-200" />
                  </div>
                </div>

                <p className="truncate text-[10px] font-semibold text-slate-700">
                  {style.name}
                </p>

                <p className="truncate text-[8px] text-slate-400">
                  {style.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* ===================================================
            PAGE MARGINS
        =================================================== */}

        <div className="border-b border-slate-100 p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-800">
              Page Margins
            </span>

            <span className="text-[10px] text-slate-400">
              {setting.margin.y} / {setting.margin.x}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-slate-50 p-2.5">
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

            <div className="rounded-lg bg-slate-50 p-2.5">
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

        {/* ===================================================
            SECTION TYPOGRAPHY
        =================================================== */}

        <div className="border-b border-slate-100">
          <div className="px-3 pb-2 pt-3">
            <h4 className="text-xs font-bold text-slate-800">
              Section Typography
            </h4>

            <p className="mt-0.5 text-[10px] text-slate-400">
              Fine-tune every section independently
            </p>
          </div>

          <div className="space-y-2 px-3 pb-3">
            {/* SECTION TITLE */}

            <TypographyGroup
              title="Section Title"
              description="Main section headings"
              path="sections.sectionTitle"
              config={setting?.sections?.sectionTitle}
              handleSettingChange={handleSettingChange}
              fontSizeMax={40}
            />

            {/* SUBSECTION TITLE */}

            <TypographyGroup
              title="Subsection Title"
              description="Secondary section headings"
              path="sections.subSectionTitle"
              config={setting?.sections?.subSectionTitle}
              handleSettingChange={handleSettingChange}
              fontSizeMax={24}
            />

            {/* ORGANIZATION TITLE */}

            <TypographyGroup
              title="Organization Title"
              description="Company, school or organization"
              path="sections.organizationTitle"
              config={setting?.sections?.organizationTitle}
              handleSettingChange={handleSettingChange}
              fontSizeMax={24}
            />

            {/* METADATA */}

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

        {/* ===================================================
            SECTION SPACING
        =================================================== */}

        <div className="border-b border-slate-100 p-3">
          <RangeField
            label="Section Spacing"
            value={setting.sectionGap}
            min={0}
            max={80}
            step={5}
            suffix="px"
            onChange={(value) =>
              handleSettingChange({
                propertyPath: "sectionGap",
                value,
              })
            }
          />
        </div>

        {/* ===================================================
            CORNER STYLE
        =================================================== */}

        <div className="p-3">
          <div className="mb-2 text-xs font-semibold text-slate-800">
            Corner Style
          </div>

          <div className="grid grid-cols-4 gap-1.5">
            {radiusOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setRadius(option)}
                className={`h-8 rounded-md border text-[10px] font-medium transition ${
                  radius === option
                    ? "border-violet-400 bg-violet-50 text-violet-700"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COLORS
      ===================================================== */}

      <section className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
        <div className="mb-2.5 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Colors</h3>

            <p className="text-[10px] text-slate-400">
              Choose your accent color
            </p>
          </div>

          <span
            className="h-5 w-5 rounded-full border border-white shadow-sm ring-1 ring-slate-200"
            style={{ backgroundColor: color }}
          />
        </div>

        <div className="grid grid-cols-7 gap-1.5">
          {colors.map((item) => (
            <button
              key={item}
              type="button"
              aria-label={`Select ${item}`}
              onClick={() => {
                setColor(item);
                setCustomColor(item);
              }}
              className={`flex h-8 items-center justify-center rounded-md border transition ${
                color === item
                  ? "border-slate-900 ring-1 ring-slate-900"
                  : "border-transparent"
              }`}
            >
              <span
                className="h-5 w-5 rounded-full shadow-sm"
                style={{ backgroundColor: item }}
              />
            </button>
          ))}
        </div>

        <div className="mt-2.5 flex items-center gap-2 rounded-lg bg-slate-50 p-2">
          <input
            type="color"
            value={customColor}
            onChange={(e) => {
              setCustomColor(e.target.value);
              setColor(e.target.value);
            }}
            className="h-8 w-9 shrink-0 cursor-pointer rounded-md border border-slate-200 bg-white p-0.5"
          />

          <input
            type="text"
            value={customColor}
            onChange={(e) => {
              setCustomColor(e.target.value);
              setColor(e.target.value);
            }}
            className="h-8 min-w-0 flex-1 rounded-md border border-slate-200 bg-white px-2 text-xs uppercase outline-none focus:border-violet-400"
          />
        </div>
      </section>

      {/* =====================================================
          FONT STYLE
      ===================================================== */}

      <section className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
        <div className="mb-2.5">
          <h3 className="text-sm font-bold text-slate-900">Font Style</h3>

          <p className="text-[10px] text-slate-400">
            Control your resume typography
          </p>
        </div>

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

        <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-2.5">
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
                      : "border-slate-200 text-slate-600"
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
      </section>

      {/* =====================================================
          COLUMN LAYOUT
      ===================================================== */}

      <section className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
        <div className="mb-2.5">
          <h3 className="text-sm font-bold text-slate-900">Column Layout</h3>

          <p className="text-[10px] text-slate-400">
            Choose your resume structure
          </p>
        </div>

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
                  <div key={index} className="flex-1 rounded-sm bg-slate-200" />
                ))}
              </div>

              <span className="mt-1 block text-[10px] font-semibold text-slate-600">
                {column}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-2.5">
          <RangeField
            label="Column Gap"
            value={columnGap}
            min={8}
            max={48}
            suffix="px"
            onChange={setColumnGap}
          />
        </div>
      </section>

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <section className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
        <div className="mb-2.5">
          <h3 className="text-sm font-bold text-slate-900">Background</h3>

          <p className="text-[10px] text-slate-400">
            Add a subtle page background
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            {
              name: "None",
              preview: "bg-white",
            },
            {
              name: "Soft",
              preview: "bg-slate-50",
            },
            {
              name: "Image",
              preview: "",
            },
          ].map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setBackground(item.name)}
              className={`rounded-lg border p-1.5 transition ${
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

              <span className="mt-1 block text-[10px] font-medium text-slate-600">
                {item.name}
              </span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="mt-2 h-8 w-full rounded-md border border-dashed border-slate-300 text-[10px] font-semibold text-slate-500 transition hover:border-violet-300 hover:text-violet-600"
        >
          + Add Background
        </button>
      </section>

      {/* =====================================================
          SIGNATURE
      ===================================================== */}

      <section className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
        <div className="mb-2.5 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-slate-900">Signature</h3>

              <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[8px] font-semibold text-slate-500">
                Optional
              </span>
            </div>

            <p className="text-[10px] text-slate-400">Add your signature</p>
          </div>

          <button
            type="button"
            className="h-8 shrink-0 rounded-md bg-slate-900 px-3 text-[10px] font-semibold text-white"
          >
            + Add New
          </button>
        </div>

        <div className="flex h-14 items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50">
          <span className="font-serif text-xl italic text-slate-300">
            Your Signature
          </span>
        </div>

        <div className="mt-2 grid grid-cols-3 gap-1.5">
          {["Left", "Center", "Right"].map((alignment) => (
            <button
              key={alignment}
              type="button"
              onClick={() => setSignatureAlignment(alignment)}
              className={`h-8 rounded-md border text-[10px] font-medium transition ${
                signatureAlignment === alignment
                  ? "border-violet-400 bg-violet-50 text-violet-700"
                  : "border-slate-200 text-slate-600"
              }`}
            >
              {alignment}
            </button>
          ))}
        </div>
      </section>

      {/* =====================================================
          BRANDING
      ===================================================== */}

      <section className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
        <div className="mb-2.5 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-slate-900">Branding</h3>

            <p className="text-[10px] text-slate-400">
              Show your personal brand
            </p>
          </div>

          <Toggle checked={brandingEnabled} onChange={setBrandingEnabled} />
        </div>

        {brandingEnabled && (
          <div className="space-y-2">
            <div>
              <label className="mb-1 block text-[11px] font-medium text-slate-600">
                Brand Name
              </label>

              <input
                type="text"
                defaultValue="Alex Morgan"
                className="h-8 w-full rounded-md border border-slate-200 px-2 text-xs outline-none focus:border-violet-400"
              />
            </div>

            <div>
              <label className="mb-1 block text-[11px] font-medium text-slate-600">
                Website / Portfolio
              </label>

              <input
                type="text"
                placeholder="alexmorgan.com"
                className="h-8 w-full rounded-md border border-slate-200 px-2 text-xs outline-none focus:border-violet-400"
              />
            </div>

            <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-2">
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
      </section>

      {/* =====================================================
          ACTIONS
      ===================================================== */}

      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={resetDesign}
          className="h-9 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
        >
          Reset Design
        </button>

        <button
          type="button"
          className="h-9 rounded-lg bg-violet-600 text-xs font-semibold text-white shadow-sm transition hover:bg-violet-700"
        >
          Save Style
        </button>
      </div>
    </div>
  );
}
