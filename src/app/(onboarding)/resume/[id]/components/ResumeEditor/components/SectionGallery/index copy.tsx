"use client";

import React from "react";
import { X, Plus } from "lucide-react";

interface SectionOption {
  title: string;
  previewType: string; // Used to mock different layout thumbnails
}

interface AddSectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (sectionTitle: string) => void;
}

const SECTION_OPTIONS: SectionOption[] = [
  { title: "Custom", previewType: "custom" },
  { title: "Volunteering", previewType: "volunteering" },
  { title: "Industry Expertise", previewType: "expertise" },
  { title: "Interests", previewType: "interests" },
  { title: "My time", previewType: "chart" },
  { title: "Certifications", previewType: "certifications" },
  { title: "Awards", previewType: "awards" },
  { title: "References", previewType: "references" },
  { title: "My Life Philosophy", previewType: "philosophy" },
  { title: "Publications", previewType: "publications" },
  { title: "Books", previewType: "books" },
  { title: "Additional Experience", previewType: "experience" },
];
const SECTION_OPTIONS: SectionOption[] = [
  { 
    title: "Custom", 
    format: "custom", 
    sectionLayout: "DescriptionCard", 
    image: "dump/custom-title.png" 
  },
  { 
    title: "Additional Experience", 
    format: "experience", 
    sectionLayout: "BulletsCard", 
    image: "dump/additional-experience.png" 
  },
  { 
    title: "Publications", 
    format: "publications", 
    sectionLayout: "BulletsCard", 
    image: "dump/additional-publications.png" 
  },
  { 
    title: "Certifications", 
    format: "certifications", 
    sectionLayout: "BadgeTitleCard", 
    image: "dump/certifications.png" 
  },
  { 
    title: "Interests", 
    format: "interests", 
    sectionLayout: "TagCard", 
    image: "dump/interests.png" 
  },
  { 
    title: "Key Achievements", 
    format: "awards", 
    sectionLayout: "BadgeTitleCard", 
    image: "dump/key-achievements.png 
  },
  { 
    title: "Projects", 
    format: "projects", 
    sectionLayout: "BulletsCard", 
    image: "dump/project.png" 
  },
];
export default function AddSectionModal({
  isOpen,
  onClose,
  onSelectSection,
}: AddSectionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-md p-4 animate-in fade-in duration-200">
      {/* Modal Container with Enhanced Outside Drop Shadow */}
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
              Click on a section to add it to your resume
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-all"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable Grid Area */}
        <div className="flex-1 overflow-y-auto p-8 bg-slate-50/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTION_OPTIONS.map((section, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onSelectSection(section.title);
                  onClose();
                }}
                className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm hover:shadow-xl hover:border-indigo-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Thumbnail Preview Area */}
                <div className="relative w-full h-32 bg-slate-100/70 rounded-xl border border-slate-100 flex items-center justify-center p-3 mb-4 group-hover:bg-indigo-50/20 transition-colors">
                  {/* Miniature Mockups based on previewType */}
                  <div className="w-full h-full bg-white rounded-lg shadow-2xs p-2.5 flex flex-col justify-between text-[6px] text-slate-400">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-slate-200" />
                      <div className="w-12 h-1.5 rounded bg-slate-200" />
                    </div>
                    <div className="space-y-1">
                      <div className="w-full h-1 rounded bg-slate-100" />
                      <div className="w-3/4 h-1 rounded bg-slate-100" />
                    </div>
                    <div className="flex justify-between items-center pt-1 border-t border-slate-50">
                      <div className="w-6 h-1 rounded bg-indigo-100" />
                      <div className="w-4 h-1 rounded bg-slate-100" />
                    </div>
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-indigo-900/5 opacity-0 group-hover:opacity-100 backdrop-blur-[0.5px] transition-opacity flex items-center justify-center">
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
        </div>
      </div>
    </div>
  );
}