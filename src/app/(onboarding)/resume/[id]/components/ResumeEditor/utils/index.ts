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