// 从第 23 章提取
// 代码清单: src/mocks/server.ts
// 文件名: chapter23_server.ts
// src/mocks/server.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);
