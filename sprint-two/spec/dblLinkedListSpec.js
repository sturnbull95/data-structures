describe('dblLinkedList', function() {
  var dblLinkedList;

  beforeEach(function() {
    dblLinkedList = DblLinkedList();
  });

  it('should have a head and tail', function() {
    expect(dblLinkedList).to.have.property('head');
    expect(dblLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "remove", and "contains"', function() {
    expect(dblLinkedList.addToTail).to.be.a('function');
    expect(dblLinkedList.remove).to.be.a('function');
    expect(dblLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    dblLinkedList.addToTail(4);
    expect(dblLinkedList.tail.value).to.equal(4);
    dblLinkedList.addToTail(5);
    expect(dblLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when remove is called with no arguments and return the value removed', function() {
    dblLinkedList.addToTail(4);
    dblLinkedList.addToTail(5);
    expect(dblLinkedList.head.value).to.equal(4);
    expect(dblLinkedList.remove()).to.equal(4);
    expect(dblLinkedList.head.value).to.equal(5);
  });
  it('should remove the tail from the list when removeTail is called and return the value removed', function() {
    dblLinkedList.addToTail(4);
    dblLinkedList.addToTail(5);
    expect(dblLinkedList.head.value).to.equal(4);
    expect(dblLinkedList.removeTail()).to.equal(5);
    expect(dblLinkedList.head.value).to.equal(4);
  });

  it('should remove anywhere from the list when remove is called with a variable and returns false if there is no value', function() {
    dblLinkedList.addToTail(4);
    dblLinkedList.addToTail(5);
    dblLinkedList.addToTail(6);
    dblLinkedList.addToTail(7);
    dblLinkedList.addToTail(8);
    expect(dblLinkedList.head.value).to.equal(4);
    expect(dblLinkedList.remove()).to.equal(4);
    expect(dblLinkedList.remove(6)).to.equal(6);
    expect(dblLinkedList.remove(7)).to.equal(7);
    expect(dblLinkedList.remove(9)).to.equal(false);
    expect(dblLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when remove is called', function() {
    dblLinkedList.addToTail(4);
    expect(dblLinkedList.remove()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    dblLinkedList.addToHead(4);
    dblLinkedList.addToHead(5);
    expect(dblLinkedList.contains(4)).to.equal(true);
    expect(dblLinkedList.contains(5)).to.equal(true);
    expect(dblLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    dblLinkedList.addToTail(4);
    dblLinkedList.addToTail(5);
    dblLinkedList.remove();
    expect(dblLinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of dblLinkedList
});
