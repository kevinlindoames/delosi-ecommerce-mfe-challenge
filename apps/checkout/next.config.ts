import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  assetPrefix: '/checkout-static',

  transpilePackages: [
    '@delosi/ui',
    '@delosi/config',
    '@delosi/cart',
    '@delosi/analytics',
  ],

  images: {
    path: '/checkout-static/_next/image',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/img/**',
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/checkout-static/_next/image',
        destination: '/_next/image',
      },
    ];
  },
};

export default nextConfig;