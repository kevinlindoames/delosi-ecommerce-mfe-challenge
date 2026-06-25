import { Badge } from '../Badge';
import { cn } from '../../lib/cn';
import type { PageHeaderProps } from './PageHeader.types';

export function PageHeader({
  badge,
  badgeVariant = 'primary',
  title,
  description,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        'flex flex-col gap-6 md:flex-row md:items-end md:justify-between',
        className,
      )}
    >
      <div>
        {badge ? <Badge variant={badgeVariant}>{badge}</Badge> : null}

        <h1 className="mt-5 text-4xl font-black tracking-tight text-[var(--color-heading)] md:text-5xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            {description}
          </p>
        ) : null}
      </div>

      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </section>
  );
}