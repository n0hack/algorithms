const graph = {
  start: { A: 5, B: 2 },
  A: { start: 1, C: 4, D: 2 },
  B: { A: 8, D: 7 },
  C: { D: 6, end: 3 },
  D: { end: 1 },
  end: {},
};

const findShortestNode = (distances, visited) => {
  let shortest = null;

  for (const node in distances) {
    const isShortest = shortest === null || distances[node] < distances[shortest];
    if (isShortest && !visited.includes(node)) {
      shortest = node;
    }
  }
  return shortest;
};

const dijkstra = (graph, startNode, endNode) => {
  const distances = { ...{ endNode: Number.MAX_VALUE }, ...graph[startNode] };
  const parents = { endNode: null };
  for (const child in graph[startNode]) {
    parents[child] = startNode;
  }

  const visited = [];

  let node = findShortestNode(distances, visited);
  while (node) {
    const distance = distances[node];
    const children = graph[node];

    for (const child in children) {
      if (String(startNode) === String(child)) continue;
      else {
        const cost = distance + children[child];
        if (!distances[child] || distances[child] > cost) {
          distances[child] = cost;
          parents[child] = node;
        }
      }
    }
    visited.push(node);
    node = findShortestNode(distances, visited);
  }

  const shortestPath = [endNode];
  let parent = parents[endNode];
  while (parent) {
    shortestPath.push(parent);
    parent = parents[parent];
  }
  shortestPath.reverse();

  return { distance: distances[endNode], path: shortestPath };
};

console.log(dijkstra(graph, 'start', 'end'));
