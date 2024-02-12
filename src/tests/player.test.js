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
});
