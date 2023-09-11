function Gameboard() {
  return {
    placedShips: [], attackLogs: [], placeAt, receiveAttack, allShipsDown,
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
    logger(this[coord], this.attackLogs);
    return true;
  }
  this[coord] = { occupier: null, hit: true };
  logger(this[coord], this.attackLogs);
  return true;
}

function logger(msg, logStorage) {
  logStorage.push(msg);
}

function allShipsDown() {
  return this.placedShips.length === 0 || this.placedShips.every((ship) => ship.workingParts === 0);
}

module.exports = Gameboard;
