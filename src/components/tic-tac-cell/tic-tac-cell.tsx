import { useContext, useState } from 'react';

import classNames from 'classnames';

import { TicTac } from '@store/tic-tac';

import { Circle } from '@icons/Circle';
import { Cross } from '@icons/Cross';

import { Players } from '@store/tic-tac.types';

import { TicTacCellStyles } from '@components/tic-tac-cell/tic-tac-cell.styles';

type TicTacCellTypes = {
  index: number
};

export function TicTacCell({ index }: TicTacCellTypes) {
  const { gameMode, handleFieldClick, markedFields } = useContext(TicTac);

  const [isAlreadyUsed, setAlreadyUsed] = useState(false);

  const handleFieldOnClick = () => {
    const currentField = markedFields[index];
    if (isAlreadyUsed) return;
    if (currentField) {
      setAlreadyUsed(true);
      setTimeout(() => {
        setAlreadyUsed(false);
      }, 500);
    } else {
      handleFieldClick(index);
    }
  };

  const showMark = () => {
    const currentField = markedFields[index];

    if (currentField) {
      if (currentField.player === Players.FIRST) {
        return <Cross />;
      }
      return <Circle />;
    }
    return '';
  };

  const { container, error, icon } = TicTacCellStyles({
    mode: gameMode,
    user: markedFields[index] && markedFields[index].player === Players.FIRST ? 'firstPlayer' : 'secondPlayer',
  });

  return (
    <button
      className={container()}
      onClick={handleFieldOnClick}
      type="button"
    >
      {markedFields[index] && (
        <span className={icon()}>
          <span className={classNames({
            [error()]: isAlreadyUsed,
          })}
          >
            {showMark()}
          </span>
        </span>
      )}
    </button>
  );
}
