// 이진 트리: 자식을 최대 2개까지만 가질 수 있는 트리
// 포화 이진 트리(FBT): 잎이 모두 채워진 이진 트리
// 완전 이진 트리(CBT): 잎이 왼쪽부터 차곡차곡 채워진 이진 트리 (CBT <= FBT)

// 노드 생성
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// 전위 순회
const preorder = (node) => {
  if (node === null) return;

  process.stdout.write(`${node.data} `);
  preorder(node.left);
  preorder(node.right);
};

// 전위 순회 (반복문)
const preorderLoop = (node) => {
  const stack = [];

  stack.push(node);

  while (stack.length !== 0) {
    const popped = stack.pop();
    process.stdout.write(`${popped.data} `);

    if (popped.right !== null) stack.push(popped.right);
    if (popped.left !== null) stack.push(popped.left);
  }
};

// 중위 순회
const inorder = (node) => {
  if (node === null) return;

  inorder(node.left);
  process.stdout.write(`${node.data} `);
  inorder(node.right);
};

// 중위 순회 (반복문)
const inorderLoop = (node) => {
  const stack = [];

  while (true) {
    // 왼쪽 노드 모두 삽입
    for (; node !== null; node = node.left) {
      stack.push(node);
    }

    if (stack.length === 0) break;

    const popped = stack.pop();
    process.stdout.write(`${popped.data} `);
    // 오른쪽 노드도 왼쪽 노드를 가지고 있는지 확인하기 위해 할당
    node = popped.right;
  }
};

// 후위 순회
const postorder = (node) => {
  if (node === null) return;

  postorder(node.left);
  postorder(node.right);
  process.stdout.write(`${node.data} `);
};

// 후위 순회 (반복문)
const postorderLoop = (node) => {
  const stack = [];

  // 모든 노드에 visited 멤버 추가
  addVisitProperty(node);

  stack.push(node);

  while (stack.length !== 0) {
    let top = stack[stack.length - 1];
    let left = top.left;

    if (left !== null && !left.visited) {
      // left가 null이 아니고, 방문하지 않았다면 스택에 추가
      stack.push(left);
    } else {
      let right = top.right;
      if (right !== null && !right.visited) {
        // right가 null이 아니고, 방문하지 않았다면 스택에 추가
        stack.push(right);
      } else {
        // 출력
        top.visited = true;
        process.stdout.write(`${top.data} `);
        stack.pop();
      }
    }
  }
};

// 모든 노드에 visited 멤버 추가
const addVisitProperty = (node) => {
  if (node === null) return;

  node.visited = false;
  addVisitProperty(node.left);
  addVisitProperty(node.right);
};

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');
const g = new Node('G');

a.left = b;
b.left = c;
b.right = d;
a.right = e;
e.left = f;
e.right = g;

console.log('전위 순회');
preorderLoop(a);
console.log();

console.log('중위 순회');
inorderLoop(a);
console.log();

console.log('후위 순회');
postorderLoop(a);
console.log();
