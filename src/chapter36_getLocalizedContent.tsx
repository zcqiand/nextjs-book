// 从第 36 章提取
// 代码清单: 基于语言的数据
// 文件名: chapter36_getLocalizedContent.tsx
// 基于语言的数据
export async function getLocalizedContent(locale: string) {
  return fetch(`https://api.example.com/content?locale=${locale}`, {
    // 不同 locale 应该分别缓存
    next: { tags: [`content:${locale}`] },
  });
}
