const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num;

rl.on('line', function (line) {
  num = Number(line);
}).on('close', function () {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i - 1; j++) {
      process.stdout.write(' ');
    }
    for (let k = 0; k <= i; k++) {
      process.stdout.write('*');
    }
    process.stdout.write('\n');
  }
  process.exit();
});
