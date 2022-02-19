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

// 노드, 간선
const [v, e] = [3, 3];
const parent = Array.from({ length: v + 1 }, (_, i) => i);

const edges = [
  [1, 2],
  [1, 3],
  [2, 3],
];

let cycle = false;
for (const edge of edges) {
  if (findParent(parent, edge[0]) === findParent(parent, edge[1])) {
    cycle = true;
    break;
  }
  union(parent, edge[0], edge[1]);
}
console.log(cycle);
