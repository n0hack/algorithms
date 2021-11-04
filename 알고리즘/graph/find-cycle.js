const findParent = (parent, x) => {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
};

const unionParent = (parent, a, b) => {
  a = findParent(parent, a);
  b = findParent(parent, b);
  // 더 작은 값을 부모로 설정
  a < b ? (parent[b] = a) : (parent[a] = b);
};

// 정점, 간선 개수
const [v, e] = [3, 3];
// 부모 테이블
const parent = Array.from({ length: v + 1 }, (_, i) => i);

// 사이클 발생 여부
let cycle = false;

// 간선 연결 정보
const link = [
  [1, 2],
  [1, 3],
  [2, 3],
];

for (let i = 0; i < e; i++) {
  const [a, b] = link[i];

  // 부모가 같으면 사이클 발생
  if (findParent(parent, a) === findParent(parent, b)) {
    cycle = true;
    break;
  } else {
    unionParent(parent, a, b);
  }
}

console.log(cycle ? '사이클이 발생했습니다.' : '사이클이 발생하지 않았습니다.');
