function Gameboard() {
  return {
    placedShips: [], placeAt, receiveAttack, allShipsDown,
  };
}

function placeAt(obj, coords) {
  if (obj.workingParts === coords.length && coords.every((coord) => !this[coord])) {
    coords.forEach((coord) => {
      this[coord] = {
        occupier: obj,
        hit: false,
      };
    });
    this.placedShips.push(obj);
  }
}

function receiveAttack(coord) {
  if (this[coord]) {
    if (this[coord].hit) return false;
    this[coord].occupier.hit();
    this[coord].hit = true;
    return true;
  }
  this[coord] = { occupier: null, hit: true };
  return true;
}

function allShipsDown() {
  return this.placedShips.length === 0 || this.placedShips.every((ship) => ship.workingParts === 0);
}

module.exports = Gameboard;
