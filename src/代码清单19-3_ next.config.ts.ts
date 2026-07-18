// next.config.ts
import withBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzerFn = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzerFn({
  // 你的 Next.js 配置
});