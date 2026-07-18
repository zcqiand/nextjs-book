import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 图片优化配置
  images: {
    domains: ['example.com', 'images.example.org'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  // 实验性功能（Next.js 15+）
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
    // 启用 PPR（Partial Prerendering）
    ppr: true,
  },
  // 重定向配置
  async redirects() {
    return [
      {
        source: '/old-blog/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
    ];
  },
  // 响应头配置
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};

export default nextConfig;