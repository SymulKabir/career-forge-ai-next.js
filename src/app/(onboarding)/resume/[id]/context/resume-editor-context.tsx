"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { RESUME_SETTING, TOOLBAR } from "../components/ResumeEditor/constants/resumeSetting";
import { DUMMY_STRUCTURED_RESUME } from "../components/ResumeEditor/constants/resumeData";
import { addPositionIndex } from "../components/ResumeEditor/utils";

interface ResumeEditorContextValue {
  activeTool: string | null;
  setActiveTool: (tool: string | null) => void;
  setting: typeof RESUME_SETTING;
  setSetting: (setting: typeof RESUME_SETTING) => void;
  resumeData: typeof DUMMY_STRUCTURED_RESUME;
  setResumeData: (resumeData: typeof DUMMY_STRUCTURED_RESUME) => void;
  toolBar: typeof TOOLBAR;
  setToolBar: (resumeData: typeof TOOLBAR) => void;
  structuredResumeData: typeof any;
  setStructuredResumeData: (resumeData: typeof any) => void;
}

const ResumeEditorContext = createContext<ResumeEditorContextValue | null>(
  null,
);

export function ResumeEditorProvider({ children }: { children: ReactNode }) {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [setting, setSetting] = useState<typeof RESUME_SETTING>({
    ...RESUME_SETTING,
  });
  const [toolBar, setToolBar] = useState<typeof TOOLBAR>({
    ...TOOLBAR,
  });
  const [resumeData, setResumeData] = useState({ ...addPositionIndex(DUMMY_STRUCTURED_RESUME) });
  const [structuredResumeData, setStructuredResumeData] = useState({});
console.log("resumeData ===>>>", resumeData)
  return (
    <ResumeEditorContext.Provider
      value={{
        activeTool,
        setActiveTool,
        setting,
        setSetting,
        resumeData,
        setResumeData,
        structuredResumeData,
        setStructuredResumeData,
        toolBar,
        setToolBar,
      }}
    >
      {children}
    </ResumeEditorContext.Provider>
  );
}

export function useResumeContext() {
  const context = useContext(ResumeEditorContext);

  if (!context) {
    throw new Error("useResumeContext must be used inside ResumeEditorProvider");
  }

  return context;
}
