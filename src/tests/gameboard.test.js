import { createGameboard } from '../modules/gameboard';
import { createShip } from '../modules/ships';

let gameboard;

beforeEach(() => {
  gameboard = createGameboard();
});

describe('Gameboard tests', () => {
  test('Generates grid correctly', () => {
    let testGrid;

    testGrid = [];
    for (let i = 0; i < 10; i += 1) {
      testGrid.push([]);
      for (let j = 0; j < 10; j += 1) {
        testGrid[i][j] = null;
      }
    }

    expect(gameboard.grid).toEqual(testGrid);
  });

  test('Ship is placed in given coords', () => {
    let ship = createShip(3);

    gameboard.place(3, [0, 0]);

    expect(gameboard.grid[0][0].toString()).toEqual(ship.toString());
    expect(gameboard.grid[1][0].toString()).toEqual(ship.toString());
    expect(gameboard.grid[2][0].toString()).toEqual(ship.toString());
  });

  test('Ships can be placed on the edge', () => {
    expect(gameboard.place(2, [8, 8])).toEqual(true);
    expect(gameboard.place(4, [6, 6])).toEqual(true);
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

  test('Ships must not be placed near each other', () => {
    gameboard.place(3, [3, 3]);

    expect(gameboard.place(3, [3, 2])).toEqual(false);
    expect(gameboard.place(3, [3, 4])).toEqual(false);
    expect(gameboard.place(3, [6, 4])).toEqual(false);
    expect(gameboard.place(3, [2, 2])).toEqual(false);
  });

  test('Attack miss is recorded', () => {
    expect(gameboard.receiveAttack([0, 0])).toEqual(false);
    expect(gameboard.grid[0][0]).toStrictEqual(false);
  });

  test('Attack hit is recorded', () => {
    gameboard.place(3, [3, 3]);

    expect(gameboard.receiveAttack([3, 3])).toEqual(true);
    expect(gameboard.grid[3][3]).toStrictEqual(true);
  });

  test('Attack cant hit same spot twice', () => {
    gameboard.place(3, [3, 3]);

    gameboard.receiveAttack([3, 3]);
    expect(gameboard.receiveAttack([3, 3])).toBeNull();
  });

  test('All ships are sunk', () => {
    gameboard.place(3, [3, 3]);
    expect(gameboard.areAllSunk()).toEqual(false);

    gameboard.receiveAttack([3, 3]);
    gameboard.receiveAttack([4, 3]);
    gameboard.receiveAttack([5, 3]);

    expect(gameboard.areAllSunk()).toEqual(true);
  });
});
