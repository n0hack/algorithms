function Node(data) {
  this.data = data;
  this.leftChild = null;
  this.rightSibling = null;
}

const append = (parent, child) => {
  if (parent.leftChild === null) {
    parent.leftChild = child;
  } else {
    let temp = parent.leftChild;
    while (temp.rightSibling !== null) {
      temp = temp.rightSibling;
    }
    temp.rightSibling = child;
  }
};

const print = (node, depth) => {
  if (node === null) return;

  for (let i = 0; i < depth; i++) {
    process.stdout.write(' ');
  }
  process.stdout.write(`${node.data}\n`);

  if (node.leftChild !== null) print(node.leftChild, depth + 1);
  if (node.rightSibling !== null) print(node.rightSibling, depth);
};

const printNodesAtLevel = (root, level) => {
  if (!root) return;

  if (level <= 0) {
    let temp = root;
    while (temp !== null) {
      process.stdout.write(`${temp.data} `);
      temp = temp.rightSibling;
    }
  } else {
    if (root.leftChild !== null) printNodesAtLevel(root.leftChild, level - 1);
    if (root.rightSibling !== null) printNodesAtLevel(root.rightSibling, level);
  }
};

const root = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');
const g = new Node('G');
const h = new Node('H');
const i = new Node('I');
const j = new Node('J');
const k = new Node('K');

append(root, b);
append(b, c);
append(b, d);
append(d, e);
append(d, f);
append(root, g);
append(g, h);

print(root, 0);
printNodesAtLevel(root, 2);
console.log('');
