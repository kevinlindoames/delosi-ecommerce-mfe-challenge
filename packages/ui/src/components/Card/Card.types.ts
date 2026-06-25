import type { HTMLAttributes, ReactNode } from 'react';

export type CardVariant = 'default' | 'interactive' | 'elevated';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: CardVariant;
};