class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const insert = (tree, child) => {
  if (tree.data < child.data) {
    if (tree.right === null) tree.right = child;
    else insert(tree.right, child);
  } else if (tree.data > child.data) {
    if (tree.left === null) tree.left = child;
    else insert(tree.left, child);
  }
};

const remove = (tree, parent, target) => {
  if (tree === null) return null;

  let removed = null;

  if (tree.data > target) removed = remove(tree.left, tree, target);
  else if (tree.data < target) removed = remove(tree.right, tree, target);
  else {
    removed = tree;

    if (tree.left === null && tree.right === null) {
      // 잎 노드인 경우 바로 제거
      if (parent.left === tree) parent.left = null;
      else parent.right = null;
    } else {
      if (tree.left !== null && tree.right !== null) {
        // 자식이 양쪽 모두 있는 경우
        let minNode = searchMinNode(tree.right);
        minNode = remove(tree, null, minNode.data);
        tree.data = minNode.data;
      } else {
        // 자식이 한 쪽만 있는 경우
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

const search = (tree, target) => {
  if (tree === null) return null;

  if (tree.data === target) return tree;
  else if (tree.data < target) return search(tree.right, target);
  else if (tree.data > target) return search(tree.left, target);
};

const searchMinNode = (tree) => {
  if (tree === null) return null;

  if (tree.left === null) return tree;
  else return searchMinNode(tree.left);
};

const inorder = (tree) => {
  if (tree === null) return;

  inorder(tree.left);
  process.stdout.write(`${tree.data} `);
  inorder(tree.right);
};

const tree = new Node(123);
// Insertion
insert(tree, new Node(22));
insert(tree, new Node(9918));
insert(tree, new Node(424));
insert(tree, new Node(17));
insert(tree, new Node(3));
insert(tree, new Node(98));
insert(tree, new Node(34));
insert(tree, new Node(760));
insert(tree, new Node(317));
insert(tree, new Node(1));
inorder(tree);
console.log();
console.log(search(tree, 317));
inorder(tree);
console.log();
insert(tree, new Node(111));
inorder(tree);
console.log();
console.log(remove(tree, null, 98));
inorder(tree);
console.log();
