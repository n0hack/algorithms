const bfs = (graph, start, visited) => {
  const q = [];

  visited[start] = true;
  q.push(start);

  while (q.length > 0) {
    let v = q.shift();
    process.stdout.write(`${v} `);

    for (let i of graph[v]) {
      if (!visited[i]) {
        q.push(i);
        visited[i] = true;
      }
    }
  }
  console.log();
};

const graph = [[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]];

let visited = Array.from({ length: 9 }, () => false);
bfs(graph, 1, visited);
