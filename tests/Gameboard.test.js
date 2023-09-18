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

    gb.placeAt({ type: 'testObj4', workingParts: 4 }, ['b1', 'b2', 'b3', 'b4']);
    assert.deepEqual(gb.placedShips, [{ type: 'testObj', workingParts: 3 }, { type: 'testObj4', workingParts: 4 }], 'store reference of placed ships in Array placedShips');
  });

  it('.receiveAttack() works', () => {
    const gb = Gameboard();
    assert.equal(typeof gb.receiveAttack, 'function', 'is a method of Gameboard');

    gb.receiveAttack('a2');
    assert.ok(gb.a2, 'initializes coord');
    assert.equal(gb.a2.hit, true, 'change hit state of coord');
    assert.equal(gb.receiveAttack('a2'), false, 'does not change coord state if already hit before');

    const testShip = {
      type: 'testShip',
      workingParts: 2,
      hit() {
        this.workingParts -= 1;
      },
    };
    gb.a3 = { occupier: testShip, hit: false };
    gb.a4 = { occupier: testShip, hit: false };
    gb.receiveAttack('a3');
    assert.equal(testShip.workingParts, 1, 'calls hit method of ship if valid');
    assert.deepEqual(gb.attackLogs, [gb.a2, gb.a3], 'logs successful attacks');
  });

  it('Gameboard.allShipsDown() works', () => {
    const gb = Gameboard();
    assert.equal(typeof gb.allShipsDown, 'function', 'is a method of Gameboard');
    assert.equal(gb.allShipsDown(), true, 'returns true when placedShips empty');
    gb.placedShips.push({ workingParts: 5 });
    assert.equal(gb.allShipsDown(), false, 'returns false if placedShips contains ships with working parts');
    gb.placedShips = [{ workingParts: 0 }, { workingParts: 0 }];
    assert.equal(gb.allShipsDown(), true, 'returns true if all placedShips has no working parts');
  });
});
