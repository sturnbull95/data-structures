var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  // Time complexity: O(1)
  list.addToTail = function(value){
    var node = Node(value);
    if(!this.head){
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    return true;
  };

  list.addAnywhere = function(afterVal,val) {
    var node = Node(val);
    var tmp = this.head;
    while(tmp){
      if(tmp.value === afterVal){
        node.next = tmp.next;
        tmp.next = node;
        return true;
      } else{
        tmp = tmp.next;
      }
    }
    return false;
  };

  // Time complexity:  O(1)
  list.removeHead = function(){
    if(arguments.length !== 0){
      return this.removeAnywhere(arguments[0]);
      //console.log(arguments);
    } else{
      var head = this.head;
      this.head = this.head.next;
      return head.value;
    }
  };

  list.removeAnywhere = function(value){
    var prev;
    var node = this.head;
    if(this.contains(value)){
      while(node){
        if(node.value === value){
          if(prev){
            prev.next = node.next;
          } else {
            this.head = node.next;
          }
          break;
        }
        prev = node;
        node = node.next;
      }
      return node.value;
    }
    return false;
    //console.log(this.head.value);
  };

  // Time complexity: O(n)
  list.contains = function(target){
    var current = this.head;
    while(current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
