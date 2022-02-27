const solution = (d, budget) => {
  let count = 0;

  d.sort((a, b) => a - b);
  for (const v of d) {
    budget -= v;
    if (budget < 0) break;
    count++;
  }

  return count;
};

const inputs = [
  [[1, 3, 2, 5, 4], 9],
  [[2, 2, 3, 3], 10],
];
inputs.forEach((input) => console.log(solution(...input)));
