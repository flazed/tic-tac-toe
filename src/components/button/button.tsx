import { PropsWithChildren } from 'react';
import { ButtonStyle } from '@components/button/button.style';

type ButtonProps = PropsWithChildren<{
  onClick: () => void
  type?: 'primary' | 'secondary'
  disabled?: boolean
}>;

export function Button(props: ButtonProps) {
  const { onClick, type, disabled, children } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={ButtonStyle({
        type,
      })}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'primary',
  disabled: false,
};
