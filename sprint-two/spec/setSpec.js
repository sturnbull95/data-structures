describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", "remove","get", and "set"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
    expect(set.set).to.be.a('function');
    expect(set.get).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    set.add(1);
    set.add({'a':'b'});
    set.add([1,2,3,4,5,6]);
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
    expect(set.contains({'a':'b'})).to.equal(true);
    expect(set.get({'a':'b'})).to.eql({'a':'b'});
    expect(set.get([1,2,3,4,5,6])).to.eql([1,2,3,4,5,6]);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains('Not In Here')).to.equal(false);
    expect(set.contains(2)).to.equal(false);
  });
  it('should reset values of a set and get values based on argument key', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
    set.set('Susan Sarandon','Haha Goodbye');
    set.set('Danny Glover','Dont think youre safe');
    expect(set.get('Susan Sarandon')).to.equal('Haha Goodbye');
    expect(set.get('Danny Glover')).to.equal('Dont think youre safe');
  });
  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

});
