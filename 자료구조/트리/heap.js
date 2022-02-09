function Node(data) {
  this.data = data;
}

function Heap({ type }) {
  Array.call(this);
  this.usedSize = 0;
  this.type = type;
}
Heap.prototype = Object.create(Array.prototype);
Heap.prototype.constructor = Heap;

Heap.prototype.insert = function (newData) {
  let currentIndex = this.usedSize;
  let parentIndex = this.getParentIndex(currentIndex);

  this.push(newData);
  this.usedSize += 1;

  if (this.type === 'min') {
    // min-heap
    while (currentIndex > 0 && this[currentIndex].data < this[parentIndex].data) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  } else {
    // max-heap
    while (currentIndex > 0 && this[currentIndex].data > this[parentIndex].data) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }
};

Heap.prototype.delete = function () {
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
        if (this[selectedIndex].data < this[parentIndex].data) {
          this.swap(selectedIndex, parentIndex);
          parentIndex = selectedIndex;
        } else {
          break;
        }
      } else {
        if (this[selectedIndex].data > this[parentIndex].data) {
          this.swap(selectedIndex, parentIndex);
          parentIndex = selectedIndex;
        } else {
          break;
        }
      }
    } else {
      if (this.type === 'min') {
        if (this[leftChildIndex].data < this[rightChildIndex].data) selectedIndex = leftChildIndex;
        else selectedIndex = rightChildIndex;

        if (this[selectedIndex].data < this[parentIndex].data) {
          this.swap(selectedIndex, parentIndex);
          parentIndex = selectedIndex;
        } else {
          break;
        }
      } else {
        if (this[leftChildIndex].data > this[rightChildIndex].data) selectedIndex = leftChildIndex;
        else selectedIndex = rightChildIndex;

        if (this[selectedIndex].data > this[parentIndex].data) {
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
};

Heap.prototype.swap = function (index1, index2) {
  [this[index1], this[index2]] = [this[index2], this[index1]];
};

Heap.prototype.getParentIndex = function (index) {
  return Math.floor((index - 1) / 2);
};

Heap.prototype.getLeftChildIndex = function (index) {
  return index * 2 + 1;
};

const heap = new Heap({ type: 'min' });
console.log(heap);
heap.insert(new Node(22));
heap.insert(new Node(5));
heap.insert(new Node(11));
heap.insert(new Node(32));
heap.insert(new Node(120));
heap.insert(new Node(68));
heap.insert(new Node(70));

console.log(heap);
while (heap.usedSize !== 0) {
  process.stdout.write(`${heap.delete().data} `);
}
console.log();
