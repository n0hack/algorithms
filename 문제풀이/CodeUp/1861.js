const pascal = [];

const makePascal = (row, col, max) => {
  if (col > max) return;

  if (col === 0) pascal.push([]);
  if (max === 0) {
    pascal[0].push(1);
    process.stdout.write('1');
  } else {
    let first, second;

    if (col - 1 < 0) first = 0;
    else first = pascal[row - 1][col - 1];
    second = pascal[row - 1][col] ?? 0;

    pascal[row].push(first + second);
    process.stdout.write(`${first + second}`);
    makePascal(row, col + 1, max);
  }
};

const solution = (current, row) => {
  if (current >= row) {
    return;
  } else {
    makePascal(current, 0, current);
    console.log();
    solution(current + 1, row);
  }
};

let n = 4;
solution(0, n);
