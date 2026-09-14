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
  const { resumeData, setResumeData, setting, setSetting, setToolBar } =
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
  const addResumeListItem = (pathLocation: string, newData: any, targetIndex: number | null = null) => {
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
      return { ...addPositionIndex(listUpdateData) };
    });
  };
  const getSettingValue = (name: string): any => {
    if (!name) return "";

    const keys = name.split(".");
    let current: any = setting
    for (const key of keys) {
      if (current === null || current === undefined) {
        return "";
      }
      current = current[key];
    }

    return current ?? "";
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
  const swapResumeData = ({
  fromPath,
  fromIndex,
  toPath,
  toIndex,
}: {
  fromPath: string;
  fromIndex: number;
  toPath: string;
  toIndex: number;
}) => {
  if (!fromPath || !toPath) return;

  console.log(
    "=================START RESUME MOVE==============",
  );

  const getNestedValue = (
    obj: any,
    path: string,
  ): any => {
    if (!path) return obj;

    return path.split(".").reduce(
      (current, key) => {
        if (
          current === null ||
          current === undefined
        ) {
          return undefined;
        }

        return current[key];
      },
      obj,
    );
  };

  const updateNestedValue = (
    obj: any,
    pathKeys: string[],
    updater: (value: any) => any,
  ): any => {
    if (pathKeys.length === 0) {
      return updater(obj);
    }

    const [head, ...tail] = pathKeys;

    const copy = Array.isArray(obj)
      ? [...obj]
      : { ...(obj || {}) };

    copy[head] = updateNestedValue(
      copy[head],
      tail,
      updater,
    );

    return copy;
  };

  setResumeData((prevData: any) => {
    const fromArray = getNestedValue(
      prevData,
      fromPath,
    );

    const toArray = getNestedValue(
      prevData,
      toPath,
    );

    // -----------------------------
    // Validate source
    // -----------------------------

    if (!Array.isArray(fromArray)) {
      console.error(
        `Source is not an array: ${fromPath}`,
      );

      return prevData;
    }

    // -----------------------------
    // Validate target
    // -----------------------------

    if (!Array.isArray(toArray)) {
      console.error(
        `Target is not an array: ${toPath}`,
      );

      return prevData;
    }

    // -----------------------------
    // Validate indexes
    // -----------------------------

    if (
      fromIndex < 0 ||
      fromIndex >= fromArray.length
    ) {
      console.error(
        `Invalid fromIndex: ${fromIndex}`,
      );

      return prevData;
    }

    if (
      toIndex < 0 ||
      toIndex >= toArray.length
    ) {
      console.error(
        `Invalid toIndex: ${toIndex}`,
      );

      return prevData;
    }

    // =================================================
    // SAME ARRAY
    // =================================================

    if (fromPath === toPath) {
      const result = updateNestedValue(
        prevData,
        fromPath.split("."),
        (array: any[]) => {
          const newArray = [...array];

          // Swap values
          const temp = newArray[fromIndex];

          newArray[fromIndex] =
            newArray[toIndex];

          newArray[toIndex] = temp;

          return newArray;
        },
      );

      // Recalculate positionIndex
      return addPositionIndex(result);
    }

    // =================================================
    // DIFFERENT ARRAYS
    // =================================================

    const sourceItem = fromArray[fromIndex];
    const targetItem = toArray[toIndex];

    // Replace source position with target item
    let result = updateNestedValue(
      prevData,
      fromPath.split("."),
      (array: any[]) => {
        const newArray = [...array];

        newArray[fromIndex] = targetItem;

        return newArray;
      },
    );

    // Replace target position with source item
    result = updateNestedValue(
      result,
      toPath.split("."),
      (array: any[]) => {
        const newArray = [...array];

        newArray[toIndex] = sourceItem;

        return newArray;
      },
    );

    // Recalculate positionIndex
    return addPositionIndex(result);
  });
};
console.log("resumeData--->>", resumeData)
  return {
    getResumeValue,
    handleResumeChange,
    handleSettingChange,
    handleToolbarChange,
    updateResume,
    addResumeListItem,
    getSettingValue,
    swapResumeData
  };
};

