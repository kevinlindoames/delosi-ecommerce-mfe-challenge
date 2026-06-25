import type { ProductCategory, ProductSortOption } from '@delosi/products';

export type ProductFiltersProps = {
  categories: ProductCategory[];
  selectedCategory?: string;
  search?: string;
  sort?: ProductSortOption;
};