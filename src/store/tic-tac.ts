import { createContext } from 'react';

import { GameMods, Players, TicTacType } from '@store/tic-tac.types';

export const TicTac = createContext<TicTacType>({
  gameFields: [],
  gameMode: GameMods.THREE,
  handleChangeGameMode: () => {},
  handleContinueGame: () => {},
  handleFieldClick: () => {},
  handleResetGame: () => {},
  markedFields: [],
  score: {
    [Players.FIRST]: 0,
    [Players.SECONDS]: 0,
  },
  winner: {
    isWin: false,
    winStrategy: {
    },
  },
});
