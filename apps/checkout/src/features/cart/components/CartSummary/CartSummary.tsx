"use client";

import { Button, Card, LinkButton, formatCurrency } from "@delosi/ui";
import type { CartSummaryProps } from "./CartSummary.types";

export function CartSummary({
  count,
  subtotal,
  onClearCart,
}: CartSummaryProps) {
  return (
    <Card className="sticky top-24 border-2 border-[var(--color-accent-soft)] shadow-[var(--shadow-soft)]">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
        Order summary
      </p>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-[var(--color-muted)]">Items</span>
          <span className="font-bold text-[var(--color-heading)]">{count}</span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-[var(--color-muted)]">Subtotal</span>
          <span className="font-bold text-[var(--color-heading)]">
            {formatCurrency(subtotal)}
          </span>
        </div>

        <div className="border-t border-[var(--color-border)] pt-4">
          <div className="flex items-center justify-between gap-4">
            <span className="text-base font-black text-[var(--color-heading)]">
              Total
            </span>
            <span className="text-2xl font-black text-[var(--color-heading)]">
              {formatCurrency(subtotal)}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6 grid gap-3">
        <LinkButton href="/checkout" size="lg">
          Continue to checkout
        </LinkButton>

        <Button type="button" variant="outline" onClick={onClearCart}>
          Clear cart
        </Button>
      </div>
    </Card>
  );
}
