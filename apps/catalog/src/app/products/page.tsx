import { routes } from '@delosi/config';
import {
  filterProducts,
  getProductCategoriesWithFallback,
  getProducts,
  sortProducts,
  type ProductSortOption,
} from '@delosi/products';
import { Container, EmptyState, LinkButton, PageHeader } from '@delosi/ui';
import { CatalogHeader } from '../../features/cart/components/CatalogHeader';
import { ProductCard } from '../../features/products/components/ProductCard';
import { ProductFilters } from '../../features/products/components/ProductFilters/ProductFilters';
import { validProductSortOptions } from '../../features/products/constants/product-filter-options';

type ProductsPageProps = {
  searchParams: Promise<{
    search?: string;
    category?: string;
    sort?: string;
  }>;
};

function isValidSortOption(sort?: string): sort is ProductSortOption {
  return validProductSortOptions.includes(sort as ProductSortOption);
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;

  const search = params.search?.trim() || undefined;
  const category = params.category?.trim() || undefined;
  const sort = isValidSortOption(params.sort) ? params.sort : undefined;

  const [products, categories] = await Promise.all([
    getProducts(),
    getProductCategoriesWithFallback(),
  ]);

  const filteredProducts = filterProducts(products, {
    search,
    category,
  });

  const visibleProducts = sortProducts(filteredProducts, sort);

  return (
    <>
     <CatalogHeader />

      <Container>
        <PageHeader
          badge="Catalog Zone"
          title="Products"
          description="Explore products from FakeStore API with URL-driven filters, search and sorting."
          actions={
            <LinkButton href={routes.cart} variant="outline">
              View cart
            </LinkButton>
          }
        />

        <ProductFilters
          categories={categories}
          selectedCategory={category}
          search={search}
          sort={sort}
        />

        <div className="mt-6 flex items-center justify-between gap-4 text-sm text-[var(--color-muted)]">
          <p>
            Showing{' '}
            <span className="font-bold text-[var(--color-heading)]">
              {visibleProducts.length}
            </span>{' '}
            of {products.length} products
          </p>
        </div>

        {visibleProducts.length > 0 ? (
          <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        ) : (
          <div className="mt-8">
            <EmptyState
              title="No products found"
              description="Try adjusting your search, category or sorting filters to find what you are looking for."
              actionLabel="Clear filters"
              actionHref={routes.products}
            />
          </div>
        )}
      </Container>
    </>
  );
}