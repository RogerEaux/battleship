import { renderGameboard } from './UI';
import { createPlayer } from './player';

export function gameLoop() {
  const hero = createPlayer('Hero');

  hero.gameboard.place(5, [0, 0]);
  hero.gameboard.place(4, [2, 2]);
  hero.gameboard.place(3, [4, 4]);
  hero.gameboard.place(3, [6, 6]);
  hero.gameboard.place(2, [8, 8]);

  renderGameboard(1, hero.gameboard);

  const enemy = createPlayer('Enemy');

  enemy.gameboard.place(5, [0, 2]);
  enemy.gameboard.place(4, [2, 8]);
  enemy.gameboard.place(3, [4, 6]);
  enemy.gameboard.place(3, [6, 4]);
  enemy.gameboard.place(2, [8, 2]);

  renderGameboard(2, enemy.gameboard);
}
