const solution = (arr) => {
  const sum = arr.reduce((a, b) => a + b);
  return sum / arr.length;
};

const inputs = [
  [1, 2, 3, 4],
  [5, 5],
];
inputs.forEach((input) => console.log(solution(input)));
