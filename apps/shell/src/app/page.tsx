import { routes, siteConfig } from '@delosi/config';
import { Badge, Card, Container, Header, LinkButton } from '@delosi/ui';

const highlights = [
  'Next.js Multi-Zones',
  'Server Components',
  'Shared Design System',
  'Persistent Cart',
];

export default function HomePage() {
  return (
    <>
      <Header
        brandName={siteConfig.name}
        navigationItems={[
          {
            label: 'Products',
            href: routes.products,
          },
          {
            label: 'Cart',
            href: routes.cart,
          },
        ]}
        cartHref={routes.cart}
        cartCount={0}
      />

      <Container className="py-16">
        <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge variant="accent">Retail Microfrontend Challenge</Badge>

            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-[var(--color-heading)] md:text-6xl">
              A modern retail experience built with Next.js Multi-Zones.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              Explore a complete e-commerce flow with product listing, product detail,
              persistent cart, simulated checkout, SEO metadata and a shared design system.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={routes.products} size="lg">
                Browse products
              </LinkButton>

              <LinkButton href={routes.cart} variant="outline" size="lg">
                View cart
              </LinkButton>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((highlight) => (
                <Badge key={highlight} variant="primary">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>

          <Card className="relative overflow-hidden p-8 shadow-[var(--shadow-soft)]">
            <div className="absolute right-[-5rem] top-[-5rem] h-48 w-48 rounded-full bg-[var(--color-accent-soft)]" />
            <div className="absolute bottom-[-4rem] left-[-4rem] h-44 w-44 rounded-full bg-[var(--color-primary-soft)]" />

            <div className="relative">
              <Badge variant="success">Production-minded architecture</Badge>

              <div className="mt-8 grid gap-4">
                <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-5">
                  <p className="text-sm font-bold text-[var(--color-heading)]">
                    Shell zone
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    Routing composition and entry point.
                  </p>
                </div>

                <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-5">
                  <p className="text-sm font-bold text-[var(--color-heading)]">
                    Catalog zone
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    PLP, PDP, SEO and product data.
                  </p>
                </div>

                <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-5">
                  <p className="text-sm font-bold text-[var(--color-heading)]">
                    Checkout zone
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    Cart, checkout and order confirmation.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </Container>
    </>
  );
}