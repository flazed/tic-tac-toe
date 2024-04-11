import { PropsWithChildren } from 'react';

import { ButtonStyles } from '@components/button/button.styles';

type ButtonProps = PropsWithChildren<{
  disabled?: boolean
  onClick: () => void
  type?: 'primary' | 'secondary'
}>;

export function Button(props: ButtonProps) {
  const { children, disabled, onClick, type } = props;

  return (
    <button
      className={ButtonStyles({
        type,
      })}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
  type: 'primary',
};
