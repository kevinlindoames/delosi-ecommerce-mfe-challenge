import { routes } from "@delosi/config";
import { Badge, Card, LinkButton, formatCurrency } from "@delosi/ui";
import Image from "next/image";
import { AddToCartButton } from "../AddToCartButton";
import type { ProductCardProps } from "./ProductCard.types";

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <Card
      variant="interactive"
      className="group flex h-full flex-col overflow-hidden p-0"
    >
      <div className="relative flex h-64 items-center justify-center bg-gradient-to-br from-white via-[var(--color-retail-warm)] to-[var(--color-primary-soft)] p-8">
        <Image
          src={product.image}
          alt={product.title}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 286px, (min-width: 1024px) 25vw, (min-width: 768px) 45vw, 90vw"
          className="object-contain p-8 transition duration-300 group-hover:scale-105"
        />

        {product.rating ? (
          <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-[var(--color-accent-foreground)] shadow-sm">
            ★ {product.rating.rate}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <Badge variant="accent">{product.category}</Badge>

        <h2 className="mt-4 line-clamp-2 text-lg font-black leading-7 text-[var(--color-heading)]">
          {product.title}
        </h2>

        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-[var(--color-muted)]">
          {product.description}
        </p>

        <div className="mt-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Price
            </p>
            <p className="mt-1 text-2xl font-black text-[var(--color-heading)]">
              {formatCurrency(product.price)}
            </p>
          </div>

          <div className="flex gap-2">
            <AddToCartButton product={product} size="sm" />

            <LinkButton
              href={routes.productDetail(product.id)}
              size="sm"
              variant="outline"
            >
              View
            </LinkButton>
          </div>
        </div>
      </div>
    </Card>
  );
}
