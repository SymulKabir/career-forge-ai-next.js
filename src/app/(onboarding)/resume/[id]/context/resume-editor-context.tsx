"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface ResumeEditorContextValue {
  activeTool: string | null;
  setActiveTool: (tool: string | null) => void;
}

const ResumeEditorContext =
  createContext<ResumeEditorContextValue | null>(null);

export function ResumeEditorProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  return (
    <ResumeEditorContext.Provider
      value={{
        activeTool,
        setActiveTool,
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