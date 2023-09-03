class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  #head;

  constructor() {
    this.#head = null;
  }

  append(newNode) {
    if (this.#head === null) {
      this.#head = newNode;
    } else {
      let current = this.#head;

      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  insertAfter(currentNode, newNode) {
    if (!currentNode) return;

    currentNode.next.prev = newNode;
    newNode.next = currentNode.next;
    newNode.prev = currentNode;
    currentNode.next = newNode;
  }

  insertBefore(currentNode, newNode) {
    if (!currentNode) return;

    if (this.#head === currentNode) {
      this.#head = newNode;
      this.#head.next = currentNode;
      currentNode.prev = this.#head;
    } else {
      let prev = this.#head;
      while (prev?.next !== currentNode) {
        prev = prev?.next ?? null;
      }
      currentNode.prev = newNode;
      newNode.prev = prev;
      newNode.next = currentNode;
      prev.next = newNode;
    }
  }

  findByIndex(index) {
    if (index <= -1) return null;

    let current = this.#head;

    while (current !== null && --index >= 0) {
      current = current.next;
    }
    return current;
  }

  removeByIndex(index) {
    let prev = null;
    let current = this.#head;

    while (current !== null && --index >= 0) {
      prev = current;
      current = current.next;
    }

    if (prev === null && current !== null) {
      this.#head = current.next;
    } else if (prev !== null && current !== null) {
      prev.next = current.next;
    }
  }

  clear() {
    while (this.count() !== 0) {
      this.removeByIndex(0);
    }
  }

  count() {
    let count = 0;
    let current = this.#head;

    while (current !== null) {
      count++;
      current = current.next;
    }

    return count;
  }

  // `A → B → C` 형태로 출력
  print() {
    let current = this.#head;

    while (current !== null) {
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
      next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }
    this.#head = prev;
  }
}

const list = new LinkedList();

list.append(new Node('A'));
list.append(new Node('B'));
list.append(new Node('C'));
list.append(new Node('D'));
list.insertAfter(list.findByIndex(0), new Node('A2'));
list.insertBefore(list.findByIndex(2), new Node('A3'));
list.insertBefore(list.findByIndex(0), new Node('A0'));
list.reverse();
list.print();
