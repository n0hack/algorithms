class PriorityQueue extends Array {
  constructor() {
    super();
    this.usedSize = 0;
  }

  enqueue(newData) {
    let currentPosition = this.usedSize;
    let parentPosition = this.getParent(currentPosition);

    this[currentPosition] = newData;

    while (currentPosition > 0 && this[currentPosition][0] < this[parentPosition][0]) {
      this.swap(currentPosition, parentPosition);
      currentPosition = parentPosition;
      parentPosition = this.getParent(currentPosition);
    }
    this.usedSize += 1;
  }

  dequeue() {
    // 큐에 요소가 없는 경우 그냥 종료
    if (this.usedSize === 0) return;

    this.usedSize -= 1;
    const extract = this[0];

    // 큐에 요소가 단 하나 뿐이라면
    if (this.usedSize === 0) {
      this.pop(0);
      return extract;
    } else {
      // 마지막 요소를 루트로 가져 오고 제거
      this[0] = this[this.usedSize];
      this.pop(this.usedSize);

      while (true) {
        let parentPosition = 0;
        let leftChildPosition = this.getLeftChild(parentPosition);
        let rightChildPosition = leftChildPosition + 1;
        let selectedPosition = 0;

        if (leftChildPosition >= this.usedSize) break;
        if (rightChildPosition >= this.usedSize) selectedPosition = leftChildPosition;
        else {
          if (this[leftChildPosition][0] > this[rightChildPosition][0]) selectedPosition = rightChildPosition;
          else selectedPosition = leftChildPosition;
        }

        if (this[selectedPosition][0] < this[parentPosition][0]) {
          this.swap(selectedPosition, parentPosition);
          parentPosition = selectedPosition;
        } else {
          break;
        }
      }
    }
    return extract;
  }

  swap(index1, index2) {
    let temp = this[index1];
    this[index1] = this[index2];
    this[index2] = temp;
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChild(index) {
    return index * 2 + 1;
  }
}

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
// 최단 거리 테이블
const distance = Array.from({ length: v + 1 }, () => Number.MAX_VALUE);

const dijkstra = (start) => {
  const heapq = new PriorityQueue();
  heapq.enqueue([0, start]);
  distance[start] = 0;

  // 힙이 비어있지 않다면 반복 수행
  while (heapq.usedSize > 0) {
    const [dist, now] = heapq.dequeue();

    // 이미 처리된 노드는 패스
    if (distance[now] < dist) continue;

    // 현재 노드와 인접한 노드들 확인
    for (let i of graph[now]) {
      let cost = dist + i[1];
      if (cost < distance[i[0]]) {
        distance[i[0]] = cost;
        heapq.enqueue([cost, i[0]]);
      }
    }
  }
};
dijkstra(start);
// 1번 노드에서 다른 노드까지 비용
for (let i = 1; i < v + 1; i++) {
  console.log(`${start} -> ${i}: cost[${distance[i]}]`);
}
