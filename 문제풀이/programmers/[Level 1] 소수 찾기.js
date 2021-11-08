const solution = (n) => {
  const primes = Array.from({ length: n + 1 }, () => true);
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= n; i++) {
    if (!primes[i]) continue;
    for (let j = i + i; j <= n; j += i) {
      if (primes[j]) primes[j] = false;
    }
  }
  return primes.filter((p) => p).length;
};

console.log(solution(10));
console.log(solution(5));
console.log(solution(1000000));
