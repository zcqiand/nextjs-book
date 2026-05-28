// 从第 8 章提取
// 代码清单: @tailwind base;
// 文件名: chapter08_tailwind_base_2.ts
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-primary: #0070f3;
  }

  body {
    @apply bg-gray-50 text-gray-900 antialiased;
  }
}
