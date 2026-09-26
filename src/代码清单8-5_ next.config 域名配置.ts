// next.config.ts（项目根目录）
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.example.com',
        // pathname 把放行范围进一步收窄到头像目录，降低整站被当图床滥用的风险
        pathname: '/avatars/**',
      },
    ],
  },
};

export default nextConfig;