const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(Number(line));
}).on('close', () => {
  let idx = -1;
  let max = -1;

  input.forEach((v, i) => {
    if (max < v) {
      max = v;
      idx = i + 1;
    }
  });

  console.log(max);
  console.log(idx);
  process.exit();
});
