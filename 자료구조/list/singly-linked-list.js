class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  #head;

  constructor() {
    this.#head = null;
  }

  append(newNode) {
    if (!this.#head) {
      this.#head = newNode;
    } else {
      let current = this.#head;

      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  remove(index) {
    let current = this.#head;
    let prev = null;

    while (index-- > 0 && current !== null) {
      prev = current;
      current = current.next;
    }

    if (prev === null) {
      if (current !== null) this.#head = current.next;
      else throw new Error('Empty list!');
    } else {
      if (current !== null) prev.next = current.next;
      else throw new Error('Out of range error!');
    }
  }

  clear() {
    while (this.#head !== null) {
      this.remove(0);
    }
  }

  print() {
    let current = this.#head;

    while (current !== null) {
      // A → B → C 형태로 출력하도록 구현
      process.stdout.write(`${current.data}`);
      if (current.next !== null) process.stdout.write(` → `);
      else process.stdout.write('\n');

      current = current.next;
    }
  }

  reverse() {
    let current = this.#head;
    let [prev, next] = [null, null];

    while (current !== null) {
      [next, current.next] = [current.next, prev];
      [prev, current] = [current, next];
    }
    this.#head = prev;
  }
}

const list = new LinkedList();
list.append(new Node('A'));
list.append(new Node('B'));
list.append(new Node('C'));
list.print();
// list.reverse();
list.print();
