const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const table = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let input;

rl.on('line', function (line) {
  input = line;
}).on('close', function () {
  let strIdx = 0;
  let ans = 0;

  while (strIdx < input.length) {
    let tableIdx;
    for (tableIdx = 0; tableIdx < table.length; tableIdx++) {
      // 현재 인덱스가 탐색된 크로아티아 문자의 인덱스와 동일한 경우 처리
      if (strIdx === input.indexOf(table[tableIdx], strIdx)) {
        // 인덱스를 문자 길이만큼 증가시킴
        strIdx += table[tableIdx].length;
        ans += 1;
        break;
      }
    }

    // 일치하는 크로아티아 문자가 없는 경우 처리
    if (tableIdx === table.length) {
      strIdx += 1;
      ans += 1;
    }
  }
  console.log(ans);
  process.exit();
});
