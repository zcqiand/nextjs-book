// app/(marketing)/components/nav.tsx
import Link from 'next/link';

// 只链接到营销模块内的页面
export function MarketingNav() {
  return (
    <nav className="marketing-nav">
      <Link href="/">首页</Link>
      <Link href="/about">关于我们</Link>
      <Link href="/pricing">价格</Link>
    </nav>
  );
}