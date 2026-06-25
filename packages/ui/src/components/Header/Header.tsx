import { LinkButton } from '../LinkButton';
import type { HeaderProps } from './Header.types';

export function Header({
  brandName,
  navigationItems,
  cartHref,
  cartCount = 0,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] text-sm font-black text-white">
            D
          </span>

          <span className="text-sm font-black tracking-tight text-[var(--color-heading)]">
            {brandName}
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[var(--color-muted)] transition hover:text-[var(--color-heading)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <LinkButton href={cartHref} variant="outline" size="sm">
          Cart
          <span className="rounded-full bg-[var(--color-primary-soft)] px-2 py-0.5 text-xs font-black text-[var(--color-primary-hover)]">
            {cartCount}
          </span>
        </LinkButton>
      </div>
    </header>
  );
}