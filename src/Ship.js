const shipList = {
  carrier: Carrier,
  battleship: Battleship,
  destroyer: Destroyer,
  submarine: Submarine,
  'patrol boat': PatrolBoat,
};

function Ship(type) {
  if (!type) return null;
  const lcType = type.toLowerCase();
  if (!shipList[lcType]) return null;
  return { ...shipList[lcType](), hit };
}

function hit() {
  if (this.workingParts === 0) return false;
  this.workingParts -= 1;
  return true;
}

function Carrier() {
  return {
    type: 'Carrier',
    workingParts: 5,
  };
}

function Battleship() {
  return {
    type: 'Battleship',
    workingParts: 4,
  };
}

function Destroyer() {
  return {
    type: 'Destroyer',
    workingParts: 3,
  };
}

function Submarine() {
  return {
    type: 'Submarine',
    workingParts: 3,
  };
}

function PatrolBoat() {
  return {
    type: 'Patrol Boat',
    workingParts: 2,
  };
}

module.exports = Ship;
