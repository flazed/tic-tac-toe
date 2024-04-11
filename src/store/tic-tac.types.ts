import { PropsWithChildren } from 'react';

export type TicTacContextTypes = PropsWithChildren<NonNullable<unknown>>;

export type TicTacType = {
  gameFields: number[],
  gameMode: GameMods,
  handleChangeGameMode: (mode: GameMods) => void
  handleContinueGame: () => void
  handleFieldClick: (index: number) => void
  handleResetGame: () => void
  markedFields: MarkedFieldType,
  score: Score,
  winner: WinnerType,
};

export enum Players {
  'FIRST' = 'X',
  'SECONDS' = 'O',
}

export type MarkedFieldType = Record<number, { player: Players }>;

export enum GameMods {
  'FIVE' = 5,
  'THREE' = 3,
}

export type WinnerType = {
  isWin: boolean,
  player?: Players,
  winStrategy: Partial<{
    index: number
    isCol: boolean,
    isLDiagonal: boolean,
    isRDiagonal: boolean,
    isRow: boolean,
  }>,
};

export type Score = Record<Players, number>;
