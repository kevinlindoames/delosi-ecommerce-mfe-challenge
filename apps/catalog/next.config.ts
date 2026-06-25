import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: "/catalog-static",

  transpilePackages: [
    "@delosi/ui",
    "@delosi/config",
    "@delosi/products",
    "@delosi/cart",
    "@delosi/analytics",
  ],

  images: {
    path: "/catalog-static/_next/image",
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 414, 640, 768, 1024, 1280],
    imageSizes: [64, 96, 128, 160, 192, 220, 256, 320],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/img/**",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/catalog-static/_next/image",
        destination: "/_next/image",
      },
    ];
  },
};

export default nextConfig;
