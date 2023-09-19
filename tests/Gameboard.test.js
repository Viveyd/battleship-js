const assert = require('assert');
const Gameboard = require('../src/Gameboard.js');

describe('Gameboard', () => {
  it('returns a regular object', () => {
    const gb = Gameboard([5, 5]);
    assert.equal(typeof gb, 'object');
    assert.equal(Array.isArray(gb), false);
  });

  it('.placeAt() works', () => {
    const gb = Gameboard([10, 10]);
    assert.equal(typeof gb.placeAt, 'function', 'is a method of Gameboard');

    gb.placeAt({ type: 'testObj', workingParts: 3 }, [[1, 1], [1, 2], [1, 3]]);
    assert.deepEqual([gb.tiles['1,1'].occupier.type, gb.tiles['1,2'].occupier.type, gb.tiles['1,3'].occupier.type], ['testObj', 'testObj', 'testObj'], 'maps coords to specified object');

    gb.placeAt({ type: 'testObj2', workingParts: 6 }, [[2, 1], [2, 2], [2, 3], [2, 4], [2, 5]]);
    assert.deepEqual([gb.tiles['2,1'].occupier, gb.tiles['2,3'].occupier, gb.tiles['2,5'].occupier], [undefined, undefined, undefined], 'does not map coords to object if wrong size fit');

    gb.placeAt({ type: 'testObj3', workingParts: 5 }, [[5, 3], [4, 3], [3, 3], [2, 3], [1, 3]]);
    assert.deepEqual([gb.tiles['5,3'].occupier, gb.tiles['2,3'].occupier], [undefined, undefined], 'does not map coords to object if coord already taken');

    gb.placeAt({ type: 'testObj4', workingParts: 4 }, [[2, 1], [2, 2], [2, 3], [2, 4]]);
    assert.deepEqual(gb.placedShips, [{ type: 'testObj', workingParts: 3 }, { type: 'testObj4', workingParts: 4 }], 'store reference of placed ships in Array placedShips');
  });

  it('.receiveAttack() works', () => {
    const gb = Gameboard([5, 5]);
    assert.equal(typeof gb.receiveAttack, 'function', 'is a method of Gameboard');

    gb.receiveAttack([1, 2]);
    assert.equal(gb.tiles['1,2'].hit, true, 'change hit state of coord');
    assert.equal(gb.receiveAttack([1, 2]), false, 'does not change coord state if already hit before');

    const testShip = {
      type: 'testShip',
      workingParts: 2,
      hit() {
        this.workingParts -= 1;
      },
    };
    gb.tiles['1,3'].occupier = testShip;
    gb.receiveAttack([1, 3]);
    assert.equal(testShip.workingParts, 1, 'calls hit method of ship if valid');
    assert.deepEqual(gb.attackLogs, [gb.tiles['1,2'], gb.tiles['1,3']], 'logs successful attacks');
  });

  it('Gameboard.allShipsDown() works', () => {
    const gb = Gameboard([5, 5]);
    assert.equal(typeof gb.allShipsDown, 'function', 'is a method of Gameboard');
    assert.equal(gb.allShipsDown(), true, 'returns true when placedShips empty');
    gb.placedShips.push({ workingParts: 5 });
    assert.equal(gb.allShipsDown(), false, 'returns false if placedShips contains ships with working parts');
    gb.placedShips = [{ workingParts: 0 }, { workingParts: 0 }];
    assert.equal(gb.allShipsDown(), true, 'returns true if all placedShips has no working parts');
  });
});
