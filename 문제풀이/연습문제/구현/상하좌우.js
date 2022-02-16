// 입력
const n = 5;
const plans = Array.from('RRRUDD');

// L R U D
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const type = ['L', 'R', 'U', 'D'];

let [x, y] = [1, 1];
plans.forEach((plan) => {
  const idx = type.indexOf(plan);
  let [nx, ny] = [x + dx[idx], y + dy[idx]];

  if (!(nx < 1 || ny < 1 || nx > n || ny > n)) {
    [x, y] = [nx, ny];
  }
});

console.log(x, y);
