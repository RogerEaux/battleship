import { createPlayer } from './player';
import {
  renderGameboard,
  renderGameOver,
  renderName,
  renderShot,
  resetGameboard,
} from './UI';

export function createGame() {
  const human = createPlayer('Human');
  const computer = createPlayer('Computer');

  function placeShips() {
    human.gameboard.placeRandom();
    computer.gameboard.placeRandom();
  }

  function isWinner(player, opponent) {
    if (opponent.gameboard.areAllSunk()) {
      renderGameOver();
      removeAttackListeners();
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

  function removeAttackListeners() {
    const targetBoard = document.querySelector('[data-player="2"]').lastChild;

    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const square = targetBoard.querySelector(
          `[data-row="${i}"][data-col="${j}"]`,
        );

        square.removeEventListener('click', handleAttack, { once: true });
      }
    }
  }

  function reset() {
    human.reset();
    human.gameboard.reset();
    computer.reset();
    computer.gameboard.reset();
    resetGameboard(1);
    resetGameboard(2);
  }

  function handleReplay() {
    renderGameOver();
    reset();
    renderGameboard(1, human.gameboard);
    placeShips();
    renderGameboard(1, human.gameboard);
    addAttackListeners();
  }

  function addReplayListener() {
    const playAgain = document.querySelector('.game-over button');

    playAgain.addEventListener('click', handleReplay);
  }

  function renderContent() {
    renderGameboard(1, human.gameboard);
    renderName(1, human);
    renderName(2, computer);
  }

  function addListeners() {
    addAttackListeners();
    addReplayListener();
  }

  function startGame() {
    placeShips();
    renderContent();
    addListeners();
  }

  return {
    startGame,
  };
}
