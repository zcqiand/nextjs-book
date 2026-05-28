// 从第 25 章提取
// 代码清单: next.config.ts
// 文件名: chapter25_next.config.ts
// next.config.ts
const nextConfig = {
  images: {
    // 添加域名到白名单
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com',
      },
    ],
    // 图片格式
    formats: ['image/avif', 'image/webp'],
    // 图片尺寸
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
