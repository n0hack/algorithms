class Queue {
  private list: any[];
  private capacity: number;
  private front: number;
  private rear: number;
  private size: number;

  constructor(capacity: number) {
    this.list = [];
    this.capacity = capacity;
    this.front = 0;
    this.rear = capacity - 1;
    this.size = 0;
  }

  enqueue = (data: any) => {
    if (this.isFull()) {
      throw new Error('Queue is full!');
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.list[this.rear] = data;
    this.size++;
  };

  dequeue = () => {
    if (this.isEmpty()) {
      throw new Error('Queue is empty!');
    }
    const res = this.list[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.size--;

    return res;
  };

  isFull = () => {
    return this.size === this.capacity;
  };

  isEmpty = () => {
    return this.size === 0;
  };
}

const queue = new Queue(3);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(4);
console.log(queue.dequeue());
