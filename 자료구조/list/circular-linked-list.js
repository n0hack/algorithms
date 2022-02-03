function Node(data) {
  this.data = data;
  this.prev = null;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.append = function (newNode) {
  if (this.head === null) {
    this.head = newNode;
    this.head.prev = newNode;
    this.head.next = newNode;
  } else {
    const tail = this.head.prev;
    tail.next.prev = newNode;
    tail.next = newNode;
    newNode.prev = tail;
    newNode.next = this.head;
  }
  this.length += 1;
};

// 배열과 동일하게 가장 앞을 0번 인덱스라 가정
LinkedList.prototype.remove = function (index) {
  if (this.head === null || index < -1 || index >= this.length) {
    return;
  }

  if (this.length === 1) {
    this.head = null;
  } else {
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
    }
    while (index-- > 0) {
      current = current.next;
    }
    current.prev.next = current.next;
    current.next.prev = current.prev;
  }
  this.length -= 1;
};

LinkedList.prototype.clear = function () {
  while (this.length > 0) {
    this.remove(0);
  }
};

LinkedList.prototype.print = function () {
  let length = this.length;
  let current = this.head;
  while (length-- > 0) {
    process.stdout.write(`${current.data}`);
    if (length === 0) process.stdout.write('\n');
    else process.stdout.write(` → `);
    current = current.next;
  }
};

LinkedList.prototype.reverse = function () {
  if (this.length < 2) return;

  let current = this.head;
  for (let i = 0; i < this.length; i++) {
    [current.prev, current.next] = [current.next, current.prev];
    current = current.prev;
  }
  this.head = current.next;
};

const list = new LinkedList();
list.append(new Node('A'));
list.append(new Node('B'));
list.append(new Node('C'));
list.remove(0);
list.reverse();
list.print();
