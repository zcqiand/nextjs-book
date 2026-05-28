// 从第 31 章提取
// 代码清单: 代码示例
// 文件名: chapter31_代码示例.ts
lighthouse https://example.com --output json --output-path ./home.json
lighthouse https://example.com/blog --output json --output-path ./blog.json
lighthouse https://example.com/about --output json --output-path ./about.json

node -e "
const fs = require('fs');
const files = ['home.json', 'blog.json', 'about.json'];
files.forEach(f => {
  const data = JSON.parse(fs.readFileSync(f, 'utf8'));
  console.log(\`\${f}: Performance \${data.categories.performance.score * 100}\`);
});
"
