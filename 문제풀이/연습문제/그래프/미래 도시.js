// N: 회사 개수, X: 방문 회사, K: 들러야 하는 회사
const [n, x, k] = [5, 4, 5];

// 그래프 생성
graph = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 1e9));
// 자기 자신에게 가는 비용 0, 다른 곳으로 가는 비용 1
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === j) graph[i][j] = 0;
  }
}

graph[1][2] = graph[2][1] = 1;
graph[1][3] = graph[3][1] = 1;
graph[1][4] = graph[4][1] = 1;
graph[2][4] = graph[4][2] = 1;
graph[3][4] = graph[4][3] = 1;
graph[3][5] = graph[5][3] = 1;
graph[4][5] = graph[5][4] = 1;

for (let k = 1; k <= 5; k++) {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
    }
  }
}

console.log(graph[1][k] + graph[k][x]);
