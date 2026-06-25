'use client';

import { create } from 'zustand';
import { createJSONStorage, persist, type StateStorage } from 'zustand/middleware';
import type { AddToCartProduct, CartState } from '../types/cart.types';

const noopStorage: StateStorage = {
  getItem: () => null,
  setItem: () => undefined,
  removeItem: () => undefined,
};

const cartStorage = createJSONStorage<CartState>(() => {
  if (typeof window === 'undefined') {
    return noopStorage;
  }

  return window.localStorage;
});

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],

      addItem: (product: AddToCartProduct) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
                    }
                  : item,
              ),
            };
          }

          return {
            items: [
              ...state.items,
              {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                category: product.category,
                quantity: 1,
              },
            ],
          };
        });
      },

      removeItem: (productId: number) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }));
      },

      updateQuantity: (productId: number, quantity: number) => {
        if (quantity <= 0) {
          set((state) => ({
            items: state.items.filter((item) => item.id !== productId),
          }));

          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId
              ? {
                  ...item,
                  quantity,
                }
              : item,
          ),
        }));
      },

      clearCart: () => {
        set({
          items: [],
        });
      },
    }),
    {
      name: 'delosi-cart',
      storage: cartStorage,
      partialize: (state) => ({
        items: state.items,
        addItem: state.addItem,
        removeItem: state.removeItem,
        updateQuantity: state.updateQuantity,
        clearCart: state.clearCart,
      }),
    },
  ),
);