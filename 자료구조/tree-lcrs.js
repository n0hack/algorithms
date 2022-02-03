function LCRSNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

const appendChild = (parent, child) => {
  if (parent.left === null) {
    parent.left = child;
  } else {
    let temp = parent.left;
    while (temp.right !== null) {
      temp = temp.right;
    }
    temp.right = child;
  }
};

const printTree = (node, depth) => {
  if (node === null) return;

  for (let i = 0; i < depth; i++) {
    process.stdout.write(' ');
  }
  process.stdout.write(`${node.data}\n`);

  if (node.left !== null) printTree(node.left, depth + 1);
  if (node.right !== null) printTree(node.right, depth);
};

const root = new LCRSNode('A');
const b = new LCRSNode('B');
const c = new LCRSNode('C');
const d = new LCRSNode('D');
const e = new LCRSNode('E');
const f = new LCRSNode('F');
const g = new LCRSNode('G');
const h = new LCRSNode('H');
const i = new LCRSNode('I');
const j = new LCRSNode('J');
const k = new LCRSNode('K');

appendChild(root, b);
appendChild(b, c);
appendChild(b, d);
appendChild(d, e);
appendChild(d, f);
appendChild(root, g);
appendChild(g, h);

printTree(root, 0);
