import { useEffect, useMemo, useState } from 'react';

import { range } from '@services/range';
import { getWinStrategy } from '@services/winStrategy';

import { TicTac } from '@store/tic-tac';

import { GameMods,
  MarkedFieldType,
  Players,
  Score,
  TicTacContextTypes,
  TicTacType,
  WinnerType } from '@store/tic-tac.types';

const gameFields = {
  [GameMods.FIVE]: range(5 * 5),
  [GameMods.THREE]: range(3 * 3),
};

const winStrategy = {
  [GameMods.FIVE]: getWinStrategy(GameMods.FIVE),
  [GameMods.THREE]: getWinStrategy(GameMods.THREE),
};

export function TicTacContext({ children }: TicTacContextTypes) {
  const [gameMode, setGameMode] = useState<GameMods>(GameMods.THREE);
  const [currentPlayer, setCurrentPlayer] = useState<Players>(Players.FIRST);
  const [whoseFirstStep, setFirstStep] = useState<Players>(Players.FIRST);
  const [markedFields, setMarkedFields] = useState<MarkedFieldType>({
  });
  const [winner, setWinner] = useState<WinnerType>({
    isWin: false,
    winStrategy: {
    },
  });
  const [score, setScore] = useState<Score>({
    [Players.FIRST]: 0,
    [Players.SECONDS]: 0,
  });

  const initState = () => {
    setMarkedFields([]);
    setWinner({
      isWin: false,
      winStrategy: {
      },
    });
  };

  const handleSetWinner = (currentUser: Players, winStrategyProps: WinnerType['winStrategy']) => {
    const winSettings = {
      index: winStrategyProps?.index ?? 0,
      isCol: winStrategyProps?.isCol ?? false,
      isLDiagonal: winStrategyProps?.isLDiagonal ?? false,
      isRDiagonal: winStrategyProps?.isRDiagonal ?? false,
      isRow: winStrategyProps?.isRow ?? false,
    };

    setWinner({
      isWin: true,
      player: currentUser,
      winStrategy: winSettings,
    });
    setScore({
      ...score,
      [currentUser]: score[currentUser] + 1,
    });
  };

  const calculateWinner = (currentUser: Players, markedFieldsState: MarkedFieldType) => {
    const currentUserStepsIndex: string[] = Object.entries(markedFieldsState)
      .filter((mf) => mf[1].player === currentUser)
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
          index,
          isCol: thisColSteps.length === gameMode,
          isRow: thisRowSteps.length === gameMode,
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
        player: currentPlayer,
      },
    };
    calculateWinner(currentPlayer, newMarkedFieldsState);
    setMarkedFields(newMarkedFieldsState);
    setCurrentPlayer(currentPlayer === Players.FIRST ? Players.SECONDS : Players.FIRST);
  };

  const handleChangeGameMode = (mode: GameMods) => {
    initState();
    setCurrentPlayer(Players.FIRST);
    setFirstStep(Players.FIRST);
    setGameMode(mode);
  };

  const handleContinueGame = () => {
    initState();
    setCurrentPlayer(whoseFirstStep === Players.FIRST ? Players.SECONDS : Players.FIRST);
    setFirstStep(whoseFirstStep === Players.FIRST ? Players.SECONDS : Players.FIRST);
  };

  const handleResetGame = () => {
    initState();
    setCurrentPlayer(Players.FIRST);
    setFirstStep(Players.FIRST);
    setScore({
      [Players.FIRST]: 0,
      [Players.SECONDS]: 0,
    });
  };

  useEffect(() => {
    if (Object.keys(markedFields).length === gameMode * gameMode && !winner.isWin) {
      setWinner({
        ...winner,
        isWin: true,
      });
      setScore({
        [Players.FIRST]: score[Players.FIRST] + 1,
        [Players.SECONDS]: score[Players.SECONDS] + 1,
      });
    }
  }, [markedFields, winner.isWin]);

  const ticTacValue = useMemo<TicTacType>(() => ({
    gameFields: gameFields[gameMode],
    gameMode,
    handleChangeGameMode,
    handleContinueGame,
    handleFieldClick,
    handleResetGame,
    markedFields,
    score,
    winner,
  }), [gameMode, markedFields, winner]);

  return (
    <TicTac.Provider value={ticTacValue}>
      {children}
    </TicTac.Provider>
  );
}
