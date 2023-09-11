const assert = require('assert');
const Player = require('../src/Player');

describe('Player', () => {
  it('returns a regular object', () => {
    assert.equal(typeof Player(), 'object', 'is an object');
    assert.equal(Array.isArray(Player()), false, 'is not an array');
  });
});
