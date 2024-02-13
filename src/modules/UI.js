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

export function createContent() {
  const body = document.querySelector('body');

  body.append(createHeader(), createMain(), createFooter());
}

export function renderGameboard(player, gameboard) {
  const targetBoard = document.querySelector(
    `[data-player="${player}"]`,
  ).lastChild;

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const square = targetBoard.querySelector(
        `[data-row="${i}"][data-col="${j}"]`,
      );
      if (player === 1) {
        square.classList.add('inactive');
      }
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
