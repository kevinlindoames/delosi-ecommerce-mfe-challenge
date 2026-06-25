import type { Product, ProductCategory } from '../types/product.types';

export function getProductCategories(products: Product[]): ProductCategory[] {
  const categories = products
    .map((product) => product.category)
    .filter((category): category is string => Boolean(category));

  return Array.from(new Set(categories)).sort((a, b) => a.localeCompare(b));
}