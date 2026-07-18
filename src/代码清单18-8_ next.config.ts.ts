// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 启用输出压缩
  compress: true,

  // 生产环境不生成 source maps（减小包体积）
  productionBrowserSourceMaps: false,

  // 图片优化配置
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  // 实验性功能
  experimental: {
    // 优化包导入，只导入实际使用的部分
    optimizePackageImports: ['date-fns', 'lodash', 'clsx'],
  },
};

export default nextConfig;