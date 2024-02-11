//  Ships
//
//  length
//  hitPoints
//  sunk
//  hit()
//  isSunk()

export function createShip(length) {
  let shipLength = length;

  return {
    get length() {
      return shipLength;
    },
  };
}
