import { describe, expect, it } from 'vitest';
import { productsFixture } from '../mocks/products.fixture';
import { filterProducts } from '../utils/filter-products';

describe('filterProducts', () => {
  it('should filter products by title search', () => {
    const result = filterProducts(productsFixture, {
      search: 'backpack',
    });

    expect(result).toHaveLength(1);
    expect(result[0]?.title).toBe('Premium Backpack');
  });

  it('should filter products by description search', () => {
    const result = filterProducts(productsFixture, {
      search: 'cotton',
    });

    expect(result).toHaveLength(1);
    expect(result[0]?.title).toBe('Slim Fit T-Shirt');
  });

  it('should filter products by category search', () => {
    const result = filterProducts(productsFixture, {
      search: 'jewelery',
    });

    expect(result).toHaveLength(1);
    expect(result[0]?.title).toBe('Gold Bracelet');
  });

  it('should filter products by exact category', () => {
    const result = filterProducts(productsFixture, {
      category: "men's clothing",
    });

    expect(result).toHaveLength(2);
    expect(result.every((product) => product.category === "men's clothing")).toBe(true);
  });

  it('should combine search and category filters', () => {
    const result = filterProducts(productsFixture, {
      search: 'shirt',
      category: "men's clothing",
    });

    expect(result).toHaveLength(1);
    expect(result[0]?.title).toBe('Slim Fit T-Shirt');
  });

  it('should return all products when filters are empty', () => {
    const result = filterProducts(productsFixture, {});

    expect(result).toHaveLength(productsFixture.length);
  });
});