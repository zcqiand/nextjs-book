// app/about/page.tsx

// ✅ 正确：导出默认函数组件
export default function AboutPage() {
  return (
    <main>
      <h1>关于我们</h1>
      <p>这是关于页面。</p>
    </main>
  );
}

// ❌ 错误：没有默认导出
export function AboutPage() { ... }

// ❌ 错误：导出了非组件
const pageContent = "Hello";
export default pageContent;