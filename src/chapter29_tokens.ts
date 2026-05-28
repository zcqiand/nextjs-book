// 从第 29 章提取
// 代码清单: src/styles/tokens.ts
// 文件名: chapter29_tokens.ts
// src/styles/tokens.ts
export const tokens = {
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      500: '#6b7280',
      900: '#111827',
    },
  },
  typography: {
    fontFamily: {
      sans: 'Inter, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
    fontSize: {
      xs: { value: '0.75rem', lineHeight: '1rem' },
      sm: { value: '0.875rem', lineHeight: '1.25rem' },
      base: { value: '1rem', lineHeight: '1.5rem' },
    },
  },
} as const;

export type ColorToken = keyof typeof tokens.colors;
export type FontSizeToken = keyof typeof tokens.typography.fontSize;
