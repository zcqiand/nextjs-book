// 从第 10 章提取
// 代码清单: ❌ 不推荐：每个页面都写导航和页脚
// 文件名: chapter10_AboutPage.tsx
// ❌ 不推荐：每个页面都写导航和页脚
export default function AboutPage() {
  return (
    <>
      <header>全局导航</header>
      <main>关于页面内容</main>
      <footer>全局页脚</footer>
    </>
  );
}
