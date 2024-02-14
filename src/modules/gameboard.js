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

  function isValidPlace(length, coords, vertical) {
    const [x, y] = coords;

    //  Coords outside board
    if (x > 9 || x < 0 || y > 9 || y < 0) {
      return false;
    }

    //  Ship overflows outside board
    if (!vertical) {
      if (x + length > 10) return false;

      const start = x === 0 ? 0 : -1;
      const end = x + length === 10 ? length : length + 1;

      //  Shyps cant have other shyps touching them
      for (let i = start; i < end; i += 1) {
        //  Ship on ship violence
        if (boardGrid[x + i][y]) return false;

        //  Top
        if (y > 0) {
          if (boardGrid[x + i][y - 1]) return false;
        }
        //  Bottom
        if (y < 9) {
          if (boardGrid[x + i][y + 1]) return false;
        }
      }
    } else {
      if (y + length > 10) return false;

      const start = y === 0 ? 0 : -1;
      const end = y + length === 10 ? length : length + 1;

      //  Shyps cant have other shyps touching them
      for (let i = start; i < end; i += 1) {
        //  Ship on ship violence
        if (boardGrid[y][y + i]) return false;

        //  Top
        if (x > 0) {
          if (boardGrid[x - 1][y + i]) return false;
        }
        //  Bottom
        if (x < 9) {
          if (boardGrid[x + 1][y + i]) return false;
        }
      }
    }

    return true;
  }

  function place(length, coords, vertical = false) {
    if (!isValidPlace(length, coords, vertical)) return false;

    const ship = createShip(length);
    const [x, y] = coords;

    activeShips.push(ship);

    //  Place ship on given coords
    if (!vertical) {
      for (let i = 0; i < length; i += 1) {
        boardGrid[x + i][y] = ship;
      }
    } else {
      for (let i = 0; i < length; i += 1) {
        boardGrid[x][y + i] = ship;
      }
    }

    return true;
  }

  function generateRandomCoords() {
    const coords = [];

    for (let i = 0; i < 2; i += 1) {
      coords[i] = Math.floor(Math.random() * 10);
    }

    return coords;
  }

  function placeRandom() {
    const shipLengths = [5, 4, 3, 3, 2];
    const allCoords = [];

    for (let i = 0; i < shipLengths.length; i += 1) {
      let coords = generateRandomCoords();
      let valid = isValidPlace(shipLengths[i], coords);
      while (!valid) {
        coords = generateRandomCoords();
        valid = isValidPlace(shipLengths[i], coords);
      }

      allCoords.push(coords);
      place(shipLengths[i], coords);
    }

    return allCoords;
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
    placeRandom,
    receiveAttack,
    areAllSunk,
    reset,
  };
}
