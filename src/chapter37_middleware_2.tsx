// 从第 37 章提取
// 代码清单: middleware 函数
// 文件名: chapter37_middleware_2.tsx
export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;

  if (!token) {
    return NextResponse.next();
  }

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);

    // 将用户 ID 传递到 Server Components
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', payload.sub as string);
    requestHeaders.set('x-user-role', payload.role as string);

    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  } catch {
    return NextResponse.next();
  }
}
