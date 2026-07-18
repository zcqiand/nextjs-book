'use client';

import { notFound } from 'next/navigation';

export default function ProductPage({ params }) {
  const product = getProduct(params.id);

  if (!product) {
    notFound(); // 触发 not-found.tsx
  }

  return (
    <main>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </main>
  );
}