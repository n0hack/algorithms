const toList = (n) => {
  const list = [];
  for (let i = 1; i <= n; i++) {
    list.push(i);
  }
  return list;
};

const solution = (n) => {
  return toList(n)
    .filter((v) => n % v === 0)
    .reduce((a, b) => a + b, 0);
};

const inputs = [12, 5];
inputs.forEach((input) => console.log(solution(input)));
