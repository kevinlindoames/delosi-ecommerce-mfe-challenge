import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  assetPrefix: '/catalog-static',

  transpilePackages: [
    '@delosi/ui',
    '@delosi/config',
    '@delosi/products',
    '@delosi/cart',
    '@delosi/analytics',
  ],

  images: {
    path: '/catalog-static/_next/image',
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
        source: '/catalog-static/_next/image',
        destination: '/_next/image',
      },
    ];
  },
};

export default nextConfig;