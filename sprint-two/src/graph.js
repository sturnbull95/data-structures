var Graph = function(){
  this.nodeList = {};
};


// Add a node to the graph, passing in the node's value.
// Time complexity: O(1)
Graph.prototype.addNode = function(node) {
  this.nodeList[node] = {};
};

// Return a boolean value indicating if the value passed
// to contains is represented in the graph.
// Time complexity: O(1)
Graph.prototype.contains = function(node) {
  if(this.nodeList[node]){
    return true;
  }
  return false;
};

// Removes a node from the graph.
// Time complexity: O(1)
Graph.prototype.removeNode = function(node) {
  for(var key in this.nodeList){
    if(this.hasEdge(key,node)){
      this.removeEdge(key,node);
    }
  }
  delete this.nodeList[node];
};

// Returns a boolean indicating whether two specified nodeList are connected.
// Pass in the values contained in each of the two nodeList.
// Time complexity: O(1)
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(this.nodeList[fromNode][toNode]){
    return true;
  }
  return false;
};

// Connects two nodeList in a graph by adding an edge between them.
// Time complexity: O(1)
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodeList[fromNode][toNode] = true;
  this.nodeList[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodeList.
// Time complexity: O(1)
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodeList[fromNode][toNode];
  delete this.nodeList[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
// Time complexity: O(n)
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodeList) {
      cb(key);
  }
};
