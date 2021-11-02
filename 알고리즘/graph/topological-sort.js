const graph = [[], [2, 5], [3, 6], [4], [7], [6], [4], []];
const indegree = Array.from({ length: graph.length }, () => 0);

// 진입차수 초기화
for (let v = 1; v < 8; v++) {
  for (let to of graph[v]) indegree[to] += 1;
}

const topologicalSort = () => {
  const result = [];
  const q = [];

  // 진입차수가 0인 노드 인큐
  for (let i = 1; i < indegree.length; i++) {
    if (indegree[i] === 0) q.push(i);
  }

  // 큐가 빌 때까지 반복
  while (q.length > 0) {
    let now = q.shift();
    result.push(now);

    for (let to of graph[now]) {
      // 진입차수 감소 후 0이 되면 인큐
      indegree[to] -= 1;
      if (indegree[to] === 0) q.push(to);
    }
  }

  return result;
};

console.log(topologicalSort());
