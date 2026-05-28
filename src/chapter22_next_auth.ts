// 从第 22 章提取
// 代码清单: 为 next-auth 扩展用户类型
// 文件名: chapter22_next_auth.ts
// 为 next-auth 扩展用户类型
import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image?: string;
      role: 'admin' | 'user';
    };
  }
}
