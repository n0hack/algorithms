// 피보나치 수열 (메모이제이션)
const memo = Array.from({ length: 100 }, () => 0);
memo[0] = memo[1] = 1;

const fibo = (n) => {
  if (n < 2) return n;
  if (memo[n] !== 0) {
    return memo[n];
  } else {
    memo[n] = fibo(n - 1) + fibo(n - 2);
    return memo[n];
  }
};
console.log(fibo(10));
