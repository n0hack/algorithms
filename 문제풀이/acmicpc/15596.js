function solve(a) {
  return a.reduce((pre, cur) => pre + cur, 0);
}
console.log(solve([1, 2, 3, 4, 5]));
