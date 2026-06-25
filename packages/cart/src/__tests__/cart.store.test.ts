import { beforeEach, describe, expect, it } from 'vitest';
import { useCartStore } from '../store/cart.store';
import {
  cartProductFixture,
  secondCartProductFixture,
} from './cart.fixture';

describe('useCartStore', () => {
  beforeEach(() => {
    useCartStore.setState({
      items: [],
    });
  });

  it('should add a new product to the cart', () => {
    useCartStore.getState().addItem(cartProductFixture);

    expect(useCartStore.getState().items).toEqual([
      {
        ...cartProductFixture,
        quantity: 1,
      },
    ]);
  });

  it('should increment quantity when adding an existing product', () => {
    useCartStore.getState().addItem(cartProductFixture);
    useCartStore.getState().addItem(cartProductFixture);

    expect(useCartStore.getState().items).toEqual([
      {
        ...cartProductFixture,
        quantity: 2,
      },
    ]);
  });

  it('should remove an item from the cart', () => {
    useCartStore.getState().addItem(cartProductFixture);
    useCartStore.getState().addItem(secondCartProductFixture);

    useCartStore.getState().removeItem(cartProductFixture.id);

    expect(useCartStore.getState().items).toEqual([
      {
        ...secondCartProductFixture,
        quantity: 1,
      },
    ]);
  });

  it('should update item quantity', () => {
    useCartStore.getState().addItem(cartProductFixture);

    useCartStore.getState().updateQuantity(cartProductFixture.id, 5);

    expect(useCartStore.getState().items[0]?.quantity).toBe(5);
  });

  it('should remove item when quantity is zero', () => {
    useCartStore.getState().addItem(cartProductFixture);

    useCartStore.getState().updateQuantity(cartProductFixture.id, 0);

    expect(useCartStore.getState().items).toEqual([]);
  });

  it('should remove item when quantity is negative', () => {
    useCartStore.getState().addItem(cartProductFixture);

    useCartStore.getState().updateQuantity(cartProductFixture.id, -1);

    expect(useCartStore.getState().items).toEqual([]);
  });

  it('should clear all cart items', () => {
    useCartStore.getState().addItem(cartProductFixture);
    useCartStore.getState().addItem(secondCartProductFixture);

    useCartStore.getState().clearCart();

    expect(useCartStore.getState().items).toEqual([]);
  });
});