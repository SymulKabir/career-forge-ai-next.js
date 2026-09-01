import React, { useState } from "react";
import './style.scss'
import { RESUME_CONSTANTS } from "../../constants/resume-utils";
import { RESUME_SETTING } from "./constants/resumeSetting";
import {DUMMY_STRUCTURED_RESUME} from "./constants/resumeData"
import MilestoneCard from "./components/MilestoneCard"


const Index = () => {
    const [resumeData, setResumeData] = useState({...DUMMY_STRUCTURED_RESUME})
    const [resumeSetting, setResumeSetting] = useState({...RESUME_SETTING})
    const [currentConfig, setCurrentConfig] = useState({})
  const containerHeight =
    RESUME_CONSTANTS.editorShell.leftSectionWidth;


    console.log("resumeData ---->>>", resumeData)
    return <section className="resume-editor" 
    style={
        {
          "--container-height": `${containerHeight}`,
        } as React.CSSProperties
      }
    >
        <div className="resume-main-editor-container">
               <div className={`page  `} 
                style={{ 
                        paddingLeft: `${resumeSetting.margin.x}px`, 
                        paddingRight: `${resumeSetting.margin.x}px`,
                        paddingTop: `${resumeSetting.margin.y}px`,
                        paddingBottom: `${resumeSetting.margin.y}px`,
                        background: currentConfig?.selectedSectionOrder ? "#e4e4e4" : "#FFFFFF"
                    }}
                >
                <div className="page-inner-container">
                    <header className="resume-header">

                    </header>
                    <div className="resume-body">
                        {
                            resumeData?.sections?.map((data, index) => {
                                if(data.sectionLayout === "MilestoneCard") {
                                    return <MilestoneCard key={index} data={data} />
                                }
                                // return <SectionBox key={index} currentConfig={currentConfig} setCurrentConfig={setCurrentConfig} data={data} />
                            })
                        }
                    </div>

                </div>
               </div>
        </div>
    </section>
}


export default Index