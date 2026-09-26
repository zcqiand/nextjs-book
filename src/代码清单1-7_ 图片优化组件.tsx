import Image from 'next/image';

export default function AuthorCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-48 h-48">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-full"
        // Next.js 自动执行以下优化：
        // 1. 根据浏览器支持情况转换为 WebP 或 AVIF
        // 2. 根据 viewport 自动设置 srcset
        // 3. 懒加载（只在进入视口时加载）
        // 4. 防止布局偏移（CLS）
      />
    </div>
  );
}