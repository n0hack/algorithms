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
      this.length += 1;
    } else {
      let temp = this.#head;

      while (temp.next !== null) {
        temp = temp.next;
      }
      // 서로를 연결
      newNode.prev = temp;
      temp.next = newNode;
      this.length += 1;
    }
  }

  delete(position) {
    // head가 null인 경우 + position이 length를 벗어난 경우
    if (this.#head === null || position >= this.length || position <= -1) {
      throw new Error(`Can't delete element.`);
    }

    // head를 지우고자 하는 경우
    if (position === 0 && this.length > 0) {
      this.#head = this.#head.next;
      this.length -= 1;
    } else {
      let temp = this.#head;
      let prev = null;

      while (--position >= 0) {
        prev = temp;
        temp = temp.next;
      }
      // 상호 제거
      prev.next = temp.next;
      temp.prev = prev;
      this.length -= 1;
    }
  }

  print() {
    let temp = this.#head;

    while (temp !== null) {
      // A -> B -> C 형태로 출력할 수 있도록 만듦
      process.stdout.write(`${temp.data}`);
      if (temp.next !== null) {
        process.stdout.write(' -> ');
      } else {
        console.log();
      }
      temp = temp.next;
    }
  }

  clear() {
    // head가 null이 될 때까지 제거
    while (this.#head !== null) {
      this.delete(0);
    }
  }

  reverse() {
    // length가 2 이상인 경우에만 뒤집기
    if (this.length >= 2) {
      let current = this.#head;
      let temp = null;

      while (current !== null) {
        current.prev = current.next;
        current.next = temp;
        temp = current;
        current = current.prev;
      }
      // 새로운 head 등록
      this.#head = temp;
    }
  }
}

const list = new LinkedList();

try {
  list.append(new Node('A'));
  list.append(new Node('B'));
  list.append(new Node('C'));
  list.reverse();
  list.print();
  console.log(list.length);
} catch (e) {
  console.error(e.message);
}
