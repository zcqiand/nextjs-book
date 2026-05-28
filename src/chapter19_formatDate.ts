// 从第 19 章提取
// 代码清单: 使用具名导出而非默认导出
// 文件名: chapter19_formatDate.ts
// 使用具名导出而非默认导出
export function formatDate(date: Date) { /* ... */ }
export function formatCurrency(amount: number) { /* ... */ }

// 在使用时
import { formatDate, formatCurrency } from '@/lib/format';
