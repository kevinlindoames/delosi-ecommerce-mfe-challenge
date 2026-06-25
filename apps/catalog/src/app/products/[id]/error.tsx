'use client';

import { routes } from '@delosi/config';
import { Container, ErrorState } from '@delosi/ui';

export default function ProductDetailError() {
  return (
    <Container>
      <ErrorState
        title="Could not load product"
        description="The product detail could not be loaded. Please go back to the catalog and try again."
        retryLabel="Back to products"
        retryHref={routes.products}
      />
    </Container>
  );
}