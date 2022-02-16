let [n, m] = [4, 4];
let [x, y, direction] = [1, 1, 0];

const map = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
];
const d = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

// 북, 동, 남, 서
const move = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

d[x][y] = 1;

const nextDirection = (direction) => {
  let nd = direction - 1;
  return nd < 0 ? 3 : nd;
};

let count = 1;
let turn = 0;

while (true) {
  direction = nextDirection(direction);
  let [nx, ny] = [x + move[direction][0], y + move[direction][1]];

  if (d[nx][ny] === 0 && map[nx][ny] === 0) {
    d[nx][ny] = 1;
    [x, y] = [nx, ny];
    count += 1;
    turn = 0;
    continue;
  } else {
    turn += 1;
  }

  if (turn === 4) {
    [nx, ny] = [x - move[direction][0], y - move[direction][1]];
    if (map[nx][ny] === 0) {
      [x, y] = [nx, ny];
    } else {
      break;
    }
    turn = 0;
  }
}

console.log(count);
