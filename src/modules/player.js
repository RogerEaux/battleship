import createGameboard from './gameboard';

function createPlayer(name) {
  let playerName = name;
  const playerGameboard = createGameboard();
  const attackedSpots = [];
  let lastHit;

  function attack(enemyGameboard, coords) {
    if (JSON.stringify(attackedSpots).includes(JSON.stringify(coords))) {
      return null;
    }

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

  function smartFire(enemyGameboard) {
    const [x, y] = attackedSpots[attackedSpots.length - 1];

    //  Get last hit
    if (enemyGameboard.grid[x][y] === true) {
      lastHit = [x, y];
    }

    if (lastHit) {
      const right = enemyGameboard.grid[lastHit[0] + 1][lastHit[1]];
      const top = enemyGameboard.grid[lastHit[0]][lastHit[1] - 1];
      const left = enemyGameboard.grid[lastHit[0] - 1][lastHit[1]];
      const bottom = enemyGameboard.grid[lastHit[0]][lastHit[1] + 1];

      if (lastHit[0] < 9 && right !== true && right !== false) {
        //  Try attacking last hit's right
        return attack(enemyGameboard, [lastHit[0] + 1, lastHit[1]]);
      } else if (lastHit[1] > 0 && top !== true && top !== false) {
        //  Try attacking last hit's top
        return attack(enemyGameboard, [lastHit[0], lastHit[1] - 1]);
      } else if (lastHit[0] > 0 && left !== true && left !== false) {
        //  Try attacking last hit's left
        return attack(enemyGameboard, [lastHit[0] - 1, lastHit[1]]);
      } else if (lastHit[1] < 9 && bottom !== true && bottom !== false) {
        //  Try attacking last hit's bottom
        return attack(enemyGameboard, [lastHit[0], lastHit[1] + 1]);
      } else {
        //  F it, just shoot
        return blindFire(enemyGameboard);
      }
    }
  }

  function reset() {
    attackedSpots.length = 0;
  }

  return {
    get name() {
      return playerName;
    },

    set name(newName) {
      playerName = newName;
    },

    get gameboard() {
      return playerGameboard;
    },

    attack,
    blindFire,
    smartFire,
    reset,
  };
}

export default createPlayer;
