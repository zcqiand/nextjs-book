// types/my-library/index.d.ts
declare module 'my-library' {
  export function doSomething(arg: string): Promise<result>;

  export interface result {
    success: boolean;
    data: unknown;
  }
}