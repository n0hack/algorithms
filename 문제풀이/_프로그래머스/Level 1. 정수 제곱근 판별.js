const solution = (n) => {
  return n % Math.sqrt(n) === 0 ? (Math.sqrt(n) + 1) ** 2 : -1;
};

const inputs = [121, 3];
inputs.forEach((input) => console.log(solution(input)));
