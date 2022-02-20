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

// 집의 개수, 길의 개수
const [n, m] = [7, 12];
const parent = Array.from({ length: n + 1 }, (_, i) => i);
const edges = [
  [1, 2, 3],
  [1, 3, 2],
  [3, 2, 1],
  [2, 5, 2],
  [3, 4, 4],
  [7, 3, 6],
  [5, 1, 5],
  [1, 6, 2],
  [6, 4, 1],
  [6, 5, 3],
  [4, 5, 3],
  [6, 7, 4],
];
edges.sort((a, b) => a[2] - b[2]);

let result = 0;
let max = 0;
for (const edge of edges) {
  const [a, b, cost] = edge;
  if (findParent(parent, a) !== findParent(parent, b)) {
    union(parent, a, b);
    result += cost;
    max = cost;
  }
}

console.log(result - max);
