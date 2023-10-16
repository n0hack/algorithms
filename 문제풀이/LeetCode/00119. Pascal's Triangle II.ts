import { test } from './utils/test';

const getRow = (rowIndex: number): number[] => {
  const triangle = [];

  for (let i = 0; i <= rowIndex; i++) {
    triangle.push(new Array(i + 1));
    triangle[i][0] = triangle[i][triangle[i].length - 1] = 1;
    for (let j = 1; j < triangle[i].length - 1; j++) {
      const left = triangle[i - 1][j - 1];
      const right = triangle[i - 1][j];
      triangle[i][j] = left + right;
    }
  }

  return triangle[rowIndex];
};

const getRowFastVersion = (rowIndex: number): number[] => {
  const row: number[] = [1];
  for (let i = 1; i <= rowIndex; i++) {
    row.push(Math.floor((row[i - 1] * (rowIndex - i + 1)) / i));
  }
  return row;
};

// test(() => getRow(3));
// test(() => getRow(0));
// test(() => getRow(1));
// test(() => getRowFastVersion(3));
// test(() => getRowFastVersion(0));
// test(() => getRowFastVersion(1));
