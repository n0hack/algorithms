function solution(n) {
  return Number(
    Array.from(String(n), (v) => Number(v))
      .sort((a, b) => b - a)
      .join('')
  );
}

// Better
const solution2 = (n) => {
  const result = [];
  while (n > 0) {
    result.push(n % 10);
    n = Math.floor(n / 10);
  }

  return Number(result.sort().reverse().join(''));
};

console.time('solve1');
solution(118372);
console.timeEnd('solve1');
console.time('solve2');
solution2(118372);
console.timeEnd('solve2');
