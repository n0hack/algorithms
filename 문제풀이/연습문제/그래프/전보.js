const PriorityQueue = require('../../../자료구조/큐/priority-queue');

// 노드 개수, 간선 개수, 시작 노드
const [n, m, c] = [3, 2, 1];
// 그래프 생성 (간선 연결)
const graph = Array.from({ length: n + 1 }, () => []);
graph[1].push([2, 4]);
graph[1].push([3, 2]);
// 최단 거리 테이블
const distance = Array.from({ length: n + 1 }, () => 1e9);

const dijkstra = (start) => {
  const pq = new PriorityQueue({ type: 'min' });

  pq.enqueue({ priority: 0, data: 1 });
  distance[start] = 0;

  while (pq.length !== 0) {
    const { priority: dist, data: now } = pq.dequeue();

    if (distance[now] < dist) continue;

    for (const v of graph[now]) {
      const cost = dist + v[1];
      if (cost < distance[v[0]]) {
        distance[v[0]] = cost;
        pq.enqueue({ priority: cost, data: v[0] });
      }
    }
  }
};

dijkstra(c);

let count = 0;
let max = 0;
for (const dist of distance) {
  if (dist !== 1e9) {
    count++;
    max = Math.max(max, dist);
  }
}

console.log(count - 1, max);
