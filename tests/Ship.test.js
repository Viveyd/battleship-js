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

  it('num of parts according to type', () => {
    assert.ok(Ship('carrier').hit);
  });
});
