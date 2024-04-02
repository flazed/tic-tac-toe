import { createContext } from 'react';
import { GameMods, TicTacType } from '@store/tic-tac.types';

export const TicTac = createContext<TicTacType>({
  gameMode: GameMods.THREE,
  gameFields: [],
  markedFields: [],
  handleFieldClick: () => {},
  handleResetGame: () => {},
  handleChangeGameMode: () => {},
  winner: {
    isWin: false,
    winStrategy: {
    },
  },
});
