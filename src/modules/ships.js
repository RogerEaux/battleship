//  Ships
//
//  length
//  hitPoints
//  sunk
//  hit()

//  Reduces hitPoints by 1
//  If hitPoints is 0
//    Set sunk to true
//  Return hitPoints

//  isSunk()

//  Returns sunk

export function createShip(length) {
  let shipLength = length;
  let hitPoints = shipLength;

  function hit() {
    hitPoints -= 1;

    return hitPoints;
  }

  return {
    get length() {
      return shipLength;
    },

    hit,
  };
}
