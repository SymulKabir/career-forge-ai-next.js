
type ToggleProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
};
const  Toggle = ({ checked, onChange }: ToggleProps) => {
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

export default Toggle