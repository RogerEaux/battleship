import createPlayer from '../modules/player';
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
    expect(hero.attack(enemy.gameboard, [0, 0])).toEqual([0, 0]);
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
    expect(hero.blindFire(enemy.gameboard)).toBeTruthy();
  });

  test('Attack adjacent spots after getting a hit', () => {
    enemy.gameboard.place(3, [3, 3]);
    hero.attack(enemy.gameboard, [3, 3]);
    expect(hero.smartFire(enemy.gameboard)).toEqual([4, 3]);
    expect(hero.smartFire(enemy.gameboard)).toEqual([5, 3]);
    expect(hero.smartFire(enemy.gameboard)).toEqual([6, 3]);

    enemy.gameboard.place(3, [6, 6], true);
    hero.attack(enemy.gameboard, [6, 6]);
    expect(hero.smartFire(enemy.gameboard)).toEqual([7, 6]);
    expect(hero.smartFire(enemy.gameboard)).toEqual([6, 5]);
    expect(hero.smartFire(enemy.gameboard)).toEqual([5, 6]);
    expect(hero.smartFire(enemy.gameboard)).toEqual([6, 7]);
    expect(hero.smartFire(enemy.gameboard)).toEqual([7, 7]);
    expect(hero.smartFire(enemy.gameboard)).toEqual([5, 7]);
    expect(hero.smartFire(enemy.gameboard)).toEqual([6, 8]);
  });

  test('Attack randomly if no last hit exists', () => {
    expect(hero.smartFire(enemy.gameboard)).toBeTruthy();
  });
});
