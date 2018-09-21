var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.count = 0;
};

HashTable.prototype.insert = function(k, v){
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(index)) {
    this._storage.set(index, []);
  }
  var bucket = this._storage.get(index);
  if(bucket.length > 0){
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      }
      else{
        bucket.push([k,v]);
      }
    }
  } else {
    bucket.push([k, v]);
  }
  this.count++;
  if (this.count === (this._limit - 2)) {
    this._limit *= 2;
    this.adjustLimit(this._limit);
  }
};

HashTable.prototype.retrieve = function(k){
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    return;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
        this.count--;
        if (this._limit > 8 && this.count < (this._limit/2 -2)) {
          this._limit /= 2;
          this.adjustLimit(this._limit);
        }
      }
    }
  }
};

// Helper function to rehash thelimit when we double or half the limit

HashTable.prototype.adjustLimit = function(newLimit) {
  var adjustedStore = [];
  this._storage.each(function(bucket) {
    if(bucket){
      adjustedStore = adjustedStore.concat(bucket);
    } else{
      adjustedStore.concat([])
    }
  });
  this._storage = LimitedArray(newLimit);
  for (var i = 0; i < adjustedStore.length; i++) {
    this.count--;
    this.insert.apply(this, adjustedStore[i]);
  }
};
