import { ChangeMode } from '@components/change-mode/change-mode';
import { Score } from '@components/score/score';
import { TicTacContainer } from '@components/tic-tac-container/tic-tac-container';

import { TicTacContext } from '@store/tic-tac.context';

export default function App() {
  return (
    <TicTacContext>
      <ChangeMode />
      <TicTacContainer />
      <Score />
    </TicTacContext>
  );
}
