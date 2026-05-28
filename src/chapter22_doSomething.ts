// 从第 22 章提取
// 代码清单: types/my-library/index.d.ts
// 文件名: chapter22_doSomething.ts
// types/my-library/index.d.ts
declare module 'my-library' {
  export function doSomething(arg: string): Promise<result>;

  export interface result {
    success: boolean;
    data: unknown;
  }
}
