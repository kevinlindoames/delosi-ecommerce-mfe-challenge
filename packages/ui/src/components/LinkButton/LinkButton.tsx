import { cn } from '../../lib/cn';
import { buttonBaseClasses, buttonSizeClasses, buttonVariantClasses } from '../Button/Button.variants';
import type { LinkButtonProps } from './LinkButton.types';

export function LinkButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(
        buttonBaseClasses,
        buttonVariantClasses[variant],
        buttonSizeClasses[size],
        className,
      )}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
}