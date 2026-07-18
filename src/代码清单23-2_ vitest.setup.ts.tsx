// vitest.setup.ts
import '@testing-library/jest-dom/vitest';
// 一些 Next.js 路由相关 polyfill
import { TextEncoder, TextDecoder } from 'node:util';
if (typeof globalThis.TextEncoder === 'undefined') {
  // @ts-expect-error 测试环境 polyfill
  globalThis.TextEncoder = TextEncoder;
  // @ts-expect-error 测试环境 polyfill
  globalThis.TextDecoder = TextDecoder;
}