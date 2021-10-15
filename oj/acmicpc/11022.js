const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  for (let i = 1; i <= Number(input[0]); i++) {
    let [num1, num2] = input[i].split(' ');
    [num1, num2] = [Number(num1), Number(num2)];

    console.log(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`);
  }
  process.exit();
});
