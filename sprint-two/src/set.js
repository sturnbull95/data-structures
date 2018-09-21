var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  set._length = 0;
  return set;
};

var setPrototype = {};

// Time complexity: O(1)
setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage[item] = item;
    this._length++;
  }
};

setPrototype.get = function(item){
  return this._storage[item];
};
setPrototype.set = function(item,value){
  this._storage[item] = value;
};

// Time complexity: O([].indexOf), O(n)
setPrototype.contains = function(item) {
  if(item in this._storage){
    return true;
  }
  return false;
};

// Time complexity: O([].indexOf), O(n)
setPrototype.remove = function(item) {
  if (this.contains(item)) {
    delete this._storage[item];
    this._length--;
  }
};
