'use client';

import {
  getCartCount,
  getCartSubtotal,
  useCartStore,
} from '@delosi/cart';
import { routes } from '@delosi/config';
import { Container, EmptyState, LinkButton, PageHeader } from '@delosi/ui';
import { CartItemCard } from '../CartItemCard';
import { CartSummary } from '../CartSummary';

export function CartPageClient() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const cartCount = getCartCount(items);
  const subtotal = getCartSubtotal(items);

  return (
    <Container>
      <PageHeader
        badge="Checkout Zone"
        badgeVariant="success"
        title="Shopping cart"
        description="Review the products added from the catalog before continuing to checkout."
        actions={
          <LinkButton href={routes.products} variant="outline">
            Continue shopping
          </LinkButton>
        }
      />

      {items.length > 0 ? (
        <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-5">
            {items.map((item) => (
              <CartItemCard
                key={item.id}
                item={item}
                onRemove={removeItem}
                onQuantityChange={updateQuantity}
              />
            ))}
          </div>

          <CartSummary
            count={cartCount}
            subtotal={subtotal}
            onClearCart={clearCart}
          />
        </section>
      ) : (
        <div className="mt-8">
          <EmptyState
            title="Your cart is empty"
            description="Browse the catalog and add products to see them here."
            actionLabel="Browse products"
            actionHref={routes.products}
          />
        </div>
      )}
    </Container>
  );
}