const solution = (numbers, n) => {
  let acc = 0;
  for (const number of numbers) {
    if (acc > n) return acc;
    acc += number;
  }
  return acc;
};

console.log(solution([34, 5, 71, 29, 100, 34], 123));
console.log(solution([58, 44, 27, 10, 100], 139));
