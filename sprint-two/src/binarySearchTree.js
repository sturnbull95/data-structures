var BinarySearchTree = function(value){
  var instance = Object.create(binaryMethods);
  instance.value = value;
  instance.left = null;
  instance.right = null;
  return instance;
  };

  var binaryMethods = {
    insert: function(value){
      if (value > this.value) {
        if(this.right === null) {
          this.right = BinarySearchTree(value);
        }
        this.right.insert(value);
      }
      if (value < this.value) {
        if(this.left === null){
          this.left = BinarySearchTree(value);
        }
        this.left.insert(value);
      }
    },
    contains: function(value) {
      // base case
      if (this.value === value) {
        return true;
      }
      if (this.left === null && this.right === null) {
        return false;
      }
      if(this.left && this.left.contains(value) || (this.right && this.right.contains(value))){
        return true;
      }
      else{
        return false;
      }
    },
    depthFirstLog: function(cb) {
      cb(this.value);
      if (this.left) {
        this.left.depthFirstLog(cb);
      }
      if (this.right) {
        this.right.depthFirstLog(cb);
      }
    }
};
