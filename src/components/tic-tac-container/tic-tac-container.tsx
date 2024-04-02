import { useContext } from 'react';

import { TicTacContainerStyles } from '@components/tic-tac-container/tic-tac-container.styles';
import { TicTacCell } from '@components/tic-tac-cell/tic-tac-cell';

import { TicTac } from '@store/tic-tac';
import { Strike } from '@components/strike/strike';

export function TicTacContainer() {
  const { gameMode, gameFields, winner } = useContext(TicTac);
  const { fieldsContainer, strikeContainer } = TicTacContainerStyles({
    mode: gameMode,
  });

  return (
    <div className={fieldsContainer()}>
      {
        winner.isWin && (
        <div className={strikeContainer()}>
          <Strike />
        </div>
        )
      }
      {gameFields.map((field) => <TicTacCell key={field} index={field} />)}
    </div>
  );
}
