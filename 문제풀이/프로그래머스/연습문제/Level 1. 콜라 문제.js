const solution = (a, b, n) => {
  let coke = 0;

  while (n >= a) {
    const next = Math.floor(n / a) * b;
    coke += next;
    n = next + n - Math.floor(next / b) * a;
  }

  return coke;
};

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));
console.log(solution(6, 2, 20));
