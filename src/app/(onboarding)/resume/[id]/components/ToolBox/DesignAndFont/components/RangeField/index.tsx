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

const Index = ({
  label,
  value,
  min,
  max,
  step = 1,
  suffix = "",
  displayValue,
  onChange,
  className = "",
}: RangeFieldProps) => {
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
};

export default Index;
