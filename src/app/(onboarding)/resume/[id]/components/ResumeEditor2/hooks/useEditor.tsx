import React from "react"
import { useResumeContext } from "../../../context/resume-editor-context"

const Index = () => {
    const {
        activeTool,
        setActiveTool,
        setting,
        setSetting,
        resumeData,
        setResumeData,
    } = useResumeContext()

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
        const value = e.currentTarget.value !== undefined
            ? e.currentTarget.value
            : e.currentTarget.textContent;

        if (!name) return;

        const keys = name.split(".");

        // Helper to immutably update nested objects and arrays
        const updateNestedState = (obj: any, pathKeys: string[], newValue: any): any => {
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
    const splitAndCreateItem = async (e: any) => {
        const name = e.currentTarget.getAttribute("name") || e.target?.name;
        const value = e.currentTarget.value !== undefined
            ? e.currentTarget.value
            : e.currentTarget.textContent;

        if (!name) return;

        const keys = name.split(".");
        // The last key is usually the property name or array index
        const targetIndex = Number(keys[keys.length - 1]);

        // If it's not pointing to an array item index, fall back or handle parent array
        if (isNaN(targetIndex)) {
            console.warn("Path does not point to a specific array index for item creation.");
            return;
        }

        // Path to the parent array (everything except the index)
        const arrayKeys = keys.slice(0, -1);

        setResumeData((prevData) => {
            const updated = JSON.parse(JSON.stringify(prevData)); // Deep copy for safety

            // Traverse to the parent array
            let parent = updated;
            console.log("parent -->>", parent)
            for (const key of arrayKeys) {
                console.log("key -->>", key)
                parent = parent[key];
                console.log("inner parent -->>", parent)
            }
            console.log("end of parent -->>", parent)


            if (Array.isArray(parent)) {
                // Optional: If you want to split text (e.g., cursor split on Enter)
                // For now, let's assume it creates a new item/blank item right after, 
                // or splits the text if it's a string array (like bullet points).

                const newItem = typeof parent[targetIndex] === "object"
                    ? { ...parent[targetIndex], id: crypto.randomUUID?.() || Date.now().toString(), title: "", description: "" }
                    : ""; // or split text if string array

                // Insert the new item right after the current index
                parent.splice(targetIndex + 1, 0, newItem);
            }

            return updated;
        });
    };

    return { getValue, handleInputChange, splitAndCreateItem }
}



export default Index