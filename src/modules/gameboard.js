//  Gameboard

//  Contains grid 10 x 10 - multidimensional array to record attacks
//  Has 5 different ships within:  Carrier (5), Battleship (4), Cruiser (3),
//  Submarine (3), and Destroyer (2)

//  place(length, coords)

//  If coord's x + length is greater than 9
//    Return false
//
//
//  Check if coords are valid placement
//    Return false if not
//  Create ship with length
//  Add ship to ships with name according to length
//  Add coords to grid with name according to ship
//  Return true

//

//  receiveAttack()
//  areAllSunk()

import { createShip } from './ships';

export function createGameboard() {
  const gridSize = 10;
  const boardGrid = generateGrid(gridSize);

  function generateGrid(gridSize) {
    const grid = [];

    for (let i = 0; i < gridSize; i += 1) {
      grid.push([]);
    }

    return grid;
  }

  return {
    get grid() {
      return boardGrid;
    },
  };
}
