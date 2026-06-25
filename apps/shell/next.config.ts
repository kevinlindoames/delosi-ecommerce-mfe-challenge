import type { NextConfig } from "next";

const catalogDomain = process.env.CATALOG_DOMAIN ?? "http://localhost:3001";
const checkoutDomain = process.env.CHECKOUT_DOMAIN ?? "http://localhost:3002";

const nextConfig: NextConfig = {
  transpilePackages: ["@delosi/ui", "@delosi/config", "@delosi/analytics"],

  async rewrites() {
    return [
      {
        source: "/products",
        destination: `${catalogDomain}/products`,
      },
      {
        source: "/products/:path*",
        destination: `${catalogDomain}/products/:path*`,
      },
      {
        source: "/catalog-static/:path*",
        destination: `${catalogDomain}/catalog-static/:path*`,
      },
      {
        source: "/checkout-static/_next/image",
        destination: `${checkoutDomain}/checkout-static/_next/image`,
      },
      {
        source: "/cart",
        destination: `${checkoutDomain}/cart`,
      },
      {
        source: "/checkout",
        destination: `${checkoutDomain}/checkout`,
      },
      {
        source: "/checkout-static/:path*",
        destination: `${checkoutDomain}/checkout-static/:path*`,
      },
      {
        source: "/catalog-static/_next/image",
        destination: `${catalogDomain}/catalog-static/_next/image`,
      },
    ];
  },
};

export default nextConfig;
