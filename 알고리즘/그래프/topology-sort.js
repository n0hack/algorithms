const [v, e] = [7, 8];
const graph = [[], [2, 5], [3, 6], [4], [7], [6], [4], []];
// 진입 차수 설정
const indegree = Array.from({ length: v + 1 }, () => 0);
for (let i = 1; i < graph.length; i++) {
  for (const a of graph[i]) indegree[a]++;
}

const topologySort = () => {
  const result = [];
  const queue = [];

  // 진입 차수 0인 노드
  for (let i = 1; i <= v; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length !== 0) {
    const now = queue.shift();
    result.push(now);
    // 진입 차수 제거
    for (const v of graph[now]) {
      indegree[v] -= 1;
      if (indegree[v] === 0) queue.push(v);
    }
  }

  return result;
};

console.log(topologySort());
