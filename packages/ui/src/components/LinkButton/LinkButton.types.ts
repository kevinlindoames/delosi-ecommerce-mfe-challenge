import type { AnchorHTMLAttributes, ReactNode } from 'react';
import type { ButtonSize, ButtonVariant } from '../Button';

export type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};