"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { RESUME_SETTING } from "../components/ResumeEditor2/constants/resumeSetting";
import { DUMMY_STRUCTURED_RESUME } from "../components/ResumeEditor2/constants/resumeData";

interface ResumeEditorContextValue {
  activeTool: string | null;
  setActiveTool: (tool: string | null) => void;
  setting: typeof RESUME_SETTING;
  setSetting: (setting: typeof RESUME_SETTING) => void;
  resumeData: typeof DUMMY_STRUCTURED_RESUME;
  setResumeData: (resumeData: typeof DUMMY_STRUCTURED_RESUME) => void;
}

const ResumeEditorContext = createContext<ResumeEditorContextValue | null>(
  null,
);

export function ResumeEditorProvider({ children }: { children: ReactNode }) {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [setting, setSetting] = useState<typeof RESUME_SETTING>({
    ...RESUME_SETTING,
  });
  const [resumeData, setResumeData] = useState({ ...DUMMY_STRUCTURED_RESUME });

  return (
    <ResumeEditorContext.Provider
      value={{
        activeTool,
        setActiveTool,
        setting,
        setSetting,
        resumeData,
        setResumeData,
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
