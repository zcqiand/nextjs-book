// 从第 15 章提取
// 代码清单: 确保你的类型定义是完整的
// 文件名: chapter15_确保你的类型定义是完整的.ts
// 确保你的类型定义是完整的
interface PageProps {
  params: Promise<{ slug: string }>;
}

// 而不是使用较宽松的类型
// interface PageProps {
//   params: any; // 这在 Next.js 15 中会报错
// }
