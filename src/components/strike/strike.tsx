import { useContext } from 'react';

import classNames from 'classnames';

import { TicTac } from '@store/tic-tac';

import { StrikeStyles } from '@components/strike/strike.styles';

export function Strike() {
  const {
    gameMode,
    winner: {
      winStrategy: {
        index,
        isCol,
        isLDiagonal,
        isRDiagonal,
        isRow,
      },
    },
  } = useContext(TicTac);

  const strikePosition = () => {
    const pos = (100 / (gameMode * 2)) * (((index ?? 0) * 2) + 1);

    if (isCol || isRow) {
      if (isCol) {
        return {
          left: `${pos}%`,
        };
      }
      if (isRow) {
        return {
          top: `${pos}%`,
        };
      }
    }
    return {
    };
  };

  const { base, col, lDiag, rDiag, row } = StrikeStyles();

  return (
    <div
      className={classNames(
        base(),
        {
          [String(col())]: isCol,
          [String(lDiag())]: isLDiagonal,
          [String(rDiag())]: isRDiagonal,
          [String(row())]: isRow,
        },
      )}
      style={strikePosition()}
    />
  );
}
