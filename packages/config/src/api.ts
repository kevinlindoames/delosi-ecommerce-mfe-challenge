export const apiConfig = {
  fakeStoreBaseUrl:
    process.env.FAKESTORE_API_URL ?? 'https://fakestoreapi.com',
  revalidateSeconds: 60 * 10,
} as const;