// 使用 next/image 自动优化 LCP
import Image from 'next/image';

export default function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={1200}
      height={600}
      priority // 标记为优先级资源
      sizes="100vw"
    />
  );
}