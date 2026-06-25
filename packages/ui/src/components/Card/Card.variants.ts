import type { CardVariant } from './Card.types';

export const cardVariantClasses: Record<CardVariant, string> = {
  default:
    'border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]',
  interactive:
    'border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]',
  elevated:
    'border border-transparent bg-[var(--color-surface)] shadow-[var(--shadow-card-hover)]',
};

export const cardBaseClasses = 'rounded-[var(--radius-xl)] p-6';