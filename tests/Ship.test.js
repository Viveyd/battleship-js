const assert = require('assert');
const Ship = require('../src/Ship');

describe('Ship()', () => {
  it('returns an object', () => {
    assert.equal(typeof Ship(), 'object');
  });
});
