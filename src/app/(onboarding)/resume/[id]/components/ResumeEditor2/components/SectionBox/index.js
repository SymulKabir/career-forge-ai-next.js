import React from "react";
import './styles.scss'
import InputField from "./components/InputField"

const Index = ({ data, currentConfig, setCurrentConfig }) => {
    console.log("data --->>>", data)
    const selectSection = (order) => {
        setCurrentConfig((state) => {
            return {
                ...state,
                selectedSectionOrder: order
            }
        })
    }
    const handleNameChange = (e) => {
        const newName = e.currentTarget.textContent;
        // TODO: Update your parent state/data structure here if needed
        console.log("Updated name:", newName);
    };

    return <div className={`section-box ${data?.order === currentConfig.selectedSectionOrder ? "selected" : ""}`} onClick={() => selectSection(data.order)}>
        <div className="title-section bottom-border">
            {/* <div
                className="edit-item"
                contentEditable={true}
                suppressContentEditableWarning={true}
                onBlur={handleNameChange}
            >
                {data?.name}
            </div> */}
            <InputField text={data?.name} />
        </div>
        <div className="items-container">
            {
                data?.items?.map((item, index) => {
                    return <div key={index}>
                        <div>

                        </div>
                    </div>
                })
            }
        </div>
    </div>
}


export default Index