import { tv } from 'tailwind-variants';

export const ChangeModeStyle = tv({
  slots: {
    container: 'grid grid-cols-2 gap-5 mb-4',
    button: 'grid rounded-md',
    active: 'ring ring-violet-100',
  },
});
