import { createPlayer } from './player';
import {
  renderGameboard,
  renderGameOver,
  renderGameStart,
  renderName,
  renderPlace,
  renderPreview,
  renderShot,
  resetGameboard,
} from './UI';

function createGame() {
  const human = createPlayer('Human');
  const computer = createPlayer('Computer');
  let places = 5;
  let vertical = false;

  function reset() {
    //  Reset players, gameboards and DOM grids
    human.reset();
    human.gameboard.reset();
    computer.reset();
    computer.gameboard.reset();
    resetGameboard(document.querySelector('[data-player="1"]'));
    resetGameboard(document.querySelector('[data-player="2"]'));
    resetGameboard(document.querySelector('.game-start'));
    places = 5;
  }

  function handleReplay() {
    renderGameOver();
    reset();
    startGame();
  }

  function addReplayListener() {
    const playAgain = document.querySelector('.game-over button');

    playAgain.addEventListener('click', handleReplay);
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

    //  Record and render computer attack
    const DOMBoard = document.querySelector('[data-player="1"]').lastChild;
    const [x, y] = computer.blindFire(human.gameboard);
    setTimeout(() => {
      renderShot(
        human.gameboard,
        DOMBoard.querySelector(`[data-row="${x}"][data-col="${y}"]`),
      );
    }, 500);

    isWinner(computer, human);
  }

  function addAttackListeners() {
    const DOMBoard = document.querySelector('[data-player="2"]').lastChild;

    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const square = DOMBoard.querySelector(
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

  function addListeners() {
    addAttackListeners();
    addReplayListener();
  }

  function renderContent() {
    renderGameboard(
      document.querySelector('[data-player="1"]').lastChild,
      human.gameboard,
    );

    renderName(document.querySelector('[data-player="1"]').firstChild, human);
    renderName(
      document.querySelector('[data-player="2"]').firstChild,
      computer,
    );
  }

  function handleGameStart() {
    const name = document.querySelector('.game-start > :nth-child(2)').value;

    if (name) {
      human.name = name;
    }

    renderGameStart();
    renderContent();
    addListeners();
  }

  function handleRotate(event) {
    event.preventDefault();
    vertical = !vertical;
  }

  function handlePreview() {
    renderPreview(this, vertical, places);
  }

  function handlePlace() {
    const x = parseInt(this.getAttribute('data-row'), 10);
    const y = parseInt(this.getAttribute('data-col'), 10);
    let length;

    if (places > 2) length = places;
    else if (places === 0) length = 0;
    else length = places + 1;

    if (human.gameboard.place(length, [x, y], vertical)) {
      renderPlace(this, vertical, places);
      places -= 1;
    }
  }

  function addStartBoardListeners(DOMBoard) {
    const gameStart = document.querySelector('.game-start > :last-child');

    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const square = DOMBoard.querySelector(
          `[data-row="${i}"][data-col="${j}"]`,
        );

        square.addEventListener('click', handlePlace);
        square.addEventListener('mouseover', handlePreview);
      }
    }

    DOMBoard.addEventListener('contextmenu', handleRotate);
    gameStart.addEventListener('click', handleGameStart);
  }

  function handleRandomStart() {
    human.gameboard.reset();
    human.gameboard.placeRandom();
    handleGameStart();
  }

  function addRandomPlaceListener() {
    const gameRandom = document.querySelector('.game-start > :nth-child(5)');

    gameRandom.addEventListener('click', handleRandomStart);
  }

  function placeShips(DOMBoard) {
    addStartBoardListeners(DOMBoard);
    addRandomPlaceListener();

    computer.gameboard.placeRandom();
  }

  function startGame() {
    renderGameStart();
    placeShips(document.querySelector('.game-start > :nth-child(4)'));
  }

  return {
    startGame,
  };
}

export default createGame;
