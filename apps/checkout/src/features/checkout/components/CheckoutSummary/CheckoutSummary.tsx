"use client";

import { Card, formatCurrency } from "@delosi/ui";
import type { CheckoutSummaryProps } from "./CheckoutSummary.types";

export function CheckoutSummary({
  items,
  count,
  subtotal,
}: CheckoutSummaryProps) {
  return (
    <Card className="sticky top-24 border-2 border-[var(--color-accent-soft)] shadow-[var(--shadow-soft)]">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
        Checkout summary
      </p>
      <div className="mt-6 grid gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between gap-4 border-b border-[var(--color-border)] pb-4 last:border-b-0 last:pb-0"
          >
            <div>
              <p className="line-clamp-2 text-sm font-bold text-[var(--color-heading)]">
                {item.title}
              </p>
              <p className="mt-1 text-xs text-[var(--color-muted)]">
                Qty {item.quantity} · {formatCurrency(item.price)}
              </p>
            </div>

            <p className="text-sm font-black text-[var(--color-heading)]">
              {formatCurrency(item.price * item.quantity)}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-4 border-t border-[var(--color-border)] pt-5">
        <div className="flex items-center justify-between">
          <span className="text-sm text-[var(--color-muted)]">Items</span>
          <span className="font-bold text-[var(--color-heading)]">{count}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-[var(--color-muted)]">Subtotal</span>
          <span className="font-bold text-[var(--color-heading)]">
            {formatCurrency(subtotal)}
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-[var(--color-border)] pt-4">
          <span className="text-base font-black text-[var(--color-heading)]">
            Total
          </span>
          <span className="text-2xl font-black text-[var(--color-heading)]">
            {formatCurrency(subtotal)}
          </span>
        </div>
      </div>
    </Card>
  );
}
