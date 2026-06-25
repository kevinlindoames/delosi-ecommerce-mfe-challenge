import type { CartItem } from '@delosi/cart';

export type CheckoutSummaryProps = {
  items: CartItem[];
  count: number;
  subtotal: number;
};