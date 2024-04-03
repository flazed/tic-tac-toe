import { Button } from '@components/button/button';
import { useContext } from 'react';
import { TicTac } from '@store/tic-tac';
import { ScoreStyle } from '@components/score/score.style';
import { Cross } from '@icons/Cross';
import { Players } from '@store/tic-tac.types';
import { Circle } from '@icons/Circle';

export function Score() {
  const { winner, score, handleContinueGame, handleResetGame } = useContext(TicTac);

  const { container, smallContainer, cross, circle } = ScoreStyle();

  return (
    <div>
      <div className={container()}>
        <div className={smallContainer()}>
          <span className={cross()}>
            <Cross />
          </span>
          {score[Players.FIRST]}
        </div>
        <div className={smallContainer()}>
          <span className={circle()}>
            <Circle />
          </span>
          {score[Players.SECONDS]}
        </div>
      </div>
      <div className={smallContainer()}>
        <Button onClick={handleContinueGame} disabled={!winner.isWin}>Продолжить</Button>
        <Button type="secondary" onClick={handleResetGame}>Сбросить</Button>
      </div>
    </div>
  );
}