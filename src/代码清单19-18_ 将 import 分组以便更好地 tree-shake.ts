const nextConfig = {
  modularizeImports: {
    // 将 import 分组以便更好地 tree-shake
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
  },
};