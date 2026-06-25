import { describe, expect, it } from 'vitest';
import { productsFixture } from '../mocks/products.fixture';
import { getProductCategories } from '../utils/get-product-categories';

describe('getProductCategories', () => {
  it('should return unique categories sorted alphabetically', () => {
    const categories = getProductCategories(productsFixture);

    expect(categories).toEqual(["jewelery", "men's clothing"]);
  });

  it('should return an empty array when products are empty', () => {
    const categories = getProductCategories([]);

    expect(categories).toEqual([]);
  });
});