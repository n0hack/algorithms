const solution = (phone_number) => {
  const [left, right] = [phone_number.slice(0, -4), phone_number.slice(-4)];
  return left.replace(/\d/g, '*') + right;
};
const inputs = ['01033334444', '027778888'];
inputs.forEach((input) => console.log(solution(input)));
