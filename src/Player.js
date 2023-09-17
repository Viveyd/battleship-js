const mapping = { human: Human, computer: Computer };

function Player(name, type = 'generic', score = 0) {
  const processedType = type.trim().toLowerCase();
  const extraProps = mapping[processedType] ? mapping[processedType]() : {};
  return {
    name, type, score, ...extraProps,
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

function attack() {

}

module.exports = Player;
