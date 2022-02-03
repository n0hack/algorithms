function Queue(capacity) {
  this.front = 0;
  this.rear = capacity - 1;
  this.capacity = capacity;
}
Queue.prototype = Object.create(Array.prototype);
Queue.prototype.constructor = Queue;

Queue.prototype.enqueue = function (data) {
  if (this.isFull()) {
    throw new Error('Queue is full!');
  }
  this.rear = (this.rear + 1) % this.capacity;
  this[this.rear] = data;
  this.length += 1;
};

Queue.prototype.isFull = function () {
  return this.length === this.capacity;
};

Queue.prototype.dequeue = function () {
  if (this.isEmpty()) {
    throw new Error('Queue is empty!');
  }
  let val = this[this.front];

  this.front = (this.front + 1) % this.capacity;
  this.length -= 1;

  return val;
};

Queue.prototype.isEmpty = function () {
  return this.length === 0;
};

const queue = new Queue(3);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
