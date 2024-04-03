import { tv } from 'tailwind-variants';

export const ScoreStyle = tv({
  slots: {
    container: 'grid grid-cols-2 gap-5 mb-4',
    smallContainer: 'grid grid-cols-2 gap-5 text-slate-50',
    cross: 'text-slate-50 p-2',
    circle: 'text-blue-600 p-2',
    playerScore: 'flex justify-center items-center text-4xl select-none',
  },
});
