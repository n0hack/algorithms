const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = Number(line);
}).on('close', function () {
  let ans = 0;

  ans = 99;

  for (let i = 100; i <= input; i++) {
    let strNum = String(i);
    let temp = Number(strNum[1]) - Number(strNum[0]);
    let j = 1;
    for (j = 1; j < strNum.length - 1; j++) {
      let temp2 = Number(strNum[j + 1]) - Number(strNum[j]);
      if (temp === temp2) temp = temp2;
      else break;
    }
    if (j === strNum.length - 1) {
      ans++;
    }
  }

  console.log(ans);
  process.exit();
});
