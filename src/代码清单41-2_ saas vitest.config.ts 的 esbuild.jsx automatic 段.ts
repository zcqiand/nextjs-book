  // Next 的 tsconfig.json 用 jsx: "preserve"（交给 SWC），但 vitest 默认用 esbuild
  // 解析 .tsx，esbuild 会继承 tsconfig 的 preserve 导致 vite 拿到原始 JSX 报错。
  // 显式声明 automatic 运行时（React 19 的默认），让 esbuild 把 JSX 编译成
  // react/jsx-runtime 调用。只影响 vitest，不改 tsconfig。
  esbuild: {
    jsx: "automatic",
  },