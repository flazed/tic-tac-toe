import { PropsWithChildren } from 'react';

export type TicTacContextTypes = PropsWithChildren<NonNullable<unknown>>;

export type TicTacType = {
  gameMode: GameMods,
  gameFields: number[],
  markedFields: MarkedFieldType,
  winner: WinnerType,
  score: Score,
  handleFieldClick: (index: number) => void
  handleChangeGameMode: (mode: GameMods) => void
  handleContinueGame: () => void
  handleResetGame: () => void
};

export enum Players {
  'FIRST' = 'X',
  'SECONDS' = 'O',
}

export type MarkedFieldType = Record<number, { player: Players }>;

export enum GameMods {
  'THREE' = 3,
  'FIVE' = 5,
}

export type WinnerType = {
  isWin: boolean,
  player?: Players,
  winStrategy: Partial<{
    isCol: boolean,
    isRow: boolean,
    isLDiagonal: boolean,
    isRDiagonal: boolean,
    index: number
  }>,
};

export type Score = Record<Players, number>;
