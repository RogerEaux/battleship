import '../style.css';

function createHeader() {
  const header = document.createElement('header');
  const title = document.createElement('h1');

  title.textContent = 'BATTLESHIP';

  header.append(title);

  return header;
}

export function createContent() {
  const body = document.querySelector('body');

  body.append(createHeader());
}
