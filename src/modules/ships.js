export function createShip(length) {
  let hitPoints = length;

  function hit() {
    hitPoints -= 1;

    return hitPoints;
  }

  function isSunk() {
    //  Sunk if no hitPoints left
    return hitPoints === 0;
  }

  return {
    hit,
    isSunk,
  };
}
