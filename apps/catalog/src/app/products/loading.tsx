import { Card, Container, PageHeader, Skeleton } from '@delosi/ui';
import { CatalogHeader } from '../../features/cart/components/CatalogHeader';

export default function ProductsLoading() {
  return (
    <>
      <CatalogHeader />

      <Container>
        <PageHeader
          badge="Catalog Zone"
          title="Products"
          description="Loading product catalog..."
        />

        <div className="mt-8 grid gap-4 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)] md:grid-cols-4">
          <Skeleton className="h-11" />
          <Skeleton className="h-11" />
          <Skeleton className="h-11" />
          <Skeleton className="h-11" />
        </div>

        <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card key={index}>
              <Skeleton className="h-56" />
              <Skeleton className="mt-5 h-5 w-24" />
              <Skeleton className="mt-4 h-6 w-full" />
              <Skeleton className="mt-2 h-4 w-4/5" />
              <Skeleton className="mt-6 h-10 w-full" />
            </Card>
          ))}
        </section>
      </Container>
    </>
  );
}