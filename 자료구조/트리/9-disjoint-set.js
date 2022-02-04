class Set {
  constructor(data) {
    this.data = data;
    this.parent = null;
  }
}

// 집합의 부모 탐색
const findSet = (set) => {
  while (set.parent !== null) {
    set = set.parent;
  }
  return set;
};

// 두 집합을 합침
const unionSet = (set1, set2) => {
  set2 = findSet(set2);
  set2.parent = set1;
};

const set1 = new Set(1);
const set2 = new Set(2);
const set3 = new Set(3);
const set4 = new Set(4);

console.log(`Set 1 === Set 2? ${findSet(set1) === findSet(set2)}`);

unionSet(set1, set3);
console.log(`Set 1 === Set 3? ${findSet(set1) === findSet(set3)}`);

unionSet(set3, set4);
console.log(`Set 3 === Set 4? ${findSet(set3) === findSet(set4)}`);
