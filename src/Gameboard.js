function Gameboard() {
  return { placeAt, receiveAttack };
}

function placeAt(obj, coords) {
  if (obj.workingParts === coords.length && coords.every((coord) => !this[coord])) {
    coords.forEach((coord) => {
      this[coord] = {
        occupier: obj,
        hit: false,
      };
    });
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

module.exports = Gameboard;
