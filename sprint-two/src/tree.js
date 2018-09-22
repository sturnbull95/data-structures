var Tree = function(value){
  var newTree = {};

  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

// Time complexity: O(1)
treeMethods.addChild = function(value){
  var child = Tree(value);

  //if(this){
    child.parent = this;
    this.children.push(child);
  // } else{
  //   child = this;
  // }
  return true;
};
treeMethods.removeFromParent = function(node){
  // if(!node.parent){
  //   return this;
  // } else{
    //console.log('BEFORE ', this.node);
    if (this.value === node) {
      if(this.children.length !== 0 ){
        delete this.value.children;
      }
      delete this.value;
      return this;
    } else{
      for(var i = 0; i < this.children.length; i++){
        console.log(this.children[i])
          //return this.removeFromParent(this.children[i].value);
      }
    }
    //console.log('AFTER ',this);
    return this;
  //}
};
// Time complexity: O(n)
treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  }
  for(var i = 0; i < this.children.length; i++){
    if(this.children[i].contains(target)){
      return true;
    }
  }
  return false;
};

// Time complexity: O(n)
