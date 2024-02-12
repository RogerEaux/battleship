import { createGameboard } from './gameboard';

//  attack(gameboard, coords)
//  attackedSpots - Spots already attacked
//  randomAttack(gameboard)

export function createPlayer(name) {
  const playerName = name;
  const playerGameboard = createGameboard();
  const attackedSpots = [];

  function attack(enemyGameboard, coords) {
    //  Check if coords are on previous attacked
    //  Receive attack on enemy gameboard with coords
    //
    //  If attackedSpots includes coords
    //    Return null
    //  Gameboard receiveAttack with coords
    //  Add coords to attackedSpots
    //  Return true

    if (attackedSpots.includes(coords)) return null;

    enemyGameboard.receiveAttack(coords);
    attackedSpots.push(coords);

    return true;
  }

  return {
    get name() {
      return playerName;
    },

    get gameboard() {
      return playerGameboard;
    },

    attack,
  };
}
