import { tv } from 'tailwind-variants';

import { GameMods } from '@store/tic-tac.types';

export const TicTacCellStyles = tv({
  slots: {
    container: 'w-14 h-14 flex justify-center items-center bg-slate-800 xl:p-5 p-3',
    error: 'block animate-shaking !text-red-500',
    icon: 'w-full h-full animate-scaling',
  },
  variants: {
    mode: {
      [GameMods.FIVE]: {
        container: 'w-14 h-14 md:w-24 md:h-24',
      },
      [GameMods.THREE]: {
        container: 'w-24 h-24',
      },
    },
    user: {
      firstPlayer: {
        icon: 'text-slate-50',
      },
      secondPlayer: {
        icon: 'text-blue-600',
      },
    },
  },
});
