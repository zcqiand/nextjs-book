// 从第 23 章提取
// 代码清单: jest.config.ts
// 文件名: chapter23_jest_config_2.ts
// jest.config.ts
const config: Config = {
  // ... 其他配置
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};
