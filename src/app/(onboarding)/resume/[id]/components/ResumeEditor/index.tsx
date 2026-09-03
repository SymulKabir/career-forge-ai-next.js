import React, { useState } from "react";
import './style.scss'
import { RESUME_CONSTANTS } from "../../constants/resume-utils";
import { RESUME_SETTING } from "./constants/resumeSetting";
import MilestoneCard from "./components/MilestoneCard"
import { useResumeContext } from "../../context/resume-editor-context";


const Index = () => {
    const { resumeData, setResumeData } = useResumeContext()
    const [resumeSetting, setResumeSetting] = useState({ ...RESUME_SETTING })
    const [currentConfig, setCurrentConfig] = useState({})
    const containerHeight =
        RESUME_CONSTANTS.editorShell.resumeEditorHeight;


    return <section className="resume-editor"
        style={
            {
                "--container-height": `${containerHeight}`,
            } as React.CSSProperties
        }
    >
        <div className="resume-main-editor-container">
            <div className={`page `}
                style={{
                    paddingLeft: `${resumeSetting.margin.x}px`,
                    paddingRight: `${resumeSetting.margin.x}px`,
                    paddingTop: `${resumeSetting.margin.y}px`,
                    paddingBottom: `${resumeSetting.margin.y}px`,
                    background: currentConfig?.selectedSectionOrder ? "#e4e4e4" : "#FFFFFF"
                }}
            >
                <div className="page-inner-container">
                    <header className="resume-header section-wrapper">

                    </header>
                    <div className="resume-body">
                        {
                            resumeData?.sections?.map((data, index) => {
                                if (data.sectionLayout === "MilestoneCard") {
                                    return <MilestoneCard key={index} data={data} name={`sections.${index}`} />
                                }
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    </section>
}


export default Index