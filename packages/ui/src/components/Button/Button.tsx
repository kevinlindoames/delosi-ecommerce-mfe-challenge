import { cn } from '../../lib/cn';
import type { ButtonProps } from './Button.types';
import { buttonBaseClasses, buttonSizeClasses, buttonVariantClasses } from './Button.variants';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonBaseClasses,
        buttonVariantClasses[variant],
        buttonSizeClasses[size],
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}