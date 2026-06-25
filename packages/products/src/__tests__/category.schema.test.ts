import { describe, expect, it } from 'vitest';
import { categoriesSchema, categorySchema } from '../schemas/category.schema';

describe('categorySchema', () => {
  it('should validate a valid category', () => {
    const result = categorySchema.safeParse('electronics');

    expect(result.success).toBe(true);
  });

  it('should reject a non-string category', () => {
    const result = categorySchema.safeParse(123);

    expect(result.success).toBe(false);
  });
});

describe('categoriesSchema', () => {
  it('should validate a valid categories array', () => {
    const result = categoriesSchema.safeParse([
      'electronics',
      'jewelery',
      "men's clothing",
      "women's clothing",
    ]);

    expect(result.success).toBe(true);
  });

  it('should reject an array with invalid category values', () => {
    const result = categoriesSchema.safeParse(['electronics', 123]);

    expect(result.success).toBe(false);
  });
});