const solution = (scores) => {
  const mapped = scores.map((v, i) => [(v[0] + v[1]) / 2, i]).sort((a, b) => b[0] - a[0]);
  let rank = 1;

  mapped[0].push(rank);
  for (let i = 1; i < mapped.length; i++) {
    rank++;
    if (mapped[i - 1][0] === mapped[i][0]) {
      mapped[i].push(mapped[i - 1][2]);
    } else {
      mapped[i].push(rank);
    }
  }

  return mapped.sort((a, b) => a[1] - b[1]).map((v) => v[2]);
};

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
);

console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
);
