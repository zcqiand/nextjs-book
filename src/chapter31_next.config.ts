// 从第 31 章提取
// 代码清单: next.config.ts
// 文件名: chapter31_next.config.ts
// next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // 你的配置
});
