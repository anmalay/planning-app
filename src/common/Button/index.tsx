import classNames from 'classnames';
import { memo } from 'react';
import { CSSColors } from 'types';

import { Icon } from '../Icon';
import { IconName } from '../Icon/types';
import { Text } from '../Text';
import styles from './styles.module.css';

export type ButtonProps = {
  children?: string | JSX.Element | JSX.Element[];
  type?: 'reset' | 'submit' | 'button';
  variant?: 'primary' | 'sticker' | 'text' | 'control';
  disabled?: boolean;
  className?: {
    wrapper?: string;
    text?: string;
  };
  withIcon?: IconName;
  onClick?: () => void;
};

export const Button = memo(
  ({
    children,
    type = 'button',
    variant = 'primary',
    disabled,
    className,
    withIcon,
    onClick,
  }: ButtonProps): JSX.Element => (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
      className={classNames(
        styles.button,
        {
          [styles.stiker]: variant === 'sticker',
          [styles.text]: variant === 'text',
          [styles.control]: variant === 'control',
        },
        className?.wrapper,
      )}
      onClick={onClick}
    >
      {withIcon && variant !== 'text' && (
        <Icon name={withIcon} color={CSSColors.textInverse} size={19} />
      )}

      {children !== undefined && (
        <Text
          className={className?.text}
          variant={variant !== 'sticker' ? 'body' : 'description1'}
          weight="semi"
          color={variant !== 'text' ? 'textInverse' : 'INHERIT'}
        >
          {children}
        </Text>
      )}

      {withIcon && variant === 'text' && (
        <Icon name={withIcon} color={CSSColors.INHERIT} size={19} />
      )}
    </button>
  ),
);
