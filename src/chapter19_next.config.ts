// 从第 19 章提取
// 代码清单: next.config.ts
// 文件名: chapter19_next.config.ts
// next.config.ts
import withBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzerFn = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzerFn({
  // 你的 Next.js 配置
});
