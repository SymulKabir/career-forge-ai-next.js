interface ResumeSection {
  position?: number;
  column?: number;
  [key: string]: unknown;
}

interface FormattedColumn {
  column: number;
  sections: Omit<ResumeSection, "position" | "column">[];
}

interface FormattedRow {
  row: number;
  columns: FormattedColumn[];
}

interface StructuredResume<T extends Record<string, unknown>> extends Omit<T, "sections"> {
  sections: FormattedRow[];
}


const formatSections = (sections) => {
  // 1. Find the maximum column index dynamically
  const maxColumn = Math.max(...sections.map(s => s.column ?? 0));

  // 2. Group sections by column first
  const columnsMap = sections.reduce((acc, section) => {
    const col = section.column ?? 0;
    if (!acc[col]) acc[col] = [];
    acc[col].push(section);
    return acc;
  }, {});

  // 3. Find the maximum number of sections in any single column to determine total rows
  const maxRows = Math.max(...Object.values(columnsMap).map(col => col.length));

  // 4. Transform into a row-based array format: [ { row: 0, columns: [secCol0, secCol1, ...] }, ... ]
  const reformattedRows = Array.from({ length: maxRows }, (_, rowIndex) => {
    const rowData = { row: rowIndex, columns: {} };

    for (let c = 0; c <= maxColumn; c++) {
      // Assign the section for this column at this row index, or null if it doesn't exist
      rowData.columns[c] = columnsMap[c]?.[rowIndex] || null;
    }

    return rowData;
  });

  return [...reformattedRows]
}
export const structuredResume = <T extends Record<string, unknown>>(
  data: T & { sections: ResumeSection[] }
): StructuredResume<T> => ({
  ...data,
  sections: formatSections(data.sections),
});