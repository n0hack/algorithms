function Node(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const reverseBetween = (head, m, n) => {
  if (!head || m === n) return head;

  let root = (start = new Node());
  root.next = head;
  for (let i = 0; i < m - 1; i++) {
    start = start.next;
  }
  let end = start.next;

  let temp;
  for (let i = 0; i < n - m; i++) {
    [temp, start.next, end.next] = [start.next, end.next, end.next.next];
    start.next.next = temp;
  }

  return root.next;
};

console.log(reverseBetween(new Node(1, new Node(2, new Node(3, new Node(4, new Node(5))))), 2, 4));
console.log(reverseBetween(new Node(5), 1, 1));
