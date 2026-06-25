import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { CheckoutForm } from './CheckoutForm';

describe('CheckoutForm', () => {
  it('should show an error when submitting empty fields', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(<CheckoutForm onSubmit={onSubmit} />);

    await user.click(screen.getByRole('button', { name: /place order/i }));

    expect(
      screen.getByText(/please complete all fields before placing your order/i),
    ).toBeInTheDocument();

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('should show an error when email is invalid', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(<CheckoutForm onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText(/full name/i), 'Kevin Lindo');
    await user.type(screen.getByLabelText(/email/i), 'invalid-email');
    await user.type(screen.getByLabelText(/delivery address/i), 'Av. Example 123');

    await user.click(screen.getByRole('button', { name: /place order/i }));

    expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('should call onSubmit with valid form values', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(<CheckoutForm onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText(/full name/i), 'Kevin Lindo');
    await user.type(screen.getByLabelText(/email/i), 'kevin@example.com');
    await user.type(screen.getByLabelText(/delivery address/i), 'Av. Example 123');

    await user.click(screen.getByRole('button', { name: /place order/i }));

    expect(onSubmit).toHaveBeenCalledWith({
      fullName: 'Kevin Lindo',
      email: 'kevin@example.com',
      address: 'Av. Example 123',
    });
  });
});