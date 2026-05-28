// 从第 2 章提取
// 代码清单: 图片优化组件
// 文件名: chapter02_HomePage.tsx
// app/page.tsx
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="mb-4 text-4xl font-medium">
          欢迎学习 Next.js！  {/* 修改这里 */}
        </h1>
        {/* 其余代码... */}
      </div>
    </main>
  );
}
