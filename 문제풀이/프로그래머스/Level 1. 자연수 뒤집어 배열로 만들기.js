const solution = (n) => {
  return Array.from(String(n), (v) => parseInt(v)).sort((a, b) => b - a);
};

const inputs = [12345];
inputs.forEach((input) => console.log(solution(input)));
