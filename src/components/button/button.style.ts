import { tv } from 'tailwind-variants';

export const ButtonStyle = tv({
  base: 'px-4 py-2 text-lg rounded-md text-slate-50 duration-300 disabled:bg-gray-600',
  variants: {
    type: {
      primary: 'bg-blue-600 hover:bg-blue-800',
      secondary: 'bg-orange-600 hover:bg-orange-800',
    },
  },
});
