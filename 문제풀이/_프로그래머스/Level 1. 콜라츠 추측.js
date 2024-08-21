const solution = (num) => {
  let result = 0;

  while (num !== 1) {
    if (num % 2 === 0) num = Math.floor(num / 2);
    else if (num % 2 === 1) num = num * 3 + 1;
    result += 1;

    if (result === 500) {
      result = -1;
      break;
    }
  }

  return result;
};

const inputs = [6, 16, 626331];
inputs.forEach((input) => console.log(solution(input)));
console.log(Math.floor(-1.0));
