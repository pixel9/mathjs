var assert = require('assert');
var math = require('../../../index.js')(),
    and = math.and;

describe('and', function() {

  it('should AND two numbers', function() {
    assert.equal(and(2, 3), true);
    assert.equal(and(-2, 3), true);
    assert.equal(and(2, 0), false);
    assert.equal(and(-2, 0), false);
    assert.equal(and(2, -3), true);
    assert.equal(and(0, -3), false);
    assert.equal(and(0, 3), false);
    assert.equal(and(0, 0), false);
  });

  it('should AND booleans', function() {
    assert.equal(and(true, true), true);
    assert.equal(and(true, false), false);
    assert.equal(and(false, true), false);
    assert.equal(and(false, false), false);
  });

  it('should AND mixed numbers and booleans', function() {
    assert.equal(and(2, true), true);
    assert.equal(and(2, false), false);
    assert.equal(and(0, true), false);
    assert.equal(and(0, false), false);
    assert.equal(and(true, 2), true);
    assert.equal(and(false, 2), false);
    assert.equal(and(true, 0), false);
    assert.equal(and(false, 0), false);
  });

  it('should AND two strings', function() {
    assert.equal(and('hello ', 'world'), true);
    assert.equal(and('str', 123), true);
    assert.equal(and(123, 'str'), true);
  });

  it('should AND value and null', function() {
    assert.equal(and('hello ', null), false);
    assert.equal(and(null, 'hello '), false);
    assert.equal(and(123, null), false);
    assert.equal(and(null, 123), false);
    assert.equal(and(true, null), false);
    assert.equal(and(false, null), false);
    assert.equal(and(null, true), false);
    assert.equal(and(null, false), false);
    assert.equal(and(null, null), false);
  });

});