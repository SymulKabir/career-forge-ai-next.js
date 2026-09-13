import { RESUME_FORMAT } from "../components/ResumeEditor/constants/resumeForma";

 

const formatSections = (sections:any) => {
  const columnsMap = sections.reduce((acc:any, section:any) => {
    const col = section.column ?? 0;
    if (!acc[col]) acc[col] = [];
    acc[col].push(section);
    return acc;
  }, {});
  const columns = Object.values(columnsMap)
  return columns;
};
export const structuredResume = (data: any) => ({
  ...data,
  sections: null,
  columns: formatSections(data.sections),
});


export const getResumeFormat = (name: string): any => {
    if (!name) return "";

    const keys = name.split(".");
    let current: any = RESUME_FORMAT;
    for (const key of keys) {
      if (current === null || current === undefined) {
        return "";
      }
      current = current[key];
    }

    return current ?? "";
  };