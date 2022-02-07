const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const [n, k] = input[0].split(' ').map((item) => parseInt(item));

  const arrA = input[1].split(' ').map((item) => parseInt(item));
  const arrB = input[2].split(' ').map((item) => parseInt(item));

  arrA.sort((a, b) => a - b);
  arrB.sort((a, b) => b - a);

  for (let i = 0; i < k; i++) [arrA[i], arrB[i]] = [arrB[i], arrA[i]];

  console.log(arrA.reduce((cur, pre) => cur + pre, 0));
  process.exit();
});
