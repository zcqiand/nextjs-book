// 使用具名导出而非默认导出
export function formatDate(date: Date) { /* ... */ }
export function formatCurrency(amount: number) { /* ... */ }

// 在使用时
import { formatDate, formatCurrency } from '@/lib/format';