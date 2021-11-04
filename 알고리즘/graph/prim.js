const findMinIndex = (key, mstSet, v) => {
  let min = Number.MAX_VALUE;
  let minIndex;

  for (let i = 0; i < v; i++) {
    if (mstSet[i] === false && key[i] < min) {
      min = key[i];
      minIndex = i;
    }
  }
  return minIndex;
};

const primMST = (graph, v) => {
  const parent = Array.from({ length: v }, () => -1);
  const key = Array.from({ length: v }, () => 0);
  const mstSet = Array.from({ length: v }, () => 0);

  // key, msetSet 할당
  for (let i = 0; i < v; i++) {
    key[i] = Number.MAX_VALUE;
    mstSet[i] = false;
  }

  // 0번 정점부터 시작
  key[0] = 0;
  parent[0] = -1;

  for (let count = 0; count < v - 1; count++) {
    // 정점 중 가장 작은 키를 갖은 정점 찾기
    let u = findMinIndex(key, mstSet, v);
    mstSet[u] = true;

    for (let i = 0; i < v; i++) {
      // 인접한 정점들 중
      // 아직 mst로 만들어지지 않았고, key보다 작은 값들에 대해 초기화
      if (graph[u][i] && mstSet[i] === false && graph[u][i] < key[i]) {
        parent[i] = u;
        key[i] = graph[u][i];
      }
    }
  }
  printMST(graph, v, parent);
};

const printMST = (graph, v, parent) => {
  for (let i = 1; i < v; i++) {
    console.log(`${parent[i]}->${i} [Weight(${graph[i][parent[i]]})]`);
  }
};

let graph = [
  [0, 2, 0, 6, 0],
  [2, 0, 3, 8, 5],
  [0, 3, 0, 0, 7],
  [6, 8, 0, 0, 9],
  [0, 5, 7, 9, 0],
];

primMST(graph, graph.length);
