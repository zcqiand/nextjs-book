// 从第 9 章提取
// 代码清单: API 路由 POST 处理器
// 文件名: chapter09_POST.tsx
// app/api/auth/login/route.ts
import { NextResponse } from 'next/server';
import { signJWT } from '@/lib/jwt';
import { verifyLogin } from '@/lib/auth'; // 假设这个函数验证用户名密码

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // 验证用户凭证
    const user = await verifyLogin(email, password);

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // 创建 JWT
    const token = await signJWT({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    // 创建响应并设置 Cookie
    const response = NextResponse.json({ success: true });
    response.cookies.set('auth-token', token, {
      httpOnly: true, // 防止 XSS 攻击
      secure: process.env.NODE_ENV === 'production', // 生产环境使用 HTTPS
      sameSite: 'lax', // 防止 CSRF 攻击
      maxAge: 60 * 60 * 24 * 7, // 7 天
      path: '/',
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
