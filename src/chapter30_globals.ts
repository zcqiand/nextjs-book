// 从第 30 章提取
// 代码清单: globals
// 文件名: chapter30_globals.ts
/* globals.css */

/* 对于 RTL 语言，调整内外边距 */
[dir="rtl"] .icon-start {
  margin-right: 0;
  margin-left: 0.5rem;
}

[dir="rtl"] .icon-end {
  margin-left: 0;
  margin-right: 0.5rem;
}

/* 翻转图标 */
[dir="rtl"] .flip-rtl {
  transform: scaleX(-1);
}

/* 调整表单标签对齐 */
[dir="rtl"] label {
  text-align: right;
}
