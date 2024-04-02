import { PropsWithChildren } from 'react';
import { ButtonStyle } from '@components/button/button.style';

type ButtonProps = PropsWithChildren<{
  onClick: () => void
  type: 'primary' | 'secondary'
}>;

export function Button(props: ButtonProps) {
  const { type, onClick, children } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={ButtonStyle({
        type,
      })}
    >
      {children}
    </button>
  );
}
