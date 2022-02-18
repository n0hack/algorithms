// Recursive
const dfs = (graph, v, visited) => {
  visited[v] = true;
  process.stdout.write(`${v} `);

  for (const i of graph[v]) {
    if (!visited[i]) dfs(graph, i, visited);
  }
};

// Iterative
const dfs2 = (graph, v, visited) => {
  const stack = [];

  stack.push(v);

  while (stack.length !== 0) {
    const popped = stack.pop();
    if (visited[popped]) continue;

    visited[popped] = true;
    process.stdout.write(`${popped} `);

    for (let i = graph[popped].length - 1; i >= 0; i--) {
      if (!visited[graph[popped][i]]) {
        stack.push(graph[popped][i]);
      }
    }
  }
};

const graph = [[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]];

// prettier-ignore
dfs(graph, 1, Array.from({ length: graph.length }, () => false));
console.log();
// prettier-ignore
dfs2(graph, 1, Array.from({ length: graph.length }, () => false));
