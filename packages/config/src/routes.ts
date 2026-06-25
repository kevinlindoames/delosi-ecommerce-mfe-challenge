export const routes = {
  home: '/',
  products: '/products',
  productDetail: (id: string | number) => `/products/${id}`,
  cart: '/cart',
  checkout: '/checkout',
} as const;

export const mainNavigationItems = [
  {
    label: 'Products',
    href: routes.products,
  },
  {
    label: 'Cart',
    href: routes.cart,
  },
] as const;