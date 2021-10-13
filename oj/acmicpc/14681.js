const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(Number(line));
}).on('close', () => {
  if (input[0] > 0 && input[1] > 0) {
    console.log(1);
  } else if (input[0] > 0 && input[1] < 0) {
    console.log(4);
  } else if (input[0] < 0 && input[1] < 0) {
    console.log(3);
  } else if (input[0] < 0 && input[1] > 0) {
    console.log(2);
  }
  process.exit();
});
