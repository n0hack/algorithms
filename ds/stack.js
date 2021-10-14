class Stack {
  // private field
  #stack;

  constructor(size) {
    this.size = size;
    this.#stack = [];
    this.top = -1;
  }

  push(data) {
    if (!this.isFull()) {
      this.#stack[++this.top] = data;
    } else {
      console.log('Stack is full!');
    }
  }

  pop() {
    if (!this.isEmpty()) {
      return this.#stack[this.top--];
    } else {
      console.log('Stack is empty!');
    }
  }

  isFull() {
    return this.top + 1 === this.size ? true : false;
  }

  isEmpty() {
    return this.top === -1 ? true : false;
  }

  getLength() {
    return this.top + 1;
  }
}

// 최대 사이즈를 10으로 설정
const stack = new Stack(10);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
