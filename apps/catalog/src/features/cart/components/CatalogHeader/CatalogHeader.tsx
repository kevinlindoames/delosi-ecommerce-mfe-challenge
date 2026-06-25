'use client';

import { useCartStore, getCartCount } from '@delosi/cart';
import { mainNavigationItems, routes, siteConfig } from '@delosi/config';
import { Header } from '@delosi/ui';

export function CatalogHeader() {
  const items = useCartStore((state) => state.items);
  const cartCount = getCartCount(items);

  return (
    <Header
      brandName={siteConfig.name}
      navigationItems={mainNavigationItems}
      cartHref={routes.cart}
      cartCount={cartCount}
    />
  );
}