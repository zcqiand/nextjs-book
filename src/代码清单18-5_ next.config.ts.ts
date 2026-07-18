// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    // 这些变量会在客户端可用
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
};

export default nextConfig;