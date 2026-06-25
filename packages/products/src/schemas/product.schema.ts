import { z } from 'zod';

export const productRatingSchema = z.object({
  rate: z.number(),
  count: z.number(),
});

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  image: z.string().url(),
  rating: productRatingSchema.optional(),
});

export const productsSchema = z.array(productSchema);

export type ProductSchema = z.infer<typeof productSchema>;