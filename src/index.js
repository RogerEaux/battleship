import { createContent, renderGameOver } from './modules/UI';
import { createGame } from './modules/game';

createContent();

const game = createGame();

game.startGame();
