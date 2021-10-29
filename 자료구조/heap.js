// Heap
// 루트가 트리의 최솟값 or 최댓값을 가지는 구조
// 루트 제거 후 새롭게 루트를 구성해야 하므로, 보통 배열을 사용함 (최하단의 최우측 노드를 가져와야 함)
// 우선순위 큐를 구현할 때 사용
class Node {
  constructor(data) {
    this.data = data;
  }
}

class Heap extends Array {
  constructor() {
    super();
    this.usedSize = 0;
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  insert(newData) {
    let currentPosition = this.usedSize;
    let parentPosition = this.getParent(currentPosition);
    this.push(newData);

    while (currentPosition > 0 && this[currentPosition].data < this[parentPosition].data) {
      // Swap
      let temp = this[currentPosition];
      this[currentPosition] = this[parentPosition];
      this[parentPosition] = temp;

      currentPosition = parentPosition;
      parentPosition = this.getParent(currentPosition);
    }
    this.usedSize += 1;
  }

  getLeftChild(index) {
    return index * 2 + 1;
  }

  deleteMin() {
    let parentPosition = 0;
    let leftPosition = 0;
    let rightPosition = 0;

    const deleteMin = this[0];

    // 마지막 노드를 루트 위치로 이동
    this.usedSize -= 1;
    this[0] = this.pop(this.usedSize);

    leftPosition = this.getLeftChild(0);
    rightPosition = leftPosition + 1;

    // 힙이 제대로 구성될 때까지 반복
    while (true) {
      let selectedChild = 0;

      // leftPosition이 usedSize보다 크면 바꿀 필요 없음
      if (leftPosition >= this.usedSize) break;
      if (rightPosition >= this.usedSize) selectedChild = leftPosition;
      else {
        if (this[leftPosition].data > this[rightPosition].data) selectedChild = rightPosition;
        else selectedChild = leftPosition;
        console.log(`${leftPosition} 선택`);

        // 선택한 값이 부모보다 작다면 교환
        if (this[selectedChild].data < this[parentPosition].data) {
          let temp = this[selectedChild];
          this[selectedChild] = this[parentPosition];
          this[parentPosition] = temp;
          parentPosition = selectedChild;
        } else {
          break;
        }

        leftPosition = this.getLeftChild(parentPosition);
        rightPosition = leftPosition + 1;
      }
      // console.log(heap, leftPosition, rightPosition);
    }
    return deleteMin;
  }
}

const heap = new Heap();
heap.insert(new Node(2));
heap.insert(new Node(7));
heap.insert(new Node(52));
heap.insert(new Node(13));
heap.insert(new Node(8));
heap.insert(new Node(67));
heap.insert(new Node(161));
heap.insert(new Node(17));
heap.insert(new Node(43));
heap.insert(new Node(88));
heap.insert(new Node(37));
console.log(heap.deleteMin());
// console.log(heap);
