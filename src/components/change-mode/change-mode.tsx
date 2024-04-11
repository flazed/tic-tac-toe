import { useContext } from 'react';

import classNames from 'classnames';

import { Button } from '@components/button/button';

import { TicTac } from '@store/tic-tac';

import { GameMods } from '@store/tic-tac.types';

import { ChangeModeStyles } from '@components/change-mode/change-mode.styles';

export function ChangeMode() {
  const { gameMode, handleChangeGameMode } = useContext(TicTac);

  const { active, button, container } = ChangeModeStyles();

  return (
    <div className={container()}>
      <span className={classNames(button(), {
        [active()]: gameMode === GameMods.THREE,
      })}
      >
        <Button
          disabled={gameMode === GameMods.THREE}
          onClick={() => handleChangeGameMode(GameMods.THREE)}
        >
          3x3
        </Button>
      </span>

      <span className={classNames(button(), {
        [active()]: gameMode === GameMods.FIVE,
      })}
      >
        <Button
          disabled={gameMode === GameMods.FIVE}
          onClick={() => handleChangeGameMode(GameMods.FIVE)}
        >
          5x5
        </Button>
      </span>
    </div>
  );
}
