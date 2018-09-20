class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.stackSize = 0;
  }

  push(value){
    this[this.stackSize] = value;
    this.stackSize++;
  }

  pop(){
    var popped = this[this.stackSize-1];
    if(popped == -1){
      popped = 0;
    }
    delete this[this.stackSize-1];
    if(this.stackSize !== 0){
      this.stackSize--;
    }
    return popped;
  }

  size(){
    return this.stackSize;
  }

}
