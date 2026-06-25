import type { ReactNode } from 'react';
import { Card } from './Card';
import { LinkButton } from './LinkButton';

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  icon?: ReactNode;
};

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
  icon,
}: EmptyStateProps) {
  return (
    <Card className="text-center">
      {icon ? <div className="mx-auto mb-4 flex justify-center">{icon}</div> : null}

      <h2 className="text-xl font-bold text-[var(--color-heading)]">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[var(--color-muted)]">
        {description}
      </p>

      {actionLabel && actionHref ? (
        <LinkButton href={actionHref} className="mt-6">
          {actionLabel}
        </LinkButton>
      ) : null}
    </Card>
  );
}