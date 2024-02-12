import { createPlayer } from '../modules/player';
let player;

beforeEach(() => {
  player = createPlayer('Alec');
});

describe('Player tests', () => {
  test('Player has given name', () => {
    expect(player.name).toEqual('Alec');
  });
});
