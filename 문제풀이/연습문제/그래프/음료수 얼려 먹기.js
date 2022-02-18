const [n, m] = [4, 5];
const graph = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
];

const dfs = (x, y) => {
  if (x < 0 || x >= n || y < 0 || y >= m) return false;

  if (graph[x][y] === 0) {
    graph[x][y] = 1;
    dfs(x - 1, y);
    dfs(x + 1, y);
    dfs(x, y - 1);
    dfs(x, y + 1);
    return true;
  }

  return false;
};

let result = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (dfs(i, j)) result += 1;
  }
}
console.log(result);
