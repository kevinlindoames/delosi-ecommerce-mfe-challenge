import { z } from 'zod';

export const categorySchema = z.string();

export const categoriesSchema = z.array(categorySchema);

export type CategorySchema = z.infer<typeof categorySchema>;