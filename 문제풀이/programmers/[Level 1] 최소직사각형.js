const solution = (sizes) => {
  let w = 0;
  let h = 0;

  sizes.forEach((size) => {
    const [a, b] = size.sort((a, b) => a - b);
    if (w < a) w = a;
    if (h < b) h = b;
  });

  return w * h;
};

solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);
// solution([
//   [10, 7],
//   [12, 3],
//   [8, 15],
//   [14, 7],
//   [5, 15],
// ]);
// solution([
//   [14, 4],
//   [19, 6],
//   [6, 16],
//   [18, 7],
//   [7, 11],
// ]);
