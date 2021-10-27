// 미로 찾기

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
const stack = [];
const myPos = [0, 0];

function findPath(stack, myPos) {
  if (myPos[0] < 0 || myPos[0] > 7 || myPos[1] < 0 || myPos[1] > 7) {
    return;
  }
  if (maze[myPos[0]][myPos[1]] !== 1 && maze[myPos[0]][myPos[1]] !== 2) {
    stack.push(myPos);
  }
}

console.log('탐색 시작');
while (maze[7][7] !== 2) {
  console.log(`${myPos} 좌표로 이동 `);
  maze[myPos[0]][myPos[1]] = 2;

  findPath(stack, [myPos[0] + 1, myPos[1]]);
  findPath(stack, [myPos[0] - 1, myPos[1]]);
  findPath(stack, [myPos[0], myPos[1] + 1]);
  findPath(stack, [myPos[0], myPos[1] - 1]);

  if (stack.length > 0) {
    [myPos[0], myPos[1]] = stack.pop();
  }
}
console.log('탐색 종료');
