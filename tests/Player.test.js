const assert = require('assert');
const Player = require('../src/Player');

describe('Player', () => {
  it('returns a regular object', () => {
    assert.equal(typeof Player(), 'object', 'is an object');
    assert.equal(Array.isArray(Player()), false, 'is not an array');
  });

  it('has following properties defined', () => {
    const player1 = Player('john', 'computer');
    assert.ok(player1.name, '.name');
    assert.ok(player1.type, '.type');
    assert.equal(player1.score, 0, '.score');
  });
});
