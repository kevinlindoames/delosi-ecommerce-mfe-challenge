'use client';

import { useCartStore } from '@delosi/cart';
import { Button, cn } from '@delosi/ui';
import { useState } from 'react';
import type { AddToCartButtonProps } from './AddToCartButton.types';

export function AddToCartButton({
  product,
  size = 'md',
  fullWidth = false,
}: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [wasAdded, setWasAdded] = useState(false);

  function handleAddToCart() {
    addItem(product);
    setWasAdded(true);

    window.setTimeout(() => {
      setWasAdded(false);
    }, 1200);
  }

  return (
    <Button
      type="button"
      size={size}
      onClick={handleAddToCart}
      className={cn(fullWidth ? 'w-full' : undefined)}
    >
      {wasAdded ? 'Added' : 'Add to cart'}
    </Button>
  );
}