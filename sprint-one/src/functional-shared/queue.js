var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.queueSize = 0;
  instance.storage = {};
  instance.topIndex = -1;

  _.extend(instance,queueMethods);
  return instance;
};

var queueMethods = {
  enqueue : function(value) {
    this.storage[this.queueSize] = value;
    this.queueSize++;
  },

  dequeue : function() {
    var dequeued = this.storage['0'];
    if (this.queueSize !== 0) {
      this.queueSize--;
    }
    for (var key in this.storage) {
      this.storage[Number(key) - 1] = this.storage[key];
      delete this.storage[key];
    }
    return dequeued;
  },

  size : function() {
    return this.queueSize;
  }
};
