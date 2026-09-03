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

    // Supports both standard input/textarea (.value) and contenteditable divs (.textContent)
    const value =
      e.currentTarget.value !== undefined
        ? e.currentTarget.value
        : e.currentTarget.textContent;

    console.log(" name --->>>");

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
    // setResumeData((prevData) => updateNestedState(prevData, keys, value));
  };

  const splitAndCreateItem = (e: React.KeyboardEvent<HTMLElement>) => {
    e.preventDefault();

    const element = e.currentTarget;

    const name = element.getAttribute("name");

    if (!name) return;

    const value =
      "value" in element
        ? (element as HTMLInputElement).value
        : (element.textContent ?? "");
    console.log("value ==>>>", value);
    const selection = window.getSelection();

    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);

    const cursorPosition = range.startOffset;

    const valueBeforeEnter = value.slice(0, cursorPosition) || " ";
    const valueAfterEnter = value.slice(cursorPosition) || " ";
    console.log("valueBeforeEnter ==>>>", valueBeforeEnter);
    console.log("valueAfterEnter ==>>>", valueAfterEnter);

    const keys = name.split(".");

    // setResumeData((prevData: any) => {
    //   const updateNestedState = (obj: any, pathKeys: string[]): any => {
    //     if (pathKeys.length === 1) {
    //       const index = Number(pathKeys[0]);

    //       if (!Array.isArray(obj)) {
    //         console.error("Expected array but received:", obj);
    //         return obj;
    //       }

    //       const newList = [...obj];

    //       // Update current item
    //       newList[index] = valueBeforeEnter;

    //       // Insert new item after current item
    //       newList.splice(index + 1, 0, valueAfterEnter);

    //       return newList;
    //     }

    //     const [head, ...tail] = pathKeys;

    //     const copy = Array.isArray(obj) ? [...obj] : { ...obj };

    //     copy[head] = updateNestedState(copy[head], tail);

    //     return copy;
    //   };

    //   const updateResume = updateNestedState({ ...prevData }, keys);
    //   console.log("updateResume==================>>>>>9>>", updateResume);

    //   return updateResume;
    // });
  };

  return { getValue, handleInputChange, splitAndCreateItem };
};

export default Index;
