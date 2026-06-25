'use client';

import { getCartCount, getCartSubtotal, useCartStore } from '@delosi/cart';
import { routes } from '@delosi/config';
import { Container, EmptyState, LinkButton, PageHeader } from '@delosi/ui';
import { useState } from 'react';
import { CheckoutForm } from '../CheckoutForm';
import type { CheckoutFormValues } from '../CheckoutForm';
import { CheckoutSummary } from '../CheckoutSummary';

export function CheckoutPageClient() {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderCode, setOrderCode] = useState<string | null>(null);

  const cartCount = getCartCount(items);
  const subtotal = getCartSubtotal(items);

  function handlePlaceOrder(values: CheckoutFormValues) {
    setIsSubmitting(true);

    window.setTimeout(() => {
      const generatedOrderCode = `DLO-${Date.now().toString().slice(-6)}`;

      console.log('Simulated checkout order', {
        orderCode: generatedOrderCode,
        customer: values,
        items,
        subtotal,
      });

      clearCart();
      setOrderCode(generatedOrderCode);
      setIsSubmitting(false);
    }, 800);
  }

  if (orderCode) {
    return (
      <Container>
        <EmptyState
          title="Order confirmed"
          description={`Your simulated order ${orderCode} was created successfully. This checkout does not process real payments.`}
          actionLabel="Back to products"
          actionHref={routes.products}
        />
      </Container>
    );
  }

  if (items.length === 0) {
    return (
      <Container>
        <EmptyState
          title="Your cart is empty"
          description="Add products to your cart before continuing to checkout."
          actionLabel="Browse products"
          actionHref={routes.products}
        />
      </Container>
    );
  }

  return (
    <Container>
      <PageHeader
        badge="Checkout Zone"
        badgeVariant="success"
        title="Checkout"
        description="Complete a simulated checkout flow. No real payment will be processed."
        actions={
          <LinkButton href={routes.cart} variant="outline">
            Back to cart
          </LinkButton>
        }
      />

      <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
        <CheckoutForm isSubmitting={isSubmitting} onSubmit={handlePlaceOrder} />

        <CheckoutSummary items={items} count={cartCount} subtotal={subtotal} />
      </section>
    </Container>
  );
}