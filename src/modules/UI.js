import '../style.css';

function createHeader() {
  const header = document.createElement('header');
  const title = document.createElement('h1');

  title.textContent = 'BATTLESHIP';

  header.append(title);

  return header;
}

function createMain() {
  const main = document.createElement('main');
  const playerOne = document.createElement('div');
  const playerOneName = document.createElement('h2');
  const playerTwo = document.createElement('div');
  const playerTwoName = document.createElement('h2');

  playerOne.classList = 'player playerOne';
  playerTwo.classList = 'player playerTwo';

  playerOne.append(playerOneName);
  playerTwo.append(playerTwoName);
  main.append(playerOne, playerTwo);

  return main;
}

export function createContent() {
  const body = document.querySelector('body');

  body.append(createHeader(), createMain());
}
