// 从第 39 章提取
// 代码清单: useRouter 钩子
// 文件名: chapter39_route.ts
// Next.js 14
import { notFound, redirect } from 'next/navigation';
import { useRouter } from 'next/router';

// Next.js 15
import { notFound, redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
// API 保持不变，但推荐使用新的 push 方法
router.push(url, { scroll: false }); // 新参数
