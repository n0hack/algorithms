function Node(data) {
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

const set1 = new Node(1);
const set2 = new Node(2);
const set3 = new Node(3);
const set4 = new Node(4);

union(set1, set3);
console.log(findSet(set1) === findSet(set3));

union(set3, set4);
console.log(findSet(set1) === findSet(set4));

console.log(findSet(set2) === findSet(set4));
