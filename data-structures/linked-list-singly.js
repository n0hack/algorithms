class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Head is pointer of first node.
    this.head = null;
  }

  // Append new node.
  append(newNode) {
    if (this.head === null) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  // Delete node by value.
  deleteByValue(value) {
    let temp = this.head;

    // head가 제거하고자 하는 노드인 경우
    if (temp !== null && temp.data === value) {
      this.head = temp.next;
      return;
    }

    // value와 일치하는 노드 탐색
    let prev = null;
    while (temp !== null && temp.data !== value) {
      prev = temp;
      temp = temp.next;
    }

    // temp가 null이 아니라면, 원하는 노드를 찾은 것
    // 찾은 노드를 리스트 내에서 연결 해제
    if (temp !== null) {
      prev.next = temp.next;
    }
  }

  // Delete node by position.
  deleteByPosition(position) {
    let temp = this.head;
    let prev = null;

    // position이 0이라면, head 제거
    if (temp !== null && position === 0) {
      this.head = temp.next;
      return;
    }

    // 반복을 통해 position만큼 순회
    while (temp !== null && position-- !== 0) {
      prev = temp;
      temp = temp.next;
    }

    // 순회를 잘 마무리하면 position의 값은 -1
    if (temp !== null && position < 0) {
      prev.next = temp.next;
    }
  }

  // Get num of nodes.
  getLength() {
    let num = 0;
    let temp = this.head;

    while (temp !== null) {
      num++;
      temp = temp.next;
    }

    return num;
  }

  // Print nodes.
  print() {
    let temp = this.head;
    while (temp !== null) {
      // 'A -> B -> C'처럼 출력하도록 구현
      process.stdout.write(`${temp.data}`);
      if (temp.next !== null) process.stdout.write(' -> ');
      else process.stdout.write('\n');

      temp = temp.next;
    }
  }

  // Clear list.
  clear() {
    while (this.head !== null) {
      this.deleteByPosition(0);
    }
  }

  // Reverse list.
  reverse() {
    let prev = null;
    let next = null;
    let current = this.head;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

const linkedList = new LinkedList();

linkedList.append(new Node(1));
linkedList.append(new Node(2));
linkedList.append(new Node(3));
linkedList.append(new Node(4));
linkedList.append(new Node(5));
linkedList.reverse();
linkedList.print();
