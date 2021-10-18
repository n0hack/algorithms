const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = line;
}).on('close', function () {
  let ans = '';

  // indexOf로 구하면 쉽지만, 정석으로
  for (let ascii = 97; ascii <= 122; ascii++) {
    let alpha = String.fromCharCode(ascii);

    let idx;
    for (idx = 0; idx < input.length; idx++) {
      if (input[idx] === alpha) {
        ans += `${idx} `;
        break;
      }
    }

    if (idx === input.length) {
      ans += '-1 ';
    }
  }
  console.log(ans);
  process.exit();
});
