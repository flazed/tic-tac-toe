import { range } from '@services/range';

type WinStrategy = {
  cols: number[][],
  leftDiagonal: number[],
  rightDiagonal: number[],
  rows: number[][],
};

export const getWinStrategy = (side: number): WinStrategy => {
  const winFields: WinStrategy = {
    cols: [],
    leftDiagonal: [],
    rightDiagonal: [],
    rows: [],
  };

  for (const i of range(side)) {
    winFields.rows.push(range(side, i * side));
    winFields.cols.push(range(side, i, side));

    const leftDiagonalValue = !Number.isNaN(winFields.leftDiagonal.slice(-1)[0] ?? NaN)
      ? (winFields.leftDiagonal.slice(-1)[0] + side + 1)
      : i;
    const rightDiagonalValue = !Number.isNaN(winFields.rightDiagonal.slice(-1)[0] ?? NaN)
      ? (winFields.rightDiagonal.slice(-1)[0] + side - 1)
      : side - 1;

    winFields.leftDiagonal.push(leftDiagonalValue);
    winFields.rightDiagonal.push(rightDiagonalValue);
  }

  return winFields;
};
