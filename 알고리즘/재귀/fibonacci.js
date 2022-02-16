const memo = Array.from({ length: 100 }, () => 0);
[memo[1], memo[2]] = [1, 1];

const fibo = (n) => {
  if (memo[n]) return memo[n];
  else {
    memo[n] = fibo(n - 1) + fibo(n - 2);
    return memo[n];
  }
};

for (let i = 1; i <= 10; i++) {
  console.log(fibo(i));
}
