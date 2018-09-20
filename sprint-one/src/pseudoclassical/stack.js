var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.stackSize = 0;
};

Stack.prototype.size = function(){
  return this.stackSize;
};

Stack.prototype.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

Stack.prototype.pop = function(){
  var popped = this.storage[this.stackSize-1];
  delete this.storage[this.stackSize];
  if(this.stackSize != 0){
    this.stackSize--;
  }
  return popped;
};
