const solution = (a, d, included) => {
  return included
    .map((v, i) => (v ? a + d * i : v))
    .filter((v) => v)
    .reduce((a, b) => a + b);
};

console.log(solution(3, 4, [true, false, false, true, true]));
console.log(solution(7, 1, [false, false, false, true, false, false, false]));
