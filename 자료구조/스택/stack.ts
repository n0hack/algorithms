class Stack {
  constructor(private size: number, public list: number[] = [], private top: number = -1) {}

  push(data: number) {
    if (this.isFull()) {
      throw new Error('Stack is full!');
    }
    this.list.push(data);
    this.top++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty!');
    }
    this.top--;
    return this.list.pop();
  }

  clear() {
    while (!this.isEmpty()) {
      this.pop();
    }
  }

  isFull() {
    return this.top === this.size - 1 ? true : false;
  }

  isEmpty() {
    return this.top === -1 ? true : false;
  }
}

const stack = new Stack(3);
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.list);
console.log('popped:', stack.pop());
console.log(stack.list);
stack.clear();
console.log(stack.list);
