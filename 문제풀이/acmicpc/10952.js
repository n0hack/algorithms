const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let i = 0;
  let length = input.length;

  while (i < length) {
    let [num1, num2] = input[i++].split(' ');
    [num1, num2] = [Number(num1), Number(num2)];

    if (num1 === 0) break;

    console.log(num1 + num2);
  }

  process.exit();
});
