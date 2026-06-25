import type { HTMLAttributes, ReactNode } from 'react';

export type ContainerSize = 'md' | 'lg' | 'xl';

export type ContainerProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  size?: ContainerSize;
  as?: 'main' | 'section' | 'div';
};