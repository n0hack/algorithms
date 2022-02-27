const solution = (a, b) => {
  return a.map((v, i) => v * b[i]).reduce((a, b) => a + b);
};

// prettier-ignore
const inputs = [
  // [a, b]
  [[1,2,3,4], [-3,-1,0,2]],
  [[-1,0,1], [1,0,-1]],
]
inputs.forEach((input) => console.log(solution(...input)));
