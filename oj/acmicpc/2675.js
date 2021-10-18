const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const lines = Number(input[0]);

  for (let line = 1; line <= lines; line++) {
    let ans = '';
    let [iter, text] = input[line].split(' ');
    iter = Number(iter);

    Array.from(text).forEach((char) => {
      for (let i = 0; i < iter; i++) ans += char;
    });
    console.log(ans);
  }
  process.exit();
});
