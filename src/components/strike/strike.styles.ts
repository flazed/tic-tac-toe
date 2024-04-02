import { tv } from 'tailwind-variants';

export const StrikeStyles = tv({
  slots: {
    base: 'absolute h-2 rounded-xl bg-green-400 z-10 -translate-y-1/2',
    col: 'rotate-90 origin-left w-10/12 top-[calc(100%/12)]',
    row: 'w-10/12 left-[calc(100%/12)]',
    lDiag: 'w-[120%] -left-[10%] top-1/2 origin-center rotate-45',
    rDiag: 'w-[120%] -left-[10%] top-1/2 origin-center -rotate-45',
  },
});
