const graph = require('../../자료구조/그래프/list-graph');

const dfs = (v) => {
  process.stdout.write(`${v.data} `);
  v.visited = true;

  let e = v.adjacency;
  while (e !== null) {
    if (e.to !== null && e.to.visited === false) {
      dfs(e.to);
    }
    e = e.next;
  }
};

dfs(graph.vertices);
