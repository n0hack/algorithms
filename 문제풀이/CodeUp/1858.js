const pascal = [];

const makePascal = (row, col, max) => {
  if (col > max) return;

  if (col === 0) pascal.push([]);
  if (max === 0) pascal[0].push(1);
  else {
    let first, second;

    if (col - 1 < 0) first = 0;
    else first = pascal[row - 1][col - 1];
    second = pascal[row - 1][col] ?? 0;

    pascal[row].push(first + second);
    makePascal(row, col + 1, max);
  }
};

const solution = (current, row, col) => {
  if (current >= row) {
    return pascal[row - 1][col - 1];
  } else {
    makePascal(current, 0, current);
    return solution(current + 1, row, col);
  }
};

let [n, k] = [5, 2];
console.log(solution(0, n, k));
console.log(pascal);
