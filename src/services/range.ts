export const range = (length: number, start: number = 0, step: number = 1) => {
  const rangeArray = [];
  for (let i = start; i < length * step + start; i += step) {
    rangeArray.push(i);
  }
  return rangeArray;
};
