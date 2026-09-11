 

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
