import { describe, expect, it } from 'vitest';
import {
  getCartCount,
  getCartItemTotal,
  getCartSubtotal,
} from '../utils/cart-calculations';
import { cartItemsFixture } from './cart.fixture';

describe('cart calculations', () => {
  it('should calculate cart count from item quantities', () => {
    const result = getCartCount(cartItemsFixture);

    expect(result).toBe(5);
  });

  it('should calculate cart subtotal', () => {
    const result = getCartSubtotal(cartItemsFixture);

    expect(result).toBeCloseTo(286.8);
  });

  it('should calculate item total', () => {
    const result = getCartItemTotal(cartItemsFixture[0]);

    expect(result).toBeCloseTo(219.9);
  });

  it('should return zero for empty cart count', () => {
    expect(getCartCount([])).toBe(0);
  });

  it('should return zero for empty cart subtotal', () => {
    expect(getCartSubtotal([])).toBe(0);
  });
});