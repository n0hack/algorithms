class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const searchNode = (tree, target) => {
  if (tree === null) return null;

  if (target === tree.data) return tree;
  else if (target < tree.data) return searchNode(tree.left, target);
  else if (target > tree.data) return searchNode(tree.right, target);
};

const insertNode = (tree, child) => {
  if (tree.data < child.data) {
    if (tree.right !== null) insertNode(tree.right, child);
    else tree.right = child;
  } else if (tree.data > child.data) {
    if (tree.left !== null) insertNode(tree.left, child);
    else tree.left = child;
  }
};

const searchMinNode = (tree) => {
  if (tree === null) return null;

  if (tree.left === null) return tree;
  else searchMinNode(tree.left);
};

const removeNode = (tree, parent, target) => {
  let removed = null;

  if (tree === null) return null;

  if (tree.data > target) {
    removed = removeNode(tree.left, tree, target);
  } else if (tree.data < target) {
    removed = removeNode(tree.right, tree, target);
  } else {
    removed = tree;

    // 잎 노드인 경우 바로 제거
    if (tree.left === null && tree.right === null) {
      if (parent.left === tree) parent.left = null;
      else parent.right = null;
    } else {
      // 자식이 둘 다 있는 경우
      if (tree.left !== null && tree.right !== null) {
        let minNode = searchMinNode(tree.right);
        // 최솟값 노드를 옮겨야 하므로 제거
        removed = removeNode(tree, null, minNode.data);
        tree.data = minNode.data;
      } else {
        let temp;
        if (tree.left !== null) temp = tree.left;
        else temp = tree.right;

        if (parent.left === tree) parent.left = temp;
        else parent.right = temp;
      }
    }
  }

  return removed;
};

const tree = new Node(123);

insertNode(tree, new Node(22));
insertNode(tree, new Node(9918));
insertNode(tree, new Node(424));
insertNode(tree, new Node(17));
insertNode(tree, new Node(3));
insertNode(tree, new Node(98));
insertNode(tree, new Node(34));
insertNode(tree, new Node(760));
insertNode(tree, new Node(317));
insertNode(tree, new Node(1));

console.log(searchNode(tree, 98));
console.log(removeNode(tree, null, 98));
console.log(searchNode(tree, 98));
