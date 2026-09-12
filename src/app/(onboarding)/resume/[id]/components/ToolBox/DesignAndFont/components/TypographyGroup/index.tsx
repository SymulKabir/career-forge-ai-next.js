import Toggle from "../Toggle";
import RangeField from "../RangeField";
import SelectField from "../SelectField";
import ColorField from "../ColorField";

type SettingChange = (payload: { propertyPath: string; value: any }) => void;


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

const Index = ({
  title,
  description,
  path,
  config,
  handleSettingChange,
  fontSizeMax = 24,
  fontWeightMin = 400,
  fontWeightMax = 800,
}: TypographyGroupProps) => {
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
          </div>

          <p className="mt-0.5 truncate text-[10px] text-slate-400">
            {description}
          </p>
        </div>
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


export default Index