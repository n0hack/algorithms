const findParent = (parent, x) => {
  if (parent[x] !== x) parent[x] = findParent(parent, parent[x]);
  return parent[x];
};

const union = (parent, a, b) => {
  a = findParent(parent, a);
  b = findParent(parent, b);
  a < b ? (parent[b] = a) : (parent[a] = b);
};

// 정점, 간선
const [v, e] = [7, 9];
// 부모 테이블
const parent = Array.from({ length: v + 1 }, (_, i) => i);

// 간선 연결 정보 (from, to, weight)
const link = [
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
// 가중치로 정렬
link.sort((a, b) => a[2] - b[2]);
console.log(link);

let result = 0;
for (let i = 0; i < e; i++) {
  const [a, b, weight] = link[i];
  if (findParent(parent, a) !== findParent(parent, b)) {
    union(parent, a, b);
    result += weight;
  }
}
console.log(result);
