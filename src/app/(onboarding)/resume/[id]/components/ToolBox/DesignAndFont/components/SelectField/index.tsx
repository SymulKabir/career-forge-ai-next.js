
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

const Index = ({
  label,
  value,
  options,
  onChange,
  className = "",
}: SelectFieldProps) => {
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


export default Index;