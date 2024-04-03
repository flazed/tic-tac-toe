import { Button } from '@components/button/button';
import { useContext } from 'react';
import { TicTac } from '@store/tic-tac';
import { GameMods } from '@store/tic-tac.types';
import { ChangeModeStyle } from '@components/change-mode/change-mode.style';
import classNames from 'classnames';

export function ChangeMode() {
  const { gameMode, handleChangeGameMode } = useContext(TicTac);

  const { container, button, active } = ChangeModeStyle();

  return (
    <div className={container()}>
      <span className={classNames(button(), {
        [active()]: gameMode === GameMods.THREE,
      })}
      >
        <Button
          onClick={() => handleChangeGameMode(GameMods.THREE)}
          disabled={gameMode === GameMods.THREE}
        >
          3x3
        </Button>
      </span>

      <span className={classNames(button(), {
        [active()]: gameMode === GameMods.FIVE,
      })}
      >
        <Button
          onClick={() => handleChangeGameMode(GameMods.FIVE)}
          disabled={gameMode === GameMods.FIVE}
        >
          5x5
        </Button>
      </span>
    </div>
  );
}
