// 미로 찾기 (횟수)

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
const myPos = [0, 0];
const direction = {
  UP: Symbol.for('UP'),
  DOWN: Symbol.for('DOWN'),
  LEFT: Symbol.for('LEFT'),
  RIGHT: Symbol.for('RIGHT'),
};
let popped;

function findPath(stack, myPos, direct) {
  if (myPos[0] < 0 || myPos[0] > 7 || myPos[1] < 0 || myPos[1] > 7) {
    return;
  }
  if (maze[myPos[0]][myPos[1]] !== 1 && maze[myPos[0]][myPos[1]] !== 2) {
    switch (direct) {
      case direction.UP:
        n[myPos[0]][myPos[1]] = n[myPos[0] - 1][myPos[1]] + 1;
        break;
      case direction.DOWN:
        n[myPos[0]][myPos[1]] = n[myPos[0] + 1][myPos[1]] + 1;
        break;
      case direction.LEFT:
        n[myPos[0]][myPos[1]] = n[myPos[0]][myPos[1] + 1] + 1;
        break;
      case direction.RIGHT:
        n[myPos[0]][myPos[1]] = n[myPos[0]][myPos[1] - 1] + 1;
        break;
    }
    stack.push(myPos);
  }
}

console.log('탐색 시작');
while (maze[7][7] !== 2) {
  console.log(`${myPos} 좌표로 이동 `);
  maze[myPos[0]][myPos[1]] = 2;

  findPath(stack, [myPos[0] + 1, myPos[1]], direction.UP);
  findPath(stack, [myPos[0] - 1, myPos[1]], direction.DOWN);
  findPath(stack, [myPos[0], myPos[1] - 1], direction.LEFT);
  findPath(stack, [myPos[0], myPos[1] + 1], direction.RIGHT);

  if (stack.length > 0) {
    [myPos[0], myPos[1]] = stack.pop();
  }
}
console.log('탐색 종료');
console.log(`출구까지 ${n[7][7]}회만에 갈 수 있음`);
