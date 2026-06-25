import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CheckoutSummary } from './CheckoutSummary';
import type { CartItem } from '@delosi/cart';

const items: CartItem[] = [
  {
    id: 1,
    title: 'Premium Backpack',
    price: 109.95,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    category: "men's clothing",
    quantity: 2,
  },
  {
    id: 2,
    title: 'Slim Fit T-Shirt',
    price: 22.3,
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
    category: "men's clothing",
    quantity: 1,
  },
];

describe('CheckoutSummary', () => {
  it('should render checkout items and total', () => {
    render(<CheckoutSummary items={items} count={3} subtotal={242.2} />);

    expect(screen.getByText('Checkout summary')).toBeInTheDocument();
    expect(screen.getByText('Premium Backpack')).toBeInTheDocument();
    expect(screen.getByText('Slim Fit T-Shirt')).toBeInTheDocument();
    expect(screen.getByText('Qty 2 · $109.95')).toBeInTheDocument();
    expect(screen.getByText('Qty 1 · $22.30')).toBeInTheDocument();
    expect(screen.getAllByText('$242.20')).toHaveLength(2);
  });
});