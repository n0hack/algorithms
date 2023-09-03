const solution = (lines) => {
  const line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100] += 1;
  });

  return line.reduce((a, b) => (b > 1 ? a + 1 : a), 0);
};

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
);
console.log(
  solution([
    [-1, 1],
    [1, 3],
    [3, 9],
  ])
);
console.log(
  solution([
    [0, 5],
    [3, 9],
    [1, 10],
  ])
);
