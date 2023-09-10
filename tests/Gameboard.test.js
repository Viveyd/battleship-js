const assert = require('assert');
const Gameboard = require('../src/Gameboard.js');

describe('Gameboard', () => {
  it('returns a regular object', () => {
    const gb = Gameboard();
    assert.equal(typeof gb, 'object');
    assert.equal(Array.isArray(gb), false);
  });
});
