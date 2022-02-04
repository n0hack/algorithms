// Old Version
class Queue {
  #queue;

  constructor(capacity) {
    this.#queue = [];
    this.front = 0;
    this.rear = capacity - 1;
    this.size = 0;
    this.capacity = capacity;
  }

  enqueue(data) {
    if (this.isFull()) {
      console.log('Queue is full!');
      return;
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.#queue[this.rear] = data;
    this.size += 1;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is empty!');
      return;
    }
    console.log(`${this.#queue[this.front]}`);
    this.front = (this.front + 1) % this.capacity;
    this.size -= 1;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }
}

const queue = new Queue(3);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(3);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.enqueue(3);
queue.enqueue(3);
queue.dequeue();
queue.dequeue();
