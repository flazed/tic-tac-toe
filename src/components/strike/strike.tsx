import { TicTac } from '@store/tic-tac';
import { useContext } from 'react';
import { StrikeStyles } from '@components/strike/strike.styles';
import classNames from 'classnames';

export function Strike() {
  const {
    gameMode,
    winner: {
      winStrategy: {
        isCol,
        isRow,
        isLDiagonal,
        isRDiagonal,
        index,
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

  const { base, col, row, lDiag, rDiag } = StrikeStyles();

  return (
    <div
      className={classNames(
        base(),
        {
          [String(col())]: isCol,
          [String(row())]: isRow,
          [String(lDiag())]: isLDiagonal,
          [String(rDiag())]: isRDiagonal,
        },
      )}
      style={strikePosition()}
    />
  );
}
