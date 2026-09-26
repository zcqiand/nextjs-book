export default defineConfig({
  lab: {
    input: {
      target: "../lab-management-system-shared/generated/openapi/openapi.yaml",
      filters: {
        mode: "exclude",
        tags: ["frontend-bind-meta"],
      },
    },
    output: {
      mode: "tags-split",
      target: "./src/api/endpoints",
      schemas: "./src/api/endpoints/model",
      // clean：生成前清空目标目录（2026-09-17 SSOT 清理）——tags-split 不会删除
      // 已从契约移除的 tag 旧目录/旧模型，残留死 hooks 固化进仓库。整个 endpoints/
      // 目录 must stay orval-owned：手写文件一律放 src/api/ 下，不得混入。
      clean: ["./src/api/endpoints"],
      client: "axios-functions",
      override: {
        useDates: false,
        mutator: {
          path: "./src/api/mutator/custom-fetch.ts",
          name: "customFetch",
        },
      },
    },
  },
});