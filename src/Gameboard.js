function Gameboard(size) {
  const tiles = initTiles(size);
  return {
    placedShips: [], attackLogs: [], tiles, placeAt, receiveAttack, allShipsDown,
  };
}

function initTiles([numOfCols, numOfRows]) {
  const tiles = {};
  for (let colCounter = 1; colCounter <= numOfCols; colCounter += 1) {
    for (let rowCounter = 1; rowCounter <= numOfRows; rowCounter += 1) {
      tiles[`${colCounter},${rowCounter}`] = { hit: false };
    }
  }
  return tiles;
}

function placeAt(obj, coords) {
  if (obj.workingParts === coords.length && coords.every(([x, y]) => !this.tiles[`${x},${y}`].occupier)) {
    coords.forEach(([x, y]) => {
      this.tiles[`${x},${y}`].occupier = obj;
    });
    this.placedShips.push(obj);
  }
}

function receiveAttack([x, y]) {
  const receiver = this.tiles[`${x},${y}`];
  if (receiver.hit) return false;
  if (receiver.occupier)receiver.occupier.hit();
  receiver.hit = true;
  logger(receiver, this.attackLogs);
  return true;
}

function logger(msg, logStorage) {
  logStorage.push(msg);
}

function allShipsDown() {
  return this.placedShips.length === 0 || this.placedShips.every((ship) => ship.workingParts === 0);
}

module.exports = Gameboard;
