  // Next 的 tsconfig.json 用 jsx: "preserve"（交给 SWC），但 vitest 4 默认用 oxc
  // 解析 .tsx，oxc 会继承 tsconfig 的 preserve，导致 Vite import-analysis 拿到
  // 原始 JSX 报 "invalid JS syntax"。显式声明 automatic 运行时（React 19 的默认），
  // 让 oxc 把 JSX 编译成 react/jsx-runtime 调用。只影响 vitest，不改 tsconfig。
  oxc: {
    jsx: { runtime: "automatic" },
  },