import { apiConfig } from '@delosi/config';
import { categoriesSchema } from '../schemas/category.schema';
import { productSchema, productsSchema } from '../schemas/product.schema';
import type { Product, ProductCategory } from '../types/product.types';
import { getProductCategories } from '../utils/get-product-categories';

type FetchOptions = {
  revalidate?: number;
};

type NextFetchRequestInit = RequestInit & {
  next?: {
    revalidate?: number;
  };
};

async function fetchJson<T>(url: string, options?: FetchOptions): Promise<T> {
  const requestInit: NextFetchRequestInit = {
    next: {
      revalidate: options?.revalidate ?? apiConfig.revalidateSeconds,
    },
  };

  const response = await fetch(url, requestInit);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}: ${url}`);
  }

  return response.json() as Promise<T>;
}

export async function getProducts(): Promise<Product[]> {
  const data = await fetchJson<unknown>(`${apiConfig.fakeStoreBaseUrl}/products`);

  return productsSchema.parse(data);
}

export async function getProductById(id: string | number): Promise<Product> {
  const data = await fetchJson<unknown>(`${apiConfig.fakeStoreBaseUrl}/products/${id}`);

  return productSchema.parse(data);
}

export async function getProductCategoriesFromApi(): Promise<ProductCategory[]> {
  const data = await fetchJson<unknown>(`${apiConfig.fakeStoreBaseUrl}/products/categories`);

  return categoriesSchema.parse(data);
}

export async function getProductCategoriesWithFallback(): Promise<ProductCategory[]> {
  try {
    return await getProductCategoriesFromApi();
  } catch {
    const products = await getProducts();

    return getProductCategories(products);
  }
}