const getPrimeList = (n) => {
  const temp = Array.from({ length: n }, () => true);
  const ret = [];

  for (let i = 2; i <= n; i++) {
    if (temp[i - 1]) {
      ret.push(i);
      for (let j = i * 2; j <= n; j += i) {
        temp[j - 1] = false;
      }
    }
  }
  return ret;
};

const gcd = (x, y) => {
  if (y === 0) return x;
  return gcd(y, x % y);
};

const solution = (a, b) => {
  const g = gcd(a, b);
  [a, b] = [a / g, b / g];

  const primes = getPrimeList(b);
  for (const prime of primes) {
    if (prime === 2 || prime === 5) continue;
    if (b % prime === 0) return 2;
  }

  return 1;
};

console.log(solution(7, 20));
console.log(solution(11, 22));
console.log(solution(12, 21));
