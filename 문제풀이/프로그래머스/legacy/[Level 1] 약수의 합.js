const toList = (n) => {
  const res = [];
  for (let i = 1; i <= n; i++) {
    res.push(i);
  }
  return res;
};

const solution = (n) => {
  return toList(n)
    .filter((a) => n % a === 0)
    .reduce((a, b) => a + b, 0);
};
console.log(solution(12));
console.log(solution(5));
