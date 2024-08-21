const solution = (n) => {
  const numbers = Array.from(n + '', (v) => parseInt(v));
  return numbers.reduce((a, b) => a + b);
};

const inputs = [123, 987];
inputs.forEach((input) => console.log(solution(input)));
