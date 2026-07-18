export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get('auth-token')?.value;
  const userAgent = request.headers.get('user-agent');

  console.log(`访问路径: ${pathname}`);
  console.log(`用户代理: ${userAgent}`);

  return NextResponse.next();
}