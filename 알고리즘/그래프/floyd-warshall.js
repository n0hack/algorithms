const graph = [
  [0, 4, 1e9, 6],
  [3, 0, 7, 1e9],
  [5, 1e9, 0, 4],
  [1e9, 1e9, 2, 0],
];

// 그냥 가는 것이 빠른지, 거쳐 가는 것이 빠른지
for (let k = 0; k < 4; k++) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
    }
  }
}

console.log(graph);
