function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

const preorder = (node) => {
  if (node === null) return;

  process.stdout.write(`${node.data} `);
  preorder(node.left);
  preorder(node.right);
};

const inorder = (node) => {
  if (node === null) return;

  process.stdout.write(`( `);
  inorder(node.left);
  process.stdout.write(`${node.data} `);
  inorder(node.right);
  process.stdout.write(`) `);
};

const postorder = (node) => {
  if (node === null) return;

  postorder(node.left);
  postorder(node.right);
  process.stdout.write(`${node.data} `);
};

const build = (stack, node) => {
  if (node === null) return;

  const token = stack.pop();

  switch (token) {
    case '+':
    case '-':
    case '*':
    case '/':
      node.data = token;
      node.left = new Node();
      node.right = new Node();
      // 오른쪽부터 트리 구성
      build(stack, node.right);
      build(stack, node.left);
      break;
    default:
      node.data = token;
  }
};

const calculate = (node) => {
  if (node === null) return;

  let res;

  switch (node.data) {
    case '+':
    case '-':
    case '*':
    case '/':
      const left = calculate(node.left);
      const right = calculate(node.right);

      if (node.data === '+') res = left + right;
      else if (node.data === '-') res = left - right;
      else if (node.data === '*') res = left * right;
      else if (node.data === '/') res = left / right;
      break;
    default:
      res = node.data;
  }

  return res;
};

const root = new Node();
build(Array.from('43*75-/'), root);

// 순회
preorder(root);
console.log();
inorder(root);
console.log();
postorder(root);
console.log();

// 계산
console.log('result:', calculate(root));
