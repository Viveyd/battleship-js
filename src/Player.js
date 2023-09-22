const mapping = { human: Human, computer: Computer };

const priorityQueue = [];
const attackQueue = [];

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

function autoAttack(player) {
  if (!player.board || player.board.allShipsDown()) return;
  if (attackQueue.length === 0) initAttackQueue(player.board.size);
  let referenceQueue = priorityQueue.length ? priorityQueue : attackQueue;
  let potentialTarget = referenceQueue.pop();
  while (Player.board.tiles[potentialTarget].hit) {
    if (!referenceQueue.length && referenceQueue === priorityQueue) {
      referenceQueue = attackQueue;
    } else if (!referenceQueue.length) {
      return;
    }
    potentialTarget = referenceQueue.pop();
  }
  const targetHit = player.board.receiveAttack(potentialTarget);
  if (targetHit) {
    priorityQueue.push(`${potentialTarget[0] - 1},${potentialTarget[1]}`);
    priorityQueue.push(`${potentialTarget[0] + 1},${potentialTarget[1]}`);
    priorityQueue.push(`${potentialTarget[0]},${potentialTarget[1] - 1}`);
    priorityQueue.push(`${potentialTarget[0]},${potentialTarget[1] + 1}`);
  }
}

function initAttackQueue([xSize, ySize]) {
  for (let i = 0; i < ySize; i += 1) {
    for (let j = i % 2 === 0 ? 0 : 1; j < xSize; j += 2) {
      attackQueue.push(`${j}${i}`);
    }
  }
}

function attack(player, target) {
  player.board.receiveAttack(target);
}

module.exports = Player;
