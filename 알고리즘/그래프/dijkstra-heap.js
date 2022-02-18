const PriorityQueue = require('../../자료구조/큐/priority-queue');

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
// 최단 거리 테이블
const distance = Array.from({ length: n + 1 }, () => 1e9);

const dijkstra = (start) => {
  const pq = new PriorityQueue({ type: 'min' });

  pq.enqueue({ priority: 0, data: start });
  distance[start] = 0;

  while (pq.length !== 0) {
    // 가장 최단 거리가 짧은 노드를 꺼내옴
    const { priority: dist, data: now } = pq.dequeue();
    if (distance[now] < dist) continue;

    // 현재 노드와 연결된 노드들 확인
    for (const v of graph[now]) {
      const cost = dist + v[1];
      if (cost < distance[v[0]]) {
        distance[v[0]] = cost;
        pq.enqueue({ priority: cost, data: v[0] });
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
