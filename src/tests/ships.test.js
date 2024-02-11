import { createShip } from '../modules/ships';

describe('Ship tests', () => {
  test('Ship has length passed', () => {
    const ship = createShip(3);
    expect(ship.length).toBe(3);
  });
});
