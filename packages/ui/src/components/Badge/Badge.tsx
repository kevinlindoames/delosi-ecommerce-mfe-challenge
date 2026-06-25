import { cn } from '../../lib/cn';
import type { BadgeProps } from './Badge.types';
import { badgeBaseClasses, badgeVariantClasses } from './Badge.variants';

export function Badge({ children, variant = 'default', className, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeBaseClasses, badgeVariantClasses[variant], className)} {...props}>
      {children}
    </span>
  );
}