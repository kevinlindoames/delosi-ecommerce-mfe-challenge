import { routes } from "@delosi/config";
import { Badge, Card, LinkButton, formatCurrency } from "@delosi/ui";
import Image from "next/image";
import type { ProductDetailProps } from "./ProductDetail.types";
import { AddToCartButton } from "../AddToCartButton";

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
      <Card className="flex min-h-[520px] items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[var(--color-retail-warm)] to-[var(--color-primary-soft)]">
        {" "}
        <div className="relative h-[420px] w-full max-w-xl">
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
      </Card>

      <Card className="flex flex-col">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="accent">{product.category}</Badge>

          {product.rating ? (
            <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-sm font-bold text-[var(--color-accent-foreground)]">
              ★ {product.rating.rate} · {product.rating.count} reviews
            </span>
          ) : null}
        </div>

        <h1 className="mt-6 text-3xl font-black tracking-tight text-[var(--color-heading)] md:text-4xl">
          {product.title}
        </h1>

        <p className="mt-5 text-3xl font-black text-[var(--color-heading)]">
          {formatCurrency(product.price)}
        </p>

        <p className="mt-6 text-base leading-8 text-[var(--color-muted)]">
          {product.description}
        </p>

        <div className="mt-8 rounded-[var(--radius-lg)] border border-emerald-200 bg-[var(--color-success-soft)] p-4 text-sm font-semibold leading-6 text-[var(--color-success-foreground)]">
          Secure checkout experience prepared for this product. Cart integration
          will be connected in the next step.
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          <LinkButton href={routes.products} variant="outline">
            Back to products
          </LinkButton>

          <AddToCartButton product={product} />

          <LinkButton href={routes.cart} variant="outline">
            Go to cart
          </LinkButton>
        </div>
      </Card>
    </section>
  );
}
