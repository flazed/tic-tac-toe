import { TicTacContainer } from '@components/tic-tac-container/tic-tac-container';
import { TicTacContext } from '@store/tic-tac.context';

export default function App() {
  return (
    <TicTacContext>
      <TicTacContainer />
    </TicTacContext>
  );
}
