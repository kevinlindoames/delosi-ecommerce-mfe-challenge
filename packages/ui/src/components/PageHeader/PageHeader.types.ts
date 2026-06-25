import type { ReactNode } from 'react';
import type { BadgeVariant } from '../Badge';

export type PageHeaderProps = {
  badge?: string;
  badgeVariant?: BadgeVariant;
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
};