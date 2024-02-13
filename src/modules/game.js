import { createPlayer } from './player';
import { renderGameboard, renderShot } from './UI';

export function createGame() {
  const human = createPlayer('Human');
  const computer = createPlayer('Computer');

  human.gameboard.place(5, [0, 0]);
  human.gameboard.place(4, [2, 2]);
  human.gameboard.place(3, [4, 4]);
  human.gameboard.place(3, [6, 6]);
  human.gameboard.place(2, [8, 8]);

  computer.gameboard.place(5, [0, 2]);
  computer.gameboard.place(4, [2, 8]);
  computer.gameboard.place(3, [4, 6]);
  computer.gameboard.place(3, [6, 4]);
  computer.gameboard.place(2, [8, 2]);

  renderGameboard(1, human.gameboard);

  function handleAttack() {
    this.classList.add('inactive');
    renderShot(this);
  }

  function addAttackListeners() {
    const targetBoard = document.querySelector('[data-player="2"]').lastChild;

    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const square = targetBoard.querySelector(
          `[data-row="${i}"][data-col="${j}"]`,
        );

        square.addEventListener('click', handleAttack, { once: true });
      }
    }
  }

  return {
    addAttackListeners,
  };
}
