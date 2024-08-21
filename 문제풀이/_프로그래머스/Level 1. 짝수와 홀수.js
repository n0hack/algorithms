const solution = (num) => {
  return num % 2 === 0 ? 'Even' : 'Odd';
};

const inputs = [3, 4];
inputs.forEach((input) => console.log(solution(input)));
