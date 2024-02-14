import { createPlayer } from './player';
import {
  renderGameboard,
  renderGameOver,
  renderGameStart,
  renderName,
  renderShot,
  resetGameboard,
} from './UI';

export function createGame() {
  const human = createPlayer('Human');
  const computer = createPlayer('Computer');
  let places = 5;

  function handlePlace() {
    const x = parseInt(this.getAttribute('data-row'));
    const y = parseInt(this.getAttribute('data-col'));
    const coords = [x, y];
    const length = places > 2 ? places : places === 0 ? 0 : places + 1;
    const place = document.querySelector('.game-start > :nth-child(3)');
    const ships = ['Destroyer', 'Submarine', 'Cruiser', 'Battleship'];

    if (human.gameboard.place(length, coords)) {
      place.textContent = `Place Your ${ships[places - 2]}`;
      places -= 1;
      for (let i = 0; i < length; i += 1) {
        if (x + i < 10) {
          const square = this.parentNode.querySelector(
            `[data-row="${x + i}"][data-col="${y}"]`,
          );

          square.classList.add('ship');
        }
      }
    }

    if (places === 0) {
      place.textContent = 'Get Ready for BATTLE';
      addGameStartListener();
    }
  }

  function handlePreview() {
    const x = parseInt(this.getAttribute('data-row'));
    const y = parseInt(this.getAttribute('data-col'));
    const length = places > 2 ? places : places === 0 ? 0 : places + 1;

    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const square = this.parentNode.querySelector(
          `[data-row="${i}"][data-col="${j}"]`,
        );
        square.classList.remove('preview');
      }
    }

    for (let i = 0; i < length; i += 1) {
      if (x + i < 10) {
        const square = this.parentNode.querySelector(
          `[data-row="${x + i}"][data-col="${y}"]`,
        );

        square.classList.add('preview');
      }
    }
  }

  function addStartBoardListeners() {
    const targetBoard = document.querySelector('.game-start > :nth-child(4)');

    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const square = targetBoard.querySelector(
          `[data-row="${i}"][data-col="${j}"]`,
        );

        square.addEventListener('click', handlePlace);
        square.addEventListener('mouseover', handlePreview);
      }
    }
  }

  function isWinner(player, opponent) {
    if (opponent.gameboard.areAllSunk()) {
      renderGameOver(player.name);
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

    setTimeout(() => {}, 500);

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
    //  Reset players, gameboards and DOM grids
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
    renderGameStart();
  }

  function addReplayListener() {
    const playAgain = document.querySelector('.game-over button');

    playAgain.addEventListener('click', handleReplay);
  }

  function addListeners() {
    addAttackListeners();
    addReplayListener();
  }

  function renderContent() {
    renderGameboard(
      document.querySelector('[data-player="1"]').lastChild,
      human.gameboard,
    );

    const name = document.querySelector('.game-start > :nth-child(2)').value;

    if (name) {
      human.name = name;
    }

    renderName(document.querySelector('[data-player="1"]').firstChild, human);
    renderName(
      document.querySelector('[data-player="2"]').firstChild,
      computer,
    );
  }

  function handleGameStart() {
    renderGameStart();
    renderContent();
    addListeners();
  }

  function addGameStartListener() {
    const gameStart = document.querySelector('.game-start > :last-child');

    gameStart.addEventListener('click', handleGameStart);
  }

  function handleRandomStart() {
    human.gameboard.placeRandom();
    handleGameStart();
  }

  function addRandomPlaceListener() {
    const gameRandom = document.querySelector('.game-start > :nth-child(5)');

    gameRandom.addEventListener('click', handleRandomStart);
  }

  function placeShips() {
    addStartBoardListeners();
    addRandomPlaceListener();

    computer.gameboard.placeRandom();
  }

  function startGame() {
    renderGameStart();
    placeShips();
  }

  return {
    startGame,
  };
}
