import { createPlayer } from '../modules/player';
let hero;
let enemy;

beforeEach(() => {
  hero = createPlayer('Alec');
  enemy = createPlayer('Cela');
});

describe('Player tests', () => {
  test('Player has given name', () => {
    expect(hero.name).toEqual('Alec');
  });

  test(`Enemy's gameboard is attacked`, () => {
    expect(hero.attack(enemy.gameboard, [0, 0])).toEqual(true);
    expect(enemy.gameboard.grid[0][0]).not.toBeNull();
  });

  test(`Enemy's ship is hit`, () => {
    enemy.gameboard.place(3, [0, 0]);
    hero.attack(enemy.gameboard, [0, 0]);

    expect(enemy.gameboard.grid[0][0]).toStrictEqual(true);
  });

  test(`Enemy's ships are missed`, () => {
    enemy.gameboard.place(3, [0, 0]);
    hero.attack(enemy.gameboard, [3, 3]);

    expect(enemy.gameboard.grid[3][3]).toStrictEqual(false);
  });

  test('Attack random spot', () => {
    enemy.gameboard.place(3, [3, 3]);
    expect(hero.blindFire(enemy.gameboard)).toEqual(true);
  });
});
