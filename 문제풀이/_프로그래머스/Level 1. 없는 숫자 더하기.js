const solution = (numbers) => {
  // 0부터 9까지의 숫자이므로, 총합인 45에서 빼면 됨
  return 45 - numbers.reduce((a, b) => a + b);
};

const inputs = [
  [1, 2, 3, 4, 6, 7, 8, 0],
  [5, 8, 4, 0, 6, 7, 9],
];
inputs.forEach((input) => console.log(solution(input)));
