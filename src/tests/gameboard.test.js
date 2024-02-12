import { createGameboard } from '../modules/gameboard';
import { createShip } from '../modules/ships';

let gameboard;
let ship;
let testGrid;

beforeEach(() => {
  gameboard = createGameboard();
  ship = createShip(3);
  testGrid = [];
  for (let i = 0; i < 10; i += 1) {
    testGrid.push([]);
    for (let j = 0; j < 10; j += 1) {
      testGrid[i][j] = null;
    }
  }
});

describe('Gameboard tests', () => {
  test('Generates grid correctly', () => {
    expect(gameboard.grid).toEqual(testGrid);
  });

  test('Ship is placed in given coords', () => {
    gameboard.place(3, [0, 0]);
    testGrid[0][0] = ship;
    testGrid[1][0] = ship;
    testGrid[2][0] = ship;
    expect(gameboard.grid.toString()).toEqual(testGrid.toString());
  });

  test('Ship can not be placed outside board', () => {
    expect(gameboard.place(3, [10, 0])).toEqual(false);
    expect(gameboard.place(3, [0, -1])).toEqual(false);
    expect(gameboard.place(3, [8, 0])).toEqual(false);
  });

  test('Ships must not be placed on each other', () => {
    gameboard.place(3, [3, 3]);
    expect(gameboard.place(3, [5, 3])).toEqual(false);
    expect(gameboard.place(3, [1, 3])).toEqual(false);
  });
});
