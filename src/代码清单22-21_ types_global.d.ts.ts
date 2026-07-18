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