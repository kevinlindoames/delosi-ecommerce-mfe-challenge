import { describe, expect, it } from 'vitest';
import { productSchema, productsSchema } from '../schemas/product.schema';
import { productsFixture } from '../mocks/products.fixture';

describe('productSchema', () => {
  it('should validate a valid product', () => {
    const result = productSchema.safeParse(productsFixture[0]);

    expect(result.success).toBe(true);
  });

  it('should validate a product without rating', () => {
    const productWithoutRating = {
      id: 10,
      title: 'Product without rating',
      price: 15.99,
      description: 'Valid product without rating.',
      category: 'electronics',
      image: 'https://fakestoreapi.com/img/test.jpg',
    };

    const result = productSchema.safeParse(productWithoutRating);

    expect(result.success).toBe(true);
  });

  it('should reject a product with invalid image url', () => {
    const invalidProduct = {
      ...productsFixture[0],
      image: 'invalid-url',
    };

    const result = productSchema.safeParse(invalidProduct);

    expect(result.success).toBe(false);
  });

  it('should reject a product with invalid price type', () => {
    const invalidProduct = {
      ...productsFixture[0],
      price: '49.90',
    };

    const result = productSchema.safeParse(invalidProduct);

    expect(result.success).toBe(false);
  });
});

describe('productsSchema', () => {
  it('should validate a valid products array', () => {
    const result = productsSchema.safeParse(productsFixture);

    expect(result.success).toBe(true);
  });

  it('should reject an invalid products array', () => {
    const invalidProducts = [
      productsFixture[0],
      {
        id: 'invalid-id',
      },
    ];

    const result = productsSchema.safeParse(invalidProducts);

    expect(result.success).toBe(false);
  });
});