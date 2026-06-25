import { describe, expect, it } from 'vitest';
import { productsFixture } from '../mocks/products.fixture';
import { sortProducts } from '../utils/sort-products';

describe('sortProducts', () => {
  it('should sort products by price ascending', () => {
    const result = sortProducts(productsFixture, 'price-asc');

    expect(result.map((product) => product.price)).toEqual([22.5, 49.9, 99.99]);
  });

  it('should sort products by price descending', () => {
    const result = sortProducts(productsFixture, 'price-desc');

    expect(result.map((product) => product.price)).toEqual([99.99, 49.9, 22.5]);
  });

  it('should sort products by title ascending', () => {
    const result = sortProducts(productsFixture, 'title-asc');

    expect(result.map((product) => product.title)).toEqual([
      'Gold Bracelet',
      'Premium Backpack',
      'Slim Fit T-Shirt',
    ]);
  });

  it('should sort products by title descending', () => {
    const result = sortProducts(productsFixture, 'title-desc');

    expect(result.map((product) => product.title)).toEqual([
      'Slim Fit T-Shirt',
      'Premium Backpack',
      'Gold Bracelet',
    ]);
  });

  it('should not mutate the original products array', () => {
    const originalOrder = productsFixture.map((product) => product.id);

    sortProducts(productsFixture, 'price-desc');

    expect(productsFixture.map((product) => product.id)).toEqual(originalOrder);
  });

  it('should return a copied array when sort option is not provided', () => {
    const result = sortProducts(productsFixture);

    expect(result).toEqual(productsFixture);
    expect(result).not.toBe(productsFixture);
  });
});