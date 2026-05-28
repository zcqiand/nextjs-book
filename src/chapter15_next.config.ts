// 从第 15 章提取
// 代码清单: next.config.ts
// 文件名: chapter15_next.config.ts
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // 启用 params 同步访问兼容层
    // 警告：这个选项会在未来版本移除
    // synchronousParams: true,
  },
};

export default nextConfig;
