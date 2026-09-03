import React from "react";
import { useResumeContext } from "../../../context/resume-editor-context";

const Index = () => {
  const {
    resumeData,
    setResumeData,
  } = useResumeContext();

  const getValue = (name: string): any => {
    if (!name) return "";

    const keys = name.split(".");
    let current: any = resumeData;

    for (const key of keys) {
      if (current === null || current === undefined) {
        return "";
      }
      current = current[key];
    }

    return current ?? "";
  };
  const handleInputChange = async (e: any) => {
    const name = e.currentTarget.getAttribute("name") || e.target?.name;
    const type = e.currentTarget.getAttribute("type") || e.target?.type;

    // Supports both standard input/textarea (.value) and contenteditable divs (.textContent)
    let value = "";
    if (type === "htmlEditor") {
      value = e.target.innerHTML;
    } else {
      value = e.currentTarget.value !== undefined
        ? e.currentTarget.value
        : e.currentTarget.textContent;
    }

 

    if (!name) return;

    const keys = name.split(".");

    // Helper to immutably update nested objects and arrays
    const updateNestedState = (
      obj: any,
      pathKeys: string[],
      newValue: any,
    ): any => {
      if (pathKeys.length === 0) return newValue;

      const [head, ...tail] = pathKeys;
      const isArray = Array.isArray(obj);
      const copy = isArray ? [...obj] : { ...obj };

      copy[head] = updateNestedState(copy[head], tail, newValue);
      return copy;
    };

    // Update your state
    setResumeData((prevData) => updateNestedState(prevData, keys, value));
  };
console.log("resumeData->>", resumeData)
  return { getValue, handleInputChange };
};

export default Index;
