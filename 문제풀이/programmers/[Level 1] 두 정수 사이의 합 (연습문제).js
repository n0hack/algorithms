function solution(a, b) {
  return Array.from({ length: Math.abs(a - b) + 1 }, (_, i) => (a < b ? a + i : b + i)).reduce((a, b) => a + b);
}

console.log(solution(3, 5));
console.log(solution(5, 3));
console.log(solution(3, 3));
