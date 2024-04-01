import { useContext, useState } from 'react';
import { TicTacCellStyles } from '@components/tic-tac-cell/tic-tac-cell.styles';
import { TicTac } from '@store/tic-tac';
import { Cross } from '@icons/Cross';
import { Circle } from '@icons/Circle';
import classNames from 'classnames';

type TicTacCellTypes = {
  index: number
};

export function TicTacCell({ index }: TicTacCellTypes) {
  const { markedFields, handleFieldClick } = useContext(TicTac);

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
      if (currentField.isFirstUser) {
        return <Cross />;
      }
      return <Circle />;
    }
    return '';
  };

  const {
    container, icon, error,
  } = TicTacCellStyles({
    user: markedFields[index] && markedFields[index].isFirstUser ? 'firstPlayer' : 'secondPlayer',
  });

  return (
    <button
      type="button"
      className={container()}
      onClick={handleFieldOnClick}
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