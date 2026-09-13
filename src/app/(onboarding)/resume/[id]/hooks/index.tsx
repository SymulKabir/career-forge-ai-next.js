import React, { useEffect } from "react";
import { useResumeContext } from "../context/resume-editor-context";
import { structuredResume } from "../utils/resume";
import { addPositionIndex } from "../components/ResumeEditor/utils";

export const useInitResume = () => {
  const { resumeData, setStructuredResumeData } = useResumeContext();
  useEffect(() => {
    if (!Object.keys({ ...(resumeData || {}).length })) return;
    setStructuredResumeData(structuredResume({ ...resumeData }));
  }, [setStructuredResumeData, resumeData]);
};
export const useResume = () => {
  const { resumeData, setResumeData, setSetting, setToolBar } =
    useResumeContext();
  const updateNestedState = (
    obj: any,
    pathKeys: string[],
    newValue: any,
  ): any => {
    if (pathKeys.length === 0) {
      return newValue;
    }

    const [head, ...tail] = pathKeys;

    const copy = Array.isArray(obj) ? [...obj] : { ...(obj || {}) };

    copy[head] = updateNestedState(copy[head], tail, newValue);

    return copy;
  };
  const getResumeValue = (name: string): any => {
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
  const handleResumeChange = (e: any) => {
    const name = e.currentTarget.getAttribute("name") || e.target?.name;
    const type = e.currentTarget.getAttribute("datatype") || e.target?.datatype;
    // Supports both standard input/textarea (.value) and contenteditable divs (.textContent)
    let value: any = "";
    if (type === "boolean") {
      const currentValue = e.currentTarget.value;
      value = currentValue === "true" ? true : false;
    } else if (type === "htmlEditor") {
      value = e.target.innerHTML;
    } else {
      value =
        e.currentTarget.value !== undefined
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
    setResumeData((prevData) => updateNestedState(prevData, keys, value));
  };
  const updateResume = ({ propertyPath, value }: any) => {
    if (!propertyPath) return;

    const keys = propertyPath.split(".");

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
    setResumeData((prevData: any) => updateNestedState(prevData, keys, value));
  };
  const addResumeListItem = (pathLocation, newData, targetIndex = null) => {
    if (!pathLocation) return;

    const keys = pathLocation.split(".");

    // Helper to immutably navigate and update nested arrays/objects
    const insertIntoNestedArray = (obj, pathKeys, valueToInsert) => {
      if (pathKeys.length === 0) {
        // Base case: we reached the target array
        const targetArray = Array.isArray(obj) ? [...obj] : [];

        if (
          targetIndex !== null &&
          targetIndex >= 0 &&
          targetIndex <= targetArray.length
        ) {
          targetArray.splice(targetIndex, 0, valueToInsert); // Insert at specific position
        } else {
          targetArray.push(valueToInsert); // Append to end if index is not specified
        }
        return targetArray;
      }

      const [head, ...tail] = pathKeys;
      const isArray = Array.isArray(obj);
      const copy = isArray ? [...obj] : { ...obj };

      // Recursively step deeper down the object/array path
      copy[head] = insertIntoNestedArray(copy[head], tail, valueToInsert);
      return copy;
    };

    setResumeData((prevData) => {
      const listUpdateData = insertIntoNestedArray(prevData, keys, newData);
      console.log("listUpdateData==>>", listUpdateData);
      return { ...addPositionIndex(listUpdateData) };
    });
  };
  const handleSettingChange = ({
    propertyPath,
    value,
  }: {
    propertyPath: string;
    value: any;
  }) => {
    if (!propertyPath) return;

    const keys = propertyPath.split(".");

    setSetting((prevSetting: any) =>
      updateNestedState(prevSetting, keys, value),
    );
  };
  const handleToolbarChange = ({
    propertyPath,
    value,
  }: {
    propertyPath: string;
    value: any;
  }) => {
    if (!propertyPath) return;

    const keys = propertyPath.split(".");

    setToolBar((prevSetting: any) =>
      updateNestedState(prevSetting, keys, value),
    );
  };

  console.log("resumeData --->>>", resumeData);

  return {
    getResumeValue,
    handleResumeChange,
    handleSettingChange,
    handleToolbarChange,
    updateResume,
    addResumeListItem,
  };
};
