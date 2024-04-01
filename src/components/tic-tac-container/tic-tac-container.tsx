import { useContext } from 'react';

import { TicTacContainerStyles } from '@components/tic-tac-container/tic-tac-container.styles';
import { TicTacCell } from '@components/tic-tac-cell/tic-tac-cell';

import { TicTac } from '@store/tic-tac';

export function TicTacContainer() {
  const { gameFields } = useContext(TicTac);

  return (
    <div className={TicTacContainerStyles()}>
      {gameFields.map((field) => <TicTacCell key={field} index={field} />)}
    </div>
  );
}
