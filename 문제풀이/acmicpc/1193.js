// 위 그림은 각 분수의 분자가 대각선 상에서 증가하는 방향을 표시했습니다.

// 그림과 같은 방향으로 i번째 대각선에서는 i까지 분자가 증가합니다.

// 분자는 홀수번째 대각선에서 아래로 증가, 짝수번째 대각선에서 위로 증가하고 있습니다.

// 분모는 분자의 반대 방향으로 이루어져 있어서,

// 분자를 구한 후, i+1에서 분자를 뺀 값을 분모로 사용할 수 있습니다.

// i번째 대각선에는 i개의 원소가 있으므로,

// N이 몇번째 대각선에 있는지 파악하기 위해

// i를 순차적으로 증가시키며 빼줍니다.

// N이 i보다 작아진 경우 해당 i번째 대각선에 N번째 원소가 존재합니다.

// 이후 대각선의 홀/짝에 따라 방향을 고려하여 분자, 분모에 해당하는 최종 값을 결정합니다.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = Number(line);
}).on('close', function () {
  let i = 1;
  while (input > i) {
    input -= i;
    i++;
  }
  if (i % 2 === 1) console.log(`${i + 1 - input}/${input}`);
  else console.log(`${input}/${i + 1 - input}`);
  process.exit();
});
