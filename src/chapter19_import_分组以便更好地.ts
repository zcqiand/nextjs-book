// 从第 19 章提取
// 代码清单: 将 import 分组以便更好地 tree-shake
// 文件名: chapter19_import_分组以便更好地.ts
const nextConfig = {
  modularizeImports: {
    // 将 import 分组以便更好地 tree-shake
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
  },
};
