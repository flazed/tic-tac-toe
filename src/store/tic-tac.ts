import { createContext } from 'react';
import { TicTacType } from '@store/tic-tac.types';

export const TicTac = createContext<TicTacType>({
  gameFields: [],
  markedFields: [],
  handleFieldClick: () => {},
  handleResetGame: () => {},
  handleChangeGameMode: () => {},
});
