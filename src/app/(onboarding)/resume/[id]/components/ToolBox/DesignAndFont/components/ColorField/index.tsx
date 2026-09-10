type ColorFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const Index = ({
  label,
  value,
  onChange,
  className = "",
}: ColorFieldProps) => {
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


export default Index