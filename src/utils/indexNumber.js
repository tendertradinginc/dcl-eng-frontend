export const numberSerial = (index, pageLimit, currentPage) => {
  return index + 1 + (currentPage - 1) * pageLimit;
};
