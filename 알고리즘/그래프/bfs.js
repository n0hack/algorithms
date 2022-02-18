const bfs = (graph, v, visited) => {
  const queue = [];

  queue.push(v);
  visited[v] = true;
  while (queue.length !== 0) {
    const popped = queue.shift();
    process.stdout.write(`${popped} `);

    for (const i of graph[popped]) {
      if (!visited[i]) {
        visited[i] = true;
        queue.push(i);
      }
    }
  }
};

const graph = [[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]];
// prettier-ignore
bfs(graph, 1, Array.from({ length: graph.length }, () => false));
