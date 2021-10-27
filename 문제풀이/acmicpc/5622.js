const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const counter = {
  ABC: 2,
  DEF: 3,
  GHI: 4,
  JKL: 5,
  MNO: 6,
  PQRS: 7,
  TUV: 8,
  WXYZ: 9,
};

rl.on('line', function (line) {
  input = line;
}).on('close', function () {
  let ans = input.length;

  Array.from(input).forEach((char) => {
    for (let key of Object.keys(counter)) {
      if (key.includes(char)) {
        ans += counter[key];
        break;
      }
    }
  });
  console.log(ans);
  process.exit();
});
