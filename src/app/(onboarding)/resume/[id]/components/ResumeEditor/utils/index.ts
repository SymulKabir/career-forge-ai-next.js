export const addPositionIndex = (data: any) => {
  if (Array.isArray(data)) {
    return data.map((item, index) => {
      const updatedItem = addPositionIndex(item);

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
  originalIndex,
  pages,
  currentPageIndex,
  currentHeight,
  initSubSectionIndex = 0,
  sectionRefs,
  headerRef,
}: {
  pageHight: number;
  section: any;
  originalIndex: number;
  pages: any[][];
  currentPageIndex: number;
  currentHeight: number;
  initSubSectionIndex?: number;
  headerRef?: React.MutableRefObject<HTMLDivElement | null>;
  sectionRefs: React.MutableRefObject<{
    [key: number]: HTMLDivElement | null;
  }>;
}) => {
  if (currentPageIndex === 0 && originalIndex === 0 && headerRef?.current) {
    const headerHeight = headerRef.current.getBoundingClientRect().height || 0;
    currentHeight += headerHeight;
  }
  console.log("currentHeight after--->>>", currentHeight);

  const el = sectionRefs.current[originalIndex];
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
  console.log("============START=================");
  console.log("PAGE NUMBER-->>>", currentPageIndex + 1);
  console.log("el --->>>", el);
  console.log(
    "el.getBoundingClientRect().height  --->>>",
    el.getBoundingClientRect().height,
  );
  console.log("pageHight-->>>", pageHight);
  console.log(" -------------------");
  console.log("sectionHeight-->>>", sectionHeight);
  console.log("renderedSectionHight-->>>", renderedSectionHight);
  console.log(" -------------------");
  console.log("Total unrenderedSectionHight-->>>", unrenderedSectionHight);
  // Make sure current page exists
  if (!pages[currentPageIndex]) {
    pages[currentPageIndex] = [];
  }

  /*
   * =====================================================
   * CASE 1:
   * Entire section fits on current page
   * =====================================================
   */
  if (currentHeight + unrenderedSectionHight <= pageHight) {
    pages[currentPageIndex].push({
      ...section,
    });

    return {
      currentPageIndex,
      currentHeight: currentHeight + unrenderedSectionHight,
    };
  }

  /*
   * =====================================================
   * CASE 2:
   * Section doesn't fit.
   * Try to split using subsections.
   * =====================================================
   */

  // const subSections = el.querySelectorAll(".subsection-card");

  let totalSubSectionHeight = 0;
  let validItemIndex = 0;

  for (let index = initSubSectionIndex; index < subSections.length; index++) {
    const element = subSections[index];

    const currentSubsectionHeight = element.getBoundingClientRect().height || 0;

    const nextHeight =
      currentHeight + totalSubSectionHeight + currentSubsectionHeight;
    console.log("initSubSectionIndex->>", initSubSectionIndex);
    console.log("index->>", index);
    console.log("currentSubsectionHeight->>", currentSubsectionHeight);
    console.log("nextHeight->>", nextHeight);
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
    pages[currentPageIndex].push({
      ...section,
      items: validSubsections,
    });
  }
  if (nextPageSubsections.length > 0) {
    currentPageIndex++;
    // pageHight = 0;
    pages[currentPageIndex] = [];

    currentHeight = 0;
    const nextSection = {
      ...section,
      items: nextPageSubsections,
    };
    console.log("currentHeight before recursion-->>>", currentHeight);

    // if (currentPageIndex < 5) {
    return paginateResumeSections({
      pageHight,
      section: nextSection,
      originalIndex,
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