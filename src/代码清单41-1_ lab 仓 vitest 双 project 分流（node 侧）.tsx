export default defineConfig({
  test: {
    projects: [
      {
        resolve: { alias: resolveAlias },
        // node 环境的纯逻辑测试也可能 import .tsx 组件源文件（如
        // concretePermeability.test.ts → ConcretePermeabilityCard.tsx 取纯函数），
        // 同样需要 oxc JSX 转译（与 jsdom project 同款，见下）。
        // 必须放 project 级（test 外层）——vitest 4 每个 project 自建 vite server。
        oxc: { jsx: { runtime: "automatic" } },
        test: {
          name: "node",
          environment: "node",
          include: ["tests/**/*.test.{ts,tsx}"],
          exclude: [...sharedExclude, "tests/**/*.dom.test.{ts,tsx}", ...pgExclude],
          setupFiles: ["tests/setup.ts"],
          env: { DB_PATH: ":memory:" },
          testTimeout: 10000,