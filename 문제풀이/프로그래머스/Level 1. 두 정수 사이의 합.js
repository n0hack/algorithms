const solution = (a, b) => {
  // 배열 생성
  const array = Array.from({ length: Math.abs(a - b) + 1 }, (_, i) => (a < b ? a + i : a - i));
  return array.reduce((a, b) => a + b);
};

const inputs = [
  [3, 5],
  [3, 3],
  [5, 3],
];
inputs.forEach((input) => console.log(solution(...input)));
