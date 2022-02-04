function Set(data) {
  this.data = data;
  this.parent = null;
}

const findSet = (set) => {
  while (set.parent !== null) {
    set = set.parent;
  }
  return set;
};

const union = (set1, set2) => {
  set2 = findSet(set2);
  set2.parent = set1;
};

const set1 = new Set(1);
const set2 = new Set(2);
const set3 = new Set(3);
const set4 = new Set(4);

union(set1, set3);
console.log(findSet(set1) === findSet(set3));

union(set3, set4);
console.log(findSet(set1) === findSet(set4));

console.log(findSet(set2) === findSet(set4));
