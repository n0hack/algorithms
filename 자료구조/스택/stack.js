function Stack(size) {
  this.list = [];
  this.size = size;
  this.top = -1;
}

Stack.prototype.push = function (data) {
  if (this.isFull()) {
    throw new Error('Stack is full!');
  }
  this.list.push(data);
  this.top++;
};

Stack.prototype.pop = function () {
  if (this.isEmpty()) {
    throw new Error('Stack is empty!');
  }
  return this.list.pop(this.top--);
};

Stack.prototype.clear = function () {
  while (!this.isEmpty()) {
    this.pop();
  }
};

Stack.prototype.isFull = function () {
  return this.top === this.size - 1 ? true : false;
};

Stack.prototype.isEmpty = function () {
  return this.top === -1 ? true : false;
};

const stack = new Stack(3);
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.list);
console.log('popped:', stack.pop());
console.log(stack.list);
stack.clear();
console.log(stack.list);
