const solution = (numbers) => {
  return 45 - numbers.reduce((a, b) => a + b);
};
solution([1, 2, 3, 4, 6, 7, 8, 0]);
