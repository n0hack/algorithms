const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const greater = Number(input[0].split(' ')[1]);
  input[1].split(' ').forEach((num) => {
    if (greater > Number(num)) process.stdout.write(`${num} `);
  });
  process.stdout.write('\n');
  process.exit();
});
