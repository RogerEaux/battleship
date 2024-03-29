import createGameboard from './gameboard';

function createPlayer(name) {
  const playerGameboard = createGameboard();
  const attackedSpots = [];
  let playerName = name;
  let lastHit;
  let cheatIndex = 10;

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

  function smartPoke(enemyGameboard) {
    let coords = generateRandomCoords();
    let counter = 0;

    //  Coords will only be in a cross pattern
    while (
      (coords[0] + coords[1]) % 2 !== 0 ||
      JSON.stringify(attackedSpots).includes(JSON.stringify(coords))
    ) {
      coords = generateRandomCoords();
      counter += 1;
      if (counter > 420) {
        return blindFire(enemyGameboard);
      }
    }

    return attack(enemyGameboard, coords);
  }

  function smartFire(enemyGameboard) {
    if (attackedSpots.length % cheatIndex === 0) {
      return cheat(enemyGameboard);
    }

    if (attackedSpots.length > 0) {
      const [x, y] = attackedSpots[attackedSpots.length - 1];

      //  Get last hit
      if (enemyGameboard.grid[x][y] === true) {
        lastHit = [x, y];
      }
    }

    if (lastHit) {
      let right = false;
      let top = false;
      let left = false;
      let bottom = false;

      //  If adjacent spots are valid
      if (lastHit[0] < 9) {
        right = enemyGameboard.grid[lastHit[0] + 1][lastHit[1]];
      }
      if (lastHit[1] > 0) {
        top = enemyGameboard.grid[lastHit[0]][lastHit[1] - 1];
      }
      if (lastHit[0] > 0) {
        left = enemyGameboard.grid[lastHit[0] - 1][lastHit[1]];
      }
      if (lastHit[1] < 9) {
        bottom = enemyGameboard.grid[lastHit[0]][lastHit[1] + 1];
      }

      //  Try attacking them
      if (right !== true && right !== false) {
        return attack(enemyGameboard, [lastHit[0] + 1, lastHit[1]]);
      } else if (top !== true && top !== false) {
        return attack(enemyGameboard, [lastHit[0], lastHit[1] - 1]);
      } else if (left !== true && left !== false) {
        return attack(enemyGameboard, [lastHit[0] - 1, lastHit[1]]);
      } else if (bottom !== true && bottom !== false) {
        return attack(enemyGameboard, [lastHit[0], lastHit[1] + 1]);
      } else {
        return smartPoke(enemyGameboard);
      }
    }

    return smartPoke(enemyGameboard);
  }

  function cheat(enemyGameboard) {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (enemyGameboard.grid[i][j] && enemyGameboard.grid[i][j] !== true) {
          return attack(enemyGameboard, [i, j]);
        }
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

    set difficulty(newCheat) {
      cheatIndex = newCheat;
    },

    attack,
    blindFire,
    smartFire,
    cheat,
    reset,
  };
}

export default createPlayer;
