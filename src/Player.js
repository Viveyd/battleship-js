const mapping = { human: Human, computer: Computer };

function Player(name, type = 'generic', score = 0, board = null) {
  const processedType = type.trim().toLowerCase();
  const extraProps = mapping[processedType] ? mapping[processedType]() : {};
  return {
    name, type, board, score, ...extraProps,
  };
}

function Human() {
  return {
    type: 'human',
    attack,
  };
}

function Computer() {
  return {
    type: 'computer',
    autoAttack,
  };
}

function autoAttack() {

}

function attack(player, target) {
  player.board.hit(target);
}

module.exports = Player;
