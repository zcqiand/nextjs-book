// 从第 23 章提取
// 代码清单: src/lib/format.ts
// 文件名: chapter23_format.ts
// src/lib/format.ts
export function formatDate(date: Date, locale = 'zh-CN'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
