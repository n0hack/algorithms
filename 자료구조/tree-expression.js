// 노드 생성
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// 순회
const preorder = (node) => {
  if (node === null) return;

  process.stdout.write(`${node.data} `);
  preorder(node.left);
  preorder(node.right);
};

const inorder = (node) => {
  if (node === null) return;

  process.stdout.write(`(`);
  inorder(node.left);
  // 우선순위로 인해 괄호 추가
  process.stdout.write(`${node.data}`);
  inorder(node.right);
  process.stdout.write(`)`);
};

const postorder = (node) => {
  if (node === null) return;

  postorder(node.left);
  postorder(node.right);
  process.stdout.write(`${node.data} `);
};

// 수식 트리 생성
const build = (stack, node) => {
  const token = stack.pop();

  switch (token) {
    case '+':
    case '-':
    case '*':
    case '/':
      node.data = token;
      node.right = new Node();
      node.left = new Node();
      build(stack, node.right);
      build(stack, node.left);
      break;
    default:
      node.data = token;
  }
};

// 수식 트리 계산
const calculate = (expTree) => {
  if (expTree === null) return;

  let result;
  switch (expTree.data) {
    case '+':
    case '-':
    case '*':
    case '/':
      let left = calculate(expTree.left);
      let right = calculate(expTree.right);

      if (expTree.data === '+') result = left + right;
      else if (expTree.data === '-') result = left - right;
      else if (expTree.data === '*') result = left * right;
      else if (expTree.data === '/') result = left / right;
      break;
    default:
      return expTree.data;
  }

  return result;
};

const expTree = new Node();
build(Array.from('43*75-/'), expTree);
console.log(calculate(expTree));

preorder(expTree);
console.log();
inorder(expTree);
console.log();
postorder(expTree);
console.log();
