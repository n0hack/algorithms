const solution = (arr1, arr2) => {
  return arr1.map((col, i) => {
    return col.map((item, j) => {
      return item + arr2[i][j];
    });
  });
};

const inputs = [
  [
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ],
  ],
  [
    [[1], [2]],
    [[3], [4]],
  ],
];
inputs.forEach((input) => console.log(solution(...input)));
