// 从第 18 章提取
// 代码清单: 普通导入会导入整个库
// 文件名: chapter18_普通导入会导入整个库.ts
// 普通导入会导入整个库
import { format, parseISO } from 'date-fns';

// 优化后的导入
import { format, parseISO } from 'date-fns/locale';
