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
      for (let j = 0; j < gridSize; j += 1) {
        grid[i][j] = null;
      }
    }

    return grid;
  }

  function isValidPlace(length, coords) {
    //  Coords outside board
    if (coords[0] > 9 || coords[0] < 0 || coords[1] > 9 || coords[1] < 0) {
      return false;
    }

    //  Ship overflows outside board
    if (coords[0] + length > 9) return false;

    return true;
  }

  function place(length, coords) {
    if (!isValidPlace(length, coords)) return false;

    const ship = createShip(length);

    //  Place ship on given coords
    for (let i = 0; i < length; i += 1) {
      boardGrid[coords[0] + i][coords[1]] = ship;
    }

    return true;
  }

  return {
    get grid() {
      return boardGrid;
    },

    place,
  };
}
