import type { Product } from '../types/product.types';

export const productsFixture: Product[] = [
  {
    id: 1,
    title: 'Premium Backpack',
    price: 49.9,
    description: 'A durable backpack for daily use.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 4.4,
      count: 120,
    },
  },
  {
    id: 2,
    title: 'Slim Fit T-Shirt',
    price: 22.5,
    description: 'Soft cotton t-shirt with modern fit.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    rating: {
      rate: 4.1,
      count: 80,
    },
  },
  {
    id: 3,
    title: 'Gold Bracelet',
    price: 99.99,
    description: 'Minimal bracelet with polished finish.',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    rating: {
      rate: 4.8,
      count: 55,
    },
  },
];