import type { ContainerSize } from './Container.types';

export const containerSizeClasses: Record<ContainerSize, string> = {
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
};

export const containerBaseClasses = 'mx-auto w-full px-6 py-12';