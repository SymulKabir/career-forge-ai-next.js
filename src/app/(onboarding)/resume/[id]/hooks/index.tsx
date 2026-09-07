import React from "react"
import { useResumeContext } from "../context/resume-editor-context"

const useResume = () => {
    const {setting, setSetting } = useResumeContext();

    const handleSettingChange = ({
        propertyPath,
        value,
    }: {
        propertyPath: string;
        value: any;
    }) => {
        console.log("hello form click")
        console.log("value -->>", value)
        console.log("propertyPath-->>", propertyPath)
        if (!propertyPath) return;

        const keys = propertyPath.split(".");

        const updateNestedState = (
            obj: any,
            pathKeys: string[],
            newValue: any
        ): any => {
            if (pathKeys.length === 0) {
                return newValue;
            }

            const [head, ...tail] = pathKeys;

            const copy = Array.isArray(obj)
                ? [...obj]
                : { ...(obj || {}) };

            copy[head] = updateNestedState(
                copy[head],
                tail,
                newValue
            );

            return copy;
        };

        setSetting((prevSetting: any) =>
            updateNestedState(prevSetting, keys, value)
        );
    };
    console.log("setting->", setting)
    return {
        handleSettingChange
    }
}



export { useResume }