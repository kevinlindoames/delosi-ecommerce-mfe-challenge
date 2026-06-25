import type { Product, ProductFilters } from '../types/product.types';

export function filterProducts(products: Product[], filters: ProductFilters): Product[] {
  const search = filters.search?.trim().toLowerCase();
  const category = filters.category?.trim().toLowerCase();

  return products.filter((product) => {
    const matchesSearch = search
      ? product.title.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
      : true;

    const matchesCategory = category ? product.category.toLowerCase() === category : true;

    return matchesSearch && matchesCategory;
  });
}