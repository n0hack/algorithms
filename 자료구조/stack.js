function Stack(size) {
  this.stack = [];
  this.size = size;
  this.top = -1;
}

Stack.prototype.push = function (data) {
  if (this.isFull()) throw new Error('Stack is full!');

  this.stack[++this.top] = data;
};

Stack.prototype.isFull = function () {
  return this.size - 1 === this.top ? true : false;
};

Stack.prototype.pop = function () {
  if (this.isEmpty()) throw new Error('Stack is empty!');

  return this.stack[this.top--];
};

Stack.prototype.isEmpty = function () {
  return this.top === -1 ? true : false;
};

Stack.prototype.clear = function () {
  while (this.top !== -1) {
    this.pop();
  }
};

const stack = new Stack(3);

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
