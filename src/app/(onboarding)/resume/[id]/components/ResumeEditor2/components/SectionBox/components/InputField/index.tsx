import React from "react";

const Index = ({ text }: any) => {
    return <div
        className="edit-item"
        contentEditable={true}
        suppressContentEditableWarning={true}
    // onBlur={handleNameChange}
    >
        {text}
    </div>
}


export default Index