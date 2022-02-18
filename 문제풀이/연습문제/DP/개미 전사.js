const n = 4;
const array = [1, 3, 1, 5];

const memo = Array.from({ length: 100 }, () => 0);
memo[0] = array[0];
memo[1] = Math.max(array[0], array[1]);

for (let i = 2; i < n; i++) {
  memo[i] = Math.max(memo[i - 1], memo[i - 2] + array[i]);
}
console.log(memo[n - 1]);
