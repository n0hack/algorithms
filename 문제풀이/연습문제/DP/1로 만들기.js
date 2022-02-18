// 호출 횟수
const memo = Array.from({ length: 30000 }, () => 0);

// Bottom-up
for (let i = 2; i <= 30001; i++) {
  memo[i] = memo[i - 1] + 1;

  if (i % 2 === 0) memo[i] = Math.min(memo[i], memo[i / 2] + 1);
  if (i % 3 === 0) memo[i] = Math.min(memo[i], memo[i / 3] + 1);
  if (i % 5 === 0) memo[i] = Math.min(memo[i], memo[i / 5] + 1);
}
console.log(memo[6]);
