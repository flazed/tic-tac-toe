import { tv } from 'tailwind-variants';

export const ChangeModeStyles = tv({
  slots: {
    active: 'ring ring-violet-100',
    button: 'grid rounded-md',
    container: 'grid grid-cols-2 gap-5 mb-4',
  },
});
