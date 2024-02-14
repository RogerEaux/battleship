import { createGameboard } from '../modules/gameboard';
import { createShip } from '../modules/ships';

let gameboard;

beforeEach(() => {
  gameboard = createGameboard();
});

describe('Gameboard tests', () => {
  test('Generates grid correctly', () => {
    const testGrid = [];

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

  test('Ships can be placed vertically', () => {
    let ship = createShip(3);

    gameboard.place(3, [0, 0], true);

    expect(gameboard.grid[0][0].toString()).toEqual(ship.toString());
    expect(gameboard.grid[0][1].toString()).toEqual(ship.toString());
    expect(gameboard.grid[0][2].toString()).toEqual(ship.toString());
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

    expect(gameboard.place(3, [2, 2])).toEqual(false);
    expect(gameboard.place(3, [3, 2])).toEqual(false);
    expect(gameboard.place(3, [4, 2])).toEqual(false);
    expect(gameboard.place(3, [5, 2])).toEqual(false);
    expect(gameboard.place(3, [6, 2])).toEqual(false);

    expect(gameboard.place(3, [2, 3])).toEqual(false);
    expect(gameboard.place(3, [6, 3])).toEqual(false);

    expect(gameboard.place(3, [2, 4])).toEqual(false);
    expect(gameboard.place(3, [3, 4])).toEqual(false);
    expect(gameboard.place(3, [4, 4])).toEqual(false);
    expect(gameboard.place(3, [5, 4])).toEqual(false);
    expect(gameboard.place(3, [6, 4])).toEqual(false);
  });

  test('Ships must not be placed near each other vertically', () => {
    gameboard.place(3, [3, 3], true);

    expect(gameboard.place(3, [2, 2], true)).toEqual(false);
    expect(gameboard.place(3, [2, 3], true)).toEqual(false);
    expect(gameboard.place(3, [2, 4], true)).toEqual(false);
    expect(gameboard.place(3, [2, 5], true)).toEqual(false);
    expect(gameboard.place(3, [2, 6], true)).toEqual(false);

    expect(gameboard.place(3, [3, 2], true)).toEqual(false);
    expect(gameboard.place(3, [3, 6], true)).toEqual(false);

    expect(gameboard.place(3, [4, 2], true)).toEqual(false);
    expect(gameboard.place(3, [4, 3], true)).toEqual(false);
    expect(gameboard.place(3, [4, 4], true)).toEqual(false);
    expect(gameboard.place(3, [4, 5], true)).toEqual(false);
    expect(gameboard.place(3, [4, 6], true)).toEqual(false);
  });

  test('Ships are placed randomly', () => {
    const allCoords = gameboard.placeRandom();

    for (let i = 0; i < allCoords.length; i += 1) {
      expect(gameboard.grid[allCoords[i][0]][allCoords[i][1]]).not.toBeNull();
    }
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

  test('Gameboard is reset', () => {
    const testGrid = [];

    for (let i = 0; i < 10; i += 1) {
      testGrid.push([]);
      for (let j = 0; j < 10; j += 1) {
        testGrid[i][j] = null;
      }
    }

    gameboard.place(3, [3, 3]);
    expect(gameboard.grid).not.toEqual(testGrid);
    gameboard.reset();
    expect(gameboard.grid).toEqual(testGrid);
  });
});
