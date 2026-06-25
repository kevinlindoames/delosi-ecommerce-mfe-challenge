import { routes } from '@delosi/config';
import { Container, EmptyState } from '@delosi/ui';
import { CatalogHeader } from '../../../features/cart/components/CatalogHeader';

export default function ProductDetailNotFound() {
  return (
    <>
      <CatalogHeader />

      <Container>
        <EmptyState
          title="Product not found"
          description="The product you are looking for does not exist or is no longer available."
          actionLabel="Back to products"
          actionHref={routes.products}
        />
      </Container>
    </>
  );
}