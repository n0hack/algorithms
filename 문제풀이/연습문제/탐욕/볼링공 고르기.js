const solution = (n, m, k) => {
  // 볼링골 개수 카운트
  const list = Array.from({ length: n + 1 }, () => 0);
  for (const i of k) list[i]++;

  let result = 0;
  for (let i = 1; i <= m; i++) {
    n -= list[i];
    result += list[i] * n;
  }
  return result;
};

const inputs = [
  [5, 3, [1, 3, 2, 3, 2]],
  [8, 5, [1, 5, 4, 3, 2, 4, 5, 2]],
];
inputs.forEach((input) => console.log(solution(...input)));
