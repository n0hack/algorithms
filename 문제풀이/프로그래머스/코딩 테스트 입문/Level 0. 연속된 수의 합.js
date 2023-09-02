const solution = (num, total) => {
  const avg = Math.floor(total / num);
  return Array.from({ length: num }, (_, i) => i + (avg - Math.floor((num - 1) / 2)));
};

console.log(solution(1, 1));
console.log(solution(3, 12));
console.log(solution(7, 336));
