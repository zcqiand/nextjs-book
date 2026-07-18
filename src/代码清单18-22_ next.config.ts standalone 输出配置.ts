// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  // standalone 模式下会自动追踪 import,但需要外部加载的库要显式列出来
  outputFileTracingIncludes: {
    '/**': ['./node_modules/@my-org/shared/**/*'],
  },
};

export default nextConfig;