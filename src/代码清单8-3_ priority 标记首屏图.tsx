// src/app/page.tsx（首页看板顶部）
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      {/* priority 让这张图跳过懒加载、提前开始下载。
          next/image 默认会懒加载非首屏图片，而首屏里占位最大的那张图往往是
          LCP 指标关注的对象，给它加 priority 通常能直接改善这个指标；
          反过来，首屏之外的图加了 priority 会抢带宽，一般不加 */}
      <Image
        src="/covers/board-banner.png"
        alt="团队看板横幅"
        width={1200}
        height={300}
        priority
        className="mb-8 w-full rounded-lg"
      />
      <h1 className="text-2xl font-bold">团队任务看板</h1>
    </main>
  );
}