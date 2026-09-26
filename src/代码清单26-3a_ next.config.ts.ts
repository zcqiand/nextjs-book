import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // 以所用 15.x 小版本的官方 docs/forbidden 页为准，API 为实验态、形态未冻结
    authenticationInterruptor: true,
  },
};

export default nextConfig;