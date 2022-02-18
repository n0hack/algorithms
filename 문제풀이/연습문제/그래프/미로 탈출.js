const [n, m] = [5, 6];
const graph = [
  [1, 0, 0, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];
// 상하좌우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (x, y) => {
  const queue = [];
  queue.push([x, y]);

  while (queue.length !== 0) {
    [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 미로를 벗어난 경우
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      // 벽을 만난 경우
      if (graph[nx][ny] === 0) continue;
      // 첫 방문인 경우
      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  return graph[n - 1][m - 1];
};
console.log(bfs(0, 0));
