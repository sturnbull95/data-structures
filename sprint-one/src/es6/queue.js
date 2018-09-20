class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.queueSize = 0;
  }
  enqueue(value) {
    this.storage[this.queueSize] = value;
    this.queueSize++;
  }

  dequeue() {
    var dequeued = this.storage['0'];
    if (this.queueSize !== 0) {
      this.queueSize--;
    }
    for (var key in this.storage) {
      this.storage[Number(key) - 1] = this.storage[key];
      delete this.storage[key];
    }
    return dequeued;
  }

  size() {
    return this.queueSize;
  }

}
