const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const numbers = input.map((item) => parseInt(item)).slice(1);

  numbers.sort((a, b) => a - b).reverse();
  console.log(numbers);
  process.exit();
});
