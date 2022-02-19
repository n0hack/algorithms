function findParent(parent, x) {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
}

function union(parent, a, b) {
  a = findParent(parent, a);
  b = findParent(parent, b);

  if (a < b) parent[b] = a;
  else parent[a] = b;
}

// 노드, 간선
const [v, e] = [6, 4];
const parent = Array.from({ length: v + 1 }, (_, i) => i);

const edgeInfo = [
  [1, 4],
  [2, 3],
  [2, 4],
  [5, 6],
];

for (const edge of edgeInfo) {
  union(parent, edge[0], edge[1]);
}

console.log(parent);
