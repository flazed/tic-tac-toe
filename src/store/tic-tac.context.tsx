import { useMemo, useState } from 'react';
import { TicTac } from '@store/tic-tac';
import { GameMods,
  MarkedFieldType,
  Players,
  Score,
  TicTacContextTypes,
  TicTacType,
  WinnerType } from '@store/tic-tac.types';
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
  const [currentPlayer, setCurrentPlayer] = useState<Players>(Players.FIRST);
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
    setCurrentPlayer(Players.FIRST);
    setMarkedFields([]);
    setWinner({
      isWin: false,
      winStrategy: {
      },
    });
  };
  const handleSetWinner = (currentUser: Players, winStrategyProps: WinnerType['winStrategy']) => {
    const winSettings = {
      isCol: winStrategyProps?.isCol ?? false,
      isRow: winStrategyProps?.isRow ?? false,
      isLDiagonal: winStrategyProps?.isLDiagonal ?? false,
      isRDiagonal: winStrategyProps?.isRDiagonal ?? false,
      index: winStrategyProps?.index ?? 0,
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
        player: currentPlayer,
      },
    };
    calculateWinner(currentPlayer, newMarkedFieldsState);
    setMarkedFields(newMarkedFieldsState);
    setCurrentPlayer(currentPlayer === Players.FIRST ? Players.SECONDS : Players.FIRST);
  };

  const handleChangeGameMode = (mode: GameMods) => {
    setGameMode(mode);
    initState();
  };

  const handleContinueGame = () => {
    initState();
  };

  const handleResetGame = () => {
    initState();
    setScore({
      [Players.FIRST]: 0,
      [Players.SECONDS]: 0,
    });
  };

  const ticTacValue = useMemo<TicTacType>(() => ({
    gameMode,
    gameFields: gameFields[gameMode],
    markedFields,
    winner,
    score,
    handleFieldClick,
    handleChangeGameMode,
    handleContinueGame,
    handleResetGame,
  }), [gameMode, markedFields, winner]);

  return (
    <TicTac.Provider value={ticTacValue}>
      {children}
    </TicTac.Provider>
  );
}
