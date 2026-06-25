import type { HTMLAttributes, ReactNode } from 'react';

export type BadgeVariant = 'default' | 'primary' | 'accent' | 'success' | 'error';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  variant?: BadgeVariant;
};