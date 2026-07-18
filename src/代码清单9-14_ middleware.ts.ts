// middleware.ts
export function middleware(request: NextRequest) {
  // 只对 API 路由添加 CORS 头
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const response = NextResponse.next();

    response.headers.set('Access-Control-Allow-Origin', 'https://example.com');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Allow-Credentials', 'true');

    return response;
  }

  return NextResponse.next();
}