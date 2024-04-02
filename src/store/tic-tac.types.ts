import { PropsWithChildren } from 'react';

export type TicTacContextTypes = PropsWithChildren<NonNullable<unknown>>;

export type TicTacType = {
  gameMode: GameMods,
  gameFields: number[],
  markedFields: MarkedFieldType,
  winner: WinnerType,
  handleFieldClick: (index: number) => void
  handleResetGame: () => void
  handleChangeGameMode: (mode: GameMods) => void
};

export type MarkedFieldType = Record<number, { isFirstUser: boolean }>;

export enum GameMods {
  'THREE' = 3,
  'FIVE' = 5,
}

export type WinnerType = {
  isWin: boolean,
  isFirstUser?: boolean,
  winStrategy: Partial<{
    isCol: boolean,
    isRow: boolean,
    isLDiagonal: boolean,
    isRDiagonal: boolean,
    index: number
  }>,
};
