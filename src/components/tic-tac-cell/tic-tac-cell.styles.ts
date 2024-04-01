import { tv } from 'tailwind-variants';

export const TicTacCellStyles = tv({
  slots: {
    container: 'w-24 h-24 flex justify-center items-center bg-slate-800 p-5',
    icon: 'w-full h-full animate-scaling',
    error: 'block animate-shaking !text-red-500',
  },
  variants: {
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
