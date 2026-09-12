export const addPositionIndex = (data: any) => {
  if (Array.isArray(data)) {
    return data.map((item: any, index: number) => {
      const updatedItem = addPositionIndex(item);
      if (updatedItem === null || typeof updatedItem !== "object") {
        return updatedItem;
      }
      return {
        ...updatedItem,
        positionIndex: index,
      };
    });
  }

  if (data && typeof data === "object") {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        addPositionIndex(value),
      ]),
    );
  }

  return data;
};

export const paginateResumeSections = ({
  pageHight,
  section,
  rowIndex,
  sectionIndex,
  pages,
  currentPageIndex,
  currentHeight,
  initSubSectionIndex = 0,
  sectionRefs,
  headerRef,
}: {
  pageHight: number;
  section: any;
  rowIndex: number;
  sectionIndex: number;
  pages: any[][];
  currentPageIndex: number;
  currentHeight: number;
  initSubSectionIndex?: number;
  headerRef?: React.MutableRefObject<HTMLDivElement | null>;
  sectionRefs: React.MutableRefObject<{
    [key: number]: HTMLDivElement | null;
  }>;
}) => {
  if (currentPageIndex === 0 && sectionIndex === 0 && headerRef?.current) {
    const headerHeight = headerRef.current.getBoundingClientRect().height || 0;
    currentHeight += headerHeight;
  }

  const el = sectionRefs.current[rowIndex][sectionIndex];

  if (!el) {
    return {
      currentPageIndex,
      currentHeight,
    };
  }
  const sectionHeight = el.getBoundingClientRect().height || 0;
  const subSections = el.querySelectorAll(".subsection-card");
  const sectionTitle = el.querySelector(".section-header-card");
  const sectionTitleHeight = sectionTitle?.getBoundingClientRect().height || 0;

  const renderedSectionHight = Array.from(subSections ?? [])
    .slice(0, initSubSectionIndex)
    .reduce((total, subsection) => {
      return total + subsection.getBoundingClientRect().height;
    }, 0);

  const unrenderedSectionHight = sectionHeight - renderedSectionHight;

  // Make sure current page exists
  if (!pages[currentPageIndex]) {
    pages[currentPageIndex] = [];
  }
  if (!pages[currentPageIndex][rowIndex]) {
    pages[currentPageIndex][rowIndex] = [];
  }

  if (currentHeight + unrenderedSectionHight <= pageHight) {
    pages[currentPageIndex][rowIndex].push({
      ...section,
      sectionHeight: unrenderedSectionHight,
    });

    return {
      currentPageIndex,
      currentHeight: currentHeight + unrenderedSectionHight,
    };
  }

  let totalSubSectionHeight = 0;
  let validItemIndex = 0;

  if (sectionTitleHeight) {
    totalSubSectionHeight += sectionTitleHeight;
  }

  for (let index = initSubSectionIndex; index < subSections.length; index++) {
    const element = subSections[index];

    const currentSubsectionHeight = element.getBoundingClientRect().height || 0;

    const nextHeight =
      currentHeight + totalSubSectionHeight + currentSubsectionHeight;
    if (nextHeight <= pageHight) {
      totalSubSectionHeight += currentSubsectionHeight;
      validItemIndex++;
    } else {
      break;
    }
  }

  const subsections = section.items || [];

  const validSubsections = subsections.slice(0, validItemIndex);

  const nextPageSubsections = subsections.slice(validItemIndex);

  if (validSubsections.length > 0) {
    pages[currentPageIndex][rowIndex].push({
      ...section,
      items: validSubsections,
      sectionHeight: totalSubSectionHeight,
    });
  }
  if (nextPageSubsections.length > 0) {
    currentPageIndex++;
    // pageHight = 0;
    // pages[currentPageIndex] = [];
    if (!pages[currentPageIndex]) {
      pages[currentPageIndex] = [];
    }
    if (!pages[currentPageIndex][rowIndex]) {
      pages[currentPageIndex][rowIndex] = [];
    }

    currentHeight = 0;
    const nextSection = {
      ...section,
      items: nextPageSubsections,
    };

    // if (currentPageIndex < 5) {
    return paginateResumeSections({
      pageHight,
      section: nextSection,
      rowIndex,
      sectionIndex,
      pages,
      currentPageIndex,
      currentHeight,
      initSubSectionIndex: validItemIndex,
      sectionRefs,
      headerRef,
    });
    // }
  } else {
    currentHeight = totalSubSectionHeight;
  }

  return {
    currentPageIndex,
    currentHeight,
  };
};

