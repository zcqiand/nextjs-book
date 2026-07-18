// app/products/[category]/[product]/page.tsx
export async function generateMetadata(
  { params }: { params: Promise<{ category: string; product: string }> }
): Promise<Metadata> {
  const { category, product } = await params;
  const productInfo = await getProductInfo(category, product);

  return {
    title: productInfo.name,
    description: productInfo.description,
    alternates: {
      canonical: `/products/${category}/${product}`,
    },
    openGraph: {
      images: [productInfo.image],
    },
  };
}