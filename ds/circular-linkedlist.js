class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  // private field
  #head;

  constructor() {
    this.#head = null;
    this.length = 0;
  }

  append(newNode) {
    // head가 null인 경우
    if (this.#head === null) {
      this.#head = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      let temp = this.#head;

      while (temp.next !== this.#head) {
        temp = temp.next;
      }
      newNode.next = temp.next;
      temp.next = newNode;
      newNode.prev = temp;
      this.#head.prev = newNode;
    }
    // 리스트가 보유한 노드 개수
    this.length += 1;
  }

  delete(position) {
    // 제거할 수 없는 경우 그냥 종료
    if (this.#head === null || position < -1 || position >= this.length) {
      return;
    }

    // head만 있는 경우 제거
    if (this.length === 1) {
      this.#head = null;
    } else {
      let temp = this.#head;

      // position이 0인 경우, head를 바꿔야 함
      if (position === 0) {
        this.#head = this.#head.next;
      } else {
        while (--position >= 0) {
          temp = temp.next;
        }
      }
      temp.prev.next = temp.next;
      temp.next.prev = temp.prev;
    }
    this.length -= 1;
  }

  deleteLastNode() {
    // head가 null인 경우
    if (this.#head === null) {
      return;
    }

    // head만 있는 경우
    if (this.length === 1) {
      this.#head = null;
    } else {
      // 제거하려는 노드는 head의 prev 노드
      this.#head.prev.prev.next = this.#head;
      this.#head.prev = this.#head.prev.prev;

      this.length -= 1;
    }
  }

  print() {
    let temp = this.#head;

    // length를 이용해 구하는 게 편함
    for (let i = 0; i < this.length; i++) {
      process.stdout.write(temp.data);
      // A -> B -> C 형태로 출력하기 이한 조건문
      if (i + 1 !== this.length) process.stdout.write(' -> ');
      else console.log();
      temp = temp.next;
    }
  }

  clear() {
    // head가 null이 될 때까지 제거
    while (this.#head !== null) {
      this.deleteLastNode();
    }
  }

  reverse() {
    // length가 2 이상인 경우에만 뒤집기
    if (this.length >= 2) {
      let current = this.#head;
      let next;
      for (let i = 0; i < this.length; i++) {
        next = current.next;
        current.next = current.prev;
        current.prev = next;
        current = next;
      }
      // 새로운 head 등록
      this.#head = current.next;
    }
  }
}

const list = new LinkedList();

try {
  list.append(new Node('A'));
  list.append(new Node('B'));
  list.append(new Node('C'));
  list.append(new Node('B'));
  list.append(new Node('C'));
  // list.clear();
  list.reverse();
  list.print();
} catch (e) {
  console.error(e.message);
}
