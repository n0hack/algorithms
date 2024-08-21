const solution = (a, b, c, d) => {
  const arr = [a, b, c, d];
  const set = new Set(arr);

  switch (set.size) {
    case 1:
      return a * 1111;
    case 2:
      const [p, q] = [...set];
      if (arr.some((x) => arr.filter((v) => v === x).length === 3)) {
        if (arr.filter((v) => v === p).length === 3) return (10 * p + q) ** 2;
        else return (10 * q + p) ** 2;
      } else {
        return (p + q) * Math.abs(p - q);
      }
    case 3:
      const values = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr.filter((v) => v === arr[i]).length === 1) values.push(arr[i]);
      }
      return values.reduce((a, b) => a * b);
    case 4:
      return Math.min(...arr);
  }
};

console.log(solution(2, 2, 2, 2));
console.log(solution(4, 1, 4, 4));
console.log(solution(6, 3, 3, 6));
console.log(solution(2, 5, 2, 6));
console.log(solution(6, 4, 2, 5));
