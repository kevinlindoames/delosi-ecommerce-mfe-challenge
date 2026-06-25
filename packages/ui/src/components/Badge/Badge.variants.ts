import type { BadgeVariant } from './Badge.types';

export const badgeVariantClasses: Record<BadgeVariant, string> = {
  default:
    'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted-foreground)]',
  primary:
    'border-blue-200 bg-[var(--color-primary-soft)] text-[var(--color-primary-hover)]',
  accent:
    'border-amber-200 bg-[var(--color-accent-soft)] text-[var(--color-accent-foreground)]',
  success:
    'border-emerald-200 bg-[var(--color-success-soft)] text-[var(--color-success-foreground)]',
  error:
    'border-red-200 bg-[var(--color-error-soft)] text-[var(--color-error-foreground)]',
};

export const badgeBaseClasses =
  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]';