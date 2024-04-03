import { createContext } from 'react';
import { GameMods, Players, TicTacType } from '@store/tic-tac.types';

export const TicTac = createContext<TicTacType>({
  gameMode: GameMods.THREE,
  gameFields: [],
  markedFields: [],
  winner: {
    isWin: false,
    winStrategy: {
    },
  },
  score: {
    [Players.FIRST]: 0,
    [Players.SECONDS]: 0,
  },
  handleFieldClick: () => {},
  handleChangeGameMode: () => {},
  handleContinueGame: () => {},
  handleResetGame: () => {},
});
