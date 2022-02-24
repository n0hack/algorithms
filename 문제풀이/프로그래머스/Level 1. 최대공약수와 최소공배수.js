// 최대 공약수
const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

// 최소 공배수
const lcm = (a, b) => {
  return Math.floor((a * b) / gcd(a, b));
};

const solution = (n, m) => {
  // 최대 공약수 계산을 위해 큰 값을 왼쪽으로 이동
  if (n < m) [n, m] = [m, n];

  let result1 = gcd(n, m);
  let result2 = lcm(n, m);

  return [result1, result2];
};

const inputs = [
  // [n, m]
  [3, 12],
  [2, 5],
];
inputs.forEach((input) => console.log(solution(...input)));
