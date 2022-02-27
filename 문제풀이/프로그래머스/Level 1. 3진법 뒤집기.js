const solution = (n) => {
  const trinary = [];
  let result = 0;

  while (n !== 0) {
    trinary.unshift(n % 3);
    n = Math.floor(n / 3);
  }

  let num = 1;
  for (let i = 0; i < trinary.length; i++, num *= 3) {
    result = result + num * trinary[i];
  }

  return result;
};

const inputs = [45, 125];
inputs.forEach((input) => console.log(solution(input)));
