function Gameboard() {
  return { placeAt };
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

module.exports = Gameboard;
