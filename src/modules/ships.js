export function createShip(length) {
  let shipLength = length;
  let hitPoints = shipLength;

  function hit() {
    hitPoints -= 1;

    return hitPoints;
  }

  function isSunk() {
    //  Sunk if no hitPoints left
    return hitPoints === 0;
  }

  return {
    get length() {
      return shipLength;
    },

    hit,
    isSunk,
  };
}
