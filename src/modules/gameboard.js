import { createShip } from './ships';

export function createGameboard() {
  const gridSize = 10;
  const boardGrid = generateGrid(gridSize);
  const activeShips = [];

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
    if (x + length > 10) return false;

    //  Ship on ship violence
    for (let i = 0; i < length; i += 1) {
      if (boardGrid[x + i][y]) return false;
    }

    //  Shyps cant have other shyps touching them
    const start = x === 0 ? 0 : -1;

    const end = x + length === 10 ? length : length + 1;

    for (let i = start; i < end; i += 1) {
      if (y > 0) {
        if (boardGrid[x + i][y + 1]) return false;
      }
      if (y < 9) {
        if (boardGrid[x + i][y - 1]) return false;
      }
    }

    return true;
  }

  function place(length, coords) {
    if (!isValidPlace(length, coords)) return false;

    const ship = createShip(length);
    const [x, y] = coords;

    activeShips.push(ship);

    //  Place ship on given coords
    for (let i = 0; i < length; i += 1) {
      boardGrid[x + i][y] = ship;
    }

    return true;
  }

  function receiveAttack(coords) {
    const [x, y] = coords;

    //  Lightning can't strike on the same spot twice
    if (boardGrid[x][y] === true || boardGrid[x][y] === false) return null;

    //  If it is a ship
    if (boardGrid[x][y]) {
      boardGrid[x][y].hit();
      boardGrid[x][y] = true;
    } else {
      boardGrid[x][y] = false;
    }

    return boardGrid[x][y];
  }

  function areAllSunk() {
    return activeShips.every((ship) => ship.isSunk());
  }

  function reset() {
    for (let i = 0; i < gridSize; i += 1) {
      for (let j = 0; j < gridSize; j += 1) {
        boardGrid[i][j] = null;
      }
    }

    activeShips.length = 0;
  }

  return {
    get grid() {
      return boardGrid;
    },

    place,
    receiveAttack,
    areAllSunk,
    reset,
  };
}
