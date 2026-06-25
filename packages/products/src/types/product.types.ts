export type ProductRating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: ProductRating;
};

export type ProductCategory = string;

export type ProductSortOption = 'price-asc' | 'price-desc' | 'title-asc' | 'title-desc';

export type ProductFilters = {
  search?: string;
  category?: string;
  sort?: ProductSortOption;
};