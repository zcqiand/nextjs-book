// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // 'use cache' 在 Next.js 15.x 是实验特性，必须显式打开开关才能使用。
    // experimental.useCache（15.4 起可用）与 experimental.dynamicIO 二选一，本章用前者
    useCache: true,
    // 若想改用 dynamicIO 实验模型，注释上一行、改开下面这行（两者不要同时打开）：
    // dynamicIO: true,
  },
};

export default nextConfig;