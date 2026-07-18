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