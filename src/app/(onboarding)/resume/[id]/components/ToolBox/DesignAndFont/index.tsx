"use client";
import { useState } from "react";
import MarginFontControlPanel from "./components/MarginFontControlPanel";
import HeaderControlPanel from "./components/HeaderControlPanel";
import SectionControlPanel from "./components/SectionControlPanel";
import StylingLayout from "./components/StylingLayout";

const DesignFontPanel = () => {
  return ( 
    <div id="designFontPanel" className="space-y-2 pb-3">
      <div className="flex flex-col gap-5">
        <MarginFontControlPanel />
        <HeaderControlPanel />
        <SectionControlPanel />
        <StylingLayout />
      </div>
    </div>
  );
};

export default DesignFontPanel;
