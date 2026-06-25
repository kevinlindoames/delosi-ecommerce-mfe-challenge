import type { ProductSortOption } from '@delosi/products';

export const productSortOptions: Array<{
  label: string;
  value: ProductSortOption;
}> = [
  {
    label: 'Price: low to high',
    value: 'price-asc',
  },
  {
    label: 'Price: high to low',
    value: 'price-desc',
  },
  {
    label: 'Title: A to Z',
    value: 'title-asc',
  },
  {
    label: 'Title: Z to A',
    value: 'title-desc',
  },
];

export const validProductSortOptions = productSortOptions.map((option) => option.value);