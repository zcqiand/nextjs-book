// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // experimental 前缀表示官方视为实验能力：配置项与默认值可能随小版本调整，生产启用前先看当版文档。
    // staleTimes 控制客户端路由缓存的保底时长。Next 15 起默认语义收紧：
    // 软导航后的动态页面默认不再缓存（dynamic 默认 0），下面的配置把它放宽到 30 秒
    staleTimes: {
      dynamic: 30, // 软导航后动态页面的保底缓存秒数
      static: 180, // 静态页面的保底缓存秒数（把默认的 300 秒调短到 180）
    },
  },
};

export default nextConfig;