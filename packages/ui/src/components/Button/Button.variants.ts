import type { ButtonSize, ButtonVariant } from './Button.types';

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-sm hover:bg-[var(--color-primary-hover)]',
  secondary:
    'bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] shadow-sm hover:bg-[var(--color-secondary-hover)]',
  outline:
    'border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)] hover:bg-[var(--color-surface-muted)]',
  ghost: 'text-[var(--color-foreground)] hover:bg-[var(--color-surface-muted)]',
  danger: 'bg-[var(--color-error)] text-white shadow-sm hover:bg-red-600',
};

export const buttonSizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 rounded-[var(--radius-sm)] px-3 text-sm',
  md: 'h-10 rounded-[var(--radius-md)] px-4 text-sm',
  lg: 'h-12 rounded-[var(--radius-lg)] px-5 text-base',
};

export const buttonBaseClasses =
  'inline-flex items-center justify-center gap-2 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';