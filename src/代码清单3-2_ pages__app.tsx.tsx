// pages/_app.tsx
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // 通过检查路由路径来决定是否显示导航栏
  const showNavigation = !router.pathname.startsWith('/admin');
  const showFooter = !router.pathname.startsWith('/admin');

  return (
    <div className="app-container">
      {showNavigation && <Navigation />}
      <Component {...pageProps} />
      {showFooter && <Footer />}
    </div>
  );
}