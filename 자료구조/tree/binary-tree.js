function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
  // 후위 순회를 위한 임시 변수
  this.visited = false;
}

function BinaryTree({ root }) {
  this.root = root;
}

BinaryTree.prototype.appendChild = function (parent, child) {
  if (parent.left === null) parent.left = child;
  else if (parent.right === null) parent.right = child;
};

BinaryTree.prototype.preorder = function (node = this.root) {
  if (node === null) return;

  process.stdout.write(`${node.data} `);
  this.preorder(node.left);
  this.preorder(node.right);
};

BinaryTree.prototype.preorderByLoop = function () {
  const stack = [];

  stack.push(this.root);
  while (true) {
    if (stack.length === 0) {
      console.log();
      break;
    }

    const popped = stack.pop();
    process.stdout.write(`${popped.data} `);

    if (popped.right !== null) stack.push(popped.right);
    if (popped.left !== null) stack.push(popped.left);
  }
};

BinaryTree.prototype.inorder = function (node = this.root) {
  if (node === null) return;

  this.inorder(node.left);
  process.stdout.write(`${node.data} `);
  this.inorder(node.right);
};

BinaryTree.prototype.inorderByLoop = function () {
  const stack = [];

  let temp = this.root;
  while (true) {
    for (; temp !== null; temp = temp.left) {
      stack.push(temp);
    }

    if (stack.length === 0) {
      console.log();
      break;
    }

    const popped = stack.pop();
    process.stdout.write(`${popped.data} `);
    temp = popped.right;
  }
};

BinaryTree.prototype.postorder = function (node = this.root) {
  if (node === null) return;

  this.postorder(node.left);
  this.postorder(node.right);
  process.stdout.write(`${node.data} `);
};

BinaryTree.prototype.postorderByLoop = function () {
  const stack = [];

  stack.push(this.root);
  while (true) {
    if (stack.length === 0) {
      console.log();
      break;
    }

    // 스택의 최상단 노드를 가져옴
    const top = stack[stack.length - 1];
    const topLeft = top.left;

    if (topLeft !== null && !topLeft.visited) {
      stack.push(topLeft);
    } else {
      const topRight = top.right;
      if (topRight !== null && !topRight.visited) {
        stack.push(topRight);
      } else {
        top.visited = true;
        process.stdout.write(`${top.data} `);
        stack.pop();
      }
    }
  }
};

const postorder = (node) => {
  if (node === null) return;

  postorder(node.left);
  postorder(node.right);
  process.stdout.write(`${node.data} `);
};

const postorderByLoop = () => {};

const tree = new BinaryTree({ root: new Node('A') });
tree.appendChild(tree.root, new Node('B'));
tree.appendChild(tree.root.left, new Node('C'));
tree.appendChild(tree.root.left, new Node('D'));
tree.appendChild(tree.root, new Node('E'));
tree.appendChild(tree.root.right, new Node('F'));
tree.appendChild(tree.root.right, new Node('G'));

tree.postorder();
console.log();
tree.postorderByLoop();
