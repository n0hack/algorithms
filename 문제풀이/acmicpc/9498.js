const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = Number(line);
}).on('close', function () {
  if (90 <= input && input <= 100) console.log('A');
  else if (80 <= input && input <= 89) console.log('B');
  else if (70 <= input && input <= 79) console.log('C');
  else if (60 <= input && input <= 69) console.log('D');
  else console.log('F');
  process.exit();
});
