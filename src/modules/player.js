import { createGameboard } from './gameboard';

export function createPlayer(name) {
  const playerName = name;
  const playerGameboard = createGameboard();
  const attackedSpots = [];

  function attack(enemyGameboard, coords) {
    if (JSON.stringify(attackedSpots).includes(JSON.stringify(coords)))
      return null;

    enemyGameboard.receiveAttack(coords);
    attackedSpots.push(coords);

    return coords;
  }

  function generateRandomCoords() {
    const coords = [];

    for (let i = 0; i < 2; i += 1) {
      coords[i] = Math.floor(Math.random() * 10);
    }

    return coords;
  }

  function blindFire(enemyGameboard) {
    let coords = generateRandomCoords();

    while (JSON.stringify(attackedSpots).includes(JSON.stringify(coords))) {
      coords = generateRandomCoords();
    }

    return attack(enemyGameboard, coords);
  }

  return {
    get name() {
      return playerName;
    },

    get gameboard() {
      return playerGameboard;
    },

    attack,
    blindFire,
  };
}
