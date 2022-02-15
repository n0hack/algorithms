// 우선순위 큐
// 사실상 힙에 우선순위만 추가된 것
class Node {
  constructor(priority, data) {
    this.priority = priority;
    this.data = data;
  }
}

class PriorityQueue extends Array {
  constructor() {
    super();
    this.usedSize = 0;
  }

  enqueue(newData) {
    let currentPosition = this.usedSize;
    let parentPosition = this.getParent(currentPosition);

    this[currentPosition] = newData;

    while (currentPosition > 0 && this[currentPosition].priority < this[parentPosition].priority) {
      this.swap(currentPosition, parentPosition);
      currentPosition = parentPosition;
      parentPosition = this.getParent(currentPosition);
    }
    this.usedSize += 1;
  }

  dequeue() {
    // 큐에 요소가 없는 경우 그냥 종료
    if (this.usedSize === 0) return;

    this.usedSize -= 1;
    const extract = this[0];

    // 큐에 요소가 단 하나 뿐이라면
    if (this.usedSize === 0) {
      this.pop(0);
      return extract;
    } else {
      // 마지막 요소를 루트로 가져 오고 제거
      this[0] = this[this.usedSize];
      this.pop(this.usedSize);

      while (true) {
        let parentPosition = 0;
        let leftChildPosition = this.getLeftChild(parentPosition);
        let rightChildPosition = leftChildPosition + 1;
        let selectedPosition = 0;

        if (leftChildPosition >= this.usedSize) break;
        if (rightChildPosition >= this.usedSize) selectedPosition = leftChildPosition;
        else {
          if (this[leftChildPosition].priority > this[rightChildPosition].priority) selectedPosition = rightChildPosition;
          else selectedPosition = leftChildPosition;
        }

        if (this[selectedPosition].priority < this[parentPosition].priority) {
          this.swap(selectedPosition, parentPosition);
          parentPosition = selectedPosition;
        } else {
          break;
        }
      }
    }
    return extract;
  }

  swap(index1, index2) {
    let temp = this[index1];
    this[index1] = this[index2];
    this[index2] = temp;
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChild(index) {
    return index * 2 + 1;
  }
}

const pq = new PriorityQueue();
pq.enqueue(new Node(13, '운동하기'));
pq.enqueue(new Node(2, '코딩하기'));
pq.enqueue(new Node(8, '잠자기'));
pq.enqueue(new Node(99, '커피마시기'));
pq.enqueue(new Node(1, '숨쉬기'));
console.log(pq);
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq);
