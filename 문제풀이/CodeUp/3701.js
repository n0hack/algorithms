const pascal = [];
let n = 5; // 입력

for (let i = 0; i < n; i++) {
  if (i === 0) {
    pascal.push([1]);
    continue;
  }
  for (let j = 0; j <= i; j++) {
    if (j === 0) pascal.push([]);

    let left, right;
    if (j - 1 < 0) left = 0;
    else left = pascal[i - 1][j - 1];
    right = pascal[i - 1][j] ?? 0;

    pascal[i][j] = left + right;
  }
}

pascal.forEach((row, i) => {
  row.forEach((_, j) => {
    process.stdout.write(`${pascal[i][j]} `);
  });
  if (i < pascal.length - 1) console.log();
});
