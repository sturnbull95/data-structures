var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.queueSize = 0;
};


Queue.prototype.size = function(){
  return this.queueSize;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.queueSize] = value;
  this.queueSize++;
};

Queue.prototype.dequeue = function(){
  var dequeued = this.storage['0'];
  if (this.queueSize !== 0) {
    this.queueSize--;
  }
  for (var key in this.storage) {
    this.storage[Number(key) - 1] = this.storage[key];
    delete this.storage[key];
  }
  return dequeued;
};
