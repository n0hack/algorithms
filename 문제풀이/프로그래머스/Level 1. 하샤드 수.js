const solution = (x) => {
  const sum = Array.from(String(x)).reduce((a, b) => a + Number(b), 0);
  return x % sum === 0;
};

const inputs = [10, 12, 11, 13];
inputs.forEach((input) => console.log(solution(input)));
