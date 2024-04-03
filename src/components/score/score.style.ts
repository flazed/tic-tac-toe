import { tv } from 'tailwind-variants';

export const ScoreStyle = tv({
  slots: {
    container: 'grid grid-cols-2 gap-5 mb-4',
    smallContainer: 'grid grid-cols-2 gap-5 text-slate-50',
    cross: 'text-blue-600',
    circle: 'text-slate-50',
  },
});
