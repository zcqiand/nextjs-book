// 迁移前
export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
}

// 迁移后
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
}