import React, { useEffect, useState } from "react";
import './style.scss'
import { RESUME_CONSTANTS } from "../../constants/resume-utils";
import { RESUME_SETTING } from "./constants/resumeSetting";
import BulletsCard from "./components/BulletsCard"
import DescriptionCard from "./components/DescriptionCard"
import { useResumeContext } from "../../context/resume-editor-context";


const Index = () => {
    const { resumeData, setResumeData } = useResumeContext()
    const [resumeSetting, setResumeSetting] = useState({ ...RESUME_SETTING })
    const [currentConfig, setCurrentConfig] = useState({})
    const [pages, setPages] = useState([])
    const containerHeight =
        RESUME_CONSTANTS.editorShell.resumeEditorHeight;


    useEffect(() => {
        setPages([{ ...resumeData }, { ...resumeData }, { ...resumeData }])
    }, [resumeData])
    return <section className="resume-editor"
        style={
            {
                "--container-height": `${containerHeight}`,
                "--section-gap": `${resumeSetting.sectionGap}px`,
            } as React.CSSProperties
        }
    >
        <div className="resume-main-editor-container">
            {
                pages.map((page, index) => {
                    return <div className={`page `}
                        key={index}
                        style={{
                            paddingLeft: `${resumeSetting.margin.x}px`,
                            paddingRight: `${resumeSetting.margin.x}px`,
                            paddingTop: `${resumeSetting.margin.y}px`,
                            paddingBottom: `${resumeSetting.margin.y}px`,
                            background: currentConfig?.selectedSectionOrder ? "#e4e4e4" : "#FFFFFF"
                        }}
                    >
                        <div className="page-inner-container">
                            <header className="resume-header active-focus">

                            </header>
                            <div className="resume-body .">
                                {
                                    page?.sections?.map((data, index) => {
                                        return <div key={index} className="section-container section-styles active-focus">
                                            {
                                                data.sectionLayout === "BulletsCard" && <BulletsCard key={index} data={data} name={`sections.${index}`} />
                                            }
                                            {
                                                data.sectionLayout === "DescriptionCard" && <DescriptionCard key={index} data={data} name={`sections.${index}`} />
                                            }

                                        </div>
                                    })
                                }
                            </div>

                        </div>
                    </div>
                })
            }

        </div>
    </section>
}


export default Index