// 从第 22 章提取
// 代码清单: types/global.d.ts
// 文件名: chapter22_types_global.ts
// types/global.d.ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      DATABASE_URL: string;
      AUTH_SECRET: string;
      NEXT_PUBLIC_APP_URL: string;
    }
  }
}

export {};
