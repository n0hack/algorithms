const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(Number(line));
}).on('close', () => {
  const count = Array.from({ length: 10 }, () => 0);

  let sum = input.reduce((pre, cur) => {
    return pre * cur;
  }, 1);

  while (sum !== 0) {
    count[sum % 10]++;
    sum = Math.floor(sum / 10);
  }

  console.log(count.join('\n'));
  process.exit();
});
