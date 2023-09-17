const { assert } = require('chai');
const sinon = require('sinon');
const Player = require('../src/Player');

describe('Player', () => {
  it('returns a regular object', () => {
    assert.equal(typeof Player(), 'object', 'is an object');
    assert.equal(Array.isArray(Player()), false, 'is not an array');
  });

  it('creates human player', () => {
    const player1 = Player('john', 'human');
    assert.equal(player1.name, 'john', '.name');
    assert.equal(player1.type, 'human', '.type');
    assert.equal(player1.score, 0, '.score');
    assert.ok(player1.attack, 'expects .attack()');
  });

  it('creates computer player', () => {
    const player1 = Player('john', 'computer');
    assert.equal(player1.name, 'john', '.name');
    assert.equal(player1.type, 'computer', '.type');
    assert.equal(player1.score, 0, '.score');
    assert.ok(player1.autoAttack, 'expects .autoAttack()');
    assert.ok(!player1.attack, 'unexpected .attack()');
  });

  it('has attack method', () => {
    const player1 = Player('john', 'human');
    const player2 = Player('doe', 'computer');
    assert.ok(player1.attack, 'expected method');
    // assert.equal(player1.attack(player2, 'a3'), , 'expected to call board.hit(a3)');
  });
});
