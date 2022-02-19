const findParent = (parent, x) => {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
};

const union = (parent, a, b) => {
  a = findParent(parent, a);
  b = findParent(parent, b);
  if (a < b) parent[b] = a;
  else parent[a] = b;
};

// 노드, 간선 개수
const [v, e] = [7, 9];
const edges = [
  [1, 2, 29],
  [1, 5, 75],
  [2, 3, 35],
  [2, 6, 34],
  [3, 4, 7],
  [4, 6, 23],
  [4, 7, 13],
  [5, 6, 53],
  [6, 7, 25],
];
const parent = Array.from({ length: v + 1 }, (_, i) => i);
// 최소 신장 트리(MST)를 만들기 위해 정렬
edges.sort((a, b) => a[2] - b[2]);

let result = 0;
for (const edge of edges) {
  const [a, b, cost] = edge;
  if (findParent(parent, a) !== findParent(parent, b)) {
    union(parent, a, b);
    result += cost;
  }
}
console.log(result);
