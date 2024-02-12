//  Gameboard

//  Contains grid 10 x 10 - multidimensional array to record attacks
//  Has 5 different ships within:  Carrier (5), Battleship (4), Cruiser (3),
//  Submarine (3), and Destroyer (2)

//  place(length, coords)
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
    const [x, y] = coords;

    //  Coords outside board
    if (x > 9 || x < 0 || y > 9 || y < 0) {
      return false;
    }

    //  Ship overflows outside board
    if (x + length > 9) return false;

    //  Ship on ship violence
    for (let i = 0; i < length; i += 1) {
      if (boardGrid[x + i][y]) return false;
    }

    return true;
  }

  function place(length, coords) {
    if (!isValidPlace(length, coords)) return false;

    const ship = createShip(length);
    const [x, y] = coords;

    //  Place ship on given coords
    for (let i = 0; i < length; i += 1) {
      boardGrid[x + i][y] = ship;
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
