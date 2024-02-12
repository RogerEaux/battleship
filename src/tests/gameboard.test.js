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
});
