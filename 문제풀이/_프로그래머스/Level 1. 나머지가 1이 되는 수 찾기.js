const solution = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 1) return i;
  }
};

const inputs = [10, 12];
inputs.forEach((input) => console.log(solution(input)));
