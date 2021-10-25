// Left Child, Right Siblings Tree (LCRS)
// Node
class LCRSNode {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightSiblings = null;
  }
}

// Append Child
const appendChild = (parent, child) => {
  if (parent.leftChild === null) {
    parent.leftChild = child;
  } else {
    let temp = parent.leftChild;
    while (temp.rightSiblings !== null) {
      temp = temp.rightSiblings;
    }
    temp.rightSiblings = child;
  }
};

// Print tree
const printTree = (node, depth) => {
  if (node === null) return;
  for (let i = 0; i < depth; i++) process.stdout.write(' ');
  console.log(node.data);

  if (node.leftChild !== null) printTree(node.leftChild, depth + 1);
  if (node.rightSiblings !== null) printTree(node.rightSiblings, depth);
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
