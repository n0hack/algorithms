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
let myPos = [0, 0];

const findPath = (x, y) => {
  if (x < 0 || x > 7 || y < 0 || y > 7) return;
  if (maze[x][y] !== 1 && maze[x][y] !== 2) stack.push([x, y]);
};

console.log('탐색 시작');
while (maze[7][7] !== 2) {
  console.log(`${myPos} 좌표로 이동`);
  maze[myPos[0]][myPos[1]] = 2;

  findPath(myPos[0] + 1, myPos[1]);
  findPath(myPos[0] - 1, myPos[1]);
  findPath(myPos[0], myPos[1] + 1);
  findPath(myPos[0], myPos[1] - 1);

  if (stack.length !== 0) myPos = stack.pop();
}
console.log('탐색 종료');
