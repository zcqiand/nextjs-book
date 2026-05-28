// 从第 12 章提取
// 代码清单: notFound 处理
// 文件名: chapter12_CategoryPage.tsx
// app/(main)/blog/[category]/page.tsx
import { notFound } from 'next/navigation';

const categories = {
  tech: {
    name: '技术',
    description: '关于编程、框架和技术的文章',
  },
  life: {
    name: '生活',
    description: '日常生活、旅行和兴趣',
  },
  thoughts: {
    name: '随想',
    description: '思考、感悟和观点',
  },
};

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryData = categories[category as keyof typeof categories];

  if (!categoryData) {
    notFound();
  }

  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
        {categoryData.name}
      </h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        {categoryData.description}
      </p>

      <div style={{ color: '#999' }}>
        文章列表将在此显示...
      </div>
    </div>
  );
}
