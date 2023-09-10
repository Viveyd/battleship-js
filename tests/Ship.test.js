const assert = require('assert');
const Ship = require('../src/Ship');

describe('Ship()', () => {
  it('returns an object', () => {
    assert.equal(typeof Ship(), 'object');
  });
  it('returns an object of only 5 possible types', () => {
    assert.equal(Ship('Carrier').type, 'Carrier');
    assert.equal(Ship('Battleship').type, 'Battleship');
    assert.equal(Ship('Destroyer').type, 'Destroyer');
    assert.equal(Ship('Submarine').type, 'Submarine');
    assert.equal(Ship('Patrol Boat').type, 'Patrol Boat');
    assert.equal(Ship('SupaShip'), null);
    assert.equal(Ship('Titanic'), null);
  });

  it('has hit() method', () => {
    assert.ok(Ship('carrier').hit);
  });

  it('hit() method works', () => {
    const ship1 = Ship('carrier');
    ship1.hit();
    ship1.hit();
    ship1.hit();
    const ship2 = Ship('submarine');
    ship2.hit();
    ship2.hit();
    ship2.hit();
    ship2.hit();
    assert.equal(ship1.workingParts, 2);
    assert.equal(ship2.workingParts, 0);
  });

  it('right num of workingParts according to type', () => {
    assert.equal(Ship('Carrier').workingParts, 5);
    assert.equal(Ship('Battleship').workingParts, 4);
    assert.equal(Ship('Destroyer').workingParts, 3);
    assert.equal(Ship('Submarine').workingParts, 3);
    assert.equal(Ship('Patrol Boat').workingParts, 2);
  });

  it('isSunk() method works', () => {
    const ship1 = Ship('carrier');
    ship1.hit();
    ship1.hit();
    ship1.hit();
    const ship2 = Ship('submarine');
    ship2.hit();
    ship2.hit();
    ship2.hit();
    assert.equal(ship1.isSunk(), false);
    assert.equal(ship2.isSunk(), true);
  });
});
