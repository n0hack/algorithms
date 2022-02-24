const solution = (x, n) => {
  return Array.from({ length: n }, (_, i) => (i + 1) * x);
};

const inputs = [
  [2, 5],
  [4, 3],
  [-4, 2],
];
inputs.forEach((input) => console.log(solution(...input)));
