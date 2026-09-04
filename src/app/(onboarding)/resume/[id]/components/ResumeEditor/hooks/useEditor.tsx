import React from "react";
import { useResumeContext } from "../../../context/resume-editor-context";

const Index = () => {
  const { resumeData, setResumeData } = useResumeContext();

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
    const type = e.currentTarget.getAttribute("datatype") || e.target?.datatype;
    console.log("type --->>>", type);
    // Supports both standard input/textarea (.value) and contenteditable divs (.textContent)
    let value: any = "";
    if (type === "boolean") {
      const currentValue = e.currentTarget.value;
      value = currentValue === "true" ? true : false;
      console.log("value -->", value);
    } else if (type === "htmlEditor") {
      value = e.target.innerHTML;
    } else {
      value =
        e.currentTarget.value !== undefined
          ? e.currentTarget.value
          : e.currentTarget.textContent;
    }
console.log("value -->>>", value)
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
    setResumeData((prevData) => updateNestedState(prevData, keys, value));
  };
  return { getValue, handleInputChange };
};

export default Index;