export const paginateResumeSections2 = ({
  pageHight,
  section,
  rowIndex,
  sectionIndex,
  pages,
  currentPageIndex,
  currentHeight,
  initSubSectionIndex = 0,
  sectionRefs,
  headerRef,
}: {
  pageHight: number;
  section: any;
  rowIndex: number;
  sectionIndex: number;
  pages: any[][];
  currentPageIndex: number;
  currentHeight: number;
  initSubSectionIndex?: number;
  headerRef?: React.MutableRefObject<HTMLDivElement | null>;
  sectionRefs: React.MutableRefObject<{
    [key: number]: HTMLDivElement | null;
  }>;
}) => {
  if (currentPageIndex === 0 && sectionIndex === 0 && headerRef?.current) {
    const headerHeight = headerRef.current.getBoundingClientRect().height || 0;
    currentHeight += headerHeight;
  }

  const el = sectionRefs.current[rowIndex][sectionIndex];

  if (!el) {
    return {
      currentPageIndex,
      currentHeight,
    };
  }
  const sectionHeight = el.getBoundingClientRect().height || 150;
  const subSections = el.querySelectorAll(".subsection-card");
  const renderedSectionHight = Array.from(subSections ?? [])
    .slice(0, initSubSectionIndex)
    .reduce((total, subsection) => {
      return total + subsection.getBoundingClientRect().height;
    }, 0);

  const unrenderedSectionHight = sectionHeight - renderedSectionHight;

  // Make sure current page exists
  if (!pages[currentPageIndex]) {
    pages[currentPageIndex] = [];
  }
  if (!pages[currentPageIndex][rowIndex]) {
    pages[currentPageIndex][rowIndex] = [];
  }

  if (currentHeight + unrenderedSectionHight <= pageHight) {
    pages[currentPageIndex][rowIndex].push({
      ...section,
      sectionHeight: unrenderedSectionHight,
    });

    return {
      currentPageIndex,
      currentHeight: currentHeight + unrenderedSectionHight,
    };
  }

  // return;

  let totalSubSectionHeight = 0;
  let validItemIndex = 0;

  for (let index = initSubSectionIndex; index < subSections.length; index++) {
    const element = subSections[index];

    const currentSubsectionHeight = element.getBoundingClientRect().height || 0;

    const nextHeight =
      currentHeight + totalSubSectionHeight + currentSubsectionHeight;
    if (nextHeight <= pageHight) {
      totalSubSectionHeight += currentSubsectionHeight;
      validItemIndex++;
    } else {
      break;
    }
  }

  const subsections = section.items || [];

  const validSubsections = subsections.slice(0, validItemIndex);

  const nextPageSubsections = subsections.slice(validItemIndex);

  if (validSubsections.length > 0) {
    pages[currentPageIndex][rowIndex].push({
      ...section,
      items: validSubsections,
      sectionHeight: totalSubSectionHeight,
    });
  }
  if (nextPageSubsections.length > 0) {
    currentPageIndex++;
    // pageHight = 0;
    // pages[currentPageIndex] = [];
    if (!pages[currentPageIndex]) {
      pages[currentPageIndex] = [];
    }
    if (!pages[currentPageIndex][rowIndex]) {
      pages[currentPageIndex][rowIndex] = [];
    }

    currentHeight = 0;
    const nextSection = {
      ...section,
      items: nextPageSubsections,
    };

    // if (currentPageIndex < 5) {
    return paginateResumeSections({
      pageHight,
      section: nextSection,
      rowIndex,
      sectionIndex,
      pages,
      currentPageIndex,
      currentHeight,
      initSubSectionIndex: validItemIndex,
      sectionRefs,
      headerRef,
    });
    // }
  } else {
    currentHeight = totalSubSectionHeight;
  }

  return {
    currentPageIndex,
    currentHeight,
  };
};
