import type { Product } from '@delosi/products';

export type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
};

export type AddToCartProduct = Pick<
  Product,
  'id' | 'title' | 'price' | 'image' | 'category'
>;

export type CartState = {
  items: CartItem[];

  addItem: (product: AddToCartProduct) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
};