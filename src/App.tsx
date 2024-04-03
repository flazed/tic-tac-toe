import { TicTacContainer } from '@components/tic-tac-container/tic-tac-container';
import { ChangeMode } from '@components/change-mode/change-mode';
import { TicTacContext } from '@store/tic-tac.context';
import { Score } from '@components/score/score';

export default function App() {
  return (
    <TicTacContext>
      <ChangeMode />
      <TicTacContainer />
      <Score />
    </TicTacContext>
  );
}
