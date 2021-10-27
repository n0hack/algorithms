const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  let [text1, text2] = [...input];
  let num1 = '';
  let num2 = '';

  for (let i = 0; i < text1.length; i++) {
    num1 += text1[text1.length - i - 1];
    num2 += text2[text2.length - i - 1];
  }

  if (Number(num1) > Number(num2)) console.log(num1);
  else console.log(num2);

  process.exit();
});
