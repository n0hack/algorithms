/**
 * 팩토리얼을 구하는 함수
 * @param {number} n
 */
const f = (n) => {
  if (n === 1) return 1;
  return n * f(n - 1);
};

/**
 * @param {number} balls
 * @param {number} share
 */
const solution = (balls, share) => {
  if (balls === share) return 1;
  return Math.round(f(balls) / (f(balls - share) * f(share)));
};

console.log(solution(1, 1));
console.log(solution(3, 2));
console.log(solution(5, 3));
