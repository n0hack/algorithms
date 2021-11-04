// 정점, 간선 개수
const [v, e] = [6, 11];
// 시작 정점
const start = 1;
// 그래프
graph = [
  [],
  [
    [2, 2],
    [3, 5],
    [4, 1],
  ],
  [
    [3, 3],
    [4, 2],
  ],
  [
    [2, 3],
    [6, 5],
  ],
  [
    [3, 3],
    [5, 1],
  ],
  [
    [3, 1],
    [6, 2],
  ],
  [],
];
// 방문 여부 테이블
const visited = Array.from({ length: v + 1 }, () => false);
// 최단 거리 테이블
const distance = Array.from({ length: v + 1 }, () => Number.MAX_VALUE);

// 방문하지 않은 노드 중 최단 거리가 가장 짧은 노드
const getSmallestNode = () => {
  let min = Number.MAX_VALUE;
  let index = 0;
  for (let i = 1; i < v + 1; i++) {
    if (distance[i] < min && !visited[i]) {
      min = distance[i];
      index = i;
    }
  }
  return index;
};

const dijkstra = (start) => {
  distance[start] = 0;
  visited[start] = true;
  // 시작 정점에서 연결된 정점과의 거리
  for (let j of graph[start]) {
    distance[j[0]] = j[1];
  }
  // 시작 노드를 제외한 노드들에 대해 수행
  for (let i = 0; i < v - 1; i++) {
    let now = getSmallestNode();
    visited[now] = true;

    console.log(now);
    // 현재 노드와 연결된 다른 노드들 확인
    for (let j of graph[now]) {
      let cost = distance[now] + j[1];
      // 비용이 더 적다면 교체
      if (cost < distance[j[0]]) distance[j[0]] = cost;
    }
  }
};

dijkstra(start);

// 1번 노드에서 다른 노드까지 비용
for (let i = 1; i < v + 1; i++) {
  console.log(`${start} -> ${i}: cost[${distance[i]}]`);
}
