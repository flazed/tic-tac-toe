import { useContext } from 'react';

import { Button } from '@components/button/button';

import { TicTac } from '@store/tic-tac';

import { Circle } from '@icons/Circle';
import { Cross } from '@icons/Cross';

import { Players } from '@store/tic-tac.types';

import { ScoreStyles } from '@components/score/score.styles';

export function Score() {
  const { handleContinueGame, handleResetGame, score, winner } = useContext(TicTac);

  const { circle, container, cross, playerScore, smallContainer } = ScoreStyles();

  return (
    <div>
      <div className={container()}>
        <div className={smallContainer()}>
          <span className={cross()}>
            <Cross />
          </span>
          <span className={playerScore()}>
            {score[Players.FIRST]}
          </span>
        </div>
        <div className={smallContainer()}>
          <span className={playerScore()}>
            {score[Players.SECONDS]}
          </span>
          <span className={circle()}>
            <Circle />
          </span>
        </div>
      </div>
      <div className={smallContainer()}>
        <Button disabled={!winner.isWin} onClick={handleContinueGame}>Продолжить</Button>
        <Button onClick={handleResetGame} type="secondary">Сбросить</Button>
      </div>
    </div>
  );
}
