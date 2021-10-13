const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ').map((el) => parseInt(el));
}).on('close', function () {
  let hour = input[0];
  let min = input[1];

  if (min - 45 < 0) {
    min = 60 + min - 45;
    hour -= 1;
  } else {
    min = min - 45;
  }

  if (hour < 0) {
    hour = 23;
  }

  console.log(`${hour} ${min}`);
  process.exit();
});
