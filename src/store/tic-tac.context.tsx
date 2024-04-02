import { useMemo, useState } from 'react';
import { TicTac } from '@store/tic-tac';
import { GameMods, MarkedFieldType, TicTacContextTypes, TicTacType, WinnerType } from '@store/tic-tac.types';
import { range } from '@services/range';
import { getWinStrategy } from '@services/winStrategy';

const gameFields = {
  [GameMods.THREE]: range(3 * 3),
  [GameMods.FIVE]: range(5 * 5),
};

const winStrategy = {
  [GameMods.THREE]: getWinStrategy(GameMods.THREE),
  [GameMods.FIVE]: getWinStrategy(GameMods.FIVE),
};

export function TicTacContext({ children }: TicTacContextTypes) {
  const [gameMode, setGameMode] = useState<GameMods>(GameMods.THREE);
  const [isFirstUser, setIsFirstUser] = useState<boolean>(true);
  const [markedFields, setMarkedFields] = useState<MarkedFieldType>({
  });
  const [winner, setWinner] = useState<WinnerType>({
    isWin: false,
    winStrategy: {
    },
  });

  const handleSetWinner = (currentUser: boolean, winStrategyProps: WinnerType['winStrategy']) => {
    const winSettings = {
      isCol: winStrategyProps?.isCol ?? false,
      isRow: winStrategyProps?.isRow ?? false,
      isLDiagonal: winStrategyProps?.isLDiagonal ?? false,
      isRDiagonal: winStrategyProps?.isRDiagonal ?? false,
      index: winStrategyProps?.index ?? 0,
    };

    setWinner({
      isWin: true,
      isFirstUser: currentUser,
      winStrategy: winSettings,
    });
  };

  const calculateWinner = (currentUser: boolean, markedFieldsState: MarkedFieldType) => {
    const currentUserStepsIndex: string[] = Object.entries(markedFieldsState)
      .filter((mf) => mf[1].isFirstUser === currentUser)
      .map((mf) => mf[0]);

    for (const index of range(gameMode)) {
      const thisRowSteps = currentUserStepsIndex.filter(
        (e) => winStrategy[gameMode].rows[index].includes(Number(e)),
      );
      const thisColSteps = currentUserStepsIndex.filter(
        (e) => winStrategy[gameMode].cols[index].includes(Number(e)),
      );

      if (thisRowSteps.length === gameMode || thisColSteps.length === gameMode) {
        handleSetWinner(currentUser, {
          isRow: thisRowSteps.length === gameMode,
          isCol: thisColSteps.length === gameMode,
          index,
        });
      }
    }

    const thisLeftDiagonalSteps = currentUserStepsIndex.filter(
      (e) => winStrategy[gameMode].leftDiagonal.includes(Number(e)),
    );
    const thisRightDiagonalSteps = currentUserStepsIndex.filter(
      (e) => winStrategy[gameMode].rightDiagonal.includes(Number(e)),
    );
    if (thisLeftDiagonalSteps.length === gameMode || thisRightDiagonalSteps.length === gameMode) {
      handleSetWinner(currentUser, {
        isLDiagonal: thisLeftDiagonalSteps.length === gameMode,
        isRDiagonal: thisRightDiagonalSteps.length === gameMode,
      });
    }
  };

  const handleFieldClick = (index: number) => {
    const newMarkedFieldsState = {
      ...markedFields,
      [index]: {
        isFirstUser,
      },
    };
    calculateWinner(isFirstUser, newMarkedFieldsState);
    setMarkedFields(newMarkedFieldsState);
    setIsFirstUser(!isFirstUser);
  };

  const handleResetGame = () => {
    setIsFirstUser(true);
    setMarkedFields([]);
    setWinner({
      isWin: false,
      winStrategy: {
      },
    });
  };

  const handleChangeGameMode = (mode: GameMods) => {
    setGameMode(mode);
    handleResetGame();
  };

  const ticTacValue = useMemo<TicTacType>(() => ({
    gameMode,
    gameFields: gameFields[gameMode],
    markedFields,
    winner,
    handleFieldClick,
    handleResetGame,
    handleChangeGameMode,
  }), [gameMode, markedFields, winner]);

  return (
    <TicTac.Provider value={ticTacValue}>
      {children}
    </TicTac.Provider>
  );
}
