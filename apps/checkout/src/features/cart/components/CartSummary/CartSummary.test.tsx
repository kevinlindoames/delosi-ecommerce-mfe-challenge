import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { CartSummary } from './CartSummary';

describe('CartSummary', () => {
  it('should render items count and subtotal', () => {
    render(<CartSummary count={3} subtotal={152.25} onClearCart={vi.fn()} />);

    expect(screen.getByText('Order summary')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getAllByText('$152.25')).toHaveLength(2);
  });

  it('should call onClearCart when clear cart button is clicked', async () => {
    const user = userEvent.setup();
    const onClearCart = vi.fn();

    render(<CartSummary count={3} subtotal={152.25} onClearCart={onClearCart} />);

    await user.click(screen.getByRole('button', { name: /clear cart/i }));

    expect(onClearCart).toHaveBeenCalledTimes(1);
  });
});