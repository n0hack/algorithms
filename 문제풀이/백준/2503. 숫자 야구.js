const log = console.log;

const answer = [];

for (let i = 123; i <= 987; i++) {
  const temp = String(i);
  // 숫자 야구에는 0이 없으며, 같은 숫자가 중복될 수 없음
  if (temp.includes('0') || temp[0] === temp[1] || temp[1] === [2] || temp[2] === temp[0]) continue;
  answer.push(temp);
}

// 예측하는 숫자, 스트라이크, 볼
const baseballs = [
  [123, 1, 1],
  [356, 1, 0],
  [327, 2, 0],
  [489, 0, 1],
];

baseballs.forEach((baseball) => {
  const temp = String(baseball[0]);
});

log(answer);
