'use client';

import { Button } from '@delosi/ui';
import { useState } from 'react';
import type { CheckoutFormProps, CheckoutFormValues } from './CheckoutForm.types';

const initialValues: CheckoutFormValues = {
  fullName: '',
  email: '',
  address: '',
};

export function CheckoutForm({ isSubmitting = false, onSubmit }: CheckoutFormProps) {
  const [values, setValues] = useState<CheckoutFormValues>(initialValues);
  const [error, setError] = useState<string | null>(null);

  function updateField(field: keyof CheckoutFormValues, value: string) {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const hasEmptyFields = Object.values(values).some((value) => value.trim().length === 0);

    if (hasEmptyFields) {
      setError('Please complete all fields before placing your order.');
      return;
    }

    if (!values.email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setError(null);
    onSubmit(values);
  }

  return (
    <form
  noValidate
  onSubmit={handleSubmit}
  className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)]"
>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
        Customer details
      </p>

      <div className="mt-6 grid gap-5">
        <div>
          <label
            htmlFor="fullName"
            className="text-sm font-bold text-[var(--color-heading)]"
          >
            Full name
          </label>

          <input
            id="fullName"
            value={values.fullName}
            onChange={(event) => updateField('fullName', event.target.value)}
            placeholder="Kevin Lindo"
            className="mt-2 h-11 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] px-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-soft)]"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-sm font-bold text-[var(--color-heading)]"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(event) => updateField('email', event.target.value)}
            placeholder="kevin@example.com"
            className="mt-2 h-11 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] px-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-soft)]"
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="text-sm font-bold text-[var(--color-heading)]"
          >
            Delivery address
          </label>

          <textarea
            id="address"
            value={values.address}
            onChange={(event) => updateField('address', event.target.value)}
            placeholder="Av. Example 123, Lima"
            rows={4}
            className="mt-2 w-full resize-none rounded-[var(--radius-md)] border border-[var(--color-border)] px-3 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-soft)]"
          />
        </div>
      </div>

      {error ? (
        <p className="mt-5 rounded-[var(--radius-md)] bg-[var(--color-error-soft)] p-3 text-sm font-semibold text-[var(--color-error-foreground)]">
          {error}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="mt-6 w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Placing order...' : 'Place order'}
      </Button>
    </form>
  );
}