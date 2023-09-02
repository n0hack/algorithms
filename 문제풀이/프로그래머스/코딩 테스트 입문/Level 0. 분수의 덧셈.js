const primes = (() => {
  const arr = new Array(1001).fill(true);

  arr[0] = arr[1] = false;
  for (let i = 2; i < arr.length; i++) {
    for (let j = i + i; j < arr.length; j += i) {
      arr[j] = false;
    }
  }

  return arr.map((v, i) => (v ? i : v)).filter((v) => v);
})();

const gcd = (n1, n2) => {
  return n2 ? gcd(n2, n1 % n2) : n1;
};

const lcm = (n1, n2) => {
  return (n1 * n2) / gcd(n1, n2);
};

const solution = (numer1, denom1, numer2, denom2) => {
  let denom = lcm(denom1, denom2);
  let numer = numer1 * Math.floor(lcm(denom1, denom2) / denom1) + numer2 * Math.floor(lcm(denom1, denom2) / denom2);

  for (const prime of primes) {
    while (numer % prime === 0 && denom % prime === 0) {
      [numer, denom] = [numer / prime, denom / prime];
    }
  }

  return [numer, denom];
};

console.log(solution(1, 2, 3, 4));
console.log(solution(9, 2, 1, 3));
console.log(solution(3, 15, 4, 18));
console.log(solution(40, 2, 500, 50));
