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