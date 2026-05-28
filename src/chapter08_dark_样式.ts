// 从第 8 章提取
// 代码清单: .dark 样式
// 文件名: chapter08_dark_样式.ts
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --bg-primary: #ffffff;
    --bg-secondary: #f9fafb;
    --text-primary: #111827;
    --text-secondary: #6b7280;
    --border-color: #e5e7eb;
  }

  .dark {
    --bg-primary: #111827;
    --bg-secondary: #1f2937;
    --text-primary: #f9fafb;
    --text-secondary: #9ca3af;
    --border-color: #374151;
  }

  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    transition: background-color 0.3s, color 0.3s;
  }
}
