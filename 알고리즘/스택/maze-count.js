const maze = [
  [0, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 0],
];
const n = [
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
const stack = [];
let myPos = [0, 0];

const direction = {
  UP: Symbol.for('UP'),
  DOWN: Symbol.for('DOWN'),
  LEFT: Symbol.for('LEFT'),
  RIGHT: Symbol.for('RIGHT'),
};

const findPath = (x, y, direct) => {
  if (x < 0 || x > 7 || y < 0 || y > 7) return;
  if (maze[x][y] !== 1 && maze[x][y] !== 2) {
    if (direct === direction.UP) n[x][y] = n[x + 1][y] + 1;
    else if (direct === direction.DOWN) n[x][y] = n[x - 1][y] + 1;
    else if (direct === direction.LEFT) n[x][y] = n[x][y + 1] + 1;
    else if (direct === direction.RIGHT) n[x][y] = n[x][y - 1] + 1;
    stack.push([x, y]);
  }
};

while (maze[7][7] !== 2) {
  maze[myPos[0]][myPos[1]] = 2;

  findPath(myPos[0] - 1, myPos[1], direction.UP);
  findPath(myPos[0] + 1, myPos[1], direction.DOWN);
  findPath(myPos[0], myPos[1] - 1, direction.LEFT);
  findPath(myPos[0], myPos[1] + 1, direction.RIGHT);

  if (stack.length !== 0) myPos = stack.pop();
}
console.log('탐색 종료');
console.log(`탈출까지 ${n[7][7]}회 이동`);
