import '../style.css';

function createHeader() {
  const header = document.createElement('header');
  const title = document.createElement('h1');

  title.textContent = 'BATTLESHIP';

  header.append(title);

  return header;
}

function createBoard() {
  const board = document.createElement('div');

  board.classList = 'board';

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const square = document.createElement('div');

      square.classList = `square ocean`;
      square.setAttribute('data-col', i);
      square.setAttribute('data-row', j);

      board.append(square);
    }
  }

  return board;
}

function createMain() {
  const main = document.createElement('main');
  const playerOne = document.createElement('div');
  const playerOneName = document.createElement('h2');
  const playerTwo = document.createElement('div');
  const playerTwoName = document.createElement('h2');

  playerOne.classList = 'player';
  playerOne.setAttribute('data-player', '1');
  playerTwo.classList = 'player';
  playerTwo.setAttribute('data-player', '2');

  playerOne.append(playerOneName, createBoard());
  playerTwo.append(playerTwoName, createBoard());
  main.append(playerOne, playerTwo);

  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  const copy = document.createElement('p');
  const name = document.createElement('p');

  copy.textContent = 'Copyright © 2023 ';
  name.textContent = 'RogerEaux';
  footer.append(copy, name);

  return footer;
}

function createGameStartModal() {
  const modal = document.createElement('div');
  const commander = document.createElement('p');
  const name = document.createElement('input');
  const place = document.createElement('p');
  const board = createBoard();
  const random = document.createElement('button');
  const gameStart = document.createElement('button');

  modal.classList = 'modal game-start';
  commander.textContent = 'Welcome to BATTLESHIP Commander';
  name.setAttribute('placeholder', 'Name...');
  place.textContent = 'Place Your Carrier';
  random.textContent = 'Randomize Me';
  gameStart.textContent = 'Bombs Away!';

  modal.append(commander, name, place, board, random, gameStart);

  return modal;
}

function createGameOverModal() {
  const modal = document.createElement('div');
  const gameOver = document.createElement('p');
  const winner = document.createElement('p');
  const playAgain = document.createElement('button');

  modal.classList = 'modal game-over';
  gameOver.textContent = 'GAME OVER';
  playAgain.textContent = 'Play Again?';

  modal.append(gameOver, winner, playAgain);

  return modal;
}

export function createContent() {
  const body = document.querySelector('body');

  body.append(
    createHeader(),
    createMain(),
    createFooter(),
    createGameStartModal(),
    createGameOverModal(),
  );
}

export function renderName(DOMName, player) {
  DOMName.textContent = player.name;
}

export function renderGameboard(DOMBoard, gameboard) {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const square = DOMBoard.querySelector(
        `[data-row="${i}"][data-col="${j}"]`,
      );
      square.classList.add('inactive');
      if (gameboard.grid[i][j] && gameboard.grid[i][j] !== true) {
        square.classList.add('ship');
      }
    }
  }
}

export function renderShot(gameboard, square) {
  const i = square.getAttribute('data-row');
  const j = square.getAttribute('data-col');

  square.classList.add('inactive');

  if (gameboard.grid[i][j] === true) {
    square.classList.add('hit');
  } else if (gameboard.grid[i][j] === false) {
    square.classList.add('miss');
  }
}

export function renderGameStart() {
  const modal = document.querySelector('.game-start');

  modal.classList.toggle('visible');
}

export function renderGameOver(winnerName) {
  const modal = document.querySelector('.game-over');
  const name = modal.querySelector('p + p');

  modal.classList.toggle('visible');
  name.textContent = `Total ${winnerName} Domination`;
}

export function resetGameboard(DOMPlayer) {
  const replacementBoard = createBoard();

  DOMPlayer.replaceChild(replacementBoard, DOMPlayer.querySelector('.board'));
}
