const solution = (s) => {
  const numbers = [...s].map((v) => parseInt(v));

  let result = 0;
  for (const num of numbers) {
    if (num <= 1 || result <= 1) result += num;
    else result *= num;
  }
  return result;
};

const inputs = ['02984', '567'];
inputs.forEach((input) => console.log(solution(input)));
