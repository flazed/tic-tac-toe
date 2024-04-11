import { useContext } from 'react';

import { Strike } from '@components/strike/strike';
import { TicTacCell } from '@components/tic-tac-cell/tic-tac-cell';

import { TicTac } from '@store/tic-tac';

import { TicTacContainerStyles } from '@components/tic-tac-container/tic-tac-container.styles';

export function TicTacContainer() {
  const { gameFields, gameMode, winner } = useContext(TicTac);
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
      {gameFields.map((field) => <TicTacCell index={field} key={field} />)}
    </div>
  );
}
