import { createGameboard } from '../modules/gameboard';
import { createShip } from '../modules/ships';

let gameboard;
let testGrid;

beforeEach(() => {
  gameboard = createGameboard();
  testGrid = [];
  for (let i = 0; i < 10; i += 1) {
    testGrid.push([]);
  }
});

describe('Gameboard tests', () => {
  test('Generates grid correctly', () => {
    expect(gameboard.grid).toEqual(testGrid);
  });
});
