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
    const col = document.createElement('div');

    col.classList = `col col-${i}`;
    for (let j = 0; j < 10; j += 1) {
      const row = document.createElement('div');

      row.classList = `row row-${j}`;

      col.append(row);
    }

    board.append(col);
  }

  return board;
}

function createMain() {
  const main = document.createElement('main');
  const playerOne = document.createElement('div');
  const playerOneName = document.createElement('h2');
  const playerTwo = document.createElement('div');
  const playerTwoName = document.createElement('h2');

  playerOne.classList = 'player playerOne';
  playerTwo.classList = 'player playerTwo';

  playerOne.append(playerOneName, createBoard());
  playerTwo.append(playerTwoName, createBoard());
  main.append(playerOne, playerTwo);

  return main;
}

export function createContent() {
  const body = document.querySelector('body');

  body.append(createHeader(), createMain());
}
