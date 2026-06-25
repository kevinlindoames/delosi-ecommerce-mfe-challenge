import { CatalogHeader } from '@/features/cart/components/CatalogHeader';
import { Card, Container, Skeleton } from '@delosi/ui';

export default function ProductDetailLoading() {
  return (
    <>
    <CatalogHeader />

      <Container>
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
          <Card className="flex min-h-[520px] items-center justify-center">
            <Skeleton className="h-[420px] w-full max-w-xl" />
          </Card>

          <Card>
            <Skeleton className="h-7 w-40" />
            <Skeleton className="mt-6 h-10 w-full" />
            <Skeleton className="mt-4 h-10 w-40" />
            <Skeleton className="mt-8 h-5 w-full" />
            <Skeleton className="mt-3 h-5 w-5/6" />
            <Skeleton className="mt-3 h-5 w-4/6" />
            <Skeleton className="mt-8 h-20 w-full" />
            <div className="mt-8 flex gap-3">
              <Skeleton className="h-11 w-40" />
              <Skeleton className="h-11 w-32" />
            </div>
          </Card>
        </section>
      </Container>
    </>
  );
}