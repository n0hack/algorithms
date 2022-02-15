const solution = (n, m, arr) => {
  return Math.max(
    ...arr.map((row) => {
      return Math.min(...row);
    })
  );
};

console.log(
  solution(3, 3, [
    [3, 1, 2],
    [4, 1, 4],
    [2, 2, 2],
  ])
);

console.log(
  solution(2, 4, [
    [7, 3, 1, 8],
    [3, 3, 3, 4],
  ])
);
