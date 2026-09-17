"use client";

import React from "react";
import { X, Plus } from "lucide-react";
import { useResumeContext } from "../../../../context/resume-editor-context";
import { useResume, useResumeConfig } from "../../../../hooks";
import { getResumeFormat } from "../../../../utils/resume";

interface SectionOption {
  title: string;
  format: string;
  sectionLayout: string;
  image: any; // Mapped preview asset
}

const SECTION_OPTIONS: SectionOption[] = [
  {
    title: "Custom",
    format: "professionalExperience",
    sectionLayout: "DescriptionCard",
    image: "/dump/custom-title.png",
  },
  {
    title: "Additional Experience",
    format: "professionalExperience",
    sectionLayout: "BulletsCard",
    image: "/dump/additional-experience.png",
  },
  {
    title: "Publications",
    format: "DescriptionCard",
    sectionLayout: "BulletsCard",
    image: "/dump/additional-publications.png",
  },
  {
    title: "Certifications",
    format: "LinkCard",
    sectionLayout: "BadgeTitleCard",
    image: "/dump/certifications.png",
  },
  {
    title: "Interests",
    format: "interests",
    sectionLayout: "TagCard",
    image: "/dump/interests.png",
  },
  {
    title: "Key Achievements",
    format: "BadgeTitleCard",
    sectionLayout: "BadgeTitleCard",
    image: "/dump/key-achievements.png",
  },
  {
    title: "Experiences",
    format: "TagCard",
    sectionLayout: "BulletsCard",
    image: "/dump/project.png",
  },
];

export default function AddSectionModal() {
  const { addSectionConfig } = useResumeContext();
  const { closeAddSectionModal } = useResumeConfig();
  const { addResumeListItem } = useResume();

  if (!addSectionConfig.isModalOpen) return null;

  const onSelectSection = (format: string) => {
    console.log("click on select section-->>");
    if (!format || !addSectionConfig.newSectionPosition) return;
    const formatData = getResumeFormat(format);
    console.log("formatData-->>", formatData);
    formatData["column"] = addSectionConfig.column;
    const [path, index] = addSectionConfig.newSectionPosition.split(".");

    addResumeListItem(path, formatData, Number(index) + 1);
  };
  // Filter out sections that are already added to prevent duplicates
  const availableOptions = SECTION_OPTIONS;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white rounded-3xl shadow-[0_30px_90px_rgba(15,23,42,0.25)] border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 bg-white sticky top-0 z-10">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Add a new section
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Click on a section to add it to your resume uniquely
            </p>
          </div>
          <button
            onClick={closeAddSectionModal}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-all"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable Grid Area */}
        <div className="flex-1 overflow-y-auto p-8 bg-slate-50/50">
          {availableOptions.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-sm">
              All available sections have already been added to your resume!
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableOptions.map((section, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    onSelectSection(section.format);
                    closeAddSectionModal();
                  }}
                  className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm hover:shadow-xl hover:border-indigo-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Thumbnail Preview Image Area */}
                  <div className="relative w-full h-32 bg-slate-100/70 rounded-xl border border-slate-100 flex items-center justify-center p-2 mb-4 group-hover:bg-indigo-50/20 transition-colors overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover rounded-lg shadow-xs group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Hover Overlay Button */}
                    <div className="absolute inset-0 bg-indigo-900/10 opacity-0 group-hover:opacity-100 backdrop-blur-[1px] transition-opacity flex items-center justify-center">
                      <span className="flex items-center gap-1 bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all">
                        <Plus className="w-3.5 h-3.5" /> Add Section
                      </span>
                    </div>
                  </div>

                  {/* Section Title Label */}
                  <span className="text-xs font-bold text-slate-700 text-center tracking-wide group-hover:text-indigo-600 transition-colors">
                    {section.title}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
