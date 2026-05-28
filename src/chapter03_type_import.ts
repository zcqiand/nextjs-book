// 从第 3 章提取
// 代码清单: @type {import(postcss-load-config)
// 文件名: chapter03_type_import.ts
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
