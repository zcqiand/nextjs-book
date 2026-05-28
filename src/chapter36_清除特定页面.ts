// 从第 36 章提取
// 代码清单: 清除特定页面
// 文件名: chapter36_清除特定页面.ts
import { revalidatePath } from 'next/cache';

// 清除特定页面
revalidatePath('/blog');

// 清除动态路由
revalidatePath('/blog/my-post');

// 清除整组路由
revalidatePath('/blog/[category]', 'page');

// 清除所有页面
revalidatePath('/', 'layout');
