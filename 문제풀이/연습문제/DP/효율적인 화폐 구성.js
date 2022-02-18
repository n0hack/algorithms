const [n, m] = [3, 4];
const array = [3, 5, 7];

const memo = Array.from({ length: m + 1 }, () => 10001);

memo[0] = 0;

for (const i of array) {
  for (let j = i; j <= m; j += i) {
    memo[j] = Math.min(memo[j], memo[j - i] + 1);
  }
}
console.log(memo[m] === 10001 ? -1 : memo[m]);
