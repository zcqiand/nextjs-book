// src/app/actions/product.ts
'use server';

import { db } from '@/lib/db';
import { revalidateTag } from 'next/cache';
import { z } from 'zod';

const ProductSchema = z.object({
  name: z.string().min(1).max(200),
  description: z.string().max(5000),
  price: z.number().positive(),
  categoryId: z.string().uuid(),
  tags: z.array(z.string()).max(10),
  images: z.array(z.object({
    url: z.string().url(),
    alt: z.string().optional(),
  })).min(1).max(10),
});

export async function createProduct(formData: FormData) {
  // 将 FormData 转换为对象
  const rawData = {
    name: formData.get('name'),
    description: formData.get('description'),
    price: parseFloat(formData.get('price') as string),
    categoryId: formData.get('categoryId'),
    tags: JSON.parse(formData.get('tags') as string || '[]'),
    images: JSON.parse(formData.get('images') as string || '[]'),
  };

  const result = ProductSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  const product = await db.product.create({
    data: {
      ...result.data,
      tags: {
        connect: result.data.tags.map(id => ({ id })),
      },
      images: {
        create: result.data.images,
      },
    },
  });

  revalidateTag('products');
  return { success: true, product };
}