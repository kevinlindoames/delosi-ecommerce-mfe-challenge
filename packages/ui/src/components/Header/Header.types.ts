export type HeaderNavigationItem = {
  readonly label: string;
  readonly href: string;
};

export type HeaderProps = {
  brandName: string;
  navigationItems: readonly HeaderNavigationItem[];
  cartHref: string;
  cartCount?: number;
};