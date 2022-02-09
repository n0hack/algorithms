class Heap extends Array {
  constructor({ type }) {
    super();
    this.usedSize = 0;
    this.type = type;
  }

  insert(newData) {
    let currentIndex = this.usedSize;
    let parentIndex = this.getParentIndex(currentIndex);

    this.push(newData);
    this.usedSize += 1;

    if (this.type === 'min') {
      // min-heap
      while (currentIndex > 0 && this[currentIndex] < this[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = this.getParentIndex(currentIndex);
      }
    } else {
      // max-heap
      while (currentIndex > 0 && this[currentIndex] > this[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = this.getParentIndex(currentIndex);
      }
    }
  }

  delete() {
    const deleteNode = this[0];
    this.usedSize -= 1;

    if (this.usedSize === 0) {
      this.pop();
      return deleteNode;
    } else {
      this[0] = this.pop();
    }

    // Reconstruct heap
    let parentIndex = 0;
    let leftChildIndex = this.getLeftChildIndex(parentIndex);
    let rightChildIndex = leftChildIndex + 1;

    while (true) {
      let selectedIndex;

      if (leftChildIndex >= this.usedSize) break;
      if (rightChildIndex >= this.usedSize) {
        selectedIndex = leftChildIndex;

        if (this.type === 'min') {
          if (this[selectedIndex] < this[parentIndex]) {
            this.swap(selectedIndex, parentIndex);
            parentIndex = selectedIndex;
          } else {
            break;
          }
        } else {
          if (this[selectedIndex] > this[parentIndex]) {
            this.swap(selectedIndex, parentIndex);
            parentIndex = selectedIndex;
          } else {
            break;
          }
        }
      } else {
        if (this.type === 'min') {
          if (this[leftChildIndex] < this[rightChildIndex]) selectedIndex = leftChildIndex;
          else selectedIndex = rightChildIndex;

          if (this[selectedIndex] < this[parentIndex]) {
            this.swap(selectedIndex, parentIndex);
            parentIndex = selectedIndex;
          } else {
            break;
          }
        } else {
          if (this[leftChildIndex] > this[rightChildIndex]) selectedIndex = leftChildIndex;
          else selectedIndex = rightChildIndex;

          if (this[selectedIndex] > this[parentIndex]) {
            this.swap(selectedIndex, parentIndex);
            parentIndex = selectedIndex;
          } else {
            break;
          }
        }
      }
      leftChildIndex = this.getLeftChildIndex(parentIndex);
      rightChildIndex = leftChildIndex + 1;
    }

    return deleteNode;
  }

  swap(index1, index2) {
    [this[index1], this[index2]] = [this[index2], this[index1]];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }
}

const heap = new Heap({ type: 'min' });
console.log(heap);
heap.insert(22);
heap.insert(5);
heap.insert(11);
heap.insert(32);
heap.insert(120);
heap.insert(68);
heap.insert(70);

console.log(heap);
while (heap.usedSize !== 0) {
  process.stdout.write(`${heap.delete()} `);
}
console.log();
