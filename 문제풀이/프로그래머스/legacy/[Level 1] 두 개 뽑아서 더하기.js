const solution = (numbers) => {
  const set = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 1 + i; j < numbers.length; j++) {
      set.add(numbers[i] + numbers[j]);
    }
  }
  return [...set].sort((a, b) => a - b);
};

solution([2, 1, 3, 4, 1]);
