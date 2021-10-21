const mode = {
  VISITED: Symbol.for('VISITED'),
  NOT_VISITED: Symbol.for('NOT_VISITED'),
};

function dfs(v) {
  let e = null;

  process.stdout.write(`${v.data} `);
  v.visited = mode.VISITED;
  e = v.adjacencyList;

  while (e !== null) {
    if (e.target !== null && e.target.visited === mode.NOT_VISITED) {
      dfs(e.target);
    }
    e = e.next;
  }
}

function bfs(v) {
  const q = [];
  let e = null;

  process.stdout.write(`${v.data} `);
  v.visited = mode.VISITED;
  q.push(v);

  while (q.length !== 0) {
    let v = q.shift();
    e = v.adjacencyList;

    while (e !== null) {
      v = e.target;

      if (v !== null && v.visited === mode.NOT_VISITED) {
        process.stdout.write(`${v.data} `);
        v.visited = mode.VISITED;
        q.push(v);
      }
      e = e.next;
    }
  }
}

module.exports = { dfs, bfs };
