import { PropsWithChildren } from 'react';

export type TicTacContextTypes = PropsWithChildren<NonNullable<unknown>>;

export type TicTacType = {
  gameFields: number[],
  markedFields: MarkedFieldType,
  handleFieldClick: (index: number) => void
  handleResetGame: () => void
  handleChangeGameMode: (mode: GameMods) => void
};

export type MarkedFieldType = Record<number, { isFirstUser: boolean }>;

export enum GameMods {
  'THREE' = 3,
  'FIVE' = 5,
}
