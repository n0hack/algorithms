// 노드, 간선 개수
const [n, m] = [6, 11];
// 시작 노드
const start = 1;
// 간선 연결
// prettier-ignore
const graph = [
  [],
  [[2, 2], [3, 5], [4, 1]],
  [[3, 3], [4, 2]],
  [[2, 3]],
  [[3, 3], [5, 1]],
  [[3, 1], [6, 2]],
  []
];
// 방문 노드 체크
const visited = Array.from({ length: n + 1 }, () => false);
// 최단 거리 테이블
const distance = Array.from({ length: n + 1 }, () => 1e9);

// 방문하지 않은 노드 중, 가장 최단 거리가 짧은 노드 번호 반환
const getSmallestNode = () => {
  let min = 1e9;
  let index = 0;
  for (let i = 1; i <= n; i++) {
    if (distance[i] < min && !visited[i]) {
      min = distance[i];
      index = i;
    }
  }
  return index;
};

// 다익스트라
const dijkstra = (start) => {
  // 시작 노드 초기화
  distance[start] = 0;
  visited[start] = true;
  for (const v of graph[start]) {
    distance[v[0]] = v[1];
  }
  // 시작 노드를 제외한 노드들에 대해 반복
  for (let i = 0; i < n - 1; i++) {
    // 최단 거리의 노드
    const now = getSmallestNode();
    visited[now] = true;
    for (const v of graph[now]) {
      const cost = distance[now] + v[1];
      if (cost < distance[v[0]]) {
        distance[v[0]] = cost;
      }
    }
  }
};

dijkstra(start);

for (let i = 1; i <= n; i++) {
  process.stdout.write(`${start} -> ${i} 거리: `);
  if (distance[i] === 1e9) console.log('INFINITY');
  else console.log(distance[i]);
}
