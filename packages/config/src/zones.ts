export const zoneConfig = {
  shell: {
    name: 'shell',
    localUrl: 'http://localhost:3000',
  },
  catalog: {
    name: 'catalog',
    localUrl: 'http://localhost:3001',
    assetPrefix: '/catalog-static',
  },
  checkout: {
    name: 'checkout',
    localUrl: 'http://localhost:3002',
    assetPrefix: '/checkout-static',
  },
} as const;