// 从第 34 章提取
// 代码清单: mdx-components.tsx
// 文件名: chapter34_useMDXComponents.ts
// mdx-components.tsx
import { Callout } from '@/components/callout';

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    Callout,
  };
}
