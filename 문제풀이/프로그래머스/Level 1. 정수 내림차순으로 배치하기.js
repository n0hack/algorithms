const solution = (n) => {
  return Number(
    Array.from(String(n), (v) => Number(v))
      .sort((a, b) => b - a)
      .join('')
  );
};
const inputs = [118372];
inputs.forEach((input) => console.log(solution(input)));
