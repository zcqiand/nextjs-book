// 从第 15 章提取
// 代码清单: generateMetadata 函数
// 文件名: chapter15_BlogPostPage.tsx
// ========== 迁移前 (Next.js 14) ==========
import { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  return { title: post.title };
}

export default function BlogPostPage({ params }: PageProps) {
  const { slug } = params;
  const post = getPostSync(slug); // 注意：这个在 Next.js 15 中会报错

  return <h1>{post.title}</h1>;
}

// ========== 迁移后 (Next.js 15) ==========
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return { title: post.title };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return <h1>{post.title}</h1>;
}
