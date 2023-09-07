function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
  // postorder용
  this.visited = false;
}

function BinaryTree({ root }) {
  this.root = root;
}

// 요소 추가
BinaryTree.prototype.append = function ({ parent, child }) {
  if (parent?.left === null) parent.left = child;
  else if (parent?.right === null) parent.right = child;
};

// 전위 순회
BinaryTree.prototype.preorder = function (node = this.root) {
  if (node === null) return;

  process.stdout.write(`${node.data} `);
  this.preorder(node.left);
  this.preorder(node.right);
};

BinaryTree.prototype.preorderByIteration = function () {
  const stack = [];

  stack.push(this.root);
  while (true) {
    if (stack.length === 0) {
      console.log();
      return;
    }
    const node = stack.pop();
    process.stdout.write(`${node.data} `);

    if (node.right !== null) stack.push(node.right);
    if (node.left !== null) stack.push(node.left);
  }
};

// 중위 순회
BinaryTree.prototype.inorder = function (node = this.root) {
  if (node === null) return;

  this.inorder(node.left);
  process.stdout.write(`${node.data} `);
  this.inorder(node.right);
};

BinaryTree.prototype.inorderByIteration = function () {
  const stack = [];

  let temp = this.root;
  while (true) {
    for (; temp !== null; temp = temp.left) {
      stack.push(temp);
    }

    if (stack.length === 0) {
      console.log();
      return;
    }

    const node = stack.pop();
    process.stdout.write(`${node.data} `);
    temp = node.right;
  }
};

// 후위 순회
BinaryTree.prototype.postorder = function (node = this.root) {
  if (node === null) return;

  this.postorder(node.left);
  this.postorder(node.right);
  process.stdout.write(`${node.data} `);
};

BinaryTree.prototype.postorderByIteration = function () {
  const stack = [];

  stack.push(this.root);
  while (true) {
    if (stack.length === 0) {
      console.log();
      return;
    }

    const top = stack[stack.length - 1];
    const topLeft = top.left;

    if (topLeft !== null && !topLeft.visited) {
      stack.push(topLeft);
    } else {
      const topRight = top.right;
      if (topRight !== null && !topRight.visited) {
        stack.push(topRight);
      } else {
        const node = stack.pop();
        process.stdout.write(`${node.data} `);
        node.visited = true;
      }
    }
  }
};

const tree = new BinaryTree({ root: new Node('A') });
tree.append({ parent: tree.root, child: new Node('B') });
tree.append({ parent: tree.root.left, child: new Node('C') });
tree.append({ parent: tree.root.left, child: new Node('D') });
tree.append({ parent: tree.root, child: new Node('E') });
tree.append({ parent: tree.root.right, child: new Node('F') });
tree.append({ parent: tree.root.right, child: new Node('G') });

tree.preorder();
console.log();
tree.preorderByIteration();
tree.inorder();
console.log();
tree.inorderByIteration();
tree.postorder();
console.log();
tree.postorderByIteration();
