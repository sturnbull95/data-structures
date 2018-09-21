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
  if(this){
    child.parent = this;
    this.children.push(child);
  } else{
    child = this;
  }
  return true;
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
