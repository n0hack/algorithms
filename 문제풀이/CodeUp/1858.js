const solution = (a, b) => {
  if (a === 1 || a === b || b === 1) return 1;
  return solution(a - 1, b - 1) + solution(a - 1, b);
};

let [n, k] = [5, 3];
console.log(solution(n, k));
