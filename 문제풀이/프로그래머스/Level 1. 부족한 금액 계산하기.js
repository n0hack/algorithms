const solution = (price, money, count) => {
  const answer = (price * count * (count + 1)) / 2 - money;
  return answer;
};

const inputs = [[3, 20, 4]];
inputs.forEach((input) => console.log(solution(...input)));
