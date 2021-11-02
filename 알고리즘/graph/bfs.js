function bfs(v) {
  const queue = [];

  v.visited = true;
  process.stdout.write(`${v.data} `);
  queue.push(v);
  while (queue.length > 0) {
    let popped = queue.shift();
    let v = popped;
    let e = popped.adjacencyList;

    while (e !== null) {
      v = e.target;
      if (v !== null && !v.visited) {
        process.stdout.write(`${v.data} `);
        v.visited = true;
        queue.push(v);
      }
      e = e.next;
    }
  }
}

module.exports = bfs;
