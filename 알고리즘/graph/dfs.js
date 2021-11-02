// 재귀함수
const dfs1 = (graph, v, visited) => {
  process.stdout.write(`${v} `);
  visited[v] = true;
  for (let i of graph[v]) {
    if (!visited[i]) dfs1(graph, i, visited);
  }
};

// 반복문 (스택)
const dfs2 = (graph, v, visited) => {
  const stack = [];
  stack.push(v);
  while (stack.length > 0) {
    let popped = stack.pop();
    if (!visited[popped]) {
      process.stdout.write(`${popped} `);
      visited[popped] = true;
    }

    for (let i of graph[popped]) {
      if (!visited[i]) stack.push(i);
    }
  }
  console.log();
};

const graph = [[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]];

let visited = Array.from({ length: 9 }, () => false);
dfs1(graph, 1, visited);
console.log();

visited = Array.from({ length: 9 }, () => false);
dfs2(graph, 1, visited);
