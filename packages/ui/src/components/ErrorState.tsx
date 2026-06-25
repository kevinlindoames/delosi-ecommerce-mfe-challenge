import { Card } from './Card';
import { LinkButton } from './LinkButton';

type ErrorStateProps = {
  title?: string;
  description?: string;
  retryLabel?: string;
  retryHref?: string;
};

export function ErrorState({
  title = 'Something went wrong',
  description = 'We could not complete the request. Please try again.',
  retryLabel = 'Try again',
  retryHref = '/',
}: ErrorStateProps) {
  return (
    <Card className="border-red-200 bg-[var(--color-error-soft)]">
      <h2 className="text-xl font-bold text-[var(--color-error-foreground)]">{title}</h2>
      <p className="mt-2 max-w-md text-sm leading-6 text-[var(--color-error-foreground)]">
        {description}
      </p>

      <LinkButton href={retryHref} variant="danger" className="mt-6">
        {retryLabel}
      </LinkButton>
    </Card>
  );
}