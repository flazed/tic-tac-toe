import { useMemo, useState } from 'react';
import { TicTac } from '@store/tic-tac';
import {
  GameMods, MarkedFieldType, TicTacContextTypes, TicTacType,
} from '@store/tic-tac.types';
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
  const [markedFields, setMarkedFields] = useState<MarkedFieldType>({});

  const calculateWinner = (currentUser: boolean, markedFieldsState: MarkedFieldType) => {
    const currentUserSteps: MarkedFieldType = Object.fromEntries(
      Object.entries(markedFieldsState).filter((mf) => mf[1].isFirstUser === currentUser),
    );
    const currentUserStepsIndex = Object.keys(currentUserSteps)
      .sort((a, b) => Number(a) - Number(b));

    for (const index of range(gameMode)) {
      const thisRowSteps = currentUserStepsIndex.filter(
        (e) => winStrategy[gameMode].rows[index].includes(Number(e)),
      );
      const thisColSteps = currentUserStepsIndex.filter(
        (e) => winStrategy[gameMode].cols[index].includes(Number(e)),
      );

      if (thisRowSteps.length === gameMode) { /* empty */ }
      if (thisColSteps.length === gameMode) { /* empty */ }
    }

    const thisLeftDiagonalSteps = currentUserStepsIndex.filter(
      (e) => winStrategy[gameMode].leftDiagonal.includes(Number(e)),
    );
    const thisRightDiagonalSteps = currentUserStepsIndex.filter(
      (e) => winStrategy[gameMode].rightDiagonal.includes(Number(e)),
    );
    if (thisLeftDiagonalSteps.length === gameMode) { /* empty */ }
    if (thisRightDiagonalSteps.length === gameMode) { /* empty */ }
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
  };

  const handleChangeGameMode = (mode: GameMods) => {
    setGameMode(mode);
    handleResetGame();
  };

  const ticTacValue = useMemo<TicTacType>(() => ({
    gameFields: gameFields[gameMode],
    markedFields,
    handleFieldClick,
    handleResetGame,
    handleChangeGameMode,
  }), [gameMode, markedFields]);

  return (
    <TicTac.Provider value={ticTacValue}>
      {children}
    </TicTac.Provider>
  );
}
