'use client';

import { getCartItemTotal } from '@delosi/cart';
import { routes } from '@delosi/config';
import { Button, Card, LinkButton, formatCurrency } from '@delosi/ui';
import Image from 'next/image';
import type { CartItemCardProps } from './CartItemCard.types';

export function CartItemCard({
  item,
  onRemove,
  onQuantityChange,
}: CartItemCardProps) {
  return (
    <Card className="grid gap-5 md:grid-cols-[120px_1fr_auto]">
      <div className="relative h-32 rounded-[var(--radius-lg)] bg-[var(--color-surface-muted)]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="120px"
          className="object-contain p-4"
        />
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
          {item.category}
        </p>

        <h2 className="mt-2 text-lg font-black text-[var(--color-heading)]">
          {item.title}
        </h2>

        <p className="mt-3 text-sm text-[var(--color-muted)]">
          Unit price: {formatCurrency(item.price)}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <label
            htmlFor={`quantity-${item.id}`}
            className="text-sm font-bold text-[var(--color-heading)]"
          >
            Quantity
          </label>

          <input
            id={`quantity-${item.id}`}
            min={1}
            type="number"
            value={item.quantity}
            onChange={(event) => {
              onQuantityChange(item.id, Number(event.target.value));
            }}
            className="h-10 w-24 rounded-[var(--radius-md)] border border-[var(--color-border)] px-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-soft)]"
          />

          <Button
            type="button"
            variant="danger"
            size="sm"
            onClick={() => onRemove(item.id)}
          >
            Remove
          </Button>

          <LinkButton
            href={routes.productDetail(item.id)}
            variant="outline"
            size="sm"
          >
            View product
          </LinkButton>
        </div>
      </div>

      <div className="text-left md:text-right">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
          Total
        </p>

        <p className="mt-2 text-2xl font-black text-[var(--color-heading)]">
          {formatCurrency(getCartItemTotal(item))}
        </p>
      </div>
    </Card>
  );
}