"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Plus,
  ArrowUp,
  ArrowDown,
  SlidersHorizontal,
  Calendar,
  Trash2,
  Settings,
  Sparkles,
  Camera,
} from "lucide-react";
import useEditor from "../../hooks/useEditor";
import { useResumeContext } from "../../../../context/resume-editor-context";
import { useResume } from "../../../../hooks";
import { getResumeFormat } from "../../../../utils/resume";

interface ResumeToolbarProps {
  variant?: "subsection" | "section";
  propertyPath?: string; // Path like "sections.0.items.0"
  tools?: any;
  format?: string;
}

export default function ResumeToolbar({
  variant = "subsection",
  propertyPath,
  tools,
  format,
}: ResumeToolbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<
    "settings" | "display" | "date" | null
  >(null);
  const [dateTab, setDateTab] = useState<"from" | "to">("from");
  const [sectionData, setSectionData] = useState<any>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const propertyParts = propertyPath.split(".");
  const itemIndex = Number(propertyParts.pop())
  // Destructure update function or state setter from useEditor hook if available
  const { getValue } = useEditor();
  const { addResumeListItem, updateResume, swapResumeData } = useResume();
  const { resumeData } = useResumeContext();

  useEffect(() => {
    if (propertyPath) {
      const currentValue = getValue(propertyPath);
      setSectionData({ ...currentValue });
    }
  }, [propertyPath, resumeData]);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
  const years = [
    2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031,
  ];

  const addEntry = () => {
    if (!format || !propertyPath) return;
    const formatData = getResumeFormat(`${format}.items.0`);

    const updateProperty = propertyPath
      .split(".")
      .slice(0, 2)
      .join(".");
    const newDataPositionPath = `${updateProperty}.items`;
    addResumeListItem(newDataPositionPath, formatData, 0);
  };
  const hideSection = () => {
    updateResume({
      propertyPath: `${propertyPath}.isVisible`,
      value: false,
    });
  };
  const handleMove = (mode: string) => {
    if (!mode) return
    console.log("test1")

    const toIndex = mode == "up" ? itemIndex - 1 : mode == "down" ? itemIndex + 1 : -1
    const path = propertyParts.join(".")


    if (toIndex < 0 || itemIndex < 0) return
    console.log("test3")
    console.log({
      fromPath: path,
      fromIndex: itemIndex,
      toPath: path,
      toIndex: toIndex,
    })
    swapResumeData({
      fromPath: path,
      fromIndex: itemIndex,
      toPath: path,
      toIndex: toIndex,
    })
  }

  return (
    <div className="section-tools hidden justify-center absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+10px)] z-40 avoid-default">
      <div className="relative inline-block font-sans" ref={dropdownRef}>
        {/* Responsive Light Glass Toolbar Container */}
        <div className="flex items-center bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-xl px-2 py-1.5 gap-1 text-slate-700 select-none flex-wrap sm:flex-nowrap">
          {/* Primary Action: Add Entry (Only for Subsections) */}
          {tools?.entry && (
            <>
              <button
                className="group flex items-center gap-1.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-3 py-1.5 rounded-xl text-xs font-semibold shadow-md shadow-indigo-500/20 transition-all transform active:scale-95 flex-shrink-0"
                title="Add New Entry"
                onClick={addEntry}
              >
                <Plus className="w-3.5 h-3.5 stroke-[3] transition-transform group-hover:rotate-90 duration-300" />
                <span className="hidden sm:inline">Entry</span>
              </button>
              <div className="w-[1px] h-5 bg-slate-200 mx-0.5 hidden sm:block" />
            </>
          )}

          {/* Position Reordering Group */}
          {tools?.move && (
            <div className="flex items-center bg-slate-100/80 p-0.5 rounded-xl border border-slate-200/60">
              {itemIndex > 0 && <button
                onClick={() => handleMove("up")}
                className="p-1.5 hover:bg-white hover:text-indigo-600 rounded-lg text-slate-600 transition-all shadow-sm"
                title={`Move ${variant === "section" ? "Section" : "Entry"} Up`}

              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>}
              {tools.move.maxIndex > itemIndex && <button
                onClick={() => handleMove("down")}
                className="p-1.5 hover:bg-white hover:text-indigo-600 rounded-lg text-slate-600 transition-all shadow-sm"
                title={`Move ${variant === "section" ? "Section" : "Entry"} Down`}
              >
                <ArrowDown className="w-3.5 h-3.5" />
              </button>}
            </div>
          )}
          {/* Settings / Field Toggle Trigger */}
          {tools?.picture && (
            <>
              <button
                onClick={tools.picture.action}
                className={`p-2 rounded-xl transition-all ${activeDropdown === "settings"
                  ? "bg-violet-50 text-violet-600 border border-violet-200"
                  : "hover:bg-slate-100 text-slate-600 hover:text-violet-600"
                  }`}
                title="Toggle Element Visibility"
              >
                <Camera className="w-4 h-4" />
              </button>

              <div className="w-[1px] h-5 bg-slate-200 mx-0.5 hidden sm:block" />
            </>
          )}
          {/* Formatting Toggle */}
          {/* {onToggleFormatting && (
            <button
              onClick={onToggleFormatting}
              className="p-2 hover:bg-slate-100 rounded-xl text-slate-600 hover:text-indigo-600 transition-all"
              title="Rich Text & Style Options"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          )} */}

          {/* Date Selector Trigger (Subsection only) */}
          {/* {variant === "subsection" && ( */}
          {tools?.date && (
            <button
              onClick={() =>
                setActiveDropdown(activeDropdown === "date" ? null : "date")
              }
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all ${activeDropdown === "date"
                ? "bg-indigo-50 text-indigo-600 border border-indigo-200"
                : "hover:bg-slate-100 text-slate-600"
                }`}
              title="Configure Date Range"
            >
              <Calendar className="w-3.5 h-3.5 text-indigo-500" />
              <span className="hidden md:inline">Timeline</span>
            </button>
          )}
          {/* )} */}

          {/* Settings / Field Toggle Trigger */}
          {tools?.setting && (
            <>
              <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "settings" ? null : "settings",
                  )
                }
                className={`p-2 rounded-xl transition-all ${activeDropdown === "settings"
                  ? "bg-violet-50 text-violet-600 border border-violet-200"
                  : "hover:bg-slate-100 text-slate-600 hover:text-violet-600"
                  }`}
                title="Toggle Element Visibility"
              >
                <Settings className="w-4 h-4" />
              </button>

              <div className="w-[1px] h-5 bg-slate-200 mx-0.5 hidden sm:block" />
            </>
          )}
          {tools?.display && (
            <>
              <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "display" ? null : "display",
                  )
                }
                className={`p-2 rounded-xl transition-all ${activeDropdown === "display"
                  ? "bg-violet-50 text-violet-600 border border-violet-200"
                  : "hover:bg-slate-100 text-slate-600 hover:text-violet-600"
                  }`}
                title="Section Content Visibility"
                aria-label="Section Content Visibility"
                aria-expanded={activeDropdown === "display"}
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
              {tools?.delete && (
                <div className="w-[1px] h-5 bg-slate-200 mx-0.5 hidden sm:block" />
              )}
            </>
          )}
          {/* Destructive Action: Delete */}
          {tools?.delete && (
            <button
              onClick={hideSection}
              className="p-2 hover:bg-rose-50 hover:text-rose-600 rounded-xl text-slate-400 transition-all"
              title={`Remove ${variant === "section" ? "Section" : "Entry"}`}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* DROPDOWN 1: VISIBILITY SETTINGS POPUP */}
        {activeDropdown === "settings" && (
          <div className="absolute right-0 mt-3 w-72 sm:w-80 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-4 sm:p-5 z-50 text-slate-800 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {variant === "section"
                    ? "Section Display Settings"
                    : "Field Visibility"}
                </span>
              </div>
              <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full text-slate-500 font-medium">
                Live preview
              </span>
            </div>

            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {tools?.setting?.dropdownList?.map((item: any, index: number) => {
                item["index"] = index;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-xs font-medium text-slate-700">
                      {item?.label}
                    </span>
                    <button
                      datatype="boolean"
                      value={item.active ? "false" : "true"}
                      onClick={() => item.action({ ...item })}
                      className={`w-10 h-6 flex items-center rounded-full transition-colors p-1 ${item?.active
                        ? "bg-gradient-to-r from-indigo-600 to-violet-600 shadow-sm shadow-indigo-500/20"
                        : "bg-slate-200 border border-slate-300"
                        }`}
                    >
                      <div
                        className={`bg-white w-4 h-4 rounded-full shadow-sm transform transition-transform ${item?.active ? "translate-x-4" : "translate-x-0"
                          }`}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {/* DROPDOWN 1: VISIBILITY SETTINGS POPUP */}
        {activeDropdown === "display" && (
          <div className="absolute right-0 mt-3 w-72 sm:w-80 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-4 sm:p-5 z-50 text-slate-800 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {variant === "section"
                    ? "Section Display Settings"
                    : "Field Visibility"}
                </span>
              </div>
              <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full text-slate-500 font-medium">
                Live preview
              </span>
            </div>

            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {tools?.display?.dropdownList?.map((item: any, index: number) => {
                item["index"] = index;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-xs font-medium text-slate-700">
                      {item?.label}
                    </span>
                    <button
                      datatype="boolean"
                      value={item.active ? "false" : "true"}
                      onClick={() => item.action({ ...item })}
                      className={`w-10 h-6 flex items-center rounded-full transition-colors p-1 ${item?.active
                        ? "bg-gradient-to-r from-indigo-600 to-violet-600 shadow-sm shadow-indigo-500/20"
                        : "bg-slate-200 border border-slate-300"
                        }`}
                    >
                      <div
                        className={`bg-white w-4 h-4 rounded-full shadow-sm transform transition-transform ${item?.active ? "translate-x-4" : "translate-x-0"
                          }`}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {/* Internal Section Visibility */}

        {/* DROPDOWN 2: DATE PICKER POPUP (Subsection only) */}
        {variant === "subsection" && activeDropdown === "date" && (
          <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-4 sm:p-5 z-50 text-slate-800 animate-in fade-in zoom-in-95 duration-150">
            {/* Tab Header */}
            <div className="grid grid-cols-2 bg-slate-100 p-1 rounded-xl mb-4 text-xs font-semibold border border-slate-200/60">
              <button
                onClick={() => setDateTab("from")}
                className={`py-1.5 rounded-lg transition-all ${dateTab === "from"
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
                  }`}
              >
                Start Date
              </button>
              <button
                onClick={() => setDateTab("to")}
                className={`py-1.5 rounded-lg transition-all ${dateTab === "to"
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
                  }`}
              >
                End Date
              </button>
            </div>

            {/* Years Grid */}
            <div className="mb-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                Year
              </span>
              <div className="grid grid-cols-4 gap-1.5">
                {years.map((yr) => {
                  const isSelected =
                    (dateTab === "from"
                      ? dateRange.fromYear
                      : dateRange.toYear) === yr;
                  return (
                    <button
                      key={yr}
                      onClick={() =>
                        onDateChange({
                          ...dateRange,
                          [dateTab === "from" ? "fromYear" : "toYear"]: yr,
                        })
                      }
                      className={`py-2 text-xs font-semibold rounded-xl border transition-all ${isSelected
                        ? "bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm"
                        : "bg-slate-50/50 border-slate-200 hover:bg-slate-100 text-slate-700"
                        }`}
                    >
                      {yr}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Months Grid */}
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                Month
              </span>
              <div className="grid grid-cols-4 gap-1.5">
                {months.map((m) => {
                  const isSelected =
                    (dateTab === "from"
                      ? dateRange.fromMonth
                      : dateRange.toMonth) === m;
                  return (
                    <button
                      key={m}
                      onClick={() =>
                        onDateChange({
                          ...dateRange,
                          [dateTab === "from" ? "fromMonth" : "toMonth"]: m,
                        })
                      }
                      className={`py-2 text-xs font-semibold rounded-xl border transition-all ${isSelected
                        ? "bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm"
                        : "bg-slate-50/50 border-slate-200 hover:bg-slate-100 text-slate-700"
                        }`}
                    >
                      {m}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
