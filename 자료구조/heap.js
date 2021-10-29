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
      while (currentPosition > 0 && this[currentPosition].data < this[parentPosition].data) {
        this.swap(currentPosition, parentPosition);
        currentPosition = parentPosition;
        parentPosition = this.getParent(currentPosition);
      }
    } else {
      // max-heap
      while (currentPosition > 0 && this[currentPosition].data > this[parentPosition].data) {
        this.swap(currentPosition, parentPosition);
        currentPosition = parentPosition;
        parentPosition = this.getParent(currentPosition);
      }
    }
    this.usedSize += 1;
  }

  deleteMin() {
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
          if (this[selectedChild].data < this[parentPosition].data) {
            this.swap(selectedChild, parentPosition);
            parentPosition = selectedChild;
          } else {
            break;
          }
        } else {
          // max-heap
          if (this[selectedChild].data > this[parentPosition].data) {
            this.swap(selectedChild, parentPosition);
            parentPosition = selectedChild;
          } else {
            break;
          }
        }
      } else {
        if (this[leftPosition].data > this[rightPosition].data) selectedChild = rightPosition;
        else selectedChild = leftPosition;

        if (this.type === 'min') {
          // min-heap
          if (this[selectedChild].data < this[parentPosition].data) {
            this.swap(selectedChild, parentPosition);
            parentPosition = selectedChild;
          } else {
            break;
          }
        } else {
          // max-heap
          if (this[selectedChild].data > this[parentPosition].data) {
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

const heap = new Heap({ type: 'max' });
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
console.log(heap);
console.log(heap.deleteMin());
