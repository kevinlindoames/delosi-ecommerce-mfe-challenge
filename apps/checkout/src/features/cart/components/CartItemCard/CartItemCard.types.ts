import type { CartItem } from '@delosi/cart';

export type CartItemCardProps = {
  item: CartItem;
  onRemove: (productId: number) => void;
  onQuantityChange: (productId: number, quantity: number) => void;
};