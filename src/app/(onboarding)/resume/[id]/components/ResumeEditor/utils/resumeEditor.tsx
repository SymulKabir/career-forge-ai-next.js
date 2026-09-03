 export const px = (value?: number | string) => {
    if (value === undefined || value === null) return "0px";
    if (typeof value === "string")
      return value.includes("px") ? value : `${value}px`;
    return `${value}px`;
  };