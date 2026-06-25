import type { Product, ProductSortOption } from '../types/product.types';

export function sortProducts(products: Product[], sort?: ProductSortOption): Product[] {
  const sortedProducts = [...products];

  switch (sort) {
    case 'price-asc':
      return sortedProducts.sort((a, b) => a.price - b.price);

    case 'price-desc':
      return sortedProducts.sort((a, b) => b.price - a.price);

    case 'title-asc':
      return sortedProducts.sort((a, b) => a.title.localeCompare(b.title));

    case 'title-desc':
      return sortedProducts.sort((a, b) => b.title.localeCompare(a.title));

    default:
      return sortedProducts;
  }
}