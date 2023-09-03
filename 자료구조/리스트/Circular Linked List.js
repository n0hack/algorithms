class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  #head;
  #length;

  constructor() {
    this.#head = null;
    this.#length = 0;
  }

  append(newNode) {
    if (this.#head === null) {
      this.#head = newNode;
      this.#head.prev = newNode;
      this.#head.next = newNode;
    } else {
      const tail = this.#head.prev;
      tail.next.prev = newNode;
      tail.next = newNode;
      newNode.prev = tail;
      newNode.next = this.#head;
    }
    this.#length += 1;
  }

  findByIndex(index) {
    if (this.#head === null || index < -1 || index >= this.#length) {
      return;
    }

    let current = this.#head;

    while (index--) {
      current = current.next;
    }
    return current;
  }

  removeByIndex(index) {
    if (this.#head === null || index < -1 || index >= this.#length) {
      return;
    }

    if (this.#length === 1) {
      this.#head = null;
    } else {
      let current = this.#head;

      if (index === 0) {
        this.#head = current.next;
      }

      while (index--) {
        current = current.next;
      }

      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    this.#length -= 1;
  }

  clear() {
    while (this.#length > 0) {
      this.removeByIndex(0);
    }
  }

  count() {
    return this.#length;
  }

  // `A → B → C` 형태로 출력
  print() {
    let length = this.#length;
    let current = this.#head;

    while (length--) {
      process.stdout.write(`${current.data}`);
      if (length === 0) process.stdout.write('\n');
      else process.stdout.write(` → `);
      current = current.next;
    }
  }

  reverse() {
    let length = this.#length;

    if (length < 2) {
      return;
    }

    let current = this.#head;
    while (length--) {
      [current.prev, current.next] = [current.next, current.prev];
      current = current.prev;
    }
    this.#head = current.next;
  }
}

const list = new LinkedList();

list.append(new Node('A'));
list.append(new Node('B'));
list.append(new Node('C'));
list.append(new Node('D'));
console.log(list.count());
list.print();
list.reverse();
list.print();
