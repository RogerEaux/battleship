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

  test('Smart attack avoids edges', () => {
    enemy.gameboard.place(3, [7, 0]);
    hero.attack(enemy.gameboard, [9, 0]);
    expect(hero.smartFire(enemy.gameboard)).toEqual([8, 0]);

    enemy.gameboard.place(3, [0, 7], true);
    hero.attack(enemy.gameboard, [0, 7]);
    expect(hero.smartFire(enemy.gameboard)).toEqual([1, 7]);
    expect(hero.smartFire(enemy.gameboard)).toEqual([0, 6]);
    expect(hero.smartFire(enemy.gameboard)).toEqual([0, 8]);
  });

  test('Smart attack only targets coords with even sum', () => {
    function exclusiveEvenSum(coords) {
      return (coords[0] + coords[1]) % 2 === 0;
    }

    expect(exclusiveEvenSum(hero.smartFire(enemy.gameboard))).toBeTruthy();
    expect(exclusiveEvenSum(hero.smartFire(enemy.gameboard))).toBeTruthy();
    expect(exclusiveEvenSum(hero.smartFire(enemy.gameboard))).toBeTruthy();
    expect(exclusiveEvenSum(hero.smartFire(enemy.gameboard))).toBeTruthy();
    expect(exclusiveEvenSum(hero.smartFire(enemy.gameboard))).toBeTruthy();
  });

  test('Cheat always lands a hit', () => {
    enemy.gameboard.place(1, [3, 3]);

    expect(hero.cheat(enemy.gameboard)).toEqual([3, 3]);
  });
});
