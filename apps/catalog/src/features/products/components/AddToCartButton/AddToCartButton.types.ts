import type { AddToCartProduct } from '@delosi/cart';
import type { ButtonSize } from '@delosi/ui';

export type AddToCartButtonProps = {
  product: AddToCartProduct;
  size?: ButtonSize;
  fullWidth?: boolean;
};