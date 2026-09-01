"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { RESUME_SETTING } from "../components/ResumeEditor2/constants/resumeSetting";

interface ResumeEditorContextValue {
  activeTool: string | null;
  setActiveTool: (tool: string | null) => void;
  setting: typeof RESUME_SETTING;
  setSetting: (setting: typeof RESUME_SETTING) => void;
}

const ResumeEditorContext =
  createContext<ResumeEditorContextValue | null>(null);

export function ResumeEditorProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [setting, setSetting] = useState<typeof RESUME_SETTING>({...RESUME_SETTING});

  return (
    <ResumeEditorContext.Provider
      value={{
        activeTool,
        setActiveTool,
        setting,
        setSetting,
      }}
    >
      {children}
    </ResumeEditorContext.Provider>
  );
}

export function useResumeEditor() {
  const context = useContext(ResumeEditorContext);

  if (!context) {
    throw new Error(
      "useResumeEditor must be used inside ResumeEditorProvider",
    );
  }

  return context;
}