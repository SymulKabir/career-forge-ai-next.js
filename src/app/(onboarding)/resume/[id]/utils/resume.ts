import { RESUME_FORMAT } from "../components/ResumeEditor/constants/resumeForma";



const formatSections = (sections: any) => {
  const columnsMap = sections.reduce((acc: any, section: any) => {
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


export const moveData = (data, fromPath, toPath, fromIndex, toIndex) => {
  const clone = structuredClone(data);

  const fromArray = getValue(clone, fromPath);
  const toArray = getValue(clone, toPath);

  if (!Array.isArray(fromArray)) {
    throw new Error(`Source path is not an array: ${pathToString(fromPath)}`);
  }

  if (!Array.isArray(toArray)) {
    throw new Error(`Target path is not an array: ${pathToString(toPath)}`);
  }

  if (fromIndex < 0 || fromIndex >= fromArray.length) {
    throw new Error(`Invalid fromIndex: ${fromIndex}`);
  }

  const [item] = fromArray.splice(fromIndex, 1);

  // If moving inside the same array and removing an earlier
  // element, target index needs adjustment.
  let finalIndex = toIndex;

  if (
    samePath(fromPath, toPath) &&
    fromIndex < toIndex
  ) {
    finalIndex -= 1;
  }

  finalIndex = Math.max(
    0,
    Math.min(finalIndex, toArray.length)
  );

  toArray.splice(finalIndex, 0, item);

  return clone;
}