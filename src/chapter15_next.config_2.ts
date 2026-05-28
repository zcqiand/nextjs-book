// 从第 15 章提取
// 代码清单: next.config.ts
// 文件名: chapter15_next.config_2.ts
// next.config.ts
const nextConfig: NextConfig = {
  // Turbopack 不支持某些 webpack 特定的配置
  // 如果你使用了这些配置，可能需要迁移或移除
  // webpack: (config) => { ... }

  // 建议使用标准的 Next.js 配置选项
  // 而不是依赖 webpack 的低级 API
};

export default nextConfig;
