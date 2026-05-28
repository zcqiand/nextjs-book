// 从第 25 章提取
// 代码清单: 图片优化组件
// 文件名: chapter25_ProductImage.tsx
import Image from 'next/image';

export default function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <Image
      src={src}
      alt={alt || '产品图片'} // 必须提供 alt 文本
      width={800}
      height={600}
    />
  );
}
