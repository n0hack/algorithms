class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    // temp for postorder
    this.visited = false;
  }
}

class BinaryTree {
  constructor({ root }) {
    this.root = root;
  }

  append({ parent, child }) {
    if (parent.left === null) {
      parent.left = child;
    } else if (parent.right === null) {
      parent.right = child;
    } else {
      throw new Error('Child node is not empty!');
    }
  }

  preorder(node = this.root) {
    if (node === null) return;

    process.stdout.write(`${node.data} `);
    this.preorder(node.left);
    this.preorder(node.right);
  }

  preorderByLoop() {
    const stack = [];

    stack.push(this.root);
    while (true) {
      if (stack.length === 0) {
        console.log();
        return;
      }
      const popped = stack.pop();
      process.stdout.write(`${popped.data} `);

      if (popped.right !== null) stack.push(popped.right);
      if (popped.left !== null) stack.push(popped.left);
    }
  }

  inorder(node = this.root) {
    if (node === null) return;

    this.inorder(node.left);
    process.stdout.write(`${node.data} `);
    this.inorder(node.right);
  }

  inorderByLoop() {
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

      const popped = stack.pop();
      process.stdout.write(`${popped.data} `);
      temp = popped.right;
    }
  }

  postorder(node = this.root) {
    if (node === null) return;

    this.postorder(node.left);
    this.postorder(node.right);
    process.stdout.write(`${node.data} `);
  }

  postorderByLoop() {
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
          const popped = stack.pop();
          process.stdout.write(`${popped.data} `);
          popped.visited = true;
        }
      }
    }
  }
}

const tree = new BinaryTree({ root: new Node('A') });
tree.append({ parent: tree.root, child: new Node('B') });
tree.append({ parent: tree.root.left, child: new Node('C') });
tree.append({ parent: tree.root.left, child: new Node('D') });
tree.append({ parent: tree.root, child: new Node('E') });
tree.append({ parent: tree.root.right, child: new Node('F') });
tree.append({ parent: tree.root.right, child: new Node('G') });
// preorder
tree.preorder();
console.log();
tree.preorderByLoop();
// inorder
tree.inorder();
console.log();
tree.inorderByLoop();
// postorder
tree.postorder();
console.log();
tree.postorderByLoop();

// function Node(data) {
//   this.data = data;
//   this.left = null;
//   this.right = null;
//   // 후위 순회를 위한 임시 변수
//   this.visited = false;
// }

// function BinaryTree({ root }) {
//   this.root = root;
// }

// BinaryTree.prototype.appendChild = function (parent, child) {
//   if (parent.left === null) parent.left = child;
//   else if (parent.right === null) parent.right = child;
// };

// BinaryTree.prototype.preorder = function (node = this.root) {
//   if (node === null) return;

//   process.stdout.write(`${node.data} `);
//   this.preorder(node.left);
//   this.preorder(node.right);
// };

// BinaryTree.prototype.preorderByLoop = function () {
//   const stack = [];

//   stack.push(this.root);
//   while (true) {
//     if (stack.length === 0) {
//       console.log();
//       break;
//     }

//     const popped = stack.pop();
//     process.stdout.write(`${popped.data} `);

//     if (popped.right !== null) stack.push(popped.right);
//     if (popped.left !== null) stack.push(popped.left);
//   }
// };

// BinaryTree.prototype.inorder = function (node = this.root) {
//   if (node === null) return;

//   this.inorder(node.left);
//   process.stdout.write(`${node.data} `);
//   this.inorder(node.right);
// };

// BinaryTree.prototype.inorderByLoop = function () {
//   const stack = [];

//   let temp = this.root;
//   while (true) {
//     for (; temp !== null; temp = temp.left) {
//       stack.push(temp);
//     }

//     if (stack.length === 0) {
//       console.log();
//       break;
//     }

//     const popped = stack.pop();
//     process.stdout.write(`${popped.data} `);
//     temp = popped.right;
//   }
// };

// BinaryTree.prototype.postorder = function (node = this.root) {
//   if (node === null) return;

//   this.postorder(node.left);
//   this.postorder(node.right);
//   process.stdout.write(`${node.data} `);
// };

// BinaryTree.prototype.postorderByLoop = function () {
//   const stack = [];

//   stack.push(this.root);
//   while (true) {
//     if (stack.length === 0) {
//       console.log();
//       break;
//     }

//     // 스택의 최상단 노드를 가져옴
//     const top = stack[stack.length - 1];
//     const topLeft = top.left;

//     if (topLeft !== null && !topLeft.visited) {
//       stack.push(topLeft);
//     } else {
//       const topRight = top.right;
//       if (topRight !== null && !topRight.visited) {
//         stack.push(topRight);
//       } else {
//         top.visited = true;
//         process.stdout.write(`${top.data} `);
//         stack.pop();
//       }
//     }
//   }
// };

// const postorder = (node) => {
//   if (node === null) return;

//   postorder(node.left);
//   postorder(node.right);
//   process.stdout.write(`${node.data} `);
// };

// const postorderByLoop = () => {};

// const tree = new BinaryTree({ root: new Node('A') });
// tree.appendChild(tree.root, new Node('B'));
// tree.appendChild(tree.root.left, new Node('C'));
// tree.appendChild(tree.root.left, new Node('D'));
// tree.appendChild(tree.root, new Node('E'));
// tree.appendChild(tree.root.right, new Node('F'));
// tree.appendChild(tree.root.right, new Node('G'));

// tree.postorder();
// console.log();
// tree.postorderByLoop();
