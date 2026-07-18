// app/blog/[slug]/page.tsx
// 添加前后导航
const slugs = Object.keys(posts);
const currentIndex = slugs.indexOf(params.slug as string);
const prevSlug = currentIndex > 0 ? slugs[currentIndex - 1] : null;
const nextSlug = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : null;

// 在 return 中添加
<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #eee' }}>
  {prevSlug ? (
    <Link href={`/blog/${prevSlug}`}>← 上一篇</Link>
  ) : <span />}
  {nextSlug ? (
    <Link href={`/blog/${nextSlug}`}>下一篇 →</Link>
  ) : <span />}
</div>