"use client";

import { X } from "lucide-react";
import { useResumeEditor } from "../../context/resume-editor-context";

export default function CloseButton() {
  const { setActiveTool } = useResumeEditor();

  return (
    <button
      id="closeToolBox"
      type="button"
      aria-label="Close toolbox"
      title="Close toolbox"
      className="
        group
        absolute
        right-1
        top-1
        z-20
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-lg
        border
        border-slate-200
        bg-white/95
        text-slate-400
        shadow-md
        backdrop-blur
        transition-all
        duration-300
        ease-out
        hover:scale-105
        hover:border-violet-200
        hover:bg-violet-50
        hover:text-violet-600
        hover:shadow-lg
        active:scale-90
      "
      onClick={() => setActiveTool(null)}
    >
      {/* Close Icon */}
      <X
        className="
          h-4
          w-4
          transition-transform
          duration-200
          group-hover:rotate-90
        "
        strokeWidth={2}
      />

      {/* Tooltip */}
      <span
        className="
          pointer-events-none
          absolute
          left-[calc(100%+10px)]
          top-1/2
          -translate-y-1/2
          translate-x-[-4px]
          whitespace-nowrap
          rounded-md
          border
          border-slate-700/50
          bg-slate-900
          px-2.5
          py-1.5
          text-[10px]
          font-semibold
          tracking-wide
          text-white
          opacity-0
          shadow-lg
          transition-all
          duration-200
          ease-out
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      >
        Close toolbox
      </span>
    </button>
  );
}
