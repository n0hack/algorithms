class Heap extends Array {
  constructor({ type }) {
    super();
    this.usedSize = 0;
    // type: min or max
    this.type = type;
  }

  insert(newData) {
    let currentPosition = this.usedSize;
    let parentPosition = this.getParent(currentPosition);

    // 새로운 데이터 추가
    this.push(newData);

    if (this.type === 'min') {
      // min-heap
      while (currentPosition > 0 && this[currentPosition].data < this[parentPosition]) {
        this.swap(currentPosition, parentPosition);
        currentPosition = parentPosition;
        parentPosition = this.getParent(currentPosition);
      }
    } else {
      // max-heap
      while (currentPosition > 0 && this[currentPosition] > this[parentPosition]) {
        this.swap(currentPosition, parentPosition);
        currentPosition = parentPosition;
        parentPosition = this.getParent(currentPosition);
      }
    }
    this.usedSize += 1;
  }

  delete() {
    const deleteMin = this[0];
    this.usedSize -= 1;

    if (this.usedSize === 0) {
      // 노드가 하나뿐인 경우, 그대로 제거 후 반환
      this.pop();
      return deleteMin;
    } else {
      // 마지막 노드를 루트로 가져 옴
      this[0] = this.pop(this.usedSize);
    }

    let parentPosition = 0;
    let leftPosition = this.getLeftChild(parentPosition);
    let rightPosition = leftPosition + 1;

    // 힙 재구성
    while (true) {
      let selectedChild = 0;

      // leftPosition이 usedSize보다 크면 바꿀 필요 없음
      if (leftPosition >= this.usedSize) break;
      if (rightPosition >= this.usedSize) {
        selectedChild = leftPosition;

        if (this.type === 'min') {
          // min-heap
          if (this[selectedChild] < this[parentPosition]) {
            this.swap(selectedChild, parentPosition);
            parentPosition = selectedChild;
          } else {
            break;
          }
        } else {
          // max-heap
          if (this[selectedChild] > this[parentPosition]) {
            this.swap(selectedChild, parentPosition);
            parentPosition = selectedChild;
          } else {
            break;
          }
        }
      } else {
        if (this[leftPosition] > this[rightPosition]) selectedChild = rightPosition;
        else selectedChild = leftPosition;

        if (this.type === 'min') {
          // min-heap
          if (this[selectedChild] < this[parentPosition]) {
            this.swap(selectedChild, parentPosition);
            parentPosition = selectedChild;
          } else {
            break;
          }
        } else {
          // max-heap
          if (this[selectedChild] > this[parentPosition]) {
            this.swap(selectedChild, parentPosition);
            parentPosition = selectedChild;
          } else {
            break;
          }
        }
      }
      leftPosition = this.getLeftChild(parentPosition);
      rightPosition = leftPosition + 1;
    }
    return deleteMin;
  }

  // 유틸 메소드
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

const heap = new Heap({ type: 'min' });
heap.insert(2);
heap.insert(7);
heap.insert(52);
heap.insert(13);
heap.insert(8);
heap.insert(67);
heap.insert(161);
heap.insert(17);
heap.insert(43);
heap.insert(88);
heap.insert(37);
while (heap.length !== 0) {
  console.log(heap.delete());
}
