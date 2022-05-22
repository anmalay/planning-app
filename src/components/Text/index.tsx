import classNames from 'classnames';
import { CSSProperties, memo } from 'react';
import { CSSColors, CSSTextLineHeights, CSSTextSizes, CSSTextWeight } from 'src/types';

import styles from './styles.module.css';

export type TextProps = {
  variant?: keyof typeof CSSTextSizes;
  weight?: keyof typeof CSSTextWeight;
  color?: keyof typeof CSSColors;
  children: number | string | JSX.Element | JSX.Element[] | Element | undefined | null;
  className?: string;
  style?: CSSProperties;
};

export const Text = memo(
  ({
    variant = 'body',
    weight = 'medium',
    color = 'textPrimary',
    children,
    style,
    className,
  }: TextProps) => (
    <span
      className={classNames(styles.text, className)}
      style={{
        lineHeight: CSSTextLineHeights[variant],
        fontSize: CSSTextSizes[variant],
        fontWeight: CSSTextWeight[weight],
        color: CSSColors[color],
        ...style,
      }}
    >
      {children}
    </span>
  ),
);
