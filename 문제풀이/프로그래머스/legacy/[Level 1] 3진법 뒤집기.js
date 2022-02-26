const solution = (n) => {
  const result = [];

  while (n !== 0) {
    result.unshift(n % 3);
    n = Math.floor(n / 3);
  }

  return result.reduce((a, b, i) => a + b * 3 ** i, 0);
};
solution(45);
solution(125);
