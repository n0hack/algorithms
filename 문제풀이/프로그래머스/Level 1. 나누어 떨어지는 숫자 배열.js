const solution = (arr, divisor) => {
  const answer = arr.filter((v) => !(v % divisor)).sort((a, b) => a - b);
  return answer.length ? answer : [-1];
};

const inputs = [
  [[5, 9, 7, 10], 5],
  [[2, 36, 1, 3], 1],
  [[3, 2, 6], 10],
];
inputs.forEach((input) => console.log(solution(...input)));
