"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

import { Calendar, ChevronDown, X, Check, Clock3 } from "lucide-react";
import { useResume } from "../../../../hooks";
import { getResumeFormat } from "../../../../utils/resume";

interface DatePickerProps {
  valuePath: string;
  placeholderPath?: string;
  allowPresent?: boolean;
  disabled?: boolean;
}

interface DateValue {
  month: string;
  year: number;
}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const currentYear = new Date().getFullYear();

const years = Array.from(
  { length: 61 },
  (_, index) => currentYear - 50 + index,
);

const parseDate = (value?: string): DateValue | null => {
  if (!value) return null;

  const normalized = value.trim();

  if (!normalized || normalized.toLowerCase() === "present") {
    return null;
  }

  const parts = normalized.split(/\s+/);

  const month = months.includes(parts[0]) ? parts[0] : null;

  const year = Number(parts[1]);

  if (!month || Number.isNaN(year)) {
    return null;
  }

  return {
    month,
    year,
  };
};

const DatePicker: React.FC<DatePickerProps> = ({
  valuePath,
  placeholderPath,
  allowPresent = false,
  disabled = false,
}) => {
  const { getResumeValue, updateResume } = useResume();
  const [isOpen, setIsOpen] = useState(false);

  const value = getResumeValue(valuePath);
  const placeholder = getResumeFormat(placeholderPath) || "Select date";

  const parsedValue = useMemo(() => parseDate(value), [value]);

  const [selectedMonth, setSelectedMonth] = useState<string>(
    parsedValue?.month || "Jan",
  );

  const [selectedYear, setSelectedYear] = useState<number>(
    parsedValue?.year || currentYear,
  );

  const [isPresent, setIsPresent] = useState(
    value.trim().toLowerCase() === "present",
  );

  const selectedYearRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const parsed = parseDate(value);

    if (value.trim().toLowerCase() === "present") {
      setIsPresent(true);
      return;
    }

    setIsPresent(false);

    if (parsed) {
      setSelectedMonth(parsed.month);
      setSelectedYear(parsed.year);
    }
  }, [value]);

  useEffect(() => {
    if (!isOpen || isPresent) return;

    const timer = window.setTimeout(() => {
      selectedYearRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 50);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isOpen, selectedYear, isPresent]);
  const onChange = (value: string) => {
    updateResume({ propertyPath: valuePath, value });
  };
  const displayValue = () => {
    if (isPresent) {
      return "Present";
    }

    if (parsedValue) {
      return `${parsedValue.month} ${parsedValue.year}`;
    }

    return placeholder;
  };

  /*
   * Open
   */
  const handleOpen = () => {
    if (disabled) return;

    const parsed = parseDate(value);

    if (value.trim().toLowerCase() === "present") {
      setIsPresent(true);
    } else if (parsed) {
      setSelectedMonth(parsed.month);
      setSelectedYear(parsed.year);
      setIsPresent(false);
    } else {
      setSelectedMonth("Jan");
      setSelectedYear(currentYear);
      setIsPresent(false);
    }

    setIsOpen(true);
  };

  /*
   * Month
   */
  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
    setIsPresent(false);

    onChange(`${month} ${selectedYear}`);
  };

  /*
   * Year
   */
  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    setIsPresent(false);

    onChange(`${selectedMonth} ${year}`);
  };

  /*
   * Present
   */
  const handlePresent = () => {
    if (!allowPresent) return;

    setIsPresent(true);

    onChange(value === "Present" ? "" : "Present");
  };

  /*
   * Clear
   */
  const handleClear = () => {
    setIsPresent(false);
    onChange("");
  };

  /*
   * Close
   */
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* =====================================================
          INPUT
      ====================================================== */}

      <div className="relative w-full">
        <button
          type="button"
          disabled={disabled}
          onClick={handleOpen}
          className={[
            "group flex min-h-[max-content] w-full",
            "items-center gap-1",
            "text-left",
            "bg-transparent",

            disabled
              ? "cursor-not-allowed border-slate-200 opacity-50"
              : "cursor-pointer border-slate-200 hover:border-sky-200 hover:shadow-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/10",
          ].join(" ")}
        >
          {/* Icon */}

          <div
            className="
              flex shrink-0
              items-center justify-center   
            "
          >
            <Calendar size={13} strokeWidth={2} />
          </div>

          {/* Value */}

          <span
            className={[
              "flex-1 truncate",
              parsedValue || isPresent ? "text-slate-700" : "text-slate-400",
            ].join(" ")}
          >
            {displayValue()}
          </span>
        </button>
      </div>

      {/* =====================================================
          MODAL
      ====================================================== */}

      {isOpen && (
        <>
          {/* Overlay */}

          <div
            className="
              fixed inset-0 z-[9998]
              bg-slate-900/5
              backdrop-blur-[1px]
            "
            onClick={handleClose}
          />

          {/* Picker */}

          <div
            className="
              fixed left-1/2 top-1/2
              z-[9999]

              w-[320px]
              max-w-[calc(100vw-24px)]

              -translate-x-1/2
              -translate-y-1/2

              overflow-hidden

              rounded-xl
              border border-slate-200

              bg-white

              shadow-[0_16px_40px_rgba(15,23,42,0.10)]
            "
          >
            {/* =================================================
                HEADER
            ================================================== */}

            <div
              className="
                flex items-center
                justify-between
                border-b border-slate-100
                px-3.5 py-3
              "
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="
                    flex h-8 w-8
                    items-center justify-center
                    rounded-lg
                    bg-sky-50
                    text-sky-500
                  "
                >
                  <Calendar size={15} strokeWidth={2} />
                </div>

                <div>
                  <div
                    className="
                      text-[12px]
                      font-semibold
                      text-slate-700
                    "
                  >
                    Select date
                  </div>

                  <div
                    className="
                      mt-0.5
                      text-[10px]
                      text-slate-400
                    "
                  >
                    {displayValue()}
                  </div>
                </div>
              </div>

              {/* Close */}

              <button
                type="button"
                onClick={handleClose}
                className="
                  flex h-7 w-7
                  items-center justify-center
                  rounded-md
                  text-slate-400
                  transition-colors
                  hover:bg-sky-50
                  hover:text-sky-500
                "
              >
                <X size={14} />
              </button>
            </div>

            {/* =================================================
                PRESENT
            ================================================== */}

            {allowPresent && (
              <div className="px-3.5 pt-2.5">
                <button
                  type="button"
                  onClick={handlePresent}
                  className={[
                    "flex w-full",
                    "items-center justify-between",
                    "rounded-lg",
                    "border px-2.5 py-2",
                    "text-[11px]",
                    "transition-all duration-150",

                    isPresent
                      ? "border-sky-400 bg-sky-50 text-sky-600 shadow-sm"
                      : "border-slate-200 bg-white text-slate-500 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-2">
                    <Clock3 size={13} />

                    <span className="font-medium">Present</span>
                  </div>

                  {isPresent && <Check size={14} strokeWidth={2.5} />}
                </button>
              </div>
            )}

            {/* =================================================
                MONTH + YEAR
            ================================================== */}

            {!isPresent && (
              <div
                className="
                  grid
                  grid-cols-[1.15fr_0.85fr]
                  gap-3
                  p-3.5
                "
              >
                {/* MONTH */}

                <div>
                  <div
                    className="
                      mb-1.5
                      flex items-center
                      justify-between
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wider
                        text-slate-400
                      "
                    >
                      Month
                    </span>

                    <span
                      className="
                        text-[10px]
                        font-medium
                        text-sky-400
                      "
                    >
                      {selectedMonth}
                    </span>
                  </div>

                  <div
                    className="
                      grid
                      grid-cols-3
                      gap-1
                    "
                  >
                    {months.map((month) => {
                      const active = selectedMonth === month;

                      return (
                        <button
                          key={month}
                          type="button"
                          onClick={() => handleMonthChange(month)}
                          className={[
                            "flex h-[30px]",
                            "items-center justify-center",
                            "rounded-md",
                            "text-[10px] font-medium",
                            "transition-all duration-150",

                            active
                              ? "bg-sky-500 !text-white shadow-sm"
                              : "bg-slate-50 text-slate-500 hover:bg-sky-50 hover:text-sky-600",
                          ].join(" ")}
                        >
                          {month}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* YEAR */}

                <div>
                  <div
                    className="
                      mb-1.5
                      flex items-center
                      justify-between
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wider
                        text-slate-400
                      "
                    >
                      Year
                    </span>

                    <span
                      className="
                        text-[10px]
                        font-medium
                        text-sky-400
                      "
                    >
                      {selectedYear}
                    </span>
                  </div>

                  <div
                    className="
                      h-[185px]
                      overflow-hidden
                      rounded-lg
                      bg-slate-50
                      p-1
                    "
                  >
                    <div
                      className="
                        grid
                        h-full
                        grid-cols-2
                        content-start
                        gap-1
                        overflow-y-auto
                        pr-0.5
                        scroll-smooth

                        [scrollbar-width:thin]

                        [&::-webkit-scrollbar]:w-[3px]
                        [&::-webkit-scrollbar-track]:bg-transparent
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:bg-sky-200
                      "
                    >
                      {years.map((year) => {
                        const active = selectedYear === year;

                        return (
                          <button
                            key={year}
                            type="button"
                            ref={active ? selectedYearRef : null}
                            onClick={() => handleYearChange(year)}
                            className={[
                              "flex h-[29px]",
                              "items-center justify-center",
                              "rounded-md",
                              "text-[10px] font-medium",
                              "transition-all duration-150",

                              active
                                ? "bg-sky-500 !text-white shadow-sm"
                                : "text-slate-500 hover:bg-white hover:text-sky-600",
                            ].join(" ")}
                          >
                            {year}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =================================================
                FOOTER
            ================================================== */}

            <div
              className="
                flex
                items-center
                justify-between
                border-t border-slate-100
                bg-slate-50/50
                px-3.5 py-2.5
              "
            >
              {/* Clear */}

              <button
                type="button"
                onClick={handleClear}
                className="
                  rounded-md
                  px-2.5 py-1.5
                  text-[10px]
                  font-medium
                  text-slate-400
                  transition-colors
                  hover:bg-sky-50
                  hover:text-sky-500
                "
              >
                Clear
              </button>

              {/* Done */}

              <button
                type="button"
                onClick={handleClose}
                className="
                flex items-center gap-1.5
                rounded-md
                bg-sky-500
                px-3 py-1.5
                text-[10px]
                font-semibold
                !text-white
                shadow-sm
                transition-all
                hover:bg-sky-600
                active:scale-[0.98]
              "
              >
                <Check size={12} strokeWidth={2.5} />
                Done
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DatePicker;
