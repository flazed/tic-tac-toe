import { tv } from 'tailwind-variants';
import { GameMods } from '@store/tic-tac.types';

export const TicTacContainerStyles = tv({
  slots: {
    fieldsContainer: 'relative grid gap-1 p-1 bg-slate-900 text-slate-100 rounded-lg mb-4',
    strikeContainer: 'absolute w-full h-full',
  },
  variants: {
    mode: {
      [GameMods.THREE]: {
        fieldsContainer: 'grid-cols-3',
      },
      [GameMods.FIVE]: {
        fieldsContainer: 'grid-cols-5',
      },
    },
  },
});
