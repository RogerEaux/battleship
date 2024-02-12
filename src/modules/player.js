import { createGameboard } from './gameboard';

//  attack(gameboard, coords)
//  attackedSpots - Spots already attacked
//  randomAttack(gameboard)

export function createPlayer(name) {
  let playerName = name;

  return {
    get name() {
      return playerName;
    },
  };
}
