import type { CartItem } from '../types/cart.types';

export function getCartCount(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.quantity, 0);
}

export function getCartSubtotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function getCartItemTotal(item: CartItem): number {
  return item.price * item.quantity;
}