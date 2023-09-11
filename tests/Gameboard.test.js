const assert = require('assert');
const Gameboard = require('../src/Gameboard.js');

describe('Gameboard', () => {
  it('returns a regular object', () => {
    const gb = Gameboard();
    assert.equal(typeof gb, 'object');
    assert.equal(Array.isArray(gb), false);
  });

  it('.placeAt() works', () => {
    const gb = Gameboard();
    assert.equal(typeof gb.placeAt, 'function', 'is a method of Gameboard');

    gb.placeAt({ type: 'testObj', workingParts: 3 }, ['a1', 'a2', 'a3']);
    assert.deepEqual([gb.a1.occupier.type, gb.a2.occupier.type, gb.a3.occupier.type], ['testObj', 'testObj', 'testObj'], 'maps coords to specified object');

    gb.placeAt({ type: 'testObj2', workingParts: 6 }, ['b1', 'b2', 'b3', 'b4', 'b5']);
    assert.deepEqual([gb.b1, gb.b3, gb.b5], [undefined, undefined, undefined], 'does not map coords to object if wrong size fit');

    gb.placeAt({ type: 'testObj3', workingParts: 5 }, ['e3', 'd3', 'c3', 'b3', 'a3']);
    assert.deepEqual([gb.e3, gb.b3], [undefined, undefined], 'does not map coords to object if coord already taken');
  });
});
