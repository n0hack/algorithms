function Node({ priority, data }) {
  this.priority = priority;
  this.data = data;
}

function PriorityQueue() {
  Array.call(this);
}
PriorityQueue.prototype = Object.create(Array.prototype);
PriorityQueue.prototype.constructor = PriorityQueue;

PriorityQueue.prototype.enqueue = function (newData) {
  let currentIndex = this.length;
  let parentIndex = this.getParent(currentIndex);

  this.push(newData);

  while (currentIndex > 0 && this[currentIndex].priority > this[parentIndex].priority) {
    this.swap(currentIndex, parentIndex);
    currentIndex = parentIndex;
    parentIndex = this.getParent(currentIndex);
  }
};

PriorityQueue.prototype.dequeue = function () {
  const deleteNode = this[0];

  if (this.length === 1) {
    this.pop();
    return deleteNode;
  } else {
    this[0] = this.pop();
  }

  // Reconstruct PQ
  let parentIndex = 0;
  let leftChildIndex = this.getLeftChild(parentIndex);
  let rightChildIndex = leftChildIndex + 1;

  while (true) {
    let selectedIndex;

    if (leftChildIndex >= this.length) break;
    if (rightChildIndex >= this.length) {
      selectedIndex = leftChildIndex;
      if (this[selectedIndex].priority > this[parentIndex].priority) {
        this.swap(selectedIndex, parentIndex);
        parentIndex = selectedIndex;
      } else {
        break;
      }
    } else {
      if (this[leftChildIndex].priority > this[rightChildIndex].priority) selectedIndex = leftChildIndex;
      else selectedIndex = rightChildIndex;

      if (this[selectedIndex].priority > this[parentIndex].priority) {
        this.swap(selectedIndex, parentIndex);
        parentIndex = selectedIndex;
      } else {
        break;
      }
    }
    leftChildIndex = this.getLeftChild(parentIndex);
    rightChildIndex = leftChildIndex + 1;
  }

  return deleteNode;
};

PriorityQueue.prototype.swap = function (index1, index2) {
  [this[index1], this[index2]] = [this[index2], this[index1]];
};

PriorityQueue.prototype.getParent = function (index) {
  return Math.floor((index - 1) / 2);
};

PriorityQueue.prototype.getLeftChild = function (index) {
  return index * 2 + 1;
};

const queue = new PriorityQueue();
queue.enqueue(new Node({ priority: 2, data: '웹 서핑하기' }));
queue.enqueue(new Node({ priority: 1, data: '넷플릭스 시청하기' }));
queue.enqueue(new Node({ priority: 6, data: '물 마시기' }));
queue.enqueue(new Node({ priority: 4, data: '코딩하기' }));
queue.enqueue(new Node({ priority: 3, data: '블로그 포스팅' }));
queue.enqueue(new Node({ priority: 5, data: '서점 다녀오기' }));

while (queue.length !== 0) {
  console.log(queue.dequeue());
}

module.exports = PriorityQueue;
