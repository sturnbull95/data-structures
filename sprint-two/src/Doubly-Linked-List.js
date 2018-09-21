var DblLinkedList = function(){
  var dblList = {};
  dblList.head = null;
  dblList.tail = null;

  // Time complexity: O(1)
  dblList.addToTail = function(value){
    var node = Node(value);
    if(!this.head){
      this.head = node;
    }
    if (this.tail) {
      node.prev = this.tail;
      this.tail.next = node;
    }
    this.tail = node;
    return true;
  };
  dblList.removeTail = function(){
    var tmp = this.tail;
    //console.log(tmp,'tail')
    this.head.prev = this.tail.prev;
    this.tail.next = this.head;
    return tmp.value;
  };
  dblList.addToHead = function(value){
  var node = new Node(value);
  if(!this.head) {
    this.head = node;
    //console.log(this.head,'nothing')
    this.tail = node;
  } else {
    if(this.head.next){
      node.prev = this.tail;
      node.next = this.head;
    } else{
      node.next = this.tail;
      this.tail.next = node;
    }
    this.head = node;
    this.tail.next = node;
    this.head.prev = this.tail;
  }
  };

  // Time complexity:  O(1)
  dblList.remove = function(){
    if(arguments.length !== 0){
      return this.removeAnywhere(arguments[0]);
    }
    var head = this.head;
    //console.log(head.value,'first')
    this.tail.next = this.head.next;
    this.head = this.head.next;
    return head.value;
  };

  dblList.removeAnywhere = function(value){
  var start = this.head;
  var current = this.head.next;
  if(this.contains(value)){
    if(start.value === value){
      console.log('found from first');
      return start.value;
    }
    else{
      while(current && current !== start) {
        if(current.value === value) {
          return current.value;
        }
        current = current.next;
      }
    }
  }
  return false;
  };
  dblList.find = function(value){
    var node = this.head;
    var start = this.head;
    node = node.next;
    if(start.value === value){
      return start;
    } else{
      while(node && node !== start){
        if(node.value === value){
          return node;
        }
        node = node.next;
      }
    }
  };

  // Time complexity: O(n)
  dblList.contains = function(target){
    var current = this.head;
    var start = this.head;
    if(current.value === target){
      return true;
    } else {
      current = current.next;
    }
    while(current && current !== start) {
      //console.log(current);
      if (current.value === target) {
        //console.log('found')
        return true;
      }
      current = current.next;
    }
    return false;
  };
  return dblList;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};
