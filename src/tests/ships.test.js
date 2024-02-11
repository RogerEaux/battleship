import { createShip } from '../modules/ships';

describe('Ship tests', () => {
  test('Ship has length passed', () => {
    const ship = createShip(3);
    expect(ship.length).toBe(3);
  });

  test('Ship hit reduces hitPoint by 1', () => {
    const ship = createShip(3);
    expect(ship.hit()).toBe(2);
    expect(ship.hit()).toBe(1);
    expect(ship.hit()).toBe(0);
  });
});
