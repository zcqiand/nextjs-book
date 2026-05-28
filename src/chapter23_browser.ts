// 从第 23 章提取
// 代码清单: src/mocks/browser.ts
// 文件名: chapter23_browser.ts
// src/mocks/browser.ts
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
