"use client";

import { RESUME_CONSTANTS } from "./constants/resume-utils";
import { ResumeEditorProvider } from "./context/resume-editor-context";
import ResumeToolbar from "./components/ResumeToolbar";
import CloseButton from "./components/ToolBox/CloseButton";
import DesignAndFont from "./components/ToolBox/DesignAndFont";
import AiAssistant from "./components/ToolBox/AiAssistant";
import FixResume from "./components/ToolBox/FixResume";
import CheckAndTailor from "./components/ToolBox/CheckAndTailor";
import Templates from "./components/ToolBox/Templates";
import ResumeRearrangeModal from "./components/ResumeRearrangeModal/RearrangeModal";
import ResumeEditor from "./components/ResumeEditor";

export default function ResumeEditorShell() {
  return (
    <ResumeEditorProvider>
      <ResumeToolbar />

      <div
        className="
          editor-shell
          relative
          min-h-0
          overflow-hidden
          h-[calc(100vh_-_65px_-_65px)]
          flex
          justify-center
          
        "
      >
        <section
          id="toolBox"
          className={`
                absolute
                top-0
                h-[inherit]
                overflow-x-visible
                border-r
                border-slate-200
                bg-white
                p-4
                sm:p-5
                transition-all
                duration-300
                ease-in-out
                z-[2]
                left-[-${RESUME_CONSTANTS.editorShell.leftSectionWidth}]
                left-[-350px]
                w-[${RESUME_CONSTANTS.editorShell.leftSectionWidth}]
                `}
        >
          <CloseButton />

          <div className="h-full overflow-y-auto">
            <Templates />
            <CheckAndTailor />
            <FixResume />
            <AiAssistant />
            <DesignAndFont /> 
          </div>
        </section>

        <ResumeRearrangeModal />

        <ResumeEditor />
      </div>
    </ResumeEditorProvider>
  );
}
