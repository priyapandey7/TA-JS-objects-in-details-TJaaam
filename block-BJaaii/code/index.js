class Stack {
  constructor() {
    this.stack = [];
  }
  push(elm) {
    this.stack.push(elm);
    return this.stack;
  }
  pop(elm) {
    this.stack.push(elm);
    return this.stack;
  }
  peek(index = this.stack.length - 1) {
    return this.stack[index];
  }
  reverse() {
    return this.stack.reverse;
  }
  isEmpty() {
    return !(this.stack.length > 0);
  }
  displayStack() {
    return this.stack.join("");
  }
  get length() {
    return this.stack.length;
  }
}
// lets test it
let myStack = new Stack(); //
myStack.push("One"); //
myStack.push("Two"); //
console.log(myStack.length); // 2
console.log(myStack.peek()); // "Two"
console.log(myStack.peek(0)); // "One"
console.log(myStack.reverse()); // ['Two', 'One']
console.log(myStack.displayStack()); // 'Two One'//
myStack.pop();
console.log(myStack.length); // 1 //
console.log(myStack.peek()); // 'Two'
console.log(myStack.isEmpty()); // false
myStack.pop();
console.log(myStack.isEmpty()); // true //

// queue

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(elm) {
    this.queue.push(elm);
    return this.queue;
  }
  dequeue(elm) {
    this.queue.splice(0, 1);
    return this.queue;
  }
  peek(index = 0) {
    return this.queue[index];
  }
  reverse() {
    return this.queue.reverse;
  }
  isEmpty() {
    return !(this.queue.length > 0);
  }
  displayQueue() {
    return this.queue.join("");
  }
  get length() {
    return this.queue.length;
  }
}
// test
let atmQueue = new Queue();
atmQueue.enqueue("Aman");
atmQueue.enqueue("John");
atmQueue.enqueue("Rohan");
console.log(atmQueue.displayQueue());
("Aman John Rohan"); //
console.log(atmQueue.length); // 3
console.log(atmQueue.peek()); // "Aman"
console.log(atmQueue.peek(1)); // "John"
atmQueue.dequeue(); //
console.log(atmQueue.length); // 2
console.log(atmQueue.peek()); // 'John'
console.log(atmQueue.isEmpty()); // false
atmQueue.dequeue(); //
atmQueue.dequeue();
console.log(atmQueue.isEmpty()); // true
