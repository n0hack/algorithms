// 서로소 집합 알고리즘
// 크루스칼 알고리즘을 구현하기 위한 보조 알고리즘
const findParent = (parent, x) => {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
};

const unionParent = (parent, a, b) => {
  a = findParent(parent, a);
  b = findParent(parent, b);

  a < b ? (parent[b] = a) : (parent[a] = b);
};

const [v, e] = [5, 4];
const parent = Array.from({ length: v + 1 }, () => 0);

// 부모를 자기 자신으로 초기화
for (let i = 1; i < v + 1; i++) {
  parent[i] = i;
}

// uniob 연산 수행
const unions = [
  [4, 5],
  [3, 4],
  [2, 3],
  [1, 2],
  // [1, 4],
  // [2, 3],
  // [2, 4],
  // [5, 6],
];

for (let i = 0; i < e; i++) {
  const [a, b] = unions[i];
  unionParent(parent, a, b);
}

// 각 원소가 속한 집합 출력
for (let i = 1; i < v + 1; i++) {
  process.stdout.write(`${findParent(parent, i)} `);
}
console.log();

// 부모 테이블 내용 출력
for (let i = 1; i < v + 1; i++) {
  process.stdout.write(`${parent[i]} `);
}
console.log();
