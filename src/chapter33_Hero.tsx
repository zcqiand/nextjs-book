// 从第 33 章提取
// 代码清单: 图片优化组件
// 文件名: chapter33_Hero.tsx
// 标记 LCP 图片优先级
import Image from 'next/image';

export default function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={1200}
      height={600}
      priority // 关键：标记为优先级
    />
  );
}
