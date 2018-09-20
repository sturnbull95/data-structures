var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.stackSize = 0;
  instance.storage = {};
  instance.topIndex = -1;

  _.extend(instance,stackMethods);
  return instance;
};

var stackMethods = {
  push : function(value){
    this[this.stackSize] = value;
    this.stackSize++;
  },

  pop : function(){
    var popped = this[this.stackSize-1];
    if(popped == -1){
      popped = 0;
    }
    delete this[this.stackSize-1];
    if(this.stackSize !== 0){
      this.stackSize--;
    }
    return popped;
  },

  size : function(){
    return this.stackSize;
  }
};
