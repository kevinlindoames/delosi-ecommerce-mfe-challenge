import type { AddToCartProduct, CartItem } from '../types/cart.types';

export const cartProductFixture: AddToCartProduct = {
  id: 1,
  title: 'Premium Backpack',
  price: 109.95,
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
  category: "men's clothing",
};

export const secondCartProductFixture: AddToCartProduct = {
  id: 2,
  title: 'Slim Fit T-Shirt',
  price: 22.3,
  image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
  category: "men's clothing",
};

export const cartItemsFixture: CartItem[] = [
  {
    ...cartProductFixture,
    quantity: 2,
  },
  {
    ...secondCartProductFixture,
    quantity: 3,
  },
];