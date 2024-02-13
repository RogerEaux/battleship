import { createPlayer } from './player';
import { renderGameboard, renderGameOver, renderName, renderShot } from './UI';

export function createGame() {
  const human = createPlayer('Human');
  const computer = createPlayer('Computer');

  function placeShips() {
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
  }

  function isWinner(player, opponent) {
    if (opponent.gameboard.areAllSunk()) {
      renderGameOver(player.name);
    }
  }

  function handleAttack() {
    const i = this.getAttribute('data-row');
    const j = this.getAttribute('data-col');

    //  Record and render human attack
    human.attack(computer.gameboard, [i, j]);
    renderShot(computer.gameboard, this);
    isWinner(human, computer);

    //  Some cinematic showing computer counter attacking and delay

    //  Record and render computer attack
    const targetBoard = document.querySelector(`[data-player="1"]`).lastChild;
    const [x, y] = computer.blindFire(human.gameboard);

    renderShot(
      human.gameboard,
      targetBoard.querySelector(`[data-row="${x}"][data-col="${y}"]`),
    );
    isWinner(computer, human);
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

  function renderContent() {
    renderGameboard(1, human.gameboard);
    renderName(1, human);
    renderName(2, computer);
  }

  function startGame() {
    placeShips();
    renderContent();
    addAttackListeners();
  }

  return {
    startGame,
  };
}
