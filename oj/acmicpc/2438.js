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
    for (let j = 0; j <= i; j++) {
      process.stdout.write('*');
    }
    process.stdout.write('\n');
  }
  process.exit();
});
