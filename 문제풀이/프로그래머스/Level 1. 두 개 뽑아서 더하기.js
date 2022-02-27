const solution = (numbers) => {
  const res = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      res.push(numbers[i] + numbers[j]);
    }
  }
  res.sort((a, b) => a - b);
  // Set은 중복이 없는 데이터 집합
  return [...new Set(res)];
};

const inputs = [
  [2, 1, 3, 4, 1],
  [5, 0, 2, 7],
];
inputs.forEach((input) => console.log(solution(input)));
