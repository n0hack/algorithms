const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const num = Number(input[0]);
  let numbers = input[1].split(' ').map((v) => Number(v));

  const max = numbers.reduce((pre, cur) => {
    return pre < cur ? cur : pre;
  }, 0);

  const result = numbers.reduce((pre, cur) => {
    return pre + (cur / max) * 100;
  }, 0);

  console.log(result / num);
  process.exit();
});
