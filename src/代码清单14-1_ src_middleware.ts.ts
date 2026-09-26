import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 先只做放行：位置放对了，骨架先跑通，再往里加逻辑
  return NextResponse.next();
}