import { tv } from 'tailwind-variants';

export const StrikeStyles = tv({
  slots: {
    base: 'absolute h-2 rounded-xl bg-green-400 z-10 -translate-y-1/2 animate-appear transition-[width]',
    col: 'rotate-90 origin-left w-10/12 top-[calc(100%/12)]',
    lDiag: 'w-[120%] left-[8%] top-[8%] origin-left rotate-45',
    rDiag: 'w-[120%] right-[8%] top-[8%] origin-right -rotate-45',
    row: 'w-10/12 left-[calc(100%/12)]',
  },
});
