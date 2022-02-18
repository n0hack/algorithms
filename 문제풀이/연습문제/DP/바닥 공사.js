const memo = Array.from({ length: 1001 }, () => 0);
memo[1] = 1;
memo[2] = 3;

for (let i = 3; i < 1001; i++) {
  memo[i] = (memo[i - 1] + memo[i - 2] * 2) % 796796;
}
console.log(memo[3]);
