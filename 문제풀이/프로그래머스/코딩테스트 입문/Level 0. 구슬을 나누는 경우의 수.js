const factorial = (n) => (n === 1 ? 1 : n * factorial(n - 1));

const solution = (b, s) => (b === s ? 1 : Math.round(factorial(b) / (factorial(b - s) * factorial(s))));

console.log(solution(3, 2));
console.log(solution(5, 3));
console.log(solution(30, 30));
