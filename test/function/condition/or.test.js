var assert = require('assert');
var math = require('../../../index.js')(),
    or = math.or;

describe('or', function() {

  it('should OR two numbers', function() {
    assert.equal(or(2, 3), true);
    assert.equal(or(-2, 3), true);
    assert.equal(or(2, 0), true);
    assert.equal(or(-2, 0), true);
    assert.equal(or(2, -3), true);
    assert.equal(or(0, -3), true);
    assert.equal(or(0, 3), true);
    assert.equal(or(0, 0), false);
  });

  it('should OR booleans', function() {
    assert.equal(or(true, true), true);
    assert.equal(or(true, false), true);
    assert.equal(or(false, true), true);
    assert.equal(or(false, false), false);
  });

  it('should OR mixed numbers and booleans', function() {
    assert.equal(or(2, true), true);
    assert.equal(or(2, false), true);
    assert.equal(or(0, true), true);
    assert.equal(or(0, false), false);
    assert.equal(or(true, 2), true);
    assert.equal(or(false, 2), true);
    assert.equal(or(true, 0), true);
    assert.equal(or(false, 0), false);
  });

  it('should OR two strings', function() {
    assert.equal(or('hello ', 'world'), true);
    assert.equal(or('str', 123), true);
    assert.equal(or(123, 'str'), true);
  });

  it('should OR value and null', function() {
    assert.equal(or('hello ', null), true);
    assert.equal(or(null, 'hello '), true);
    assert.equal(or(123, null), true);
    assert.equal(or(null, 123), true);
    assert.equal(or(true, null), true);
    assert.equal(or(false, null), false);
    assert.equal(or(null, true), true);
    assert.equal(or(null, false), false);
    assert.equal(or(null, null), false);
  });

});