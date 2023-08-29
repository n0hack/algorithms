const solution = (arr) => {
  return arr.map((v) => {
    if (!(v % 2) && v >= 50) return v / 2;
    else if (v % 2 && v < 50) return v * 2;
    else return v;
  });
};

console.log(solution([1, 2, 3, 100, 99, 98]));
