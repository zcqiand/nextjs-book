// 基于语言的数据
export async function getLocalizedContent(locale: string) {
  return fetch(`https://api.example.com/content?locale=${locale}`, {
    // 不同 locale 应该分别缓存
    next: { tags: [`content:${locale}`] },
  });
}