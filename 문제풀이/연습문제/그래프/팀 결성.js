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

const [n, m] = [7, 8];
const parent = Array.from({ length: n + 1 }, (_, i) => i);
const input = [
  [0, 1, 3],
  [1, 1, 7],
  [0, 7, 6],
  [1, 7, 1],
  [0, 3, 7],
  [0, 4, 2],
  [0, 1, 1],
  [1, 1, 1],
];

for (const command of input) {
  const [cmd, a, b] = command;

  if (cmd === 0) {
    union(parent, a, b);
  } else {
    if (findParent(parent, a) === findParent(parent, b)) console.log('YES');
    else console.log('NO');
  }
}
