const memo = Array.from({ length: 100 });

const fibo = (n) => {
  if (n === 1 || n === 2) return 1;

  if (memo[n]) return memo[n];

  memo[n] = fibo(n - 1) + fibo(n - 2);
  return memo[n];
};

console.log(fibo(10));
