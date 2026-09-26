// 在 TaskDetailPage 中，取到 id 之后计算：
const slugs = Object.keys(tasks);
const currentIndex = slugs.indexOf(id);
const prevId = currentIndex > 0 ? slugs[currentIndex - 1] : null;
const nextId = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : null;

// 在 return 的 article 之后添加：
<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #eee' }}>
  {prevId ? (
    <Link href={`/tasks/${prevId}`}>← 上一个任务</Link>
  ) : <span />}
  {nextId ? (
    <Link href={`/tasks/${nextId}`}>下一个任务 →</Link>
  ) : <span />}
</div>