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

}

function Carrier() {
  return {
    type: 'Carrier',
  };
}

function Battleship() {
  return {
    type: 'Battleship',
  };
}

function Destroyer() {
  return {
    type: 'Destroyer',
  };
}

function Submarine() {
  return {
    type: 'Submarine',
  };
}

function PatrolBoat() {
  return {
    type: 'Patrol Boat',
  };
}

module.exports = Ship;
