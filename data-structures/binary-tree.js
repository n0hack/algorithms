class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    // 반복문을 이용한 후위 순회에 사용할 변수
    this.visited = false;
  }
}

class BinaryTree {
  constructor(node) {
    this.root = node;
  }

  // Target과 일치하는 노드 탐색
  searchNode(target, tree = this.root) {
    if (tree === null) return null;

    if (tree.data === target) return tree;
    else if (tree.data < target) this.searchNode(target, tree.right);
    else this.searchNode(target, tree.left);
  }

  // 트리에서 가장 작은 노드 탐색
  searchMinNode(tree = this.root) {
    if (tree === null) return null;

    if (tree.left === null) return tree;
    else this.searchMinNode(tree.left);
  }

  // 노드 삽입
  insertChild(newNode, tree = this.root) {
    if (tree.data < newNode.data) {
      if (tree.right === null) tree.right = newNode;
      else this.insertChild(newNode, tree.right);
    } else if (tree.data > newNode.data) {
      if (tree.left === null) tree.left = newNode;
      else this.insertChild(newNode, tree.left);
    }
  }

  // 노드 제거
  removeChild(target, tree = this.root, parent = null) {
    let removed = tree;

    if (tree === null) {
      return null;
    }

    if (tree.data > target) {
      removed = this.removeChild(target, tree.left, tree);
    } else if (tree.data < target) {
      removed = this.removeChild(target, tree.right, tree);
    } else {
      // 잎 노드인 경우 바로 제거
      if (tree.left === null && tree.right === null) {
        if (parent.left === tree) parent.left = null;
        else parent.right = null;
      } else {
        // 자식이 양쪽 모두 있는 경우
        if (tree.left !== null && tree.right !== null) {
          let minNode = this.getSearchMinNode(tree.right);
          // 찾은 노드도 제거해야 함
          minNode = this.removeChild(minNode.data, tree, null);
          tree.data = minNode.data;
        } else {
          // 자식이 하나만 있는 경우
          let temp;

          if (tree.left !== null) temp = tree.left;
          else temp = tree.right;

          if (parent.left === tree) parent.left = temp;
          else parent.right = temp;
        }
      }
    }
    return removed;
  }

  insertLeftChild(parentNode, childNode) {
    if (parentNode !== null) {
      if (parentNode.left === null) parentNode.left = childNode;
      else throw new Error('Left node already exists.');
    }
  }

  insertRightChild(parentNode, childNode) {
    if (parentNode !== null) {
      if (parentNode.right === null) parentNode.right = childNode;
      else throw new Error('Right node already exists.');
    }
  }

  preorder(node = this.root) {
    if (node === null) return;

    process.stdout.write(`${node.data} `);
    this.preorder(node.left);
    this.preorder(node.right);
  }

  preorderByLoop(root = this.root) {
    const stack = [];

    stack.push(root);
    while (true) {
      if (stack.length === 0) break;

      const popped = stack.pop();
      process.stdout.write(`${popped.data} `);

      // right가 나중에 출력되어야 하므로 먼저 push
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

  inorderByLoop(root = this.root) {
    const stack = [];

    let temp = root;
    while (true) {
      // 왼쪽 노드 전부 push
      for (; temp !== null; temp = temp.left) {
        stack.push(temp);
      }

      if (stack.length === 0) break;

      let popped = stack.pop();
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

  postorderByLoop(root = this.root) {
    const stack = [];

    stack.push(root);
    while (true) {
      if (stack.length === 0) break;

      let top = stack[stack.length - 1];
      let left = top.left;

      if (left !== null && !left.visited) {
        stack.push(left);
      } else {
        let right = top.right;
        if (right !== null && !right.visited) {
          stack.push(right);
        } else {
          top.visited = true;
          process.stdout.write(`${top.data} `);
          stack.pop();
        }
      }
    }
  }

  levelorder(root = this.root) {
    const queue = [];

    queue.push(root);
    while (true) {
      if (queue.length === 0) break;

      const dequeued = queue.shift();
      process.stdout.write(`${dequeued.data} `);

      if (dequeued.left !== null) queue.push(dequeued.left);
      if (dequeued.right !== null) queue.push(dequeued.right);
    }
  }

  getNodeCount(root = this.root) {
    function inner(node) {
      let count = 0;
      if (node !== null) {
        count = inner(node.left) + inner(node.right) + 1;
      }
      return count;
    }
    return inner(root);
  }

  getLeafNodeCount(root = this.root) {
    function inner(node) {
      let count = 0;
      if (node !== null) {
        if (node.left === null && node.right === null) {
          count = 1;
        } else {
          count = inner(node.left) + inner(node.right);
        }
      }

      return count;
    }
    return inner(root);
  }
}

const tree = new BinaryTree(new Node(123));
tree.insertChild(new Node(22));
tree.insertChild(new Node(9918));
tree.insertChild(new Node(424));
tree.insertChild(new Node(17));
tree.insertChild(new Node(3));
tree.insertChild(new Node(98));
tree.insertChild(new Node(34));
tree.insertChild(new Node(760));
tree.insertChild(new Node(317));
tree.insertChild(new Node(1));
tree.inorder();
console.log();

tree.removeChild(98);
tree.inorder();
console.log();

tree.insertChild(new Node(111));
tree.inorder();
console.log();

// const A = new Node('A');
// const B = new Node('B');
// const C = new Node('C');
// const D = new Node('D');
// const E = new Node('E');
// const F = new Node('F');
// const G = new Node('G');

// const tree = new BinaryTree(A);

// tree.insertLeftChild(A, B);
// tree.insertRightChild(A, C);
// tree.insertLeftChild(B, D);
// tree.insertRightChild(B, E);
// tree.insertLeftChild(C, F);
// tree.insertRightChild(C, G);

// console.log('--preorder--');
// tree.preorder();
// console.log();

// console.log('--inorder--');
// tree.inorder();
// console.log();

// console.log('--postorder--');
// tree.postorder();
// console.log();

// console.log('--preorder (Loop) --');
// tree.preorderByLoop();
// console.log();

// console.log('--inorder (Loop) --');
// tree.inorderByLoop();
// console.log();

// console.log('--postorder (Loop) --');
// tree.postorderByLoop();
// console.log();

// console.log('--levelorder --');
// tree.levelorder();
// console.log();

// console.log(tree.getNodeCount());
// console.log(tree.getLeafNodeCount());
