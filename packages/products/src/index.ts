export type {
  Product,
  ProductCategory,
  ProductFilters,
  ProductRating,
  ProductSortOption,
} from './types/product.types';

export {
  productRatingSchema,
  productSchema,
  productsSchema,
} from './schemas/product.schema';

export {
  categoriesSchema,
  categorySchema,
} from './schemas/category.schema';

export {
  getProductById,
  getProductCategoriesFromApi,
  getProductCategoriesWithFallback,
  getProducts,
} from './services/products.service';

export { filterProducts } from './utils/filter-products';
export { getProductCategories } from './utils/get-product-categories';
export { sortProducts } from './utils/sort-products';

export { productsFixture } from './mocks/products.fixture';