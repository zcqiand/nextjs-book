// 从第 26 章提取
// 代码清单: SQL 查询
// 文件名: chapter26_SQL_查询.ts
import sanitizeHtml from 'sanitize-html';

const sanitized = sanitizeHtml(userContent, {
  allowedTags: ['b', 'i', 'em', 'strong', 'p', 'br'],
  allowedAttributes: {
    'a': ['href', 'title'],
  },
});
